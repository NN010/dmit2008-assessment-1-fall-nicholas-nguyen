import react from "react";
import next from "next";
import h1 from "../components/h1";
import Tagline from "../components/tagline";
import Navigation from "../components/navigation"
import devs from "../data/devs.json";

export default function Home() {
  return (
    <main class="container">
      <div>
        {devs()};

      </div>
    </main>



  )
}
