import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Hello World
    </div>
  );
};

export default Home;
