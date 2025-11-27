
function AgeCalculate() {
  const birth = document.getElementById("birth").value;
const current_date = document.getElementById("currentdate").value;
let result = document.getElementById("result");
if(!birth){
    result.textContent = `Your Didint enter any value`
    return;
}
   let Age = current_date.slice(0,4) - birth.slice(0,4);
   result.textContent = `Your Age Is ${Age}`
   
}
