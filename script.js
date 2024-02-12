const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

// Hide the card panel initially
document.getElementById('cardPanel').style.display = 'none';

// Add event listener to the "Next" button
document.getElementById('nextButton').addEventListener('click', function() {
  // Show the card panel when the button is clicked
  document.getElementById('cardPanel').style.display = 'block';

  // Create and animate hearts
  setInterval(() => {
    const heart = new Heart(Math.random() * window.innerWidth, -100);
    hearts.push(heart);
  }, 200);

  setInterval(() => {
    hearts.forEach((heart) => heart.update());
  }, 10);
});

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
