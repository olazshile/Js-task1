// program to display my name and courses offered

var name = "Quadri Olashile";

var index;

var courses_offd = ["HTML", "CSS", "JAVASCRIPT", "UX/UI"];
                        
document.write("<b>NAME: </b>" + name + "<br>");

document.write("<br><b> COURSES OFFERED: </b>" + courses_offd[0] + "\, " 
                                               + courses_offd[1] + "\, " 
                                               + courses_offd[2] + "\, " 
                                               + courses_offd[3] + "<br>");


//program to find and display all even numbers from 1-200 (inclusive)

document.write("<br><b> Even numbers from 1-200 </b> <br>");
    for(index = 1; index <= 200; ){
        if(index % 2 == 0){
            document.write(index + " ");
            }  
        index++;   
    }
