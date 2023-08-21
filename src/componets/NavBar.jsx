import React from 'react';
import {
    useState
    // Link,
    // NavLink,
    // // Tailwind CSS classes
    // Container,
    // Flex,
    // Nav,
    // Ul,
    // Li,
    // A,
    // Fa,
} from 'tailwindcss-react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container>
            <Flex justifyContent="space-between">
                <NavLink to="/">
                    <Fa name="g" />
                    <Fa name="t" />
                    Georgina Mampuru
                </NavLink>
                <button
                    id="menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="fas fa-bars"
                ></button>
            </Flex>
            <Nav
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                className="bg-gray-200"
            >
                <Ul>
                    <Li>
                        <NavLink to="/home">Home</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/about">About</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/skills">Skills</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/education">Education</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/projects" active>Projects</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/experience">Experience</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact">Contact</NavLink>
                    </Li>
                </Ul>
            </Nav>
        </Container>
    );
};

export default NavBar;
