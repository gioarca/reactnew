import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []); // usiamo un  array vuoto in modo da passarci dentro i paramentri quando il componente è montato

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: true,
          marginTop: "100px",
          padding: "5rem",
          drag: "free",
          gap: "12rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div
                class="border-2 border-beige my-10
           rounded-large smartphone:w-3 tablet:w-5"
              >
                <Link to={"/recipe/" + recipe.id}>
                  <p class="text-center py-2">{recipe.title}</p>
                  <div class="border-2 border-solid black">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
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
