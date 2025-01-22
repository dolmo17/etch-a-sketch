const container = document.getElementById("container");
const grid = document.createElement("div");
grid.setAttribute("id", "grid");

// random number generator helper function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// darken to random color
const darken = (evt) => {
    const elem = evt.target;
    elem.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
}

// darken to darker grey
// const darken = (evt) => {
//     const elem = evt.target;
//     elem.style.backgroundColor = `rgb(56,56,56)`;
// }

// function for generating grids of different sizes
const generateGrid = () => {
    grid.replaceChildren();
    let count = 101;

    while (count > 100 || count < 0) {
        count = prompt("Enter grid size:");
    }
    const squareSize = `${960/count}px`;

    for (let i = 0; i < count; i++) {
        // generate row to hold 16 squares
        const row = document.createElement("div");
        row.setAttribute("id", "row");

        for (let j = 0; j < count; j++) {
            // generate and attach the squares to the j-th row
            const square = document.createElement("div");
            square.setAttribute("id", "square");
            square.style.height = squareSize;
            square.style.width = squareSize;
            square.addEventListener("mouseover", darken)
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

// add resize button and attach its event
const btn = document.createElement("button");
btn.textContent = "Resize";
btn.addEventListener("click", generateGrid);
container.append(btn, grid);


// generate the initial grid
for (let i = 0; i < 16; i++) {
    // generate row to hold 16 squares
    const row = document.createElement("div");
    row.setAttribute("id", "row");

    for (let j = 0; j < 16; j++) {
        // generate and attach the squares to the j-th row
        const square = document.createElement("div");
        square.setAttribute("id", "square");
        square.setAttribute("style", `height: ${960/16}px`);
        square.addEventListener("mouseover", darken);
        row.appendChild(square);
    }
    grid.appendChild(row);

}
