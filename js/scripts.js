//business logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}
//
// function topping(pepperoni, sausage, mushrooms, onion, pepper, pineapple) {
//   this.pepperoni = pepperoni;
//   this.sausage = sausage;
//   this.mushrooms = mushrooms;
//   this.onion = onion;
//   this.pepper = pepper;
//   this.pineapple = pineapple;
// }

Pizza.prototype.calculateCost = function(numberOfToppings) {
    var total = (numberOfToppings * 0.5) + (this.size * 5);
    return total;
}
//
// Pizza.prototype.calculateCostOfSize = function() {
//   var total = this.size * 5;
//   return total;
// }

//user interface logic
$(document).ready(function() {

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#orderConfirmation").show();

    var toppingInput = $("#toppingsSelect").val();
    var numberOfToppings = toppingInput.length;
    var sizeInput = $("#sizeSelect").val();

    var onePizza = new Pizza(numberOfToppings, sizeInput);

    var totalCost = onePizza.calculateCost(numberOfToppings);
    console.log("total is $" + totalCost);

    $("#displayToppings").text("$" + (numberOfToppings * 0.5).toFixed(2));
    $("#displaySize").text("$" + (sizeInput * 5).toFixed(2));
    $("#finalCost").text(totalCost.toFixed(2));
  });
});
