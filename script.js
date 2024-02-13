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
  "Sending you a virtual bouquet, each petal carrying my love across the miles.",
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

  // Start heart animations only if it's the first time clicking "Next"
  if (currentMessageIndex === 0) {
    setInterval(() => {
      const heart = new Heart(Math.random() * window.innerWidth, -100);
      hearts.push(heart);
    }, 200);

    setInterval(() => {
      hearts.forEach((heart) => heart.update());
    }, 10);
  }

  // Update card content
  updateCardContent();

  // Move to the next message
  currentMessageIndex++;
  if (currentMessageIndex >= cardContents.length) {
    // Display final messages and button
    document.getElementById('cardPanel').innerHTML = `
      <p>In the garden of friendship, where blossoms never fade,</p>
      <p>Where laughter dances freely in the sun's warm cascade,</p>
      <p>There blooms a love so pure, a bond beyond compare,</p>
      <p>In your eyes, dear friend, I find my solace, my air.</p>
      <p></p>
      <p>With every shared moment, our spirits intertwine,</p>
      <p>In sync with the universe, our hearts align.</p>
      <p>Through laughter and tears, in every joy and strife,</p>
      <p>You've been my compass, my guiding light in life.</p>
      <p></p>
      <p>On this day of love, as Cupid's arrows fly,</p>
      <p>I gather my courage, no need to be shy.</p>
      <p>For in you, my dear friend, I see a love so true,</p>
      <p>A love that's been waiting, just for me and you.</p>
      <p></p>
      <p>So, here's my proposal, not with rings of gold,</p>
      <p>But with promises eternal, a story yet untold.</p>
      <p>Will you be my forever wala best friend, my partner in crime,</p>
      <p>Together, hand in hand, until the end of time?</p>
      <p></p>
      <p>With you, I've found completeness, in your embrace,</p>
      <p>Let's journey together, in this endless chase.</p>
      <p>For you're my everything, my confidant, my guide,</p>
      <p>With you by my side, forever, I'll abide.</p>
      <p></p>
      <p>So let's paint the canvas of our lives anew,</p>
      <p>With hues of friendship and love, ever true.</p>
      <p>On this Valentine's Day, let's seal our fate,</p>
      <p>As best friends forever, soulmates are innate.</p>
      <p></p>
      <button id="nextButton2">Next</button>
    `;
    
    // Add event listener to the "Next" button
    document.getElementById('nextButton2').addEventListener('click', function() {
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
    });
  }
});

function updateCardContent() {
  const cardPanel = document.getElementById('cardPanel');
  const message = cardContents[currentMessageIndex];
  cardPanel.innerHTML = `<p>${message}</p>`;
}
