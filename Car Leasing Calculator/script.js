document.addEventListener('DOMContentLoaded', function() {
    
    const carType = document.getElementById('carType');
    const leasePeriod = document.getElementById('leasePeriod');
    const carValue = document.getElementById('carValue');
    const carValueRange = document.getElementById('carValueRange');
    const downPaymentValue = document.getElementById('downPaymentValue');
    const downPaymentRange = document.getElementById('downPaymentRange');
    const totalCost = document.getElementById('totalCost');
    const downPaymentAmount = document.getElementById('downPaymentAmount');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const interestRate = document.getElementById('interestRate');

    carValue.addEventListener('input', () => {
        carValueRange.value = carValue.value;
        calculateLeasingDetails();
    });

    carValueRange.addEventListener('input', () => {
        carValue.value = carValueRange.value;
        calculateLeasingDetails();
    });

    downPaymentValue.addEventListener('input', () => {
        downPaymentRange.value = downPaymentValue.value;
        calculateLeasingDetails();
    });

    downPaymentRange.addEventListener('input', () => {
        downPaymentValue.value = downPaymentRange.value;
        calculateLeasingDetails();
    });

    carType.addEventListener('change', calculateLeasingDetails);
    leasePeriod.addEventListener('input', calculateLeasingDetails);

    // Function to calculate and display leasing details
    function calculateLeasingDetails() {
        const carTypeValue = carType.value;
        const leasePeriodValue = parseInt(leasePeriod.value) || 0;
        const carValueValue = parseInt(carValue.value) || 0;
        const downPaymentPercent = parseInt(downPaymentValue.value) || 0;

        // Determine interest rate based on car type
        const annualInterestRate = carTypeValue === 'new' ? 2.99 : 3.7;
        interestRate.innerText = annualInterestRate.toFixed(2);

        // Calculate down payment amount
        const downPaymentAmountValue = (carValueValue * downPaymentPercent) / 100;
        downPaymentAmount.innerText = downPaymentAmountValue.toFixed(2);

        // Calculate total leasing cost
        const loanAmount = carValueValue - downPaymentAmountValue;
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const totalNumberOfPayments = leasePeriodValue;

        // Monthly installment calculation using the formula for annuity payments
        const monthlyInstallmentValue = loanAmount > 0 && totalNumberOfPayments > 0
            ? loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalNumberOfPayments))
            : 0;
        monthlyInstallment.innerText = monthlyInstallmentValue.toFixed(2);

        // Calculate total cost
        const totalCostValue = (monthlyInstallmentValue * totalNumberOfPayments) + downPaymentAmountValue;
        totalCost.innerText = totalCostValue.toFixed(2);
    }

    // Initialize values
    calculateLeasingDetails();
});
