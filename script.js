function showAnswer(answer) {
    const answerBox = document.getElementById('answer-box');
    const answerText = document.getElementById('answer-text');
    answerText.textContent = answer;
    answerBox.classList.remove('hidden');
}

function closeAnswer() {
    const answerBox = document.getElementById('answer-box');
    answerBox.classList.add('hidden');
}
