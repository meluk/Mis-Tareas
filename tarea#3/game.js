 // Global variables
      var ballX = 150; // Ball x position.
      var ballY = 150; // Ball y position.
      var ballDX = 2; // Change in ball x position.
      var ballDY = 4; // Change in ball y position.
      var boardX = 300; // Board width.
      var boardY = 300; // Board height.
      var paddleX = 150; // Initial paddle location.
      var paddleH = 10; // Paddle height.
      var paddleD = boardY - paddleH; // Paddle depth.
      var paddleW = 150; // Paddle width.
      var contador = 0;
      var game = { state: 'start'};
      var msj = 'Game Over! - preciona R para volver a jugar'
      var textR = {
        counter: -1,
        titulo:'',
        subtitulo:''
      };

      // This function is called on page load.
      function drawGameSVG() {
        // Play the game until the ball stops.
        gameLoop = setInterval(drawBall, 16);
        game.state = 'play'
        console.log(game.state);
        // Add keyboard listener.
        window.addEventListener('keydown', whatKey, true);

      }
      function drawBall() {
        // Change the ball location.
        ballX += ballDX;
        ballY += ballDY;
        ball.setAttribute("cx", ballX);
        ball.setAttribute("cy", ballY);
        // Bounce on a left or right edge.
        if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15) ballDX = -ballDX;
        // If ball hits the top, bounce it. 
        if (ballY + ballDY < 15) ballDY = -ballDY;
        // If the ball hits the bottom, check see if it hits a paddle.
        else if (ballY + ballDY > boardY - 15) {
          // If the ball hits the paddle, bounce it.
          if (ballX > paddleX && ballX < paddleX + paddleW){
           var puntosHtml = document.querySelector("#puntos")
           ballDY = -ballDY;
           contador++;
           puntosHtml.innerHTML = contador;
         }
          // Otherwise the game is over.
          else {
            clearInterval(gameLoop);
            game.state = 'loser';
            console.log(game.state);
            //alert("Game over!"); 
            var gameOvermsj = document.querySelector("#mensaje");
               
            gameOvermsj.innerHTML = msj;
            
          }
        }
      }
      // Get key press.
      function whatKey(evt) {
        switch (evt.keyCode) {
          // Left arrow.
        case 37:
          paddleX = paddleX - 20;
          if (paddleX < 0) paddleX = 0;
          paddle.setAttribute("x", paddleX);
          break;
          // Right arrow.
        case 39:
          paddleX = paddleX + 20;
          if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
          paddle.setAttribute("x", paddleX);
          break;
          case 82:
          msj = '';
          
          allX = 150; // Ball x position.
          ballY = 150; // Ball y position.
          ballDX = 2; // Change in ball x position.
          ballDY = 4; // Change in ball y position.
          boardX = 300; // Board width.
          boardY = 300; // Board height.
          paddleX = 150;
          drawGameSVG();
              

        }
      }

