let x = 1;
let y = 4;
let z = -1;
let zz=2;

if(x < 2){
    alert("x est inférieur a 2");
}
if(y > 3){
    alert("y est plus fort que 3");
}
if(z <= 0){
    alert(" z n'est pas pareil que 0");
}

if(x < 2 && y > 3 && z <= 0){
    alert(" x est infréieur à 2 tandis que y est supérieur à 3 et z égal à 0");
}

if(y > 3 && x < 2 || z ===1){
    alert(" x est infréieur à 2 tandis que y est supérieur à 3 ou z est pas égal à -1");
}

// switch (x, y , z){
//     case 2:
//         alert(x);
//     break;
//
//     case 4:
//         alert(y)
//         break;
//
//     case -1:
//         alert(z)
//         break;
//     default:alert("t")