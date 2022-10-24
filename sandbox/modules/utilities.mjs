
/*
    This format works, but doesn't use ES6 format.
*/

// const printMessage = (message) => {
//     console.log(message);
// }

// const randomizeColor = (domElement) => {
//     const r = Math.random() * 255;
//     const g = Math.random() * 255;
//     const b = Math.random() * 255;

//     domElement.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// function subtract(x, y) {
//     return x - y;
// }

// module.exports = { subtract, printMessage, randomizeColor };

/*
    I can't seem to get this ES6 format to work.
    Update:
    -   This ES6 format works, when i rename this file & sample.js 
        (the file referencing/using this module) to sample.mjs
*/

const printMessage = (message) => {
    console.log(message);
}

const randomizeColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

// export const increaseTextSize = (domElement) => {
//     domElement.style.fontSize = "20px";
// }

export { printMessage, randomizeColor };

