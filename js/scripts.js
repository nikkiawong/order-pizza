//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function Toppings(pepperoni, sausage, mushrooms, onion, pepper, pineapple) {
  this.pepperoni = pepperoni;
  this.sausage = sausage;
  this.mushrooms = mushrooms;
  this.onion = onion;
  this.pepper = pepper;
  this.pineapple = pineapple;
}

function Size(small, medium, large, family) {
  this.small = 5;
  this.medium = 10;
  this.large = 15;
  this.family = 20;
}

Pizza.prototype.calculateCost = function(numberOfToppings) {
  // if (numberOfToppings > 0) {
    var total = (numberOfToppings * 0.5);
    return total;
  // }
}

//user interface logic
$(document).ready(function() {
  var onePizza = new Pizza(Toppings, Size);

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var numberOfToppings = ($("#toppingsSelect").val()).length;
    console.log(numberOfToppings);
    var sizeInput = $("#sizeSelect").val();
    var totalCost = onePizza.calculateCost(numberOfToppings);
    console.log(totalCost);
  });
});
