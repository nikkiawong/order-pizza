//business logic
var topping = ["pepperoni", "sausage", "mushroom", "onion", "pepper", "pineapple"];

console.log(topping);

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}



Pizza.prototype.calculateCost = function(pizzaToppings) {
    return this.topping + (this.size * 5);
}

//user interface logic
$(document).ready(function() {

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#orderConfirmation").show();

    var toppingInput = $("#toppingsSelect").val();
    var numberOfToppings = toppingInput.length;
    var sizeInput = $("#sizeSelect").val();

    var onePizza = new Pizza(Pizza.topping, sizeInput);
    // var pizzaToppings = new Pizza.Topping(pepperoni, sausage, mushrooms, onion, pepper, pineapple);
    // (Pizza.topping).push(toppingInput);
    // console.log(Pizza.topping);

    // console.log(pizzaToppings.pepperoni);


    // console.log(onePizza);

    var totalCost = onePizza.calculateCost();
    // console.log("total cost = " + totalCost);

    //text displayed to user ----------->
    // $("#displayToppingsList").text(toppingInput.splice(",").join(', ') + " (" + numberOfToppings + ")");
    // $("#displayToppingsSubtotal").text("$" + (numberOfToppings * 0.5).toFixed(2));
    // $("#displaySizeSubtotal").text("$" + (sizeInput * 5).toFixed(2));
    $("#finalCost").text(totalCost);
  });
});
