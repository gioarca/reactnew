import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function Arrow() {
  return (
    <div class="flex justify-center items-center text-2xl p-10 w-20 m-auto">
      <a href={"/"}>
        <ArrowLeftCircleIcon />
        <p class="flex justify-center items-center text-center">Back</p>
      </a>
    </div>
  );
}

export default Arrow;
