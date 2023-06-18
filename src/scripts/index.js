/* Desenvolva sua lógica aqui ... */
var numberfilter = 0;

function createCard(product){
    const card = document.createElement("li");
    const cardImg = document.createElement("img");
    const cardText = document.createElement("p");
    const cardTitle = document.createElement("h2");
    const cardButtonContainer = document.createElement("div");
    const cardSpan = document.createElement("span");
    const cardPrice = document.createElement("p");
    const cardButton = document.createElement("button");

    card.className = "card__container";
    card.id = `disc-${product.id}`
    cardImg.className = "card__image";
    cardText.className = "card__text";
    cardTitle.className = "card__title";
    cardButtonContainer.className = "card__button-container";
    cardSpan.classList = "card__span";
    cardPrice.classList = "card__price";
    cardButton.classList = "card__button";
    cardButton.id = product.id;

    cardImg.src = product.img;
    cardImg.alt = product.title;
    cardText.innerText = `${product.band} ${product.year}`
    cardTitle.innerText = product.title;
    cardSpan.innerText = "R$ ";
    cardPrice.innerText = product.price;
    cardButton.innerText = "Comprar"

    card.appendChild(cardImg);
    card.appendChild(cardText);
    card.appendChild(cardTitle);
    cardSpan.appendChild(cardPrice);
    cardButtonContainer.appendChild(cardSpan);
    cardButtonContainer.appendChild(cardButton);
    card.appendChild(cardButtonContainer);

    return card;
}

function createButton(button, id) {
    const buttonContainer = document.createElement("li");
    const buttonButton = document.createElement("button");
  
    buttonContainer.className = "button__container";
    buttonContainer.id = `item-${id}`;
    buttonButton.className = "button__button";
    buttonButton.id = id;
  
    buttonButton.addEventListener("click", function() {
      filter(id, products);
    });
  
    buttonButton.innerText = button;
  
    buttonContainer.appendChild(buttonButton);
    return buttonContainer;
  }
  

function rederCards(products){
    const discsContainer = document.querySelector(".discs__container");


    products.forEach(product =>{
        const card = createCard(product);
        discsContainer.appendChild(card);
    });
}

function renderButtons(array){
    const buttonContainer = document.querySelector(".buttons__container");
    var idCat = 0

    array.forEach(buttonText => { // Renomear o parâmetro para buttonText
        const buttonItem = createButton(buttonText, idCat); // Renomear a variável para buttonItem
        idCat++;
        buttonContainer.appendChild(buttonItem); // Renomear a variável para buttonItem
    })
}

function filter(number, array) {
    const discsContainer = document.querySelector(".discs__container");
    discsContainer.innerHTML = "";
    numberfilter = number;
    console.log(numberfilter);
    
    array.forEach(item => {
      if (item.category === number || number === 0) {
        const card = createCard(item);
        discsContainer.appendChild(card);
      }
    });
  }
  
  function filterRange(array) {
    const priceRange = document.querySelector(".price__range");
    const discsContainer = document.querySelector(".discs__container");
    const priceSpan = document.querySelector(".price__span");
  
    priceRange.addEventListener("input", () => {
      priceSpan.innerHTML = "";
      discsContainer.innerHTML = "";
      console.log(numberfilter);
  
      priceSpan.innerText = priceRange.value;
  
      array.forEach(item => {
        if (item.price <= priceRange.value) {
          if (item.category === numberfilter || numberfilter === 0) {
            const card = createCard(item);
            discsContainer.appendChild(card);
          }
        }
      });
    });
  }

toggleDarkMode();
filterRange(products);
rederCards(products);
renderButtons(categories);
themePreferenceAnalysis();