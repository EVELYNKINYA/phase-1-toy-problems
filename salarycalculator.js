function calculateNetSalary(basicSalary, benefits) {
    // Assuming the following constants for tax rates and deduction percentages
    const TAX_RATE = 0.20; // Assume 20% tax rate
    const NHIF_PERCENTAGE = 0.027; // Assume 2.7% NHIF deduction
    const NSSF_PERCENTAGE = 0.04; // Assume 4% NSSF deduction

    // gross salary
    const grossSalary = basicSalary + benefits;

    // tax (payee)
    const tax = grossSalary * TAX_RATE;

    // NHIF deduction
    const nhifDeduction = grossSalary * NHIF_PERCENTAGE;

    // NSSF deduction
    const nssfDeduction = grossSalary * NSSF_PERCENTAGE;

    //net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}

const basicSalary = 100000; 
const benefits = 10000; 

const result = calculateNetSalary(basicSalary, benefits);

// Output
console.log("Gross Salary: " + result.grossSalary);
console.log("Tax (PAYEE): " + result.tax);
console.log("NHIF Deduction: " + result.nhifDeduction);
console.log("NSSF Deduction: " + result.nssfDeduction);
console.log("Net Salary: " + result.netSalary);
