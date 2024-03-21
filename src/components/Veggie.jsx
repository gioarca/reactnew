import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []); // uso un  array vuoto in modo da passarci dentro i paramentri quando il componente è montato

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_API_KEY_2}&number=10&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      <Loader />;
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl m-5">The recommended recipes</h1>
      <Splide
        options={{
          keyboard: true,
          perPage: "1",
          arrows: true,
          pagination: false,
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="mt-7 w-auto rounded-large overflow-hidden shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 smartphone:max-w-xl">
                <Link to={"/recipe/" + recipe.id}>
                  <img
                    className="rounded-large overflow-hidden shadow-xl w-auto m-auto"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <h4 className="flex flex-col text-xl m-4">{recipe.title}</h4>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Veggie;
