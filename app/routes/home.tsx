import Navbar from "components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Archify" },
    { name: "description", content: "AI-powered architectural visualisation" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <Navbar />
    </div>
  );
}
