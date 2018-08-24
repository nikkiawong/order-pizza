//business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// function Toppings(pepperoni, sausage, mushrooms, onion, pepper, pineapple) {
//   this.pepperoni = pepperoni;
//   this.sausage = sausage;
//   this.mushrooms = mushrooms;
//   this.onion = onion;
//   this.pepper = pepper;
//   this.pineapple = pineapple;
// }
//
// function size(small, medium, large, family) {
//   this.small = 5;
//   this.medium = 10;
//   this.large = 15;
//   this.family = 20;
// }

Pizza.prototype.calculateCost = function(numberOfToppings, size) {
    var total = (numberOfToppings * 0.5) + (size * 5);
    console.log(size);
    return total;
}

//user interface logic
$(document).ready(function() {
  var onePizza = new Pizza(Pizza.toppings, Pizza.size);

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#orderConfirmation").show();

    var toppingsInput = $("#toppingsSelect").val();
    var numberOfToppings = toppingsInput.length;
    var size = parseFloat($("#sizeSelect").val());
    // var sizeCost = (sizeInput * 5);
    var totalCost = onePizza.calculateCost(numberOfToppings, size);

    $("#displayToppings").text(toppingsInput);
    // $("#displaySize").text();
    $("#finalCost").text(totalCost);
  });
});
