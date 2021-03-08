var choice= document.getElementById("choice").value;
var crust= document.getElementById("crust").value;
var quantity= document.getElementById("quantity").value;
var location= document.getElementById("location").value;




$ (document).ready(function(){
    $('.multi-select').selectpicker();
})














//prototype
function Order(choice, crust, quantity,location) {
    this.size = choice;
    this.acrust = crust;
    this.nofpizza = quantity;
    this.where = location;
  }
  
  AnotherOrder.prototype.fullOrder = function() {
    alert ("Your oder for a "+ this.size + "to " + this.location + "has been received");
  }