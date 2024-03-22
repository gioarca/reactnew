import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import Loader from "../components/Loader";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSearched(`${params.search}`);
  }, [params.search]);

  const getSearched = async (name) => {
    setTimeout(async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.Spoon_Key}&query=${name}&maxFat=25&number=9`
      );
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
      setIsLoading(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
      {searchedRecipes.map((item) => {
        return (
          <div
            className="max-w-xl rounded-large overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
            key={item.id}
          >
            <Link to={"/recipe/" + item.id}>
              <img
                className="w-auto overflow-hidden m-auto"
                src={item.image}
                alt={item.title}
              />
              <h4 className="flex flex-col text-xl text-center m-4">
                {item.title}
              </h4>
            </Link>
          </div>
        );
      })}
      <div className="flex flex-wrap">
        <Arrow />
      </div>
    </div>
  );
}

export default Searched;
