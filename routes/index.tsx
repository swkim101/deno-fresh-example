/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  joke: string;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const host = Deno.env.get("DASH_DENO_COM") == "TRUE" ? "https://sungwoo-kim.deno.dev" : "http://localhost:8000"
    const res = await fetch(`${host}/api/joke`)
    const joke = await res.text()
    return ctx.render({ joke });
  },
};


export default function Home({ data }: PageProps<Data>) {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <div>{ data.joke }</div>
      <Counter start={3} />
    </div>
  );
}
