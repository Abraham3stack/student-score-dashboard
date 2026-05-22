// Array of student objects
const students = [
  {
    name: "John",
    score: 85,
    course: "Frontend Development"
  },
  {
    name: "Sarah",
    score: 72,
    course: "UI/UX Design"
  },
  {
    name: "Michael",
    score: 48,
    course: "Backend Development"
  },
  {
    name: "Jane",
    score: 91,
    course: "Data Analysis"
  }
];

// forEach example
students.forEach((student) => {
  console.log(`${student.name} scored ${student.score}`);
});

// filter example
const passedStudents = students.filter((student) => student.score >= 50);

// reduce example
const totalScore = students.reduce((accumulator, student) => {
  return accumulator + student.score;
}, 0);

const averageScore = totalScore / students.length;

// map example
const studentCards = students.map((student) => {
  return `
    <div class="student-card">
      <h3>${student.name}</h3>
      <p>Course: ${student.course}</p>
      <p>Score: ${student.score}</p>
      <p class="${student.score >= 50 ? 'pass' : 'fail'}">
        ${student.score >= 50 ? 'Passed' : 'Failed'}
      </p>
    </div>
  `;
});

// DOM Manipulation
document.getElementById("student-list").innerHTML = studentCards.join("");

document.getElementById("total-students").textContent = students.length;

document.getElementById("average-score").textContent =
  averageScore.toFixed(1);

document.getElementById("passed-students").textContent =
  passedStudents.length;

// Scope example
function showMessage() {
  let message = "Week 1 JavaScript Refresher Complete!";
  console.log(message);
}

showMessage();