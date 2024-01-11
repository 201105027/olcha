let f = document.querySelector('.f')
let t = document.querySelector('.t')
let s = document.querySelector('.s')
let olcha = document.querySelector('.olcha')
let g = document.querySelector('.g')
let a = document.querySelector('.a')
let l = document.querySelector('.l')
s.onmouseenter = () => {
    s.style.backgroundColor = 'white'
    s.style.color = 'red'
}

s.onmouseleave = () => {
    s.style.backgroundColor = 'red'
    s.style.color = 'white'
}

f.onmouseenter = () => {
    f.style.backgroundColor = 'red'
    f.style.color = 'white'
}

f.onmouseleave = () => {
    f.style.backgroundColor = 'white'
    f.style.color = 'red'
}

t.onmouseenter = () => {
    t.style.backgroundColor = 'red'
    t.style.color = 'white'
}

t.onmouseleave = () => {
    t.style.backgroundColor = 'white'
    t.style.color = 'red'
}



olcha.onmouseenter = () => {
    olcha.style.backgroundColor = 'white'
    olcha.style.color = 'red'
}

olcha.onmouseleave = () => {
    olcha.style.backgroundColor = 'red'
    olcha.style.color = 'white'
}

a.onclick = () => {
    g.setAttribute('src', 'https://olcha.uz/image/original/sliders/ru/WiV3LrIWmVqzl5Fsfdmi6U7qrJPIxbGFJypofB0chYzMFijEFAO24BQfsOcm.jpg')
}


l.onclick = () => {
    g.setAttribute('src', 'https://olcha.uz/image/original/sliders/ru/acnVhdgooYMui8L3olB9uZEKDj2xc49E7xJNOubw9xbofxGKm65ZSuWkv8GK.jpg')
}

// 1

let body = document.body;
let div = document.createElement('div')
let redmi = document.createElement('img')
let name1 = document.createElement('p')
let price = document.createElement('p')
let rassrochka = document.createElement('button')
let buy = document.createElement('button')

// 2

redmi.setAttribute('src', 'https://olcha.uz/image/220x220/products/erwzeycNdZkC0II9km1LjJN81iB1WT8YmbB2O03Gg2DtiVc7FmN9FlNPuKHF.jpg')

div.classList.add('main')

name1.innerText = 'Xiaomi Redmi Note 12S 8/256GB' 
name1.classList.add('name')

price.innerHTML = '2 779 000'
price.classList.add('price')

// 3


body.append(div)

div.append(redmi, name1, price, rassrochka, buy)


