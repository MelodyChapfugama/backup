



function person(name, surname, age, gender, interests){

  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.interests= interests;


  this.toString=function(){
    document.write("Hi , My name is " + this.name + " of house " + this.surname + ". I am " + this.age + " and i am " + this.gender + ". I like " + this.interests + "<br><br>");


  };
}


var person1= new person("melody", "chapfugama", "25", "single" ,["volunteer work", "blog writing"]);
var person2= new person ("nyasha", "chapfugama", "26", "single", [" fishing ", " sports "]);
var person3= new person("melody", "chapfugama", "25", "single" ,[ "club memberships", "traveling "]);
var person4= new person ("nyasha", "chapfugama", "26", "single",[ "club memberships", "traveling "]);


person1.toString();
person2.toString();
person3.toString();
person4.toString();






function classRoom(name, students){
this.name = name;

this.students = students;

this.toString = function(){

      text = "hello, this is the microworkspace class. </br> the class list is:- <br/><br/><ul>";

      for(i=0; i<this.students.length; i++){
      text+= "<li>";
      text+= this.students[i].name + " " + students[i].surname;
      text+="</li>";

      };
      text+= "</ul>";
      document.write(text);

}


  this.averageAge = function(){
    var totalAge = 0;

    for(i=0; i<this.students.length; i++){
      totalAge += this.students[i].age;
    }
    var average = totalAge/students.length;
      document.write("the average age of the class is " + average);
  }

}


   var class1 = new classRoom("microworkSpace" , [person1, person2, person3, person4]);
     class1.averageAge();
     class1.toString();











     /*creating a toString method for our classrom to display  a list of the students*/



     /* sort the number list .sort()
     even or odd %modulus
     if (arrar.length2==0){

       (...even...)
     }
     else{
       (7+1)/2=
       (...odd...)
     }
     var position = (array.length+1)/2
     var median = position-1
     var medianone=array[median]
     */
     var array = number;
     var number = [4, 3, 5, 4, 6, 9, 7];
