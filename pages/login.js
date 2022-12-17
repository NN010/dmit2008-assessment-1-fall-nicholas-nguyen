import react from "react";
import next from "next";
import h1 from "../components/h1";
import Tagline from "../components/tagline";
import Navigation from "../components/navigation";
import devs from "../data/devs.json";

export default function Login() {
    return (
        <main class="container">
            <h2>Login</h2>
            <form>
                <div>
                    <label for="email">Email Address</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label for="passwd">Password</label>
                    <input type="password" id="passwd" name="passwd" />
                </div>
            </form>

        </main>
    )
}