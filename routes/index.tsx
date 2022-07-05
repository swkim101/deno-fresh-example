/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
interface User {
  login: string;
  name: string;
  avatar_url: string;
  results: string;
  query: string;
}


export const handler: Handlers<User | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const resp = await fetch(`https://api.github.com/users/${query}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Home({ data }: PageProps<User | null>) {
  const query = data?.query;
  return (
    <div>
      <form>
        <label htmlFor="username">Github username: </label>
        <input id="username" type="text" name="q" value={query} placeholder="e.g., swkim101" />
        <button type="submit">Search</button>
      </form>
      { data && 
      <div>
        <h3>Hello, {data.name}</h3>
        <img src={data.avatar_url} width={64} height={64} />
        <div>
          <a target="_blank" href={`https://github.com/${data.login}?tab=repositories`}>Click to @{data.login}'s repos (new tab)</a>
        </div>
      </div>
      }
      <div>
        <a href="https://github.com/swkim101/deno-fresh-example">Click to see the source code</a>
      </div>
    </div>
  );
}
