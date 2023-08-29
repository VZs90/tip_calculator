const billEl=document.getElementById("bill_amount");
const tipEl=document.getElementById("tip_percentage");
const calculateBtn=document.getElementById("calculate");
const totalEl=document.getElementById("total");

calculateBtn.addEventListener("click",()=>{
    calculate();
});

function calculate(){
    if (billEl.value>0 && tipEl.value>=0) {
        const billValue=parseFloat(billEl.value);
        const tipValue=parseFloat(tipEl.value);
        const total=billValue+billValue*(tipValue/100);
        totalEl.textContent=`Total: ${total}`;
    }
}