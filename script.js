function login(){

    let user=document.getElementById("u").value;
    let pass=document.getElementById("p").value;

    if(user=="admin" && pass=="1234"){
        document.getElementById("msg").innerHTML="Login Successful";
    }
    else{
        document.getElementById("msg").innerHTML="Login Failed";
    }

}
