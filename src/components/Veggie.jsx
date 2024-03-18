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
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_Outlook}&number=10&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <h1 class="text-center text-2xl m-12">The recommended recipes</h1>
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
              <div className="m-auto w-96 rounded overflow-hidden shadow-xl transition duration-300 hover:scale-105 smartphone:max-w-xl ">
                <Link to={"/recipe/" + recipe.id}>
                  <img
                    className="w-full mb-2"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <p class="text-center m-2">{recipe.title}</p>
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
