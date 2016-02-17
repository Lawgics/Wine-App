function wineList(label, brand, vintage, type, location, price) {
  this.label = label;
  this.brand = brand;
  this.vintage = type;
  this.location = location;
  this.price = price;
};

var allWines = [new wineList('Vini', 'Veni Vidi Vici', '2012', 'Merlot', 'Thracian Valley, Bulgaria', '9'),
                new wineList('Tempranillo Enologo', 'Tomas Buendia', '2014', 'Tempranillo', 'Madrid, Spain', '20'),
                new wineList('Minervois', 'Benjamin Darnault', '2014', 'Languedoc-Roussillon Red', 'Minervois, France', '9')]

var buttonFunction = document.getElementById('searchButton');
var inputFunction = document.getElementById('input');

inputFunction.addEventListener('input', searchFunction);
buttonFunction.addEventListener('click', buttonPress);

function buttonPress() {
  searchFunction();
}

function searchFunction() {
  if (inputFunction == 'y') {
    console.log('test');
  } else {
    console.log('You fucking suck')
  }
}
