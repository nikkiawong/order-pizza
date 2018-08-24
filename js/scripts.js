//business logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.calculateToppingCost = function(toppingInput) {
  var total = parseFloat(this.topping) * toppingInput.length;
  return total;
}

Pizza.prototype.calculateTotalCost = function(toppingCost) {
  var sumOfToppingAndSize = toppingCost + this.size;
  return sumOfToppingAndSize;
}

//user interface logic
$(document).ready(function() {
  $("#showPizzaForm").click(function(event) {
    $("#siteExplanation").hide();
    $("#pizzaForm").show();
  });

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#priceEstimate").show();

    var toppingInput = $("#toppingsSelect").val();
    var numberOfToppings = toppingInput.length;
    var sizeInput = parseFloat($("#sizeSelect").val());

    var onePizza = new Pizza(toppingInput, sizeInput);

    var toppingCost = onePizza.calculateToppingCost(toppingInput);

    var totalCost = onePizza.calculateTotalCost(toppingCost);

    $("#displayToppingsSubtotal").text("$" + (toppingCost).toFixed(2))
    $("#displaySizeSubtotal").text("$" + (sizeInput).toFixed(2));
    $("#finalCost").text((totalCost).toFixed(2));
  });
});
