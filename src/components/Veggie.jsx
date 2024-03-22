import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

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
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.Spoon_Key}&number=10&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div className="flex-col justify-center items-center text-center">
      <h1 className="text-2xl m-12">The recommended recipes</h1>
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
              <div className="flex-wrap justify-center w-fit rounded-large overflow-hidden shadow-xl m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                <Link to={"/recipe/" + recipe.id}>
                  <img
                    className="w-fit overflow-hidden m-auto"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <h4 className="text-xl m-4">{recipe.title}</h4>
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
