const words = ["duahau"];
let shuffledWord;
let originalWord;
let resultMessage = document.getElementById("result-message");
let currentWordIndex = 0;
let answerInput = document.getElementById("answer-input");
function initializeGame() {
    // Chọn một từ ngẫu nhiên từ danh sách
    originalWord = words[currentWordIndex];
    // Tạo một bản sao lộn xộn của từ
    shuffledWord = shuffleWord(originalWord);

    // Hiển thị từ đã lộn xộn với ký tự đầu viết hoa
    displayShuffledWord();
    answerInput.value = ''; 
}

function shuffleWord(word) {
    // Chuyển từ thành mảng ký tự, lộn xộn mảng, sau đó chuyển lại thành từ mới
    const shuffledArray = word.split('').sort(() => Math.random() - 0.5);
    return shuffledArray.join('');
}

function displayShuffledWord() {
    const wordContainer = document.getElementById("word-container");
    // Viết hoa ký tự đầu tiên của từ
    const displayWord = shuffledWord.charAt(0).toUpperCase() + shuffledWord.slice(1);
    wordContainer.textContent = displayWord;
}

function checkAnswer() {
    const answerInput = document.getElementById("answer-input");
    const userAnswer = answerInput.value.toLowerCase();

    if (userAnswer === originalWord) {
        resultMessage.textContent = "Chúc mừng ai đó đã trả lời đúng nè!";

        // Tăng chỉ số để chuyển đến từ tiếp theo
        currentWordIndex++;

        // Nếu đã qua hết tất cả các từ, hiển thị thông báo kết thúc trò chơi
        if (currentWordIndex === words.length) {
            resultMessage.textContent = "Chúc mừng ai đó đã trả lời đúng hết nè, giờ nghe nhạc ngủ thôi!";
            setTimeout(() => {
                window.location.href = 'done.html';
            }, 3000);
        } else {
            // Chuyển sang từ tiếp theo
            setTimeout(() => {
                resultMessage.textContent = '';
                initializeGame();
            }, 2000);
        }
    } else {
        resultMessage.textContent = "Sai rồi ai đó ơi, thử lại nè!";
    }
}

// Bắt đầu trò chơi khi trang được tải
initializeGame();
