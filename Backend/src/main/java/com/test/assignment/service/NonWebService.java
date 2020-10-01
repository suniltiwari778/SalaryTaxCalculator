package com.test.assignment.service;


import com.test.assignment.configuration.TaxCalculatorConfig;
import com.test.assignment.types.IncomeSlab;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class NonWebService {

    private static double convertToDouble(String temp) throws Exception {
        String a = temp;
        //replace all commas if present with no comma
        String s = a.replaceAll(",", "").trim();
        // if there are any empty spaces also take it out.
        String f = s.replaceAll(" ", "");
        //now convert the string to double
        double result = Double.parseDouble(f);
        return result; // return the result
    }

    public String calculateIncomeTax(String arguments) throws Exception {


        String taxableAmount = null;
        boolean isValidSal = true;
        String salAmountStr = null;
        double dAnnualSalary;

        if (null != arguments ) {
            salAmountStr = arguments;
        }
        try {
            dAnnualSalary = convertToDouble(salAmountStr);
        } catch (Exception e) {
            isValidSal = false;
            log.error("Salary entered to calculate tax is not valid");
            throw new Exception("Please supply a valid salary");
        }
        if (isValidSal) {
            IncomeSlab incomeSlab = IncomeSlabCalculator.findTaxableSlot(dAnnualSalary);
            if (IncomeSlab.A.equals(incomeSlab)) {
                taxableAmount = "Nill";
            } else if (IncomeSlab.B.equals(incomeSlab)) {
                taxableAmount = String.valueOf(TaxCalculatorConfig.getTaxSlabB(dAnnualSalary));
            } else if (IncomeSlab.C.equals(incomeSlab)) {
                taxableAmount = String.valueOf(TaxCalculatorConfig.getTaxSlabC(dAnnualSalary));
            } else if (IncomeSlab.D.equals(incomeSlab)) {
                taxableAmount = String.valueOf(TaxCalculatorConfig.getTaxSlabD(dAnnualSalary));
            } else if (IncomeSlab.E.equals(incomeSlab)) {
                taxableAmount = String.valueOf(TaxCalculatorConfig.getTaxSlabE(dAnnualSalary));
            } else {
                taxableAmount = "Nill";
            }
        }

        return taxableAmount;
    }
}
