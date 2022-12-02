const list = [
    'pasta',
    'pomodoro',
    "miele",
    "cioccolata",
    "latte",
    "farina"
];

let shopping_list = document.querySelector(".shopping-list");
let items_list = "";
let i = 0;
while(i < list.length){
    let item = list[i];
    items_list += `<li>${item}</li>`;
    shopping_list.innerHTML = items_list;
    i++
}