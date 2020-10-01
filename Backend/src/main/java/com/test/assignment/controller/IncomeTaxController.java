package com.test.assignment.controller;

import com.test.assignment.service.NonWebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class IncomeTaxController {

    @Autowired
    NonWebService service;

    @GetMapping(value = "/employee/tax/details")
    public String getEmployeeTaxOnAnnualSal(@RequestParam(name = "annualsalary", required = true) String annualsalary) throws Exception {
       String tax =  service.calculateIncomeTax(annualsalary);
        return tax;
    }

}
