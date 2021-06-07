import { defineEdgeProps } from "vitedge/define";

export default defineEdgeProps({
  async handler({ params = {}, query = {} }) {
    const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await pokemonRes.json();
    return {
      data: {
        server: true,
        params: { ...params, ...pokemon },
      },
    };
  },
  options: {
    cache: {
      api: 90,
      html: 90,
    },
  },
});
