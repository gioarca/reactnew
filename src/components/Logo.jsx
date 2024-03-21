import logo from "../media/Avegado-logo-definitive.jpg";

function Logo() {
  return (
    <div className="flex justify-center items-center m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/"}>
        <img src={logo} alt="logo" width="300px" height="300px" />
      </a>
    </div>
  );
}

export default Logo;
