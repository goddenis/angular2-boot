package com.goddenis.services.impl;

import com.goddenis.domain.User;
import com.goddenis.services.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation  implements UserService {
    @Override
    public List<User> getAllUsers() {

        ArrayList<User> users = new ArrayList<>();

        users.add(new User(1L,"boromolov_d","Denis","Bogomolov","123456"));
        users.add(new User(1L,"kate","Kate","","123456"));
        users.add(new User(1L,"monya","Monya","The Dog","123456"));
        users.add(new User(1L,"homer","Homer","Simpson","123456"));
        users.add(new User(1L,"moose","Shika","Moose","123456"));

        return users;

    }
}
