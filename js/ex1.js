const questions = [
    {statement: "2+2?", answer: "2+2 = 4"},
    {statement: "In which year did Christopher Columbus discover America?", answer: "1492"},
    {
        statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
        answer: "The E letter"
    }
];

function displayQuestions() {
    const contentDiv = document.getElementById("content");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("p");
        questionText.textContent = q.statement;

        const button = document.createElement("button");
        button.textContent = "Show Answer";
        button.addEventListener("click", () => {
            button.remove();
            const answerText = document.createElement("p");
            answerText.textContent = `Answer: ${q.answer}`;
            questionDiv.appendChild(answerText);
        });

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(button);
        contentDiv.appendChild(questionDiv);
    });
}

document.addEventListener("DOMContentLoaded", displayQuestions);
