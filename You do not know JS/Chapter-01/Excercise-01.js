
// Variables 
var bankBalance;
var spendingThreshold;
var currentSpending = 0;

// Constants
const PHONE_PRICE = 60.0;
const ACCESSORY_PRICE = 30.0;
const TAX_RATE = 1.16;

function getAmountWithTax(amount) { // Function to return an amount plus taxes
	return parseFloat(amount) * TAX_RATE;
}

function getFormattedAmount(amount, addTax = false) { // Function to return a string with a value in 2 decimal and currency format
	return `$ ${amount.toFixed(2)}`;
}

bankBalance =  parseFloat(prompt("Introduce your Bank Balance, No cheating!"));
spendingThreshold = parseFloat(prompt("Introduce the max amount you are willing to pay."));

while ((bankBalance > 0.0) && (currentSpending < spendingThreshold)) {
	console.log(`Current Balance: ${getFormattedAmount(bankBalance)}`);
	console.log(`Current spending: ${getFormattedAmount(currentSpending)}`);
	
	if (getAmountWithTax(PHONE_PRICE) <= bankBalance) {
		let currentAmount = getAmountWithTax(PHONE_PRICE);
		console.log(`New expense: ${getFormattedAmount(currentAmount)}`);
		
		if (currentAmount + getAmountWithTax(ACCESSORY_PRICE) <= bankBalance) {
			currentAmount += getAmountWithTax(ACCESSORY_PRICE);
			console.log(`Plus Accessory: ${getFormattedAmount(currentAmount)}`);
		}

		console.log(`Total: ${getFormattedAmount(currentAmount)}`);
		currentSpending += currentAmount;
		bankBalance -= currentAmount;
		
	} else {
		console.log("Not enough money to spend :(");
		break;
	}
}

console.log("ENDED:");
console.log(`Current Balance: ${getFormattedAmount(bankBalance)}`);
console.log(`Current spending: ${getFormattedAmount(currentSpending)}`);