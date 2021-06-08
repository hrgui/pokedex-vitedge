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
        <meta charSet="utf-8" />
        <title>{`${params.name} #${params.id}`}</title>
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={params.name} />
        <meta
          property="og:image"
          content={params.sprites.other["official-artwork"]["front_default"]}
        />
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
