function oblicz(){

let ilosc = document.getElementById("numer").value;
let numer = document.getElementById("ilosc").value;
let wynik = document.getElementById("wynik");

if(ilosc==1)
{
   let koszt = 4 *  numer;
    wynik.innerHTML = "koszt paliwa:" + koszt; 
}else if(ilosc==2){
    let koszt = 3.5 * numer;
    wynik.innerHTML = "koszt paliwa:" + koszt;
}
}