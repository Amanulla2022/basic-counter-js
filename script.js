let count = 0;
const conutVar = document.querySelector(".count");
const stepInput = document.getElementById("step");

const updateCountDisplay = () => {
  conutVar.textContent = count;
};

const increamentByInput = () => {
  const step = parseInt(stepInput.value || 1);
  count += step;
  updateCountDisplay();
};

const decreamentByInput = () => {
  const step = parseInt(stepInput.value || 1);
  count -= step;
  updateCountDisplay();
};

const resetToZero = () => {
  count = 0;
  console.log(count);
  updateCountDisplay();
};

document.getElementById("inc").addEventListener("click", increamentByInput);
document.getElementById("dec").addEventListener("click", decreamentByInput);
document.getElementById("reset").addEventListener("click", resetToZero);

updateCountDisplay();
