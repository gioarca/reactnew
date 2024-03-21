import { Cog8ToothIcon } from "@heroicons/react/24/solid";

function Loader() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl ">
      <Cog8ToothIcon className="items-center transition duration-700 animate-spin m-10 w-10" />
      <p className="flex-col justify-center items-center text-center">
        loading recipe
      </p>
    </div>
  );
}

export default Loader;
