
$(document).ready(function(){
    $("#checkoutButton").click(function(){
        console.log("you clicked this one")
    })
})

$(document).ready(function(){
    var price = 700
    var count = 1;
    $("#price").text("Price: ksh" + ""+price);
    $("#quantity").text("Quantity:" + ""+count);
    $("#add_pizza").click(function(){
        count=count+1
        price = price*count
        $("#quantity").text("Quantity: ksh" + ""+count);
        $("#price").text("Price:" + ""+price);

    })

})
