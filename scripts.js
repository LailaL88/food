


function result(){
	var salary = parseInt(document.getElementById('salary').value);
	var otherIncomes = parseInt(document.getElementById('otherIncomes').value);
	var leftAfterFood = parseInt(document.getElementById('left').value);

	var totalIncomes = salary + otherIncomes;
	var spendOnFood = (totalIncomes - leftAfterFood )/ 31;


	document.getElementById('spend').innerHTML="You can spend on food " + spendOnFood.toFixed(2) + " a day!";
}