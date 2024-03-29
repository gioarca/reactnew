import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../components/Arrow";

function RecipeNew() {
  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY_Outlook}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.name]);

  return (
    <div className="flex flex-wrap justify-center transition-opacity ease-in delay-150">
      <div className="max-w-xl rounded-large overflow-hidden shadow-lg m-5">
        <img className="w-full" src={details.image} alt={details.recipe} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl m-2">
            <h3>Summary</h3>
          </div>
          <p
            className="text-base"
            dangerouslySetInnerHTML={{ __html: details.summary }}
          ></p>
          <div className="font-bold text-xl m-2">
            <h3>Instructions</h3>
          </div>
          <p
            className="text-base"
            dangerouslySetInnerHTML={{ __html: details.instructions }}
          ></p>
          <div className="font-bold text-xl m-2">
            <h3>Ingredients</h3>
          </div>
          <ul class="list-disc list-inside">
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeNew;
