const nameInput = document.getElementById("name");
const rollInput = document.getElementById("rollno");
const deptInput = document.getElementById("department");
const batchInput = document.getElementById("batch");
const yearInput = document.getElementById("year");
const sectionInput = document.getElementById("section");
const courses = document.querySelectorAll(".course");
const totalDisplay = document.getElementById("total");
const courseSubmit = document.getElementById("courseSubmit");
const courseError = document.getElementById("courseError");
// LIVE CREDIT CALCULATION (FIXED)
function calculateCredits() {
 let total = 0;
 courses.forEach(cb => {
 if (cb.checked) {
 total += Number(cb.dataset.credit);
 }
 });
 totalDisplay.innerText = total;
}
courses.forEach(cb => cb.addEventListener("change", calculateCredits));
// GENERATE SLIP
courseSubmit.addEventListener("click", function () {
 let total = Number(totalDisplay.innerText);
 if (total !== 22) {
 courseError.innerText = "Total credits must be exactly 22";
 return;
 }
 courseError.innerText = "";
 document.getElementById("slip").style.display = "block";
 document.getElementById("sName").innerText = nameInput.value;
 document.getElementById("sRoll").innerText = rollInput.value;
 document.getElementById("sDept").innerText = deptInput.value;
 document.getElementById("sBatch").innerText = batchInput.value;
 document.getElementById("sYear").innerText = yearInput.value;
 document.getElementById("sSection").innerText = sectionInput.value;
 const list = document.getElementById("courseList");
 list.innerHTML = "";
 courses.forEach(cb => {
 if (cb.checked) {
 const row = cb.closest("tr");
 const li = document.createElement("li");
 li.innerText = row.children[2].innerText;
 list.appendChild(li);
 }
 });
 document.getElementById("finalCredits").innerText = total;
 document.getElementById("date").innerText = new
Date().toLocaleDateString();
});
