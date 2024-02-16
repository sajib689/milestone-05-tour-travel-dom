const cards = document.querySelectorAll('.card');
let list = 1;
let sum = 0;
// loop through to get the cards

for( let index = 0; index < cards.length; index++){
    const card = cards[index];
    card.addEventListener('click', function(){
        const title = card.querySelector('h2').innerText;
        const tourElement = document.getElementById('tour-list');
        const p = document.createElement('p');
        p.innerText =list + '.' + title;
        tourElement.appendChild(p);
        list++; //
        // list completed successfully
        // start the tour amount calculation
        const totalCost = document.getElementById('total-cost');
        const cost = card.querySelector('p').innerText.split(' ')[1];
        const costParse = parseFloat(cost);
        sum += costParse
        totalCost.innerText = sum
        // cost calculation completed successfully
    });
}