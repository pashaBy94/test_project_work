HTMLCollection.prototype.forEach = function(col, ths){
    for (let i = 0; i < this.length; i++) {
        if(ths){
            col.call(ths, this[i], i, this)
        } else{
            col(this[i], i, this)
        } 
    }
}
const dropDown = document.querySelector('#drop__down');
const dropDownList = document.querySelector('.drop__down-list');
const formSearchCoffee = document.querySelector('#form__search__coffee');
const searchCofee = document.querySelector('#search__cofee');
const btnForm = document.querySelector('#btn__form');
const shopBody = document.querySelector('.shop__body');
const dropDownMenu = document.querySelector('.drop__down-menu');
const navList = document.querySelector('.nav__list');
const shopCart = document.querySelector('#shop__cart');
const shoppingBasket = document.querySelector('.shopping__basket');
const descriptionBtn = document.getElementsByClassName('description__btn');
const cards = [
    {
        id: 01,
        name: 'Efiopiya midle cofee 100g',
        img: 'img/s6-f1.png',
        price: '18$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. '
    },
    {
        id: 02,
        name: 'Efiopiya hard cofee 100g',
        img: 'img/s6-f1.png',
        price: '17$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. '
    },
    {
        id: 03,
        name: 'Efiopiya easy cofee 100g',
        img: 'img/s6-f1.png',
        price: '11$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. Тем не менее, небольшая терпкость присутствует, в её основе черный чай и бергамот.'
    },
    {
        id: 04,
        name: 'Efiopiya normal cofee 100g',
        img: 'img/s6-f1.png',
        price: '18$',
        data: 'EFIOPIYA',
        description: 'Тело (плотность) напитка получается легкое, чайное. Высокогорье служит гарантией почти полного отсутствия горчинки. Тем не менее, небольшая терпкость присутствует, в её основе черный чай и бергамот. Также преобладает цитрус – лимон, лайм, грейпфрут. Послевкусие долгое, пряное, в основе лимонная цедра.'
    },
    {
        id: 05,
        name: 'Kenia hard cofee 90g',
        img: 'img/s6-f2.png',
        price: '18$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back. It is not for people who do not like acidity in coffee. (Acidity being the prized, flavorful bright notes in the cup; think citrus, black currant, and berry)!'
    },
    {
        id: 06,
        name: 'Kenia normal cofee 100g',
        img: 'img/s6-f2.png',
        price: '10$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back. It is not for people who do not like acidity in coffee.'
    },
    {
        id: 07,
        name: 'Kenia midle cofee 90g',
        img: 'img/s6-f2.png',
        price: '9$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back.'
    },
    {
        id: 08,
        name: 'Kenia easy cofee 90g',
        img: 'img/s6-f2.png',
        price: '8$',
        data: 'KENIA',
        description: 'Broadly speaking, the best Kenya coffees are complex and bright, and it lights up the palate from front to back.'
    },
    {
        id: 09,
        name: 'Colambia easy cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'While the exact flavors change based on where the beans grow, in general, Colombian coffee beans boast tasting notes of chocolate, nuts, herbs, fruit, and a citrusy acidity. They produce a mild and well-balanced cup of coffee with a medium, silky body, tropical notes, and fruity, spicy aroma.'
    },
    {
        id: 10,
        name: 'Colambia normal cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'While the exact flavors change based on where the beans grow, in general, Colombian coffee beans boast tasting notes of chocolate, nuts, herbs, fruit, and a citrusy acidity.'
    },
    {
        id: 11,
        name: 'Colambia hard cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'While the exact flavors change based on where the beans grow, in general, Colombian coffee beans boast tasting notes of chocolate, nuts, herbs, fruit, and a citrusy acidity. '
    },
    {
        id: 12,
        name: 'Colambia midle cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
        description: 'They produce a mild and well-balanced cup of coffee with a medium, silky body, tropical notes, and fruity, spicy aroma.'
    },
    {
        id: 13,
        name: 'Quatemola easy cofee 110g',
        img: 'img/s6-f4.png',
        price: '22$',
        data: 'QUATEMOLA',
        description: 'Depending on the region, Guatemala coffee taste can have floral and citrus aromas, with chocolate, sweet, fruity, wine or nutty flavours. This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.'
    },
    {
        id: 14,
        name: 'Quatemola normal cofee 110g',
        img: 'img/s6-f4.png',
        price: '9$',
        data: 'QUATEMOLA',
        description: 'Depending on the region, Guatemalas coffee taste can have floral and citrus aromas, with chocolate, sweet, fruity, wine or nutty flavours. This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.'
    },
    {
        id: 15,
        name: 'Quatemola hard cofee 110g',
        img: 'img/s6-f4.png',
        price: '18$',
        data: 'QUATEMOLA',
        description: 'Depending on the region, Guatemalas coffee taste can have floral and citrus aromas, with chocolate, sweet, fruity, wine or nutty flavours. This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.'
    },
    {
        id: 16,
        name: 'Quatemola midle cofee 110g',
        img: 'img/s6-f4.png',
        price: '28$',
        data: 'QUATEMOLA',
        description: 'This coffee is also known for its full and balanced body, as well as its bright, pleasant, persistent and intense acidity.'
    },
];
const initialCards = [{
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

dropDown.addEventListener('click', openBar);
dropDownList.addEventListener('click', writeList);
formSearchCoffee.addEventListener('submit', (e) => e.preventDefault());
searchCofee.addEventListener('input', searchChange);
btnForm.addEventListener('click', searchChange);
navList.addEventListener('click', isCurrentList);
shopBody.addEventListener('click', workWithCard);
shopCart.addEventListener('click', openShopCart);

localStorage.setItem('cards', JSON.stringify(cards));
addCoffee(initialCards);



function decrement(ob){
    const itemsCard = JSON.parse(localStorage.getItem('cards1'));
    const parent = ob.closest('.shopping__basket-item');
    const r = itemsCard.map(el=>{
         if(el.id == parent.dataset.ids)
            ob.nextElementSibling.value = el.count<=1?1:--el.count;
         return el
    });
    localStorage.setItem('cards1', JSON.stringify(r));
    totalPrice();
}

function increment(ob){
    const itemsCard = JSON.parse(localStorage.getItem('cards1'));
    const parent = ob.closest('.shopping__basket-item');
    const r = itemsCard.map(el=>{
         if(el.id == parent.dataset.ids)
            ob.previousElementSibling.value = el.count>=30?30:++el.count;
         return el
    });
    localStorage.setItem('cards1', JSON.stringify(r));
    totalPrice();
}

function deleteItem(ob){
    const parent = ob.closest('.shopping__basket-item');
    const id = parent.dataset.ids;
    const itemsCard = JSON.parse(localStorage.getItem('cards1'));
    const newItemsCard = itemsCard.filter(el=>el.id != id);
    console.log(newItemsCard);
    localStorage.setItem('cards1', JSON.stringify(newItemsCard));
    openShopCart();
}

function noScrollWindow(){
    window.scrollTo(0,0);
}

function openShopCart(){
    writeItemShoppBasket();
    window.addEventListener('scroll', noScrollWindow);
    shoppingBasket.style.display = 'flex';
    shoppingBasket.addEventListener('click', (ev)=>{
        ev.stopPropagation();
        if(ev.target.classList.contains('shopping__basket') ||  ev.target.closest('.shopping__basket-close')){
            shoppingBasket.style.display = 'none';
            window.removeEventListener('scroll', noScrollWindow);
        }
    });
}

function totalPrice(){
    const itemsCard = JSON.parse(localStorage.getItem('cards1'));
    const summ = document.querySelector('.shopping__basket-total-price');
    
    if (itemsCard?.length === 0 || !itemsCard) {
        summ.innerHTML = ''; 
        localStorage.setItem('totalResult', 0);

        return
    }
    const res = itemsCard.reduce((ac,el)=>ac+(parseInt(el.price)*el.count),0);
    localStorage.setItem('totalResult', res);
    summ.innerHTML = res + '$';
}

function writeItemShoppBasket(){
const itemsCard = JSON.parse(localStorage.getItem('cards1'));
const shoppingBasketItems = document.querySelector('.shopping__basket-items');
totalPrice();
if(itemsCard?.length === 0 || !itemsCard){
    shoppingBasketItems.innerHTML = `<div class="shopping__basket-empty">
    Shopping cart is empty.
    </div>`;
    return;
} 
shoppingBasketItems.innerHTML = '';
for(let i=0;i<itemsCard.length;i++){
    shoppingBasketItems.innerHTML += `<div class="shopping__basket-item" data-ids="${itemsCard[i].id}" data-price="${itemsCard[i].price}">
    <div class="basket__item-content">
        <div class="basket__item-left">
            <img src="${itemsCard[i].img}" class="basket__item-left-img">
        </div>
        <div class="basket__item-right">
            <div class="basket__item-text">
                <p class="name__production">
                    Name: <span class="item__attributes">${itemsCard[i].name}</span>
                    </p>
                <p class="item__manufacture">
                    Manufacture: <span class="item__attributes">${itemsCard[i].data}</span>
                    </p>
                <p class="item__articule">
                    Articule: <span class="item__attributes">${itemsCard[i].id*34252}</span>
                    </p>
            </div>
        </div>
    </div>
    <div class="basket__item-footer">
        <div class="basket__item-price">
            Price: <span class="item__attributes">${itemsCard[i].price}</span>
        </div>
        <div class="basket__item-count">
            <button class="count__minus" onclick="decrement(this)">-</button>
            <input type="text" readonly class="basket__count" value="${itemsCard[i].count}"> 
            <button class="count__plus" onclick="increment(this)">+</button>
        </div>
        <div class="basket__item-delete">
            <button class="delete_btn" onclick="deleteItem(this)"><img src="img/cart-delete.png"></button>
        </div>
    </div>
</div>`;
if(i<itemsCard.length-1){
    shoppingBasketItems.innerHTML += '<hr>';
}
}
}

function addCardToShop(clickedId){
    const arrCards = JSON.parse(localStorage.getItem('cards'));
    const obj = arrCards.find(el=>el.id == clickedId);

    const shopCards = JSON.parse(localStorage.getItem('cards1')) || [];
    const ob = shopCards.find(el=>el.id == clickedId);

    if(ob){
        ob.count++;
    } else{
        obj.count = 1;
        shopCards.push(obj);
    }
    console.log(shopCards);
localStorage.setItem('cards1', JSON.stringify(shopCards));
}

function workWithCard(ev){
    ev.preventDefault();
    if(ev.target.classList.contains('modal__buy')){
        if (ev.target?.dataset.category) {
            const arr = cards.filter(el => el.data.toUpperCase() === ev.target.dataset.category.toUpperCase());   
            addCoffee(arr); 
        }
        if (ev.target?.dataset.nameId) {
            console.log(ev.target.dataset.nameId);
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
    this.children.forEach(el=>{
        el.classList.remove('nav__list-isopened');
        if(ev.target == el.children[0]) 
        el.classList.add('nav__list-isopened')
    })
}

function searchChange(ev) {
    ev.preventDefault();
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

    descriptionItem.style.top = ev.clientY - coordTh.top - 30 + 'px';
    descriptionItem.style.left = ev.clientX - coordTh.left - 210 + 'px';
    description.addEventListener('click', (ev)=>{
        if(ev.target.closest('.description__closs') || ev.target.closest('.description__wrap'))
        description.outerHTML = '';
    });
}
