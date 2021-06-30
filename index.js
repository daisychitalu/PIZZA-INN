var price,crustP,deliveryP,topprice,charge,total;
function Customer(flavour,size,crust,topping,quantity) {
 this.Flavour=flavour;
 this.Size=size;
 this.Crust=crust;
 this.Topping=topping;
 this.Quantity=quantity;   
}
function Deliver(tel,location) {
  this.Tel=tel; 
  this.Location=location; 
}
/*Customer.prototype.data()=function(){
    return this.Flavour + " " + this.Size + " " + this.Crust + " " + this.Topping + " " + this.Quantity;
}
Deliver.prototype.details()=function(){
    return this.Tel + " " + this.Location;
}*/
$(document).ready(function(){
    $("button#submit").click(function(event){
        event.preventDefault();
        var fnFlavour=$("#flavour option:selected").val();
        var fnSize=$("#size option:selected").val();
        var fnCrust=$("#crust option:selected").val();
        var fnTopping=$("#toppings option:selected").val();
        var fnQuantity=$("input#quantity").val();
        
        switch (fnSize) {
            case "small":
                price=500;
                topprice=300;
                break;
        case "medium":
            price=800;
            topprice=100;
            break;
            case "large":
                price=1000;
                topprice=200;
            default:
                alert("wrong choice");
        }
        switch (fnCrust) {
            case "crispy":
                crustP=200;
                break;
            case "stuffed":
                crustp=300;
                break;
            case "glutten-free":
                crustP=400;
            default:
                alert("wrong choice");
        }
        charge=price+topprice+crustP; 
        var newOrder = new Customer(fnFlavour,fnSize,fnCrust,fnTopping,fnQuantity);
        if (fnQuantity===0) {
          total=(fnQuantity+1)*charge; 
        }else if(fnQuantity<0){
            alert("wrong entry");
        }else{
            total=fnQuantity*charge;
        }
        $("span#f").append(newOrder.Flavour);
        $("span#s").append(newOrder.Size);
        $("span#c").append(newOrder.Crust);
        $("span#t").append(newOrder.Topping);
        $("span#q").append(newOrder.Quantity);
        $("span#a").append(total);
    });
});
