// var password = prompt('Paswword ');
// password = parseInt(password, 10);

// if (password % 3 === 0 && password % 5 === 0) {
// 	console.log('FizzBuzz');
// } else if(password % 5 === 0){
// 	console.log('Buzz');
// } else if(password % 3 === 0){
// 	console.log('Fizz');
// } else{
// 	console.log(password);
// }

var shoppingList = [];
var addProBtn = document.querySelector('.add-product');
var newProductInput = document.querySelector('.product-name');
var newCountInput = document.querySelector('.product-count');
addProBtn.addEventListener('click', function(){
	var newItem = newProductInput.value;
	var countItem = newCountInput.value;
	countItem = parseInt(countItem, 10);
	if (newItem.length === 0) {
		alert('You have to write product name');
	} else{
		if (shoppingList.indexOf(newItem) > -1) {
			alert('We already have it');	
			console.log(shoppingList);
		} else {
			shoppingList.push(newItem);
			shoppingList.push(countItem);
			console.log(shoppingList);
		}
	}
	newProductInput.value =  '';
	newCountInput.value = '1';
});

