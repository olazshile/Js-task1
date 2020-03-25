// program to display my name and courses offered

var name = "Quadri Olashile";

var index;

var courses_offd = ["HTML", "CSS", "JAVASCRIPT", "UX/UI"];
                        
console.log("NAME: " + name);

console.log("COURSES OFFERED: " + courses_offd[0] + "\, " + courses_offd[1] + "\, " 
                                + courses_offd[2] + "\, " + courses_offd[3]);


//program to find and display all even numbers from 1-200 (inclusive)

console.log("Even numbers from 1-200 ");
    for(index = 2; index <= 200; ){
     console.log(index);
     index += 2;   
    }