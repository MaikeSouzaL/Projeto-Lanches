const ul = document.querySelector("ul");
const showAll = document.querySelector("#showAll");
const mapAll = document.querySelector("#mapAll");
const sumAll = document.querySelector("#sumAll");
const filterVegan = document.querySelector("#filterVegan");

// abaixo exite uma função para formatar o valor para real
function formatarMoeda(value) {
  const newCurrency = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return newCurrency;
}

let myLi = "";

// o forEatch esta colocando tudo na tela a cada array que ele passa
function handleShowAll(productsArray) {
  myLi = " ";
  productsArray.forEach((item, index, array) => {
    myLi += `
    <li>
    <img src= ${item.src} alt="imagem de um lanche suculento">
    <p>${item.name}</p>
    <p class="item-price"> ${formatarMoeda(item.price)}</p>
</li>
  `;
  });
  ul.innerHTML = myLi;
}

function handleMapAll() {
  // o map cria um novo array ;
  const newPrices = menuOptions.map((item, index, array) => ({
    // ...item poso usar spred operator esparrama tudo que eu quero e altera apenas o price
    name: item.name,
    price: item.price * 0.9,
    vegan: item.vegan,
    src: item.src,
  }));
  handleShowAll(newPrices);
}

// o reduce soma todos os valores e coloca em um unico lugar
function handleSumAll() {
  const totalValue = menuOptions.reduce((acc, item, index, array) => {
    return acc + item.price;
  }, 0);
  ul.innerHTML = `<li>
  <p class="item-price"> O Valor Total é ${formatarMoeda(totalValue)}</p>
</li>
  `;
  //   console.log(totalValue);
}

// filtrando os somente os lanches que possui vegan
function handleFilterVegan() {
  const filterJutVegan = menuOptions.filter((item, index, array) => {
    if (item.vegan) {
      return item.vegan;
    } else return;
  });
  handleShowAll(filterJutVegan);
}

showAll.addEventListener("click", () => handleShowAll(menuOptions));
mapAll.addEventListener("click", handleMapAll);
sumAll.addEventListener("click", handleSumAll);
filterVegan.addEventListener("click", handleFilterVegan);
