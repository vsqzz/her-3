window.addEventListener('load', function() {
    var buttonContainer = document.getElementById('buttonContainer');
    var buttons = buttonContainer.querySelectorAll('.button');
    var noButton = document.getElementById('noButton');
    
    // Function to generate a random position within the viewport
    function generateRandomPosition() {
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        console.log(viewportWidth, viewportHeight);
        var randomX = Math.random() * (viewportWidth - noButton.offsetWidth) / 2;
        var randomY = Math.random() * (viewportHeight - noButton.offsetHeight) / 2;
        console.log(randomX, randomY);
        return { x: randomX, y: randomY };
    }
    
    // Function to check if the cursor is near the "No" button
    function isCursorNearNoButton(event) {
        var noButtonRect = noButton.getBoundingClientRect();
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        
        // Calculate the distance between the cursor and the center of the "No" button
        var distance = Math.sqrt(Math.pow(mouseX - (noButtonRect.left + noButtonRect.width / 2), 2) + Math.pow(mouseY - (noButtonRect.top + noButtonRect.height / 2), 2));
        
        return distance <= 50;
    }
    
    // Adjust button positions to fit within the viewport
    function adjustButtonPositions() {
        buttons.forEach(function(button) {
            var randomPosition = generateRandomPosition();
            button.style.left = randomPosition.x + 'px';
            button.style.top = randomPosition.y + 'px';
        });
    }
    
    // Adjust button positions when the window is resized
    window.addEventListener('resize', adjustButtonPositions);
    
    // Initial adjustment of button positions
    adjustButtonPositions();
    
    // Event listener to track mouse movement and update "No" button position
    document.addEventListener('mousemove', function(event) {
        if (isCursorNearNoButton(event)) {
            var randomPosition = generateRandomPosition();
            noButton.style.left = randomPosition.x + 'px';
            noButton.style.top = randomPosition.y + 'px';
        }
    });
});