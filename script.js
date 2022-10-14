//If else statement which gets a number via prompt and then shows in alert 
function getHigher(){
    let valueA = prompt("Input a number as value A:", "");
    let valueB = prompt("Input a number as value B:", "");
    if (valueA > valueB){
        alert('Value A is higher.');
    } else if (valueA < valueB){
        alert('valueB is higher.');
    } else if (valueA === valueB) {
        alert('valueA and valueB are equal');
    } else {
        alert('Invalid input, please enter a valid input');
    }
}