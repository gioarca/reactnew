import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function Arrow() {
  return (
    <div className="flex justify-center items-center text-2xl m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/"}>
        <ArrowLeftCircleIcon />
        <p className="flex justify-center items-center text-center">Back</p>
      </a>
    </div>
  );
}

export default Arrow;
