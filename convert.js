function cmToin(){
let cmval = Number(document.getElementById("input").value)
let inval = cmval/2.54;
let res=document.getElementById("res")
res.innerHTML = inval.toFixed(2)+"inches";
}
