const display = document.getElementById("display");
function append(input){
    display.value += input;

}
function clearmath(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value= "Error";
    }
    
}
