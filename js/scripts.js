//business logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateToppingCost = function(toppingInput) {
  var total = parseFloat(this.topping);
  console.log(total);
  return total;
}

Pizza.prototype.calculateTotalCost = function(toppingCost) {
  var sumOfToppingAndSize = toppingCost + this.size;
  return sumOfToppingAndSize;
}

//user interface logic
$(document).ready(function() {

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#priceEstimate").show();

    var toppingInput = $("#toppingsSelect").val();
    console.log(toppingInput);
    var numberOfToppings = toppingInput.length;
    var sizeInput = parseFloat($("#sizeSelect").val());

    var onePizza = new Pizza(toppingInput, sizeInput);

    console.log(onePizza);

    var toppingCost = onePizza.calculateToppingCost(toppingInput);
    console.log("topping subtotal = " + toppingCost);

    var totalCost = onePizza.calculateTotalCost(toppingCost);
    console.log(totalCost);

    //text displayed to user ----------->
    $("#displayToppingsSubtotal").text("$" + toppingCost)
    $("#displaySizeSubtotal").text("$" + sizeInput);
    $("#finalCost").text(totalCost);
  });
});
