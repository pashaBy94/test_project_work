// let sort = function(){ return 22 + 33}
const obj = {
    sort(){
        return 22 + 33
    },
    a: 22,
    b: 44,
    c: 66,
    func(){
        console.log(this.sort());
    }
}

    obj.func();
// };
// const obj2 = {
//     mms: 11,
//     a: 100,
// };

// obj.func.call(obj2);