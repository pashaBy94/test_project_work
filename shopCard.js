const shoppingBasket = document.querySelector('.shopping__basket');
   
    
    function setCountToShopCard(count){
        let div = document.querySelector('.shop__cart_count');
        div.innerHTML = count;
        if(div.innerHTML == 0) div.style.display = 'none';
        else div.style.display = 'block';
    }
    function onFocus(e){
        e.select();
    } 

    function decrement(ob){
        const itemsCard = getToStorage('cards1');
        const parent = ob.closest('.shopping__basket-item');
        const r = itemsCard.map(el=>{
             if(el.id == parent.dataset.ids)
                ob.nextElementSibling.value = el.count<=1?1:--el.count;
             return el
        });
        setToStorage('cards1', r);
        totalPrice();
    }
    
    function increment(ob){
        const itemsCard = getToStorage('cards1');
        const parent = ob.closest('.shopping__basket-item');
        const r = itemsCard.map(el=>{
             if(el.id == parent.dataset.ids){
                const avail = el.availability;
                ob.previousElementSibling.value = el.count>=avail?avail:++el.count;
             }
             return el
        });
        setToStorage('cards1', r);
        totalPrice();
    }
    function changedCount(e){
        const id = e.target.closest('.shopping__basket-item').dataset.ids;
        const arr = getToStorage('cards1');
        let targ = e.target.value;
        e.target.value = targ.replace(/\D/g,'');
        arr.map(el=>{
            if(el.id == id){
                if(targ <= el.availability) el.count = targ
                else {
                    e.target.value = targ.split('').splice(-1,1).join('')
                    el.count = e.target.value;
                }
            } 
            return el
        })
        setToStorage('cards1', arr);
        totalPrice();
    }
    function clearCard(){
        setToStorage('cards1', []);
        writeItemShoppBasket();
    }
    function writeItemShoppBasket(){
        const itemsCard = getToStorage('cards1');
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
                    <button class="count__minus">-</button>
                    <input type="number" class="basket__count" onfocus="onFocus(this)" value="${itemsCard[i].count}"> 
                    <button class="count__plus">+</button>
                </div>
                <div class="basket__item-delete">
                    <button class="delete_btn"><img src="img/cart-delete.png"></button>
                </div>
            </div>
        </div>`;
        if(i<itemsCard.length-1){
            shoppingBasketItems.innerHTML += '<hr>';
        }
        }
        }

        function addCardToShop(clickedId){
            const arrCards = getToStorage('cards');
            const obj = arrCards.find(el=>el.id == clickedId);
        
            const shopCards = getToStorage('cards1') || [];
            const ob = shopCards.find(el=>el.id == clickedId);
        
            if(ob){
                ob.count++;
            } else{
                obj.count = 1;
                shopCards.push(obj);
            }
            setToStorage('cards1', shopCards);
            totalPrice();
        }
        function eventListnerBasket(ev){
           if(ev.target.closest('.shopping__basket-button')){
            }
            if(ev.target.closest('.shopping__basket-clear')){
                clearCard();
            }
            if(ev.target.classList.contains('shopping__basket') ||  ev.target.closest('.shopping__basket-close')){
                shoppingBasket.style.display = 'none';
                window.removeEventListener('scroll', noScrollWindow);
            }
            if(ev.target.closest('.count__minus')){
                decrement(ev.target.closest('.count__minus'));
            }
            if(ev.target.closest('.count__plus')){
                increment(ev.target.closest('.count__plus'));
            }
            if(ev.target.closest('.delete_btn')){
                deleteItem(ev.target.closest('.delete_btn'));
            }
            if(ev.target.closest('.basket__count')){
                ev.target.closest('.basket__count')
                .addEventListener('input', changedCount)
            }
        }

        function openShopCart(){
            writeItemShoppBasket();
            const shoppingBasket = document.querySelector('.shopping__basket');
            shoppingBasket.addEventListener('click', eventListnerBasket);
            window.addEventListener('scroll', noScrollWindow);
            shoppingBasket.style.display = 'flex';
        }
        
        function totalPrice(){
            const itemsCard = getToStorage('cards1');
            const summ = document.querySelector('.shopping__basket-total-price');
            if (itemsCard?.length === 0 || !itemsCard) {
                summ.innerHTML = ''; 
                setToStorage('totalResult', 0);
                setToStorage('countResultCard', 0);
                setCountToShopCard(0);
                return
            }
            const res = itemsCard.reduce((ac,el)=>({
                a: ac.a+(parseInt(el.price)*el.count),
                b: ac.b + +el.count,
            }), {a:0,b:0});
            setToStorage('totalResult', res.a);
            setToStorage('countResultCard', res.b);
            setCountToShopCard(res.b);
            summ.innerHTML = res.a + '$';
        }
        function deleteItem(ob){
            const parent = ob.closest('.shopping__basket-item');
            const id = parent.dataset.ids;
            const itemsCard = getToStorage('cards1');
            const newItemsCard = itemsCard.filter(el=>el.id != id);
            setToStorage('cards1', newItemsCard);
            openShopCart();
        }