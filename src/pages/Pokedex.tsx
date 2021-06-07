import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Props {
  params?: any;
  isLoadingProps?: any;
  isRevalidatingProps?: any;
}

const Pokedex = ({ params = {}, isLoadingProps, isRevalidatingProps }: Props) => {
  if (!import.meta.env.SSR) {
    console.log({ isLoadingProps, isRevalidatingProps });
  }

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>
          {params.name} #{params.id}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={params.sprites.other["official-artwork"].front_default} alt={params.id} />
      <h1>
        {params.name} #{params.id}
      </h1>
      <Link to={`/pokemon/${+params.id - 1}`}>prev</Link>
      {"    "}
      <Link to={`/pokemon/${+params.id + 1}`}>next</Link>
    </div>
  );
};

export default Pokedex;
