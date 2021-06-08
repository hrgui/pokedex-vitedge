import { handleEvent } from "vitedge/worker";

addEventListener("fetch", (event) => {
  console.log(event.request.url);
  try {
    event.respondWith(
      handleEvent(event, {
        http2ServerPush: {
          destinations: ["style"],
        },
        willRequestApi({ url, query }) {
          console.log("API:", url.pathname, query);
        },
      })
    );
  } catch (error) {
    event.respondWith(
      new Response(error.message || error.toString(), {
        status: 500,
      })
    );
  }
});
