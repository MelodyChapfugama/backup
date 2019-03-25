

/*function student(firstName, lastName, gender, relationshipStatus){

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

student2.greeting();*/


function house(yearBuilt, numberOfRooms, address, color){

this.year=yearBuilt;
this.rooms=numberOfRooms;
this.address=address;
this.color=color;

this.line=function(){
  document.write("this house is at " + this.address + ". It is " + this.color + " it has " + this.rooms + "it was built in " + "year" +"<br>");
};

}
var house1= glenlorne("melody", "chapfugama", "female", "single" );
var house2= mabelreign("nyasha", "chapfugama", "male", "single");

house1.line();

house2.line();
