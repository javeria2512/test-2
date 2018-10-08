let letter = "";

function print(text){
 text += letter;
//  console.log(text);
 document.querySelector(".mid").innerHTML += text;
}

function send(){
    alert("your message has been sent");
}


