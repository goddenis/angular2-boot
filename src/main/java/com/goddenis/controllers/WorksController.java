package com.goddenis.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorksController {
    @RequestMapping("/works")
    public String works(){
        return "It Works !";
    }
}
