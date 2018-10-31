package com.thishealthyliving.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MainController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String homepage() {
        return "home";
    }

    @RequestMapping(value = "/detail/{blogName}/{blogID}")
    public String goToBlogDetail(HttpServletRequest request, @PathVariable int blogID) {
        return "detail";
    }

}
