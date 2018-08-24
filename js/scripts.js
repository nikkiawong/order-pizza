//business logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateCost = function(pizzaToppings) {
  var total = this.topping + this.size;
  console.log(total);
  return total;
}

//user interface logic
$(document).ready(function() {

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#priceEstimate").show();

    var toppingInput = parseFloat($("#toppingsSelect").val());
    var numberOfToppings = toppingInput.length;
    var sizeInput = parseFloat($("#sizeSelect").val());

    var onePizza = new Pizza(toppingInput, sizeInput);

    console.log(onePizza);

    var totalCost = onePizza.calculateCost(toppingInput);
    console.log("total cost = " + totalCost);

    //text displayed to user ----------->
    // $("#displayToppingsList").text(toppingInput.splice(",").join(', ') + " (" + numberOfToppings + ")");
    $("#displayToppingsSubtotal").text("$" + toppingInput)
    $("#displaySizeSubtotal").text("$" + sizeInput);
    $("#finalCost").text(totalCost);
  });
});
