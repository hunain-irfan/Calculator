function addToDisplay(value){
    const display = document.getElementById("display");
    display.value += value;
}
function allClear(){
    const display = document.getElementById("display");
    display.value = "";
}

function delBtn(){
    const display = document.getElementById("display");
    display.value = display.value.slice(0 , -1);
}
function cal(){
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
