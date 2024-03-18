import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../components/Arrow";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched(`${params.search}`);
  }, [params.search]);

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_Outlook}&query=${name}&maxFat=25&number=10`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes.number);
  };

  return (
    <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
      <div className="flex flex-wrap">
        <Arrow />
      </div>

      {searchedRecipes.map((item) => {
        return (
          <div
            className="max-w-xl rounded-large overflow-hidden shadow-lg m-5"
            key={item.id}
          >
            <Link to={"/recipe/" + item.id}>
              <img
                className="w-auto overflow-hidden m-auto"
                src={item.image}
                alt={item.title}
              />
              <h4 class="flex flex-col text-xl text-center m-4">
                {item.title}
              </h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
