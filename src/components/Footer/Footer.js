import React, { Fragment } from "react";
import { Grid } from "../Layout";
import Newsletter from "../Newsletter/Newsletter";
import { 
    Container,
    ContainerRow, 
    ListItems, 
    ListItem,
    NavLink,
    SocialList,
    SocialItem,
    Copyright,
    CopyrightItem
} from "./Footer.elements";
import { FaSkype, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

function Footer () {
    return(
        <Fragment>
            <Newsletter />
            
            <Grid>
                <Container>
                    <ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={6}>
                        <ListItems>
                            <ListItem><NavLink to="/"><img src="images/logo-icon.svg" alt="A-vantage" /></NavLink></ListItem>
                            <ListItem><NavLink to="/about">About</NavLink></ListItem>
                            <ListItem><NavLink to="/partners">Partners</NavLink></ListItem>
                            <ListItem><NavLink to="/jobs">Jobs</NavLink></ListItem>
                            <ListItem><NavLink to="/news">News</NavLink></ListItem>
                            <ListItem><NavLink to="/contact">Contact</NavLink></ListItem>
                        </ListItems>
                    </ContainerRow>
                    <ContainerRow ss={2} es={6} sm={2} em={6} sd={12} ed={2}>
                        <SocialList>
                            <SocialItem><FaSkype /></SocialItem>
                            <SocialItem><FaLinkedin /></SocialItem>
                            <SocialItem><FaFacebookSquare /></SocialItem>
                        </SocialList>
                    </ContainerRow>
                    <ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                        <Copyright>
                            <CopyrightItem>	&#169; 2019 A-Vantage International Recruitment Corp. All rights reserved.</CopyrightItem>
                            <CopyrightItem><NavLink to="/policy">Terms &amp; Conditions</NavLink> | <NavLink to="/policy">Privacy Policy</NavLink></CopyrightItem>
                        </Copyright>
                    </ContainerRow>
                </Container>
            </Grid>
        </Fragment>
    )
}

export default Footer;