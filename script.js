// bill and total amount should be the same

// when pressing the tip bill should stay the same and in the total box amount should equal to bill + tip percentage.
// Tip amount = bill*tip/100
// number of people = total amount/numer of people

// let resetAll = document.getElementById("resetbox");
// resetAll.addEventListener(click, () => {
//   window.location.reload();
//   calculateBill();
// });
let finalbill = document.getElementById("totalamount");

let resetAll = () => {
  finalbill.innerHTML = "$0";
  tipamountmoneytext.innerHTML = "$0";
};

let percent = 0;
let alltips = document.getElementsByClassName("alltips");
//parseInt mxolod cifrebad gadaiqcaia
for (let i = 0; i < alltips.length; i++) {
  alltips[i].addEventListener("click", (event) => {
    event.preventDefault(); // pages, reload-s ushlis xels.
    percent = parseInt(event.target.textContent);
    calculateBill();
    //  parseInt(event.target.textContent); aq cifrad gadavaqcie rac unda iwerebodes da aseve shevinaxe cifri
  });
}

const calculateBill = () => {
  let bill = document.getElementById("amountofmoney").value;
  let total = document.getElementById("totalamount").value;
  let numberOfPeople = document.getElementById("numberofpeoplenumber").value;

  let finalpercent = (document.getElementById("tipamountmoneytext").innerHTML =
    (Number(bill) * Number(percent)) / 100);

  let customNumber = (document.getElementById("customnumber").innerHTML =
    (Number(bill) * Number(percent)) / 100);

  let finalbill = (document.getElementById("totalamount").innerHTML =
    Number(bill) + Number(finalpercent));

  let finalbillperperson = (document.getElementById("totalamount").innerHTML =
    "$" + Number(finalbill) / Number(numberOfPeople));
};

let bill = document.getElementById("amountofmoney");
bill.addEventListener("input", calculateBill);

let customNumber = document.getElementById("customnumber");
customNumber.addEventListener("input", (event) => {
  percent = +event.target.value;
  calculateBill();
});
// + numbershi gadayavs albat rogorc parseInt. da mere event.target.value-ti shevinae cifri
let numberOfPeople = document.getElementById("numberofpeoplenumber");
numberOfPeople.addEventListener("input", calculateBill);
