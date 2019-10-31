package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}

data class Rowan(var name: String, var age: String);



@RestController
class control {
    @CrossOrigin
    @GetMapping("/")
    fun get(): Rowan {
        return Rowan("rowan", "12")

    }

}