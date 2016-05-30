function orderProduct() {
	var orderMessage;
	
	// Get details
	var forename = document.getElementById("forename").value;
	var surname = document.getElementById("surname").value;
	var orderAmount = parseInt(document.getElementById("amount").value);
	var price = parseFloat(document.getElementById("price").innerHTML);
	var product = (document.getElementById("product").innerHTML);
	var totalPrice = orderAmount * price;
	var fullName = forename + "  " + surname;
	
	// Create order
	orderMessage = fullName + " your order of " + orderAmount + " \"" + product + "\" will cost £" + totalPrice + ".";
	
	// Display order
	alert(orderMessage);
}

function stockCheck() {
	var stockAmount, timeout;
	var executed = false;
	
	if (!executed) {
		executed = true;
		// Simulate check
		alert("Amount Loading...");
		timeout = window.setTimeout(function(){}, 2000);
		
		// Display Amount
		stockAmount = Math.floor(Math.random() * 10) + 1;
		document.getElementById("stock").innerHTML = stockAmount;
	}
}
