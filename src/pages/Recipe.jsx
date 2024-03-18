import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../components/Arrow";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.name]);

  return (
    <div class="flex flex-1 justify-center items-center">
      <Arrow />
      <div class="m-16 border-2 border-beige rounded-large smartphone:w-screen">
        <div class="p-10">
          <h1 class="text-3xl text-center">{details.title}</h1>
        </div>
        <div class="flex justify-center items-center">
          <img
            class="border border-black max-w-fit h-auto"
            src={details.image}
            alt={details.recipe}
          />
          z
        </div>
        <div class="m-10">
          <h2 class="text-2xl">Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        <div class="m-10">
          <h2 class="text-2xl">Instructions</h2>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </div>
        <div class="m-10">
          <h2 class="text-2xl">Ingredients</h2>
          <ul class="list-disc list-inside">
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
