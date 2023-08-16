
var currentFood = 0;
var currentDrink = 0;



function buyFood(item) {
    if(item == 'food'){
        currentFood += 1
    }
    if(item == 'drink'){
        currentDrink += 1
    }
   
    console.log('du kjøpte noe')
    
    document.getElementById('foodBuffAmount').innerHTML = `
    Mat: ${currentFood} <br>
    Drikke: ${currentDrink} <br>

    `

}

function sellFood(item) {
if (item == 'food' && currentFood > 0){
        currentFood -= 1;
        document.getElementById('foodBuffAmount').innerHTML = currentFood;        
} 
if (item == 'drink' && currentDrink > 0) {
        currentDrink -= 1;
        document.getElementById('foodBuffAmount').innerHTML = currentDrink;
} 
    document.getElementById('foodBuffAmount').innerHTML = `
    Mat: ${currentFood} <br>
    Drikke: ${currentDrink} <br>

    `  
 }

function hideInventory(){
    document.getElementById('inventory').style.opacity = 0
}

function showInventory(){
    document.getElementById('inventory').style.opacity = 1
 }
function hideVendor(){
    document.getElementById('vendor').style.opacity = 0
 }
function showVendor(){
    document.getElementById('vendor').style.opacity = 1
 }


