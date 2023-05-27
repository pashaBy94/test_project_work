function getToStorage(key){
return JSON.parse(localStorage.getItem(key));
}
function setToStorage(key, el){
  localStorage.setItem(key, JSON.stringify(el));
}
HTMLCollection.prototype.forEach = function(col, ths){
  for (let i = 0; i < this.length; i++) {
      if(ths){
          col.call(ths, this[i], i, this)
      } else{
          col(this[i], i, this)
      } 
  }
}

