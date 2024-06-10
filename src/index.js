function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "91o0f2f84c841e4a7c38t44e6d3be32a";
  let context =
    "You are an expert chef of global cuisine. Create a recipe that revolves around the ingredient entered by the user.";
  let prompt = `Ingredient: Generate a recipe containing ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe...");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-gen-form");
recipeFormElement.addEventListener("submit", generateRecipe);
