import "./style.css";

console.log("Hello world from index.js!");

const highlightButton = (button) => {
  button.style.backgroundColor = "#555";
};

const dehighlightButton = (button) => {
  button.style.background = "none";
};

const loadContent = (() => {
  const divContainer = document.querySelector("#content");

  const home = () => {
    divContainer.innerHTML = "";
    // First Child
    const hero = document.createElement("div");
    hero.classList.add("hero");
    hero.innerHTML = `<h1>Welcome to SavorCorner</h1>
        <p>Experience the Taste of Excellence</p>`;
    divContainer.appendChild(hero);
    // Second Child
    const intro = document.createElement("div");
    intro.classList.add("intro");
    intro.innerHTML = `<h2>About Us</h2>
        <p>
          At SavorCorner, we bring you a curated selection of the finest
          culinary delights. Our chefs are passionate about using the freshest
          ingredients to create dishes that not only satisfy your appetite but
          also delight your senses. Join us for an unforgettable dining
          experience.
        </p>`;
    divContainer.appendChild(intro);
    // Third Child
    const highlights = document.createElement("div");
    highlights.classList.add("highlights");
    highlights.innerHTML = `<div class="highlight">
          <img src="../src/img/pexels-valeriya-1199957.jpg" alt="Special Dish 1" />
          <h3>Signature Dish</h3>
          <p>
            Our signature dish is a must-try. A perfect blend of flavors and
            textures that will leave you wanting more.
          </p>
        </div>
        <div class="highlight">
          <img src="../src/img/pexels-rajesh-tp-749235-1633525.jpg" alt="Special Dish 2" />
          <h3>Chef's Special</h3>
          <p>
            Each week, our chef creates a special dish that showcases seasonal
            ingredients and innovative cooking techniques.
          </p>
        </div>
        <div class="highlight">
          <img src="../src/img/pexels-valeriya-1833349.jpg" alt="Special Dish 3" />
          <h3>Customer Favorite</h3>
          <p>
            Our customers can't get enough of this dish. Find out why it's a
            crowd favorite and indulge in its deliciousness.
          </p>
        </div>`;
    divContainer.appendChild(highlights);
  };

  const menu = () => {
    divContainer.innerHTML = "";
    divContainer.innerHTML = `<div class="menu-section">
        <h2>Our Menu</h2>
        <p>
          Explore our delicious offerings, crafted with the freshest
          ingredients.
        </p>

        <div class="menu-category">
          <h3>Appetizers</h3>
          <div class="menu-item">
            <img src="../src/img/appetizer1.jpg" alt="Appetizer 1" />
            <div class="menu-item-info">
              <h4>Bruschetta</h4>
              <p>
                Grilled bread topped with diced tomatoes, garlic, and basil.
              </p>
            </div>
            <div class="menu-item-price">$8.00</div>
          </div>
          <div class="menu-item">
            <img src="../src/img/appetizer2.jpg" alt="Appetizer 2" />
            <div class="menu-item-info">
              <h4>Stuffed Mushrooms</h4>
              <p>Button mushrooms stuffed with a savory cheese filling.</p>
            </div>
            <div class="menu-item-price">$9.50</div>
          </div>
        </div>

        <div class="menu-category">
          <h3>Main Courses</h3>
          <div class="menu-item">
            <img src="../src/img/main1.jpg" alt="Main Course 1" />
            <div class="menu-item-info">
              <h4>Grilled Salmon</h4>
              <p>
                Fresh salmon fillet grilled to perfection, served with
                vegetables.
              </p>
            </div>
            <div class="menu-item-price">$18.00</div>
          </div>
          <div class="menu-item">
            <img src="../src/img/main2.jpg" alt="Main Course 2" />
            <div class="menu-item-info">
              <h4>Spaghetti Carbonara</h4>
              <p>
                Classic pasta dish with creamy sauce, pancetta, and parmesan.
              </p>
            </div>
            <div class="menu-item-price">$14.00</div>
          </div>
        </div>

        <div class="menu-category">
          <h3>Desserts</h3>
          <div class="menu-item">
            <img src="../src/img/dessert1.jpg" alt="Dessert 1" />
            <div class="menu-item-info">
              <h4>Tiramisu</h4>
              <p>
                Traditional Italian dessert with layers of coffee-soaked
                ladyfingers and mascarpone cream.
              </p>
            </div>
            <div class="menu-item-price">$7.00</div>
          </div>
          <div class="menu-item">
            <img src="../src/img/dessert2.jpg" alt="Dessert 2" />
            <div class="menu-item-info">
              <h4>Chocolate Lava Cake</h4>
              <p>
                Rich chocolate cake with a gooey molten center, served with
                vanilla ice cream.
              </p>
            </div>
            <div class="menu-item-price">$8.50</div>
          </div>
        </div>

        <div class="menu-category">
          <h3>Beverages</h3>
          <div class="menu-item">
            <img src="../src/img/beverage1.jpg" alt="Beverage 1" />
            <div class="menu-item-info">
              <h4>House Wine</h4>
              <p>Choice of red or white, selected by our sommelier.</p>
            </div>
            <div class="menu-item-price">$6.00</div>
          </div>
          <div class="menu-item">
            <img src="../src/img/beverage2.jpg" alt="Beverage 2" />
            <div class="menu-item-info">
              <h4>Cocktails</h4>
              <p>
                A variety of classic and modern cocktails to complement your
                meal.
              </p>
            </div>
            <div class="menu-item-price">$10.00</div>
          </div>
        </div>
      </div>`;
  };

  const about = () => {
    divContainer.innerHTML = "";
    divContainer.innerHTML = `<div class="about-section">
        <h2>About the SavorCorner Project</h2>
        <p>
          Welcome to the SavorCorner project! This project aims to practice and
          enhance skills in DOM manipulation by dynamically rendering a
          restaurant homepage using JavaScript.By the end, we are going to be
          using JavaScript alone to generate the entire contents of the website.
        </p>
        <p>
          To streamline the development process, we use Webpack to bundle our
          JavaScript modules efficiently. Webpack helps in managing dependencies
          and optimizing the build process, making it easier to maintain and
          scale the project. Additionally, npm is utilized for managing project
          dependencies and scripts, allowing for easy installation and
          management of necessary packages.
        </p>
      </div>`;
  };

  return { home, menu, about };
})();

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const aboutButton = document.querySelector(".about-btn");

homeButton.addEventListener("click", () => {
  highlightButton(homeButton);
  dehighlightButton(menuButton);
  dehighlightButton(aboutButton);
  loadContent.home();
});

menuButton.addEventListener("click", () => {
  highlightButton(menuButton);
  dehighlightButton(homeButton);
  dehighlightButton(aboutButton);
  loadContent.menu();
});

aboutButton.addEventListener("click", () => {
  highlightButton(aboutButton);
  dehighlightButton(homeButton);
  dehighlightButton(menuButton);
  loadContent.about();
});

document.addEventListener("DOMContentLoaded", () => {
  highlightButton(homeButton);
  dehighlightButton(menuButton);
  dehighlightButton(aboutButton);
  loadContent.home();
});
