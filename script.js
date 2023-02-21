
let buttonp=(number)=>{
    
    let result=document.getElementById("inputtext");
    result.value+=number;
    
}
let Result=()=>{
    let result=document.getElementById("inputtext");
    try{
        result.value=eval(result.value)
    }
    catch{
        alert("invalid calculation")
    }
    
}
function clr(){
    let result=document.getElementById("inputtext");
    result.value=" ";
}
function del(){
    let result=document.getElementById("inputtext");
    result.value=result.value.slice(0,-1);
}
