function create(){
    const a=prompt("enter the numper of boxes enter above 100")
      console.log(a);
  var amount=Number(a)*Number(a)
  console.log(amount);
 
    for(let i=0; i<amount;i++){
        let ce= document.createElement("div");
        let con=document.getElementById("container")

       con.appendChild(ce)
     ce.style.borderRadius="0.2px"
     ce.style.width=`100%`;
     ce.style.height=`5px`;
     con.style.display="grid"
     con.style.gridTemplateColumns=`(repeat(${a},1fr))`;
    con.style.gridTemplateRows=`repeat(${a},1fr)`
   
    ce.addEventListener("mouseover", changeclr);

     function changeclr(){
        ce.style.backgroundColor="white"
     }
}

}

functin 