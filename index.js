'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers){
    let result = 1;
    for(let num of numbers){
        result = result * num;
    }
    return result;
}

module.exports = {//オブジェクトの形式のため , 区切り
    add: add, //注意
    multi: multi
};
