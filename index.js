
const dropDown = document.querySelector('#drop__down');
const dropDownList = document.querySelector('.drop__down-list');
const formSearchCoffee = document.querySelector('#form__search__coffee');
const searchCofee = document.querySelector('#search__cofee');
// const btnForm = document.querySelector('#btn__form');
const shopBody = document.querySelector('.shop__body');
// const dropDownMenu = document.querySelector('.drop__down-menu');
const navList = document.querySelector('.nav__list');
const descriptionBtn = document.getElementsByClassName('description__btn');
const shoppingBasketClear = document.querySelector('.shopping__basket-clear')

const cards = [
    {
        id: 01,
        name: 'Efiopiya midle cofee 100g',
        img: 'img/s6-f1.png',
        price: '18$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. ',
        availability: 23,
    },
    {
        id: 02,
        name: 'Efiopiya hard cofee 100g',
        img: 'img/s6-f1.png',
        price: '17$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. ',
        availability: 23,
    },
    {
        id: 03,
        name: 'Efiopiya easy cofee 100g',
        img: 'img/s6-f1.png',
        price: '11$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. Тем не менее, небольшая терпкость присутствует, в её основе черный чай и бергамот.',
        availability: 23,
    },
    {
        id: 04,
        name: 'Efiopiya normal cofee 100g',
        img: 'img/s6-f1.png',
        price: '18$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. Тем не менее, небольшая терпкость присутствует, в её основе черный чай и бергамот. Также преобладает цитрус – лимон, лайм, грейпфрут. Послевкусие долгое, пряное, в основе лимонная цедра.',
        availability: 23,
    },
    {
        id: 05,
        name: 'Kenia hard cofee 90g',
        img: 'img/s6-f2.png',
        price: '18$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back. It is not for people who do not like acidity in coffee. (Acidity being the prized, flavorful bright notes in the cup; think citrus, black currant, and berry)!',
        availability: 23,
    },
    {
        id: 06,
        name: 'Kenia normal cofee 100g',
        img: 'img/s6-f2.png',
        price: '10$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back. It is not for people who do not like acidity in coffee.',
        availability: 23,
    },
    {
        id: 07,
        name: 'Kenia midle cofee 90g',
        img: 'img/s6-f2.png',
        price: '9$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back.',
        availability: 23,
    },
    {
        id: 08,
        name: 'Kenia easy cofee 90g',
        img: 'img/s6-f2.png',
        price: '8$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back.',
        availability: 23,
    },
    {
        id: 09,
        name: 'Colambia easy cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'While the exact flavors change based on where the beans grow, in general, Colombian coffee beans boast tasting notes of chocolate, nuts, herbs, fruit, and a citrusy acidity. They produce a mild and well-balanced cup of coffee with a medium, silky body, tropical notes, and fruity, spicy aroma.',
        availability: 23,
    },
    {
        id: 10,
        name: 'Colambia normal cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'While the exact flavors change based on where the beans grow, in general, Colombian coffee beans boast tasting notes of chocolate, nuts, herbs, fruit, and a citrusy acidity.',
        availability: 23,
    },
    {
        id: 11,
        name: 'Colambia hard cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'While the exact flavors change based on where the beans grow, in general, Colombian coffee beans boast tasting notes of chocolate, nuts, herbs, fruit, and a citrusy acidity. ',
        availability: 23,
    },
    {
        id: 12,
        name: 'Colambia midle cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'They produce a mild and well-balanced cup of coffee with a medium, silky body, tropical notes, and fruity, spicy aroma.',
        availability: 23,
    },
    {
        id: 13,
        name: 'Quatemola easy cofee 110g',
        img: 'img/s6-f4.png',
        price: '22$',
        data: 'QUATEMOLA',
        description: 'Depending on the region, Guatemala coffee taste can have floral and citrus aromas, with chocolate, sweet, fruity, wine or nutty flavours. This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.',
        availability: 23,
    },
    {
        id: 14,
        name: 'Quatemola normal cofee 110g',
        img: 'img/s6-f4.png',
        price: '9$',
        data: 'QUATEMOLA',
        description: 'Depending on the region, Guatemalas coffee taste can have floral and citrus aromas, with chocolate, sweet, fruity, wine or nutty flavours. This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.',
        availability: 23,
    },
    {
        id: 15,
        name: 'Quatemola hard cofee 110g',
        img: 'img/s6-f4.png',
        price: '18$',
        data: 'QUATEMOLA',
        description: 'Depending on the region, Guatemalas coffee taste can have floral and citrus aromas, with chocolate, sweet, fruity, wine or nutty flavours. This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.',
        availability: 23,
    },
    {
        id: 16,
        name: 'Quatemola midle cofee 110g',
        img: 'img/s6-f4.png',
        price: '28$',
        data: 'QUATEMOLA',
        description: 'This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.',
        availability: 23,
    },
];
const initialCards = [
{
    img: 'img/s6-f1.png',
    name: 'EFIOPIYA'
},
{
    img: 'img/s6-f2.png',
    name: 'KENIA',
},
{
    img: 'img/s6-f3.png',
    name: 'COLAMBIA',
},
{
    img: 'img/s6-f4.png',
    name: 'QUATEMOLA',
}];

// dropDown.addEventListener('click', openBar);
// dropDownList.addEventListener('click', writeList);
formSearchCoffee.addEventListener('submit', (e) => e.preventDefault());
// navList.addEventListener('click', isCurrentList);
navList.addEventListener('click', workWithMenu);
shopBody.addEventListener('click', workWithCard);
setToStorage('cards', cards);
addCoffee(initialCards);
setCountToShopCard(getToStorage('countResultCard'));

function noScrollWindow(){
    window.scrollTo(0,0);
}

function workWithMenu(e){
    if(e.target.closest('#shop__cart')){
        openShopCart();
    }
    if(e.target.closest('#search__cofee')){
        e.target.closest('#search__cofee')
        .addEventListener('input', searchChange);
    }
    if(e.target.closest('#btn__form')){
        searchChange(e);
    }
    if(e.target.closest('#drop__down')){
        openBar(e);
    }
    if(e.target.closest('.drop__down-list')){
        writeList(e);
    }
    if(e.target.closest('.nav__list')){
        isCurrentList(e);
    }
}

function workWithCard(ev){
    if(ev.target.classList.contains('modal__buy')){
        if (ev.target?.dataset.category) {
            const arr = cards.filter(el => el.data.toUpperCase() === ev.target.dataset.category.toUpperCase());   
            addCoffee(arr); 
        }
        if(ev.target?.dataset.nameId) {
            addCardToShop(ev.target.dataset.nameId);
        }
    }
    if(ev.target.classList.contains('show__description')){
        const shopItem = JSON.parse(ev.target.dataset.description);
        addModalDescription(shopItem, ev, this);
        descriptionBtn[0].addEventListener('click', ()=>addCardToShop(shopItem.id));
    }
    if(ev.target.classList.contains('description__btn')){

    }
}

function isCurrentList(ev){
    ev.target.closest('.nav__list').children.forEach(el=>{
        el.classList.remove('nav__list-isopened');
        if(ev.target == el.children[0]) 
        el.classList.add('nav__list-isopened')
    })
}

function searchChange(ev) {
    let arr;
    let currentValue = searchCofee.value.trim();
    if(currentValue){
        arr = cards.filter(el => el.name.toUpperCase().includes(currentValue.toUpperCase()));
    } else{
        arr = initialCards;
    }
    addCoffee(arr);
}

function writeList(ev) {
    if (ev.target.closest('.drop__down-link')) {
        let cofeeArr = (ev.target.innerHTML === 'ALL COFFEE')
            ? cards
            : cards.filter(el => el.data.toUpperCase() === ev.target.innerHTML.toUpperCase());
        addCoffee(cofeeArr);
        if (dropDownList.classList.contains('nav__list-seed'))
            dropDownList.classList.remove('nav__list-seed')
    }
}

function addCoffee(arr) {
        shopBody.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement('div');
        let ofDiv = document.createElement('div');
        let loopDescript = document.createElement('div');
        let h3 = document.createElement('h3');
        let a = document.createElement('a');
        const reg = /\d+(?=.png)/gi;
        const ind = arr[i].img.match(reg)[0];
        a.href = '#';
        if(arr[i].id){
            a.setAttribute('data-name-id', arr[i].id);
            a.innerHTML = 'ADD TO SHOPPING';
            loopDescript.setAttribute('data-description', JSON.stringify(arr[i]));
            loopDescript.innerHTML = '&#128269;';
            loopDescript.classList.add('show__description');
            div.insertAdjacentElement('beforeend', loopDescript);
        } else{
            a.setAttribute('data-category', arr[i].name);
            a.innerHTML = 'SHOW';
        }
        a.classList.add('modal__buy');
        div.classList.add('shop__item');
        div.insertAdjacentElement('beforeend', ofDiv);
        ofDiv.insertAdjacentElement('beforeend', a);
        div.insertAdjacentElement('beforeend', h3);
        ofDiv.classList.add('shop__img', `shop__img_bg${ind}`);
        h3.innerHTML = arr[i].name;
        if(arr[i].price){
            let p = document.createElement('p');
            div.insertAdjacentElement('beforeend', p);
            p.innerHTML = arr[i].price;
        }
        shopBody.append(div);
    }
}

function openBar(ev) {
    dropDownList.classList.toggle('nav__list-seed');
    window.addEventListener('click', removeEvent);  
}

function removeEvent(ev) {
    if(!ev.target.closest('.drop__down-menu')) 
    dropDownList.classList.remove('nav__list-seed');
}

function addModalDescription(obj, ev, th){
    const reg = /\d+(?=.png)/gi;
    const ind = obj.img.match(reg)[0];
    shopBody.innerHTML += `<div class="description">
    <div class="description__wrap"></div>
    <div class="description__item">
    <div class="description__img shop__img_bg${ind}">
        <img src="img/delete.png" class="description__closs">

    </div>
    <h3 class="description__title">${obj.name}</h3>
    <hr>
    <p class="description__text">${obj.description}</p>
    <hr>
    <p class="description__price">Price: ${obj.price}</p>
    <hr>
    <a href="#" class="description__btn">ADD TO SHOPPING</a>
    </div>
    </div>`;
    const description = document.querySelector('.description');
    const descriptionItem = document.querySelector('.description__item');
    const descriptionCloss = document.querySelector('.description__closs');
    let coordTh = th.getBoundingClientRect(); 

    descriptionItem.style.top = ev.clientY - coordTh.top - 50 + 'px';
    descriptionItem.style.left = ev.clientX - coordTh.left - 250 + 'px';
    description.addEventListener('click', (ev)=>{
        if(ev.target.closest('.description__closs') || ev.target.closest('.description__wrap'))
        description.outerHTML = '';
    });
}



// const graf = {A: ['B', 'D'], B:['C', 'N', 'Z'], D:['E', 'F'], F:['S']};
// const arr = [];
// function findSure(st, end){
// const a = graf[st];
// arr.push(st);
// for(let j=0;j<a.length;j++){
//     if(a[j] == end){
//         arr.push(end);
//         return 
//     }
// }
// for(let i=0;i<a.length; i++){
//     if(graf[a[i]]){
//         findSure(a[i], end);
//         continue;
//     }
//     if(i==a.length-1) arr.pop();
// }
// return arr
// }

// console.log(findSure('A','E'));