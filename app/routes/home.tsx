import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Archify" },
    { name: "description", content: "AI-powered architectural visualisation" },
  ];
}

export default function Home() {
  return <h1 className="text-3xl text-indigo-700 font-extrabold">Home</h1>;
}
