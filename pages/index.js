import h1 from "../components/h1";
import Tagline from "../components/tagline";
import devs from "../data/devs.js";

function h1();
function Tagline();

export default function Home() {
  return (
    <main>
      <div>
        {devs};
      </div>
    </main>



  )
}
