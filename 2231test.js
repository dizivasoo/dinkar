// ======= test.js =======

// Get DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

let current = 0; // current question index
let userAnswers = Array(questions.length).fill(-1); // -1 = not answered

// Function to display a question
function showQuestion(index) {
  const q = questions[index];
  questionEl.innerText = `Q${index + 1}. ${q.q}`;
  optionsEl.innerHTML = "";

  q.o.forEach((opt, i) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.innerText = opt;

    // Highlight previously selected option
    if (userAnswers[index] === i) div.classList.add("selected");

    // Click event
    div.onclick = () => {
      userAnswers[index] = i;
      document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
      div.classList.add("selected");
    };

    optionsEl.appendChild(div);
  });

  // Show / hide buttons
  nextBtn.style.display = index === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = index === questions.length - 1 ? "inline-block" : "none";
}

// Next button
nextBtn.onclick = () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion(current);
  }
};

// Submit button
submitBtn.onclick = () => {
  // Save answers to localStorage
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  localStorage.setItem("questions", JSON.stringify(questions));

  // Redirect to result page
  window.location.href = "2231result.html";
};

// Load first question
showQuestion(current);
