function getvalue(num){
    var result=document.getElementById("inp");
    result.value+=num;
}
function clr(){
    var result=document.getElementById("inp");
    result.value="";
}
function result(){
    var res=document.getElementById("inp");
    res.value=eval(res.value);
}
