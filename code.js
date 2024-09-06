const container = document.getElementById("container");
const grid = document.createElement("div");
grid.setAttribute("id", "grid");


const darken = (evt) => {
    const elem = evt.target;
    elem.style.backgroundColor = "#383838";
}

const generateGrid = () => {
    grid.replaceChildren();

    let count = 101;
    while (count > 100) {
        count = prompt("Enter grid size:");
    }

    for (let i = 0; i < count; i++) {
        // generate row to hold 16 squares
        const row = document.createElement("div");
        row.setAttribute("id", "row");

        for (let j = 0; j < count; j++) {
            // generate and attach the squares to the j-th row
            const square = document.createElement("div");
            square.setAttribute("id", "square");
            square.addEventListener("mouseover", darken)
            row.appendChild(square);
        }
        grid.appendChild(row);
    }


    // resize squares
    const squareSize = toString(960 / count);
    const squares = document.querySelectorAll("#square");
    squares.forEach((elem) => {
        elem.style.height = squareSize;
        elem.style.width = squareSize;
    });
}

const btn = document.createElement("button");
btn.textContent = "Resize";
btn.addEventListener("click", generateGrid);
container.append(btn, grid);

for (let i = 0; i < 16; i++) {
    // generate row to hold 16 squares
    const row = document.createElement("div");
    row.setAttribute("id", "row");

    for (let j = 0; j < 16; j++) {
        // generate and attach the squares to the j-th row
        const square = document.createElement("div");
        square.setAttribute("id", "square");
        square.addEventListener("mouseover", darken)
        row.appendChild(square);
    }
    grid.appendChild(row);
    const squareSize = toString(960 / 16);
    const squares = document.querySelectorAll("#square");
    squares.forEach((elem) => {
        elem.style.height = squareSize;
        elem.style.width = squareSize;
    });
}