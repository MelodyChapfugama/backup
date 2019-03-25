



function person(name, surname, age, gender, interests){

  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.interests= interests;


  this.toString=function(){
    document.write("Hi , My name is " + this.name + " of house " + this.surname + ". I am " + this.age + " and i am " + this.gender + ". I like " + this.interests + "<br>");
  };
}


var person1= new person("melody", "chapfugama", "25", "single" ,["volunteer work", "blog writing"]);
var person2= new person ("nyasha", "chapfugama", "26", "single", [" fishing ", " sports "]);
var person1= new person("melody", "chapfugama", "25", "single" ,[ "club memberships", "traveling "]);
var person2= new person ("nyasha", "chapfugama", "26", "single",[ "club memberships", "traveling "]);


person1.toString();
person2.toString();
person1.toString();
person2.toString();
