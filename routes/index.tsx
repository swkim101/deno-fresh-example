/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import Joke from "../islands/Joke.tsx";
import { handler } from "./api/joke.ts";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <Joke />
      <p>
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
