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
    <div>
      <Arrow />
      <div class="flex flex-col w-4/5 justify-center items-center border-2 border-beige m-10 rounded-large">
        <div class="text-center p-10">
          <h1 class="text-3xl text-center">{details.title}</h1>
        </div>
        <div class="justify-center items-center">
          <img class="border border-black" src={details.image} alt="" />
        </div>
        <div class="m-12">
          <h2 class="text-2xl">Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        <div class="m-10">
          <h2 class="text-2xl">Instructions</h2>
          <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        </div>
        <div class="text-justify m-12">
          <h2 class="text-2xl">Ingredients</h2>
          <ul class="list-disc">
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
