const dropDown = document.querySelector('#drop__down');
const dropDownList = document.querySelector('.drop__down-list');
dropDown.addEventListener('click', openBar);
dropDownList.addEventListener('click', writeList);


function writeList(ev){
    if(ev.target.closest('.drop__down-link')){
        let cofeeArr = ev.target.innerHTML === 'ALL COFFEE'?cards:cards.filter(el=>el.data.toUpperCase() === ev.target.innerHTML.toUpperCase());
        let shopBody = document.querySelector('.shop__body');
        shopBody.innerHTML = '';
        for(let i=0;i<cofeeArr.length;i++){
        let div = document.createElement('div');
        let ofDiv = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        div.classList.add('shop__item');
        div.insertAdjacentElement('beforeend', ofDiv);
        div.insertAdjacentElement('beforeend', h3);
        div.insertAdjacentElement('beforeend', p);
        const reg = /\d+(?=.png)/gi;
        const ind = cofeeArr[i].img.match(reg)[0];
        ofDiv.classList.add('shop__img', `shop__img_bg${ind}`);
        h3.innerHTML = cofeeArr[i].name;
        p.innerHTML = cofeeArr[i].price; 
        shopBody.append(div);
        }
        if(dropDownList.classList.contains('nav__list-seed'))
            dropDownList.classList.remove('nav__list-seed')
    }
}

function openBar(ev){
    dropDownList.classList.toggle('nav__list-seed');
}

const cards=[
    {
        id: 01,
        name: 'Efiopiya midle cofee 100g',
        img: 'img/s6-f1.png',
        price: '18$',
        data: 'EFIOPIYA',
    },
    {
        id: 02,
        name: 'Efiopiya hard cofee 100g',
        img: 'img/s6-f1.png',
        price: '17$',
        data: 'EFIOPIYA',
    },
    {
        id: 03,
        name: 'Efiopiya easy cofee 100g',
        img: 'img/s6-f1.png',
        price: '11$',
        data: 'EFIOPIYA',
    },
    {
        id: 04,
        name: 'Efiopiya normal cofee 100g',
        img: 'img/s6-f1.png',
        price: '18$',
        data: 'EFIOPIYA',
    },
    {
        id: 05,
        name: 'Kenia hard cofee 90g',
        img: 'img/s6-f2.png',
        price: '18$',
        data: 'KENIA',
    },
    {
        id: 06,
        name: 'Kenia normal cofee 100g',
        img: 'img/s6-f2.png',
        price: '10$',
        data: 'KENIA',
    },
    {
        id: 07,
        name: 'Kenia midle cofee 90g',
        img: 'img/s6-f2.png',
        price: '9$',
        data: 'KENIA',
    },
    {
        id: 08,
        name: 'Kenia easy cofee 90g',
        img: 'img/s6-f2.png',
        price: '8$',
        data: 'KENIA',
    },
    {
        id: 09,
        name: 'Colambia easy cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
    },
    {
        id: 10,
        name: 'Colambia normal cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
    },
    {
        id: 11,
        name: 'Colambia hard cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
    },
    {
        id: 12,
        name: 'Colambia midle cofee 110g',
        img: 'img/s6-f3.png',
        price: '8$',
        data: 'COLAMBIA',
    },
    {
        id: 13,
        name: 'Quatemola easy cofee 110g',
        img: 'img/s6-f4.png',
        price: '22$',
        data: 'QUATEMOLA',
    },
    {
        id: 14,
        name: 'Quatemola normal cofee 110g',
        img: 'img/s6-f4.png',
        price: '9$',
        data: 'QUATEMOLA',
    },
    {
        id: 15,
        name: 'Quatemola hard cofee 110g',
        img: 'img/s6-f4.png',
        price: '18$',
        data: 'QUATEMOLA',
    },
    {
        id: 16,
        name: 'Quatemola midle cofee 110g',
        img: 'img/s6-f4.png',
        price: '28$',
        data: 'QUATEMOLA',
    },
];

