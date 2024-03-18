import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function Arrow() {
  return (
    <div class="flex justify-center items-center text-2xl m-12 w-auto">
      <a href={"/"}>
        <ArrowLeftCircleIcon />
        <p class="flex justify-center items-center text-center">Back</p>
      </a>
    </div>
  );
}

export default Arrow;
