/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package classs;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author rasmus
 */
public class PersonFacade {

    private static List<Person> persons;
    private static PersonFacade instance = new PersonFacade();
    
    private PersonFacade(){
        persons = new ArrayList();
        persons.add(new Person("ole", "lukøje"));
        persons.add(new Person("mickey", "mouse"));
        persons.add(new Person("anders", "and"));
    }

    public static PersonFacade getInstance(){
        return instance;
    }
    
    public static List<Person> getPersons(){
        return persons;
    }
}
