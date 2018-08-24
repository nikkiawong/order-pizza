//business logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateCost = function(toppingInput) {
  for (i = 0; i <= toppingInput.length; i++) {
    var total = parseFloat(this.topping) + this.size;
    console.log(total);
  }
  return total;
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

    var totalCost = onePizza.calculateCost(toppingInput);
    console.log("total cost = " + totalCost);

    //text displayed to user ----------->
    $("#displayToppingsSubtotal").text("$" + toppingInput)
    $("#displaySizeSubtotal").text("$" + sizeInput);
    $("#finalCost").text(totalCost);
  });
});
