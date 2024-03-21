import { Helmet, HelmetProvider } from "react-helmet-async";

function Head() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avegado</title>
        <meta name="Avegado" content="Vegeterian Single page app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#097D4C" />
        <meta charset="utf-8" />
        <link rel="icon" href="favicon.ico" />
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
