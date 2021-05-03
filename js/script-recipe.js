$(document).ready( function(){

    console.log("Este documento está listo")

    addDirections(directions);
	addIngredientes(ingredients);
 
    $(".js-menu").hide();
    $(".js-back").show();
 
    $("#btnRecipe").on("click", function(){
      
        $("#mainDiv").removeClass("make");
        $("#btnRecipe").addClass("active");
        $("#btnMake").removeClass("active");
       
    });

    $("#btnMake").on("click", function(){
        $("#mainDiv").addClass("make");
        $("#btnMake").addClass("active");
        $("#btnRecipe").removeClass("active");
      

    }); 

    $(".icon-arrow-left-alt").on("click", function(){
        console.log("hola raton con cola")
        //ver que funcion le hago
       
    })


});

