function hellow(){
event.preventDefault();

    let name= document.getElementById("name").value;

        document.getElementById("result").innerText="Thank you " + name;

        alert("sucssusfulliy");


}


function loginHome(event){
    event.preventDefault();
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    if(inp1 == "" || inp2 == ""){
        alert("Please Enter the Username and Password !");
    }
    else{
        window.location.href = "home.html";
    }
}

