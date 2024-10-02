package com.examly.springapp;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.lang.reflect.Field;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @Order(1)
    public void backend_testGetSpecsAll() throws Exception {
        mockMvc.perform(get("/api/specs")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$").isArray())
                .andReturn();
    }

    @Test
    @Order(2)
    public void backend_testGetOrdersAll() throws Exception {
        mockMvc.perform(get("/api/order")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$").isArray())
                .andReturn();
    }

    @Test
    public void backend_testCartHasOneToOneAnnotation() {
        try {
            Class<?> cartClass = Class.forName("com.examly.springapp.model.Cart");
            Field[] declaredFields = cartClass.getDeclaredFields();
            boolean hasOneToOne = false;
            for (Field field : declaredFields) {
                if (field.isAnnotationPresent(OneToOne.class)) {
                    hasOneToOne = true;
                    break;
                }
            }
            if (!hasOneToOne) {
                fail("No field with @OneToOne annotation found in Cart class.");
            }
        } catch (ClassNotFoundException e) {
            fail("Class not found: " + e.getMessage());
        }
    }

    @Test
    public void backend_testOrderHasManyToManyAnnotation() {
        try {
            Class<?> ordersClass = Class.forName("com.examly.springapp.model.Orders");
            Field[] declaredFields = ordersClass.getDeclaredFields();
            boolean hasManyToMany = false;
            for (Field field : declaredFields) {
                if (field.isAnnotationPresent(ManyToMany.class)) {
                    hasManyToMany = true;
                    break;
                }
            }
            if (!hasManyToMany) {
                fail("No field with @ManyToMany annotation found in Orders class.");
            }
        } catch (ClassNotFoundException e) {
            fail("Class not found: " + e.getMessage());
        }
    }

    @Test
    public void backend_testCartInterfaceAndImplementation() {
        try {
            Class<?> interfaceClass = Class.forName("com.examly.springapp.service.CartService");
            Class<?> implementationClass = Class.forName("com.examly.springapp.service.CartServiceImpl");

            assertTrue(interfaceClass.isInterface(), "The specified class is not an interface");
            assertTrue(interfaceClass.isAssignableFrom(implementationClass), "Implementation does not implement the interface");
        } catch (ClassNotFoundException e) {
            fail("Interface or implementation not found");
        }
    }

    @Test
    public void backend_testSpecsInterfaceAndImplementation() {
        try {
            Class<?> interfaceClass = Class.forName("com.examly.springapp.service.SpecsService");
            Class<?> implementationClass = Class.forName("com.examly.springapp.service.SpecsServiceImpl");

            assertTrue(interfaceClass.isInterface(), "The specified class is not an interface");
            assertTrue(interfaceClass.isAssignableFrom(implementationClass), "Implementation does not implement the interface");
        } catch (ClassNotFoundException e) {
            fail("Interface or implementation not found");
        }
    }

    private void checkClassExists(String className) {
        try {
            Class.forName(className);
        } catch (ClassNotFoundException e) {
            fail("Class " + className + " does not exist.");
        }
    }

    @Test
    public void backend_testCustomerControllerClassExists() {
        checkClassExists("com.examly.springapp.controller.CustomerController");
    }

    @Test
    public void backend_testReviewControllerClassExists() {
        checkClassExists("com.examly.springapp.controller.ReviewController");
    }

    @Test
    public void backend_testCartModelClassExists() {
        checkClassExists("com.examly.springapp.model.Cart");
    }

    @Test
    public void backend_testSpecsModelClassExists() {
        checkClassExists("com.examly.springapp.model.Specs");
    }

    @Test
    public void backend_testUserModelClassExists() {
        checkClassExists("com.examly.springapp.model.User");
    }

    @Test
    public void backend_testOrdersModelClassExists() {
        checkClassExists("com.examly.springapp.model.Orders");
    }
}
