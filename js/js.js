let expense_name=document.getElementById("input-1")
let amount=document.getElementById("input-2")
let add=document.getElementById('add');
let error1=document.getElementById('error1');
let  expenselist=document.getElementById("expenseList")
let expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

add.addEventListener("click",function (){
    error1.style.display = 'none';

    if ( (amount.value)===''||amount.value==0) {
        console.log(amount.value)
        error1.style.display='block'
    }

else
 {

        error1.style.display = 'none';

        const expense = {
            name: expense_name.value,
            amount: amount.value,
        };
        expenses.push(expense)
        expenselist.innerHTML = "";
        for (let i = 0; i < expenses.length; i++) {

            const expense1 = expenses[i];
            const expenseRow = document.createElement("tr");

            expenseRow.innerHTML = ` 
   
               <td>${expense1.name}</td> 
               <td>${expense1.amount}</td> 
               <td class="delete-btn btn" id="btn" data-id=${i} onclick="del()">Delete</td> 
              <td class="edit-btn btn" id="btn" data-id="${i}" >Edit</td> 
               `
            expenselist.appendChild(expenseRow);
        }
        localStorage.setItem("expenses",
            JSON.stringify(expenses));
    }

});

function loa(){


        error1.style.display = 'none';

        expenselist.innerHTML = "";
        for (let i = 0; i < expenses.length; i++) {

            const expense1 = expenses[i];
            const expenseRow = document.createElement("tr");
            expenseRow.innerHTML = ` 
       
       <td>${expense1.name}</td> 
       <td>${expense1.amount}</td> 
      <td class="delete-btn btn" id="btn" data-id="${i}" >Delete</td> 
      <td class="edit-btn btn" id="btn" data-id="${i}" >Edit</td> 
      `
            expenselist.appendChild(expenseRow);
        }

}
function deleteExpense(event) {
    if (event.target.classList.contains("delete-btn")) {

        // Get expense index from data-id attribute
        const expenseIndex =
            parseInt(event.target.getAttribute("data-id"));
            expenses.splice(expenseIndex, 1);
        loa()
    }
}

function editExpense(event) {
    if (event.target.classList.contains("edit-btn")) {
        const expenseIndex =
            parseInt(event.target.getAttribute("data-id"));
        let name = prompt("What is new expanse name?");
        let num = prompt("What is new amount?");
        amount=parseFloat(amount.value)



            expenses[expenseIndex].name = name
            expenses[expenseIndex].amount = num
            loa()
    }
}
expenselist.addEventListener("click", deleteExpense);
expenselist.addEventListener("click", editExpense);
loa();
