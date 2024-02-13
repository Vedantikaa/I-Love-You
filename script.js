// Define the pinks array with some color values
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

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
  "In gardens lush with roses' sweet embrace,",
  "I find the bloom that mirrors your grace.",
  "Each petal whispers of our friendship's hue,",
  "A bond so deep, enduring, and true.",
  "",
  "With bated breath, I dare to speak,",
  "To bridge the gap our hearts do seek.",
  "Not just a friend, but something more,",
  "A journey together, forevermore.",
  "",
  "Sweetness in every moment we share,",
  "Like chocolate, rich beyond compare.",
  "Indulge in love's confectionary delight,",
  "Wrapped in affection, day and night.",
  "",
  "A teddy bear to hold close at night,",
  "Symbolic of love, comfort, and light.",
  "In your arms, my worries take flight,",
  "Together, we'll brave life's darkest night.",
  "",
  "Promises exchanged, vows unspoken,",
  "In silent hearts, our bond unbroken.",
  "To stand by you, come what may,",
  "Guided by love, come what may.",
  "",
  "In tender embrace, our souls align,",
  "Two hearts beating in rhythm divine.",
  "A hug that speaks of love untold,",
  "In each other's arms, we find our stronghold.",
  "",
  "On this day of love, I make my plea,",
  "To be not just friends, but you and me.",
  "Side by side, through thick and thin,",
  "Let our journey together now begin.",
  "",
  "So, my dear friend, on this Valentine's Day,",
  "I ask you to be mine in every way.",
  "Together we'll laugh, together we'll cry,",
  "Forever wala best-friend, you and I."
];

let currentMessageIndex = 0;

// Hide the card panel initially
document.getElementById('cardPanel').style.display = 'none';

// Add event listener to the "Next" button
document.getElementById('nextButton').addEventListener('click', function() {
  // Move to the next message
  currentMessageIndex++;

  // Update card content
  updateCardContent();

  // Hide the "Next" button if there are no more messages
  if (currentMessageIndex * 6 >= cardContents.length) {
    document.getElementById('nextButton').style.display = 'none';
    // Display final messages and button
    document.getElementById('cardPanel').innerHTML = `
      <p>Baaki Baatein on Instagram</p>
      <button id="okButton">OK</button>
    `;
    
    // Add event listener to the "OK" button
    document.getElementById('okButton').addEventListener('click', function() {
      // Display final message
      document.getElementById('cardPanel').innerHTML = `
        <p>Thank you for visiting, code by Vedii</p>
      `;
    });
  }
});

// Function to update card content
function updateCardContent() {
  const cardPanel = document.getElementById('cardPanel');
  let message = '';
  for (let i = 0; i < 6; i++) {
    if (currentMessageIndex * 6 + i < cardContents.length) {
      message += `<p>${cardContents[currentMessageIndex * 6 + i]}</p>`;
    }
  }
  cardPanel.innerHTML = message;
}
