const input = document.querySelector("input");

document.querySelectorAll(".num__key").forEach((e1) => {
  e1.onclick = () =>
    input.value !== "0" ? input.value + e1.innerText : e1.innerText;
});

const buffer = [];

const opCallBack = opName => () =>{
   let currentVal=parseFloat(input.value);
   if(opName==="percent"){
       currentVal *=0.01;
       input.value=currentVal;
   } 

   else{
       if(buffer)
   }
}

for (const opName of ["add", "subtract", "multiply", "divide", "precent"]) {
  document.querySelector(`.op__key[op=${opName}]`).onclick = opCallBack(opName);
}
