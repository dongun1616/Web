// 탁구 점수 관리자 프로젝트
const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#player1Score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#player2Score')
}

const goalScore = document.querySelector('#goalScore')
const resetBtn = document.querySelector('#reset')

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('win');
            opponent.display.classList.add('lose');
            player.button.disabled = true;
            opponent.display.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

goalScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.display.classList.remove('win', 'lose')
    p2.display.classList.remove('win', 'lose')
}
