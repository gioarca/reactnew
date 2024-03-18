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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&maxFat=25&number=10`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes.number);
  };

  return (
    <div
      class="grid grid-flow-row-dense grid-cols-3 grid-rows-3"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Arrow />
      {searchedRecipes.map((item) => {
        return (
          <div
            class="flex flex-1 justify-center items-center border-2 border-beige my-10
          rounded-large m-4 "
            key={item.id}
          >
            <Link to={"/recipe/" + item.id}>
              <h4 class="text-center m-4">{item.title}</h4>
              <img
                class="flex justify-center items-center overflow-hidden"
                src={item.image}
                alt={item.title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
