import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function Arrow() {
  return (
    <div class="flex justify-center items-center text-2xl m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
      <a href={"/"}>
        <ArrowLeftCircleIcon />
        <p class="flex justify-center items-center text-center">Back</p>
      </a>
    </div>
  );
}

export default Arrow;
