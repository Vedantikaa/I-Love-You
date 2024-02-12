// Define the hearts array
const hearts = [];

// Heart class for animation
class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = Math.random() * Math.PI * 2;
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    document.body.append(heartEl);
    const color = pinks[Math.floor(Math.random() * pinks.length)];
    heartEl.style.background = color;
    
    const heartLeftEl = document.createElement("div");
    heartLeftEl.classList.add('left');
    heartLeftEl.style.background = color;
    heartEl.appendChild(heartLeftEl);
    
    const heartRightEl = document.createElement("div");
    heartRightEl.classList.add('right');
    heartRightEl.style.background = color;
    heartEl.appendChild(heartRightEl);
    
    this.el = heartEl;
    
    setTimeout(() => {
      this.el.remove();
      hearts.splice(hearts.indexOf(this), 1);
    }, 10000)
  }

  update() {
    this.x += Math.cos(this.theta) * 1;
    this.y += 1;
    this.theta += 0.01;
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}

const cardContents = [
  "Though distance separates us, my love knows no bounds, and I propose my heart to you across the miles.",
  "Indulging in the sweetness of our love, even when miles apart, each chocolate piece symbolizes the moments we share.",
  "Though I can't hold you close, this teddy bear carries my warmth and affection to comfort you in my absence.",
  "Distance may test us, but my promise to love and cherish you remains unwavering, no matter how many miles lie between us.",
  "Sending you a virtual hug tight enough to bridge the distance and remind you of my presence, even when far away.",
  "Across the miles, blowing kisses to you, each one carrying the passion and love I hold for you in my heart.",
  "Though we may be far apart, today and every day, my love for you knows no distance, and our connection remains as strong as ever."
];

let currentMessageIndex = 0;

// Hide the card panel initially
document.getElementById('cardPanel').style.display = 'none';

// Add event listener to the "Next" button
document.getElementById('nextButton').addEventListener('click', function() {
  // Show the card panel when the button is clicked
  document.getElementById('cardPanel').style.display = 'block';

  // Update card content
  updateCardContent();

  // Move to the next message
  currentMessageIndex++;
  if (currentMessageIndex >= cardContents.length) {
    currentMessageIndex = 0; // Loop back to the first message
  }
});

function updateCardContent() {
  const cardPanel = document.getElementById('cardPanel');
  const message = cardContents[currentMessageIndex];
  cardPanel.innerHTML = `<p>${message}</p>`;
}

// Start heart animations
setInterval(() => {
  const heart = new Heart(Math.random() * window.innerWidth, -100);
  hearts.push(heart);
}, 200);

setInterval(() => {
  hearts.forEach((heart) => heart.update());
}, 10);
