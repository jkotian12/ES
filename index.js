const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
for(let i =0; i<16; i++){
    const item = document.createElement("div");
    item.classList.add("item");
    document.body.querySelector(".container").appendChild(item);
}
console.log(document.querySelector(".container"));