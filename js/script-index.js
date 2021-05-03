$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	
	$(".js-back").hide();

	printNews()
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);
	

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

	for (let i=0; i<recipesArray.length; i++){
		if (recipesArray[i].highlighted==true){
			console.log(recipesArray[i]);
			renderRecipe(recipesArray[i]);
		}
	}
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
let directions=[];
let ingredients=[];
function renderRecipe(recipe) {

	$("#list").html(`<div>
						<a class="item-recipe" href="recipe.html">
							<span class="attribution">
								<span class="title-recipe"> </span>
								<span class="metadata-recipe">
									<span class="author-recipe"> </span>
									<span class="bookmarks-recipe">
										<span class="icon-bookmark"></span> 
									</span>
								</span>
							</span>							
							<img src="URL DE LA IMAGEN" class="recipeImg"/>
						</a>
					</div>`);
  
	$(".title-recipe").text(recipe.title);
	$(".author-recipe, .source").text(recipe.source.name);
	$(".recipeImg").attr("src", recipe.source.url);
	$(".description-recipe").text(recipe.excerpt);
	$(".time").text(recipe.cooktime);
	$(".list-ingredients").text(recipe.ingredients);//funct below
	$(".list-directions").text(recipe.directions);//funct below
	$("#otrolink").attr("href", recipe.source.url).text(recipe.source.name);

	directions=recipe.directions;
	ingredients=recipe.ingredients;

/* 	addDirections(directions);
	addIngredientes(ingredients); */

	
	console.log('Voy a pintar la receta: ', recipe);
}

/* function addDirections(directions){ //2 elementos
	//console.log("lo que llega "+ directions.length);
	for (let i=0; i<directions.length; i++){
		$(".list-directions").html("<li class='item-direction'></li>")
		$(".item-direction").text(directions[i]);
	}
}
function addIngredientes(ingredients){//18 elementos
	//console.log("lo que llega2 "+ ingredients.length);
	for (let i=0; i<ingredients.length; i++){
		$(".list-ingredients").html("<li class='ingred'></li>")
		$(".ingred").text(ingredients[i]);
	}

} */



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	if (activitiesArray.length>0){
		$(".wrapper-message").hide();
	}

	for (let i=0; i<activitiesArray.length; i++){
		renderActivity(activitiesArray[i]);
	}

	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

	$("#actList").html(`<div>
							<a href="#" class="item-activity">
							<span class="attribution">								
								<span class="avatar">
									<img src="" class="image-avatar">
								</span>										
								<span class="meta">
									<span class="author"></span> made 
									<span id="actRecipe" class="recipe"></span>
									<span class="location"></span>
								</span>								
							</span>
							<div class="bg-image activity" style="background-image: url('IMAGEN DE RECETA (ATTRIBUTO "image")');"></div>
							</a>
						</div>`);

	$(".image-avatar").attr("src", recipe.userAvatar);
	$(".author").text(recipe.userName);
	$("#actRecipe").text(recipe.recipeName+": "+recipe.text+". ");
	$(".location").text(recipe.place);
	$(".activity").css("background-image", "url('"+recipe.image+"')");


}

function printNews(){
	$(".callout-news p").text("NUEVAS RECETAS");
}


