

const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
    enemyAbatido: "./src/images/pato-donald-fd-300x300.png"
  },
  values: {
    timerId:null,
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
  },
  actions:{
  countDownTimerId:setInterval(countDown, 1000),
  }
};


// Lista de caminhos para as imagens da classe .enemy
const enemyImages = [
  "../images/donaldempe.png",
  "../images/images.jpeg", // Adicione mais caminhos conforme necessário
];

// Lista de arquivos de áudio
const audioFiles = [
 
  "./src/audios/som(3).mp3",
  "./src/audios/som(6).mp3",
  "./src/audios/som(7).mp3",
  "./src/audios/som(8).mp3",
  "./src/audios/som(1).mp3",
  "./src/audios/som(2).mp3",
  "./src/audios/som(9).mp3",
  "./src/audios/som(4).mp3",
  "./src/audios/som(13).mp3",
  "./src/audios/som(14).mp3",
  "./src/audios/som(15).mp3",
  "./src/audios/som(16).mp3",
  "./src/audios/som(17).mp3",
  "./src/audios/som(18).mp3",
  "./src/audios/som(19).mp3",
  "./src/audios/som(5).mp3",
  "./src/audios/som(21).mp3",
  "./src/audios/som(22).mp3",
  "./src/audios/som(24).mp3",
  "./src/audios/som(25).mp3",
  "./src/audios/som(26).mp3",
  "./src/audios/som(27).mp3",
  "./src/audios/som(12).mp3",
  "./src/audios/som(20).mp3",
  "./src/audios/som(28).mp3",
  "./src/audios/som(29).mp3",
  "./src/audios/som(30).mp3",
  "./src/audios/som(22).mp3",
  "./src/audios/som(31).mp3",
  "./src/audios/som(32).mp3",
  "./src/audios/som(33).mp3",
  "./src/audios/som(34).mp3",
  "./src/audios/som(35).mp3",
  "./src/audios/som(36).mp3",
  "./src/audios/som(37).mp3",
  "./src/audios/som(40).mp3",
  "./src/audios/som(41).mp3",
  "./src/audios/som(38).mp3",
  "./src/audios/som(99).mp3",
  "./src/audios/som(42).mp3",
  "./src/audios/som(45).mp3",
  "./src/audios/som(43).mp3",
  "./src/audios/som(44).mp3",
  // Adicione mais arquivos conforme necessário
];
// Variáveis globais simulando o estado do jogo
let timeLeft = 60; // Tempo em segundos
let score = 0;
let lives = 3;
let timeInterval; // Variável para armazenar o intervalo de tempo

// Função principal para iniciar o jogo
function startGame() {
  // Lógica para iniciar o jogo
  // Exemplo: Iniciar intervalo de contagem regressiva
  timeInterval = setInterval(updateTime, 1000);

  // Adicione aqui outras inicializações necessárias para o seu jogo
}

// Função para atualizar o tempo
function updateTime() {
  timeLeft--;
  document.getElementById('time-left').innerText = timeLeft;

  if (timeLeft === 0) {
    endGame();
  }
}

// Função para incrementar a pontuação
function increaseScore() {
  score += 10;
  document.getElementById('score').innerText = score;
}

// Função para decrementar as vidas
function decreaseLives() {
  lives--;

  // Atualizar a exibição de vidas
  document.querySelector('.menu-lives h2').innerText = 'x' + lives;

  if (lives === 0) {
    endGame();
  }
}

// Função para finalizar o jogo
function endGame() {
  // Lógica para finalizar o jogo
  // Exemplo: Exibir mensagem de game over
  showMessage("Game Over! Pontuação final: " + score);

  // Reiniciar o jogo
  restartGame();
}

// Função para reiniciar o jogo
function restartGame() {
  // Lógica para reiniciar o jogo
  timeLeft = 60;
  score = 0;
  lives = 3;

  // Atualizar a exibição
  document.getElementById('time-left').innerText = timeLeft;
  document.getElementById('score').innerText = score;
  document.querySelector('.menu-lives h2').innerText = 'x' + lives;

  // Ocultar qualquer mensagem de game over (se aplicável)
  hideGameOverMessage();

  // Reiniciar o intervalo de contagem regressiva
  clearInterval(timeInterval);
  timeInterval = setInterval(updateTime, 1000);

  // Reiniciar a mensagem
  showMessage("Jogo reiniciado!");
}

// Função para ocultar mensagem de game over
function hideGameOverMessage() {
  // Lógica para ocultar mensagens de game over (se aplicável)
  // Exemplo: Se você tem uma div com a classe 'game-over-message', oculte-a
  var gameOverMessage = document.querySelector('.game-over-message');
  if (gameOverMessage) {
    gameOverMessage.style.display = 'none';
  }
}

// Função para mostrar uma mensagem na página
function showMessage(message) {
  var restartMessage = document.getElementById('restartMessage');
  restartMessage.innerText = message;
  restartMessage.style.display = 'block';
}

// Associar a função startGame ao evento load da janela
window.addEventListener('load', startGame);

// Associar a função restartGame ao evento click do botão
document.getElementById('restartButton').addEventListener('click', restartGame);


function playRandomSound() {
  // Escolhe aleatoriamente um arquivo de áudio da lista
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const randomAudio = new Audio(audioFiles[randomIndex]);

  
  // Adiciona um ouvinte de evento para parar o áudio após 1 segundo
  randomAudio.addEventListener('ended', () => {
    randomAudio.currentTime = 0; // Reinicia a reprodução para garantir que possamos ouvir novamente
  });

  // Reproduz o áudio escolhido
  randomAudio.play();
}


  // Define um temporizador para parar o áudio após 1 segundo
  setTimeout(() => {
    randomAudio.pause();
  }, 1000);


function countDown(){
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime
  if(state.values.currentTime <= 0){
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    alert("Game Over! O seu resultado foi:" + state.values.result);
  }
}

function playsound(){
  let  audio = new Audio("./src/audios/som(16).mp3");
  audio.volume = 0.5;
  audio.play();
}

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  
  });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy"); 
  state.values.hitPosition = randomSquare.id;
}

function moveEnemy(){
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}


function addListenerHitbox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playsound();
       // Exemplo de uso
       playRandomSound();

      // Adiciona a imagem de tiro ao quadrado
square.innerHTML = `<img src="${state.view.enemyAbatido}" alt="Hit Image" class="enemyAbatido">`;


        // Define um temporizador para remover a imagem após 1 segundo
        setTimeout(() => {
          square.innerHTML = "";
        }, 6000);
      }else{
        new Audio("./src/audios/errou.mp3").play();
      
      }
    });
  });
}

function initialize() {
  moveEnemy();
  addListenerHitbox();
}

initialize();

