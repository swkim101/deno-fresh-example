/** @jsx h */
import { h } from "preact";
import { handler } from "../routes/api/joke.ts";

export default function Joke() {
  const resp = {
    text: () => '??'
  }
  // const resp = handler(undefined, undefined)
  return (
    <div>
      { resp.text() }    
    </div>
  );
}
