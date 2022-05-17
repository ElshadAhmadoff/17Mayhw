let inpt = document.querySelector("input");
let adbtn = document.querySelector(".addd-btn");
let delbtn = document.querySelector(".dell-btn");
let ull = document.querySelector("ul");
adbtn.addEventListener("click",add);
function add() 
{
    if (!inpt.value.trim() == "") {
        let date = new Date(); 
        let ulli = "<li class='list-group-item'>" + inpt.value + " " + "(" + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + ":" + date.getHours() + ":" + date.getMinutes() +")" + "</li>";
        ull.innerHTML = ulli + ull.innerHTML; 
        inpt.value = " ";
    }
    else{
        alert("Can not add an empty task!");
    }
}

document.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) 
    {
        if (!inpt.value.trim() == "") 
        {
            let date = new Date(); 
            let ulli = "<li class='list-group-item'>" + inpt.value + " " + "(" + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + ":" + date.getHours() + ":" + date.getMinutes() +")" + "</li>";
            ull.innerHTML = ulli + ull.innerHTML; 
            inpt.value = " ";
        } 
        else
        {
            alert("Can not add an empty task!");
        }
    }
})
delbtn.addEventListener("click",del)
function del() 
{
    ull.innerHTML = " ";
}



