const intro = document.getElementById("intro");
const nextBtn = document.getElementById("nextBtn");
const card = document.getElementById("mainCard");
const playArea = document.querySelector(".play-area");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const celebration = document.getElementById("celebration");
const closeCelebration = document.getElementById("closeCelebration");

const messages = [
  "Nice try, but the universe says yes.",
  "That button is shy today.",
  "Not so fast, cutie.",
  "Plot twist: it's a yes.",
  "You missed! Try the pink one.",
];

let escapes = 0;

const moveNoButton = () => {
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 16;
  const areaWidth = playArea.clientWidth;
  const areaHeight = playArea.clientHeight;
  const maxX = Math.max(areaWidth - btnRect.width - padding, padding);
  const maxY = Math.max(areaHeight - btnRect.height - padding, padding);
  const x = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  result.textContent = messages[escapes % messages.length];
  escapes += 1;
};

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("mouseenter", moveNoButton);

nextBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  intro.style.display = "none";
  card.classList.remove("hidden");
  card.style.display = "block";
});

yesBtn.addEventListener("click", () => {
  result.textContent = "Yay! I knew it. Date night is on me.";
  yesBtn.disabled = true;
  noBtn.disabled = true;
  noBtn.style.opacity = "0.4";
  card.style.display = "none";
  celebration.classList.add("show");
  celebration.setAttribute("aria-hidden", "false");
});

closeCelebration.addEventListener("click", () => {
  celebration.classList.remove("show");
  celebration.setAttribute("aria-hidden", "true");
  card.style.display = "block";
});
