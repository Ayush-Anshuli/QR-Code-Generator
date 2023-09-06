let input = document.getElementById("input")
let qr_img = document.getElementById("qr-img")

function generate(){
    if(input.value!=''){
// **** this is a API link
        qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    }

    else{
        alert("please add a text or a URL")
    }
    
}