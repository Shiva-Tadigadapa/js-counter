    // color: rgb(255, 0, 0);
 var increasebtn = document.getElementById("increase");
 var decreasebtn = document.getElementById("decrease");
 var resetbtn    = document.getElementById("reset")
 var numberdisplay    = document.getElementById("numberdisplay");
 var counter = 0;

 increasebtn.addEventListener("click",() => {
     counter+=1
     numberdisplay.innerHTML=counter
    //  console.log(counter)
 })

 decreasebtn.addEventListener("click",() => {
     counter-=1
     numberdisplay.innerHTML=counter  
    //  console.log(counter)
 })

 resetbtn.addEventListener("click", () => {
     counter=0
    //  console.log(counter)
     numberdisplay.innerHTML=counter
 })


