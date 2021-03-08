var choice= document.getElementById("choice").value;
var crust= document.getElementById("crust").value;
var quantity= document.getElementById("quantity").value;
var location= document.getElementById("location").value;



$ (document).ready(function(){
    $('.multi-select').selectpicker();
})














//prototype
function location() {
    this.firstName = first;
    this.lastName = last;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }