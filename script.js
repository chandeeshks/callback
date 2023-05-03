//create element
var p = document.createElement("p");
var p1 = document.createElement("p");
p.setAttribute("id","paragraph");
p.style.textAlign="center";
p1.style.textAlign="center";
document.body.append(p);
document.body.append(p1);


//countdown 
var count=10;

let one=(cb=()=>{})=>
{
p.innerText+=count;
cb(count);
}
let two=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let three=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let four=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let five=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let six=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let seven=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let eight=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let nine=(cb=()=>{})=>
{
count--;
p.innerText+=count;
cb(count);
}
let ten=(cb=()=>{})=>
{
count--;
if(count===1){
       p1.innerText+="Happy Independence Day"
       
}
}


one(()=> two(()=> three(()=> four(()=>five(()=>six(()=>seven(()=>eight(()=>nine(()=>ten())))))))));
