function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Add sugar and stir...",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-gen-form");
recipeFormElement.addEventListener("submit", generateRecipe);
