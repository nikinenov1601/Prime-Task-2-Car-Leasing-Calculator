# Prime-Task-2---Car-Leasing-Calculator

Task approach explained step by step:

1. The more specific part of writing the HTML & CSS code was the storing of different elements in containers properly so that by using grid layout I can arrange the form elements and leasing details side by side.
2. The essential part of writing the the responsive design (mobile view) was setting maximim width and auto margin in the 'full-container' class (the container that stores all the elements), from there everything else was a matter of small rearrangements.
3. In terms of the JS code functinality - the whole bussiness logic is set in an 'DOMContentLoaded' event, that does not wait for stylesheets to load.
4. The event listeners are set up to listen for changes in input elements (like changes in the value of a range slider or number input).
5. When an input value changes, the corresponding event listener triggers the 'calculateLeasingDetails' function.
6. For example: when the value of carValue changes, the corresponding event listener updates the value of carValueRange and calls calculateLeasingDetails(), but when the value of 'carValueRange' changes, the corresponding event listener updates the value of carValue and calls calculateLeasingDetails() function, and so on.
7. The calculateLeasingDetails() function retrieves the current values from the input elements, determines the interes rate based on the type of car that the user chosen, calculates the down payment amount based on the car value and the down payment percentage, therefore calculates the loan amount by subtracting the down payment amount from the car value, **calculates the monthly installment by using this formula: Monthly Installment = Loan Amount × Monthly Interest Rate / 1 − Math.Pow(1 + Monthly Interest Rate, −Total Number of Payments)** and finally calculates the the total leasing cost by multiplying the monthly installment by the total number of payments (leaser period - months) and adding the down payment amount.
8. This approach ensures the calculateLeasingDetails() function is called once on page load to initialize the display with default or initial values and that users can interactively see how different inputs affect their leasing costs, making the calculator a useful tool for planning car leases by changing any value dynamically.



​
