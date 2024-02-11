document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("cardContainer");
    const cards = Array.from(cardContainer.getElementsByClassName("card"));
    let currentIndex = 0;
  
    // Function to display the poem when a card is clicked
    function displayPoem(index) {
      console.log(cards[index].textContent); // You can replace console.log with any display logic you want
    }
  
    // Event listener for clicking on a card
    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        displayPoem(index);
      });
    });
  
    // Event listener for clicking on the next button
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      displayPoem(currentIndex);
    });
  
    // Event listener for clicking on "Yes" button
    const yesButton = document.getElementById("yesButton");
    yesButton.addEventListener("click", () => {
      explodeHearts();
    });
  
    // Function to explode hearts
    function explodeHearts() {
      const heartBomb = document.createElement("div");
      heartBomb.classList.add("heart-bomb");
      document.body.appendChild(heartBomb);
      setTimeout(() => {
        heartBomb.remove();
        console.log("Yayy");
      }, 2000);
    }
  });
  