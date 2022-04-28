let elemanlar;
let adaylar;

document.getElementById("btnEkle").addEventListener("click",()=>{
    adaylar=document.getElementById("txtAday").value;
    console.log(adaylar)
    elemanlar=document.createElement("li");
    document.getElementById("liste").appendChild(elemanlar);
    elemanlar.innerHTML=adaylar;
    console.log(elemanlar);
})

function cekilisiYap(){
    let sayi=Math.floor(Math.random() * elemanlar.lenght);
    console.log(sayi);
}