const hexValue = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9];

const color = document.querySelector('#color')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () =>{
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        const I = Math.floor(Math.random() * hexValue.length)
        hexColor += hexValue[I]
        // console.log(hexColor)
        color.textContent=hexColor
        document.body.style.backgroundColor = hexColor
    }
})