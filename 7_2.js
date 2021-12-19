'use strict';
let info = {
    "name": "Yuji Nishida",
    "height": "1,86 m",
    "spike": "3,5 m",
    "job": "Volleyball player",
    "pos": "Opposite spiker"
}
fetch("7.2.php", {
    method: "post",
    body: JSON.stringify(info)
})
.then((result) => {
    return result.json();
})
.then((info) => {
    console.log(info);   
})
.catch(error => {
    console.log('ERROR: ', error.message)
})