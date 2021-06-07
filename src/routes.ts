import { createElement } from "react";

export default [
  {
    path: "/",
    name: "home",
    exact: true,
    component: () => import("./pages/Home"),
  },
  {
    path: "/pokemon/:id",
    name: "pokedex",
    exact: true,
    component: () => import("./pages/Pokedex"),
    meta: {
      propsGetter: "pokedex",
    },
  },
].map(({ component: fn, ...route }) => {
  let component: any = null;
  return {
    ...route,
    component: (props: any) => {
      if (!component) {
        const loadingComponent = fn().then(({ default: page }) => {
          component = page;
        });
        // Suspense will re-render when component is ready
        throw loadingComponent;
      }

      return createElement(component, props);
    },
  };
});
