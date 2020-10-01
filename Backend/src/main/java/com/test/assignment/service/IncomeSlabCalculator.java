package com.test.assignment.service;


import com.test.assignment.types.IncomeSlab;
import lombok.Data;

@Data
public class IncomeSlabCalculator {
    private double incomeRangeStart;
    private  double getIncomeRangeEnd;

    public static IncomeSlab findTaxableSlot(double annualIncome){

        IncomeSlab slab = null;
        
        if(annualIncome >= 0 && annualIncome <= 18200) {
            slab = IncomeSlab.A;
            return slab;
        } else if(annualIncome >= 18201 && annualIncome <= 37000) {
            slab = IncomeSlab.B;
            return slab;
        } else if(annualIncome >= 37001 && annualIncome <= 90000) {
            slab = IncomeSlab.C;
            return slab;
        } else if(annualIncome >= 90001 && annualIncome <= 180000) {
            slab = IncomeSlab.D;
            return slab;
        } else if(annualIncome >= 180001) {
            slab = IncomeSlab.E;
            return slab;
        } else{
            return null;
        }
    }
}
