import react from "react";
import h1 from "../components/h1";
import Tagline from "../components/tagline";
import Navigation from "../components/navigation";
import devs from "../data/devs.json";

export default function Home() {
  return (
    <main class="container">
      <div>
        <ul>
          <li><a>{devs.name}</a></li>

        </ul>
      </div>
    </main>



  )
}


export async function getStaticPaths() {
  return {
    paths: [{ devs: { User_ID: '7ff14' } }, { devs: { User_ID: '272dff7' } }, { devs: { User_ID: '34dff13' } }],
    fallback: false
  }
}