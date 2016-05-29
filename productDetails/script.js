/*
Pseudocode
Product Page – Order Product
1.	Get Details
1.1.	forename = forename input
// other variables will be similar
1.2.	name = forename + surname
1.3.	orderAmount = orderAmount value
1.4.	product = product name

2.	Create Order
2.1.	totalPrice = itemPrice * orderAmount
2.2.	message = name + “your order of“ + orderAmount + product + “will cost” + totalPrice

3.	Display order
3.1.	print orderMessage


Product Page – Stock Check
1.	Simulate Check
1.1.	print “Amount loading”
1.2.	wait for 2 seconds

2.	Display Amount
2.1.	generate random number
2.2.	display number
*/
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
	
	// Simulate check
	alert("Amount Loading...");
	timeout = window.setTimeout(function(){}, 2000);
	
	// Display Amount
	stockAmount = Math.floor(Math.random() * 10) + 1;
	document.getElementById("stock").innerHTML = stockAmount;
}