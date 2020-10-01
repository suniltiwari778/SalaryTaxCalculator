package com.test.assignment.configuration;

/**
 * This class provides the metadata information and tax calculation logic based on slab.
 */
public class TaxCalculatorConfig {


    public static double getTaxSlabA(double dAnnualSalary) {
        return 0;
    }

    public static double getTaxSlabB(double dAnnualSalary) {
        double base = 0;
        double offset = 18200;
        double taxableExtraIncome = dAnnualSalary - offset;
        double offsetTax = (taxableExtraIncome * 19) / 100;
        double totalTax = base + offsetTax;
        return totalTax;
    }

    public static double getTaxSlabC(double dAnnualSalary) {
        double base = 3572;
        double offset = 37000;
        double taxableExtraIncome = dAnnualSalary - offset;
        double offsetTax = (taxableExtraIncome * 32.5) / 100;
        double totalTax = base + offsetTax;
        return totalTax;
    }

    public static double getTaxSlabD(double dAnnualSalary) {
        double base = 20797;
        double offset = 90000;
        double taxableExtraIncome = dAnnualSalary - offset;
        double offsetTax = (taxableExtraIncome * 37) / 100;
        double totalTax = base + offsetTax;
        return totalTax;
    }

    public static double getTaxSlabE(double dAnnualSalary) {
        double base = 54097;
        double offset = 180000;
        double taxableExtraIncome = dAnnualSalary - offset;
        double offsetTax = (taxableExtraIncome * 45) / 100;
        double totalTax = base + offsetTax;
        return totalTax;
    }

}
