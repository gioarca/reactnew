import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    // <form
    //   class="flex-row p-3 border-4 border-beige rounded-lg bg-green m-3"
    //   onSubmit={submitHandler}
    // >
    //   <div>
    //     <input
    //       class=" flex-row bg-green text-center border-none rounded-md"
    //       onChange={(e) => setInput(e.target.value)}
    //       type="text"
    //       value={input}
    //       placeholder="Text an ingredient here :)"
    //     />
    //     <MagnifyingGlassIcon class="w-6 h-6  float-right" />
    //   </div>
    // </form>

    <form onSubmit={submitHandler}>
      <div class="sm:col-span-4 m-5 flex items-center justify-center float-center">
        <div class="mt-2 max-w-5xl">
          <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-beige sm:max-w-md">
            <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              ingredient choosen:
            </span>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              class="block flex-1 border-0 bg-transparent py-4 pl-1 placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Text something :)"
            ></input>
            <MagnifyingGlassIcon class="h-8 m-3 flex items-center justify-center float-right" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
