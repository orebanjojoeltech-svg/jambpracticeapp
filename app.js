const subjects = {
  maths: {
    name: "Mathematics", icon: "∑",
    topics: ["Number and numeration", "Algebra and equations", "Geometry and mensuration", "Trigonometry", "Statistics and probability", "Sequences and series", "Calculus"],
    questions: [
      { topic: "Algebra", text: "If 3x − 7 = 11, what is the value of x?", options: ["4", "6", "8", "18"], answer: 1, explanation: "Add 7 to both sides to get 3x = 18, then divide by 3. Therefore, x = 6." },
      { topic: "Quadratic equations", text: "What are the roots of x² − 5x + 6 = 0?", options: ["−2 and −3", "2 and 3", "1 and 6", "−1 and −6"], answer: 1, explanation: "Factor the expression as (x − 2)(x − 3) = 0. The roots are x = 2 and x = 3." },
      { topic: "Mensuration", text: "Find the area of a circle with radius 7 cm. Use π = 22/7.", options: ["44 cm²", "77 cm²", "154 cm²", "308 cm²"], answer: 2, explanation: "Area = πr² = (22/7) × 7² = 154 cm²." },
      { topic: "Ratio and proportion", text: "A sum of ₦40 is shared in the ratio 2:3. What is the smaller share?", options: ["₦8", "₦16", "₦20", "₦24"], answer: 1, explanation: "There are 2 + 3 = 5 equal parts. The smaller share is (2/5) × ₦40 = ₦16." },
      { topic: "Sequences", text: "An arithmetic sequence begins 4, 7, 10, … What is its 10th term?", options: ["28", "30", "31", "34"], answer: 2, explanation: "The common difference is 3. The 10th term is 4 + (10 − 1) × 3 = 31." },
      { topic: "Probability", text: "A fair six-sided die is rolled once. What is the probability of getting an even number?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, explanation: "The even outcomes are 2, 4 and 6: 3 favourable outcomes out of 6, giving 3/6 = 1/2." },
      { topic: "Trigonometry", text: "What is the exact value of sin 30°?", options: ["0", "1/2", "√3/2", "1"], answer: 1, explanation: "From the standard special-angle values, sin 30° = 1/2." },
      { topic: "Commercial mathematics", text: "Calculate the simple interest on ₦5,000 at 8% per annum for 2 years.", options: ["₦400", "₦800", "₦1,000", "₦1,800"], answer: 1, explanation: "Simple interest = PRT/100 = 5,000 × 8 × 2 / 100 = ₦800." }
    ]
  },
  english: {
    name: "English Language", icon: "Aa",
    topics: ["Comprehension and summary", "Lexis and structure", "Grammar and usage", "Oral forms and phonetics", "Synonyms and antonyms", "Idioms and expressions", "Sentence interpretation"],
    questions: [
      { topic: "Vocabulary: synonyms", text: "Choose the word nearest in meaning to “abundant”.", options: ["Scarce", "Plentiful", "Ordinary", "Hidden"], answer: 1, explanation: "“Abundant” means existing in large quantities; “plentiful” is the closest synonym." },
      { topic: "Concord", text: "Choose the correct option: Neither of the boys ___ completed the assignment.", options: ["have", "are", "has", "were"], answer: 2, explanation: "“Neither” is treated as singular in this construction, so it takes “has”." },
      { topic: "Idioms", text: "If something happens “once in a blue moon”, it happens ___.", options: ["Very frequently", "At night", "Very rarely", "Without warning"], answer: 2, explanation: "The idiom “once in a blue moon” means very rarely or infrequently." },
      { topic: "Active and passive voice", text: "Choose the correct passive form of: “She wrote the letter.”", options: ["The letter is written by her.", "The letter was written by her.", "The letter had wrote by her.", "The letter wrote her."], answer: 1, explanation: "The simple past active verb “wrote” becomes “was written” in the simple past passive." },
      { topic: "Vocabulary: antonyms", text: "Choose the word opposite in meaning to “reluctant”.", options: ["Unwilling", "Hesitant", "Willing", "Cautious"], answer: 2, explanation: "“Reluctant” means unwilling or hesitant; its opposite is “willing”." },
      { topic: "Tenses", text: "By the time we arrived, the film ___.", options: ["has begun", "will begin", "had begun", "begins"], answer: 2, explanation: "The film began before another past event, so the past perfect “had begun” is appropriate." },
      { topic: "Prepositions", text: "Choose the correct option: Ada is interested ___ learning French.", options: ["on", "at", "in", "for"], answer: 2, explanation: "The standard expression is “interested in” something or doing something." },
      { topic: "Question tags", text: "Choose the correct question tag: You have finished your work, ___?", options: ["haven't you", "didn't you", "aren't you", "don't you"], answer: 0, explanation: "The sentence uses the auxiliary “have” affirmatively, so its negative tag is “haven't you?”" }
    ]
  },
  chemistry: {
    name: "Chemistry", icon: "⚗",
    topics: ["Atomic structure and bonding", "Chemical combination", "Acids, bases and salts", "States of matter and gas laws", "Organic chemistry", "Redox and electrolysis", "Rates of reaction", "Metals and non-metals"],
    questions: [
      { topic: "Atomic structure", text: "The atomic number of an element is equal to the number of ___ in its nucleus.", options: ["Neutrons", "Protons", "Electron shells", "Nucleons"], answer: 1, explanation: "An element's atomic number is the number of protons in the nucleus." },
      { topic: "Acids and bases", text: "A solution with a pH of 2 is best described as ___.", options: ["Strongly acidic", "Weakly alkaline", "Neutral", "Strongly alkaline"], answer: 0, explanation: "A pH below 7 is acidic; a pH of 2 indicates a strongly acidic solution." },
      { topic: "The mole concept", text: "How many moles of carbon atoms are present in 12 g of carbon-12?", options: ["0.5 mol", "1 mol", "6 mol", "12 mol"], answer: 1, explanation: "The molar mass of carbon-12 is 12 g mol⁻¹, so 12 g represents 1 mole." },
      { topic: "Chemical bonding", text: "What type of bond holds sodium and chloride ions together in sodium chloride?", options: ["Covalent", "Metallic", "Ionic", "Hydrogen"], answer: 2, explanation: "Sodium transfers an electron to chlorine; the oppositely charged ions form an ionic bond." },
      { topic: "Rates of reaction", text: "A catalyst increases the rate of a reaction mainly by ___.", options: ["Increasing the product mass", "Lowering the activation energy", "Increasing the reaction enthalpy", "Being permanently consumed"], answer: 1, explanation: "A catalyst provides an alternative reaction pathway with lower activation energy." },
      { topic: "Redox reactions", text: "In terms of electrons, oxidation is the ___.", options: ["Gain of electrons", "Loss of electrons", "Gain of neutrons", "Loss of protons"], answer: 1, explanation: "Oxidation is loss of electrons (OIL); reduction is gain of electrons (RIG)." },
      { topic: "Gas laws", text: "At 273 K and 1 atm, approximately what volume does 1 mole of an ideal gas occupy?", options: ["2.24 dm³", "11.2 dm³", "22.4 dm³", "44.8 dm³"], answer: 2, explanation: "At 273 K and 1 atm, the molar volume of an ideal gas is approximately 22.4 dm³." },
      { topic: "Electrolysis", text: "During electrolysis, reduction takes place at the ___.", options: ["Anode", "Cathode", "Salt bridge", "Electrolyte surface only"], answer: 1, explanation: "Cations gain electrons at the cathode; gain of electrons is reduction." }
    ]
  },
  physics: {
    name: "Physics", icon: "◉",
    topics: ["Measurement and units", "Motion, force and energy", "Heat and thermodynamics", "Waves and sound", "Light and optics", "Electricity and magnetism", "Simple machines", "Modern physics"],
    questions: [
      { topic: "Motion", text: "A runner covers 150 m in 10 s. What is the runner's average speed?", options: ["10 m/s", "15 m/s", "150 m/s", "1,500 m/s"], answer: 1, explanation: "Average speed = distance ÷ time = 150 ÷ 10 = 15 m/s." },
      { topic: "Units and measurement", text: "What is the SI unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], answer: 2, explanation: "The SI unit of force is the newton (N), equivalent to kg m s⁻²." },
      { topic: "Electric circuits", text: "A 12 V battery is connected across a 4 Ω resistor. What current flows?", options: ["0.33 A", "3 A", "8 A", "48 A"], answer: 1, explanation: "By Ohm's law, I = V/R = 12/4 = 3 A." },
      { topic: "Energy", text: "What is the kinetic energy of a 2 kg object moving at 3 m/s?", options: ["6 J", "9 J", "18 J", "27 J"], answer: 1, explanation: "Kinetic energy = ½mv² = ½ × 2 × 3² = 9 J." },
      { topic: "Light and optics", text: "When an object is placed beyond the focal point of a converging convex lens, the image formed is generally ___.", options: ["Virtual and upright", "Real and inverted", "Always the same size", "Not formed"], answer: 1, explanation: "For an object beyond the focal point, a converging lens forms a real, inverted image on the other side." },
      { topic: "Waves", text: "A source completes 20 oscillations in 4 s. What is its frequency?", options: ["4 Hz", "5 Hz", "16 Hz", "80 Hz"], answer: 1, explanation: "Frequency = number of oscillations ÷ time = 20 ÷ 4 = 5 Hz." },
      { topic: "Force and weight", text: "What is the weight of a 5 kg object where g = 10 m/s²?", options: ["0.5 N", "5 N", "50 N", "500 N"], answer: 2, explanation: "Weight = mass × gravitational field strength = 5 × 10 = 50 N." },
      { topic: "Electric circuits", text: "Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?", options: ["2 Ω", "3 Ω", "4.5 Ω", "9 Ω"], answer: 0, explanation: "For parallel resistors, 1/R = 1/6 + 1/3 = 1/2, so the equivalent resistance is 2 Ω." }
    ]
  },
  biology: {
    name: "Biology", icon: "❋",
    topics: ["Cell structure and organisation", "Nutrition and transport", "Respiration and excretion", "Reproduction and growth", "Ecology and ecosystems", "Genetics and evolution", "Coordination and homeostasis", "Classification of living things"],
    questions: [
      { topic: "Cell biology", text: "Which organelle is the main site of aerobic respiration in a eukaryotic cell?", options: ["Ribosome", "Mitochondrion", "Golgi body", "Vacuole"], answer: 1, explanation: "Most aerobic respiration in eukaryotic cells takes place in the mitochondria." },
      { topic: "Transport in plants", text: "Which plant tissue transports water and mineral salts from the roots?", options: ["Phloem", "Xylem", "Epidermis", "Cortex"], answer: 1, explanation: "Xylem vessels conduct water and mineral salts from the roots through the plant." },
      { topic: "Photosynthesis", text: "Which gas is absorbed from the atmosphere during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2, explanation: "Plants use carbon dioxide and water to make glucose during photosynthesis, releasing oxygen." },
      { topic: "Excretion", text: "What is the functional unit of the kidney?", options: ["Neuron", "Alveolus", "Nephron", "Villus"], answer: 2, explanation: "The nephron filters blood and helps form urine; it is the functional unit of the kidney." },
      { topic: "Genetics", text: "A gene is best described as a unit of ___ carried on a chromosome.", options: ["Digestion", "Heredity", "Respiration", "Excretion"], answer: 1, explanation: "Genes are units of heredity that carry information influencing inherited characteristics." },
      { topic: "Transport in animals", text: "Which component of red blood cells binds and transports much of the oxygen?", options: ["Plasma", "Haemoglobin", "Platelets", "Lymph"], answer: 1, explanation: "Haemoglobin in red blood cells binds oxygen reversibly for transport around the body." },
      { topic: "Reproduction in plants", text: "Pollination is the transfer of pollen grains from the anther to the ___.", options: ["Ovary", "Stigma", "Ovule", "Sepal"], answer: 1, explanation: "Pollination is the transfer of pollen from an anther to a stigma." },
      { topic: "Ecology", text: "In a food chain, green plants usually occupy which trophic level?", options: ["First, as producers", "Second, as primary consumers", "Third, as secondary consumers", "Last, as decomposers"], answer: 0, explanation: "Green plants make their own food, so they are producers at the first trophic level." }
    ]
  }
};

const years = Array.from({ length: 16 }, (_, index) => 2010 + index);
const letters = ["A", "B", "C", "D"];
const subjectNav = document.querySelector("#subject-nav");
const subjectGrid = document.querySelector("#subject-grid");
const yearSelect = document.querySelector("#year-select");
const quizCard = document.querySelector("#quiz-card");
const topicList = document.querySelector("#topic-list");

let activeSubject = "maths";
let activeYear = 2025;
let quizQuestions = [];
let questionIndex = 0;
let selectedAnswer = null;
let hasAnswered = false;
let score = 0;
let missedQuestions = [];

for (const year of years) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.append(option);
}

function renderSubjectChoices() {
  subjectNav.innerHTML = "";
  subjectGrid.innerHTML = "";
  for (const [key, subject] of Object.entries(subjects)) {
    const navButton = document.createElement("button");
    navButton.className = "nav-subject";
    navButton.type = "button";
    navButton.dataset.subject = key;
    navButton.setAttribute("aria-current", String(key === activeSubject));
    navButton.innerHTML = `<span class="nav-icon" aria-hidden="true">${subject.icon}</span><span>${subject.name}</span>`;
    navButton.addEventListener("click", () => selectSubject(key));
    subjectNav.append(navButton);

    const card = document.createElement("button");
    card.className = "subject-card";
    card.type = "button";
    card.dataset.subject = key;
    card.setAttribute("aria-pressed", String(key === activeSubject));
    card.innerHTML = `<span class="card-icon" aria-hidden="true">${subject.icon}</span><span class="card-title">${subject.name}</span><span class="card-meta">8 practice questions</span><span class="card-arrow" aria-hidden="true">↗</span>`;
    card.addEventListener("click", () => selectSubject(key));
    subjectGrid.append(card);
  }
}

function selectSubject(key) {
  if (!subjects[key]) return;
  activeSubject = key;
  renderSubjectChoices();
  renderSyllabus();
  startQuiz();
  document.querySelector("#breadcrumb-subject").textContent = subjects[key].name;
}

function renderSyllabus() {
  const subject = subjects[activeSubject];
  document.querySelector("#syllabus-title").textContent = `${subject.name} syllabus`;
  topicList.innerHTML = subject.topics.map(topic => `<li><span class="topic-check" aria-hidden="true">✓</span><span>${topic}</span></li>`).join("");
}

function startQuiz() {
  quizQuestions = [...subjects[activeSubject].questions];
  questionIndex = 0;
  selectedAnswer = null;
  hasAnswered = false;
  score = 0;
  missedQuestions = [];
  renderQuestion();
}

function renderQuestion() {
  const subject = subjects[activeSubject];
  const question = quizQuestions[questionIndex];
  const progress = (questionIndex / quizQuestions.length) * 100;
  quizCard.innerHTML = `
    <div class="quiz-topline">
      <div class="quiz-label"><span aria-hidden="true">${subject.icon}</span>${subject.name} practice <span class="year-badge">${activeYear}</span></div>
      <span class="question-count">Question ${questionIndex + 1} of ${quizQuestions.length}</span>
    </div>
    <div class="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${quizQuestions.length}" aria-valuenow="${questionIndex}">
      <div class="progress-fill" style="width:${progress}%"></div>
    </div>
    <p class="question-topic">${question.topic}</p>
    <h2 class="question-text">${question.text}</h2>
    <div class="answer-list" role="group" aria-label="Answer choices">
      ${question.options.map((option, index) => `
        <button class="answer-option" type="button" data-answer="${index}" aria-pressed="false">
          <span class="answer-letter">${letters[index]}</span><span>${option}</span>
        </button>
      `).join("")}
    </div>
    <div class="feedback-slot" aria-live="polite"></div>
    <div class="quiz-actions">
      <span class="quiz-hint">${hasAnswered ? "Take a moment to understand the explanation." : "Choose the best answer, then check your work."}</span>
      <button class="primary-button check-button" type="button" disabled>Check answer</button>
    </div>`;

  quizCard.querySelectorAll(".answer-option").forEach(button => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.answer)));
  });
  quizCard.querySelector(".check-button").addEventListener("click", checkAnswer);
}

function chooseAnswer(index) {
  if (hasAnswered) return;
  selectedAnswer = index;
  quizCard.querySelectorAll(".answer-option").forEach(button => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.answer) === selectedAnswer));
  });
  quizCard.querySelector(".check-button").disabled = false;
}

function checkAnswer() {
  if (selectedAnswer === null || hasAnswered) return;
  hasAnswered = true;
  const question = quizQuestions[questionIndex];
  const isCorrect = selectedAnswer === question.answer;
  if (isCorrect) score++;
  else missedQuestions.push({ question, selectedAnswer });

  quizCard.querySelectorAll(".answer-option").forEach(button => {
    const answerIndex = Number(button.dataset.answer);
    button.disabled = true;
    if (answerIndex === question.answer) button.classList.add("is-correct");
    if (answerIndex === selectedAnswer && !isCorrect) button.classList.add("is-wrong");
  });
  const feedback = quizCard.querySelector(".feedback-slot");
  feedback.innerHTML = `<div class="quiz-feedback${isCorrect ? "" : " is-wrong"}"><strong>${isCorrect ? "That's right!" : `Not quite — the answer is ${letters[question.answer]}.`}</strong>${question.explanation}</div>`;
  const button = quizCard.querySelector(".check-button");
  button.textContent = questionIndex === quizQuestions.length - 1 ? "See my results" : "Next question";
  button.disabled = false;
  button.removeEventListener("click", checkAnswer);
  button.addEventListener("click", nextQuestion);
}

function nextQuestion() {
  if (!hasAnswered) return;
  questionIndex++;
  if (questionIndex >= quizQuestions.length) {
    renderResults();
    return;
  }
  selectedAnswer = null;
  hasAnswered = false;
  renderQuestion();
}

function renderResults() {
  const percentage = Math.round((score / quizQuestions.length) * 100);
  const message = percentage === 100 ? "Outstanding work!" : percentage >= 70 ? "You're building great momentum." : percentage >= 40 ? "Good effort — keep practising." : "Every attempt is a step forward.";
  const review = missedQuestions.length
    ? `<div class="review-list"><h3>Quick review</h3>${missedQuestions.map(({ question }) => `<div class="review-item"><strong>${question.topic}: ${question.options[question.answer]}</strong>${question.explanation}</div>`).join("")}</div>`
    : `<div class="quiz-feedback"><strong>Perfect score!</strong>You got every question right. Keep it up!</div>`;

  quizCard.innerHTML = `
    <div class="result-panel">
      <div class="result-badge" aria-hidden="true">${percentage >= 70 ? "✦" : "✓"}</div>
      <p class="section-kicker">${subjects[activeSubject].name.toUpperCase()} · ${activeYear} PRACTICE EDITION</p>
      <h2>${message}</h2>
      <p class="result-score">${score}<span class="score-total"> / ${quizQuestions.length}</span></p>
      <p class="result-copy">You answered ${score} out of ${quizQuestions.length} questions correctly (${percentage}%).</p>
      <div class="result-actions">
        <button class="primary-button" id="try-again" type="button">Practise again</button>
        <button class="secondary-button" id="change-subject" type="button">Choose a subject</button>
      </div>
      ${review}
    </div>`;
  quizCard.querySelector("#try-again").addEventListener("click", startQuiz);
  quizCard.querySelector("#change-subject").addEventListener("click", () => {
    document.querySelector("#subject-heading").scrollIntoView({ behavior: "smooth", block: "center" });
    subjectGrid.querySelector(".subject-card")?.focus();
  });
}

yearSelect.addEventListener("change", () => {
  activeYear = Number(yearSelect.value);
  startQuiz();
});

yearSelect.value = String(activeYear);
renderSubjectChoices();
renderSyllabus();
startQuiz();