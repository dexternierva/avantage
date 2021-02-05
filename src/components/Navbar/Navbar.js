import React, { useState } from "react";
import { TertiaryButton } from "../Buttons";
import { 
    Nav, 
    Logo, 
    LogoImage,
    MobileIcon,
    NavMenu,
    NavLink,
    NavToolbar,
    NavSocial,
    NavButton
} from "./Navbar.elements";

/* LAYOUT COMPONENTS */
import Grid from "../Layout/Grid";

import { MdMenu, MdClose } from "react-icons/md";
import { FaFacebookF, FaSkype, FaLinkedinIn } from "react-icons/fa";

function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <Grid>
            <Nav>
                <Logo sd={2} ed={3} sm={2} em={2} ss={2} es={3}>
                    <NavLink to="/"><LogoImage /></NavLink>
                </Logo>
                <MobileIcon onClick={handleClick}>
                    { click ? <MdClose /> : <MdMenu /> }
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click} sd={8} ed={6}>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/partners">Partners</NavLink>
                    <NavLink to="/businesssolutions">Solutions</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/login">
                        <NavButton>
                            <TertiaryButton modifiers={["small"]} to="/signin">Login</TertiaryButton>
                        </NavButton>
                    </NavLink>
                </NavMenu>
            </Nav>
        </Grid>
    )
}

export default Navbar;