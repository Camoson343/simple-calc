function appendValue(value){
    document.getElementById("result").value += value;
}

function calculate(){
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function clearResult(){
    document.getElementById("result").value="";
}