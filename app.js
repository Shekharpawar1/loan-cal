const form = document.querySelector("#form");
const amountInput = document.querySelector("#amount");
const interestInput = document.querySelector("#interest");
const years = document.querySelector("#years")
const calculateBtn = document.querySelector("#btn");
const monthlyPayment = document.querySelector("#monthly-payment")
const totalPayment = document.querySelector("#total-payment")
const totatlInterest = document.querySelector("#total-interest")



form.addEventListener("submit", function (e) {

    const principal = parseFloat(amountInput.value);
    const calculateInterest = parseFloat(interestInput.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;



    //monthly payment

    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2)
        totatlInterest.value = ((monthly * calculatePayment) - principal).toFixed(2)
    } else {
        showerrors("check your numbers")

    }
    e.preventDefault();

})

function showerrors(error){
    const errors=document.createElement("div")
    errors.className="alert alerts-danger";
    errors.appendChild(document.createTextNode(error));

    const card=document.querySelector(".card")
    const heading=document.querySelector(".heading")


   card.insertBefore(errors,heading);
   setTimeout(clearError,3000)
 
}
// amountInput.Value;
// interestInput.Value;
// years.value;


function clearError(){
    document.querySelector(".errors").remove();
}
// to calculate total interest = amountInput.value*interestInput.value*years.value