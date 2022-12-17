import { link } from 'react-router';

export default function Navigation() {
    return (

        <nav>
            <ul>
                <li><link to="../pages/index">Home</link></li>
                <li><link to="../pages/login">Log in</link></li>
            </ul>
        </nav>
    )
}

