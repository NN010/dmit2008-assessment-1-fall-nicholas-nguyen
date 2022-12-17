import react from "react";
import h1 from "../components/h1";
import Tagline from "../components/tagline";
import Navigation from "../components/navigation";
import devs from "../data/devs.json";
import getStaticPaths from "index";

export default function Profile() {
    return (
        <div>
            <p>{devs.name}</p>
            <p>{devs.email}</p>
            <p>{devs.Available_For_Work}</p>
            <p>{devs.Phone}</p>
            <p>{devs.Experience}</p>
        </div>
    )
}

