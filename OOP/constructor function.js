//var car={
  //make:"toyota"
  //model:"camry"
  //year:"2019"
//};

//var car={};

//car.make:"toyota"
//car.model:"camry"
//car.year:"2019"

/*function calculateSquare(number){
return number * number;

}
calculateSquare(7);

function createStudent(firstName, lastName, gender, relationshipStatus){
  var student={};

  student.name = name;
  student.surname =surname;
  student.gender= gender;
  student.status=relationshipStatus;



  document.write("hi my name is " + student.name + " and i am " + student.gender + "<br>");
}
createStudent( "melody", "chapfugama", "female", "single");
createStudent( "nyasha", "chapfugama", "female", "single");*/

function student(firstName, lastName, gender, relationshipStatus){

this.name=firstName;
this.surname=lastName;
this.gender=gender;
this.status=relationshipStatus;

this.greeting=function(){
  document.write("hi my name is " + this.name + " and i am " + this.gender + "<br>");
};

}
var student1= new student("melody", "chapfugama", "female", "single" );
var student2= new student("nyasha", "chapfugama", "male", "single");

student1.greeting();

student2.greeting();
