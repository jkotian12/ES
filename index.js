const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
const boxes = prompt("Grid Size");
let btn = document.querySelector("button");
if ((boxes % 2 === 0) && (boxes < 100)) {
    let w = 100 / boxes;
    document.body.querySelector(".container").style.gridTemplateColumns = `repeat(${boxes}, ${w}%`;
    document.body.querySelector(".container").style.gridTemplateRows = `repeat(${boxes}, ${w}%`;
    for (let i = 1; i <= boxes; i++) {
        for (let j = 1; j <= boxes; j++) {
            let item = document.createElement("div");
            item.classList.add("item");
            item.style.gridColumn = `${i}/${i}`;
            item.style.gridRow = `${j}/${j}`;
            document.body.querySelector(".container").appendChild(item);
            item.addEventListener("mouseover", (e) => {
                item.classList.add("done");
            })
            btn.addEventListener("click",()=>{
                item.classList.remove("done");
            })
        }
    }



}

else {
    alert("NOT POSSIBLE");
}
