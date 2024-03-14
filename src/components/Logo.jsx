import logo from "../media/Avegado-logo-definitive.jpg";

function Logo() {
  return (
    <div class="flex justify-center">
      <a href={"/"}>
        <img src={logo} alt="logo" width="300px" height="300px" />
      </a>
    </div>
  );
}

export default Logo;
