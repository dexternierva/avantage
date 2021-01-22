import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import {Grid} from "../Layout";
import { 
    Container,
    Lefttopbar,
    Righttopbar,
    Infotopbar,
    Infotopbaritem,
} from "./Topbar.elements";

function Topbar () {
    return (
        <Grid>
            <Container>
                <Lefttopbar ss={2} es={6} sm={2} em={6} sd={2} ed={5}>POEA License Number: <b>026-LB-112719-PL</b></Lefttopbar>
                <Righttopbar sd={9} ed={5}>
                    <Infotopbar>
                        <Infotopbaritem><MdEmail /> &nbsp; info@a-vantageinternational.com</Infotopbaritem>
                        <Infotopbaritem><MdPhone /> &nbsp; +63966 205 2191</Infotopbaritem>
                    </Infotopbar>
                </Righttopbar>
            </Container>
        </Grid>
    )
}

export default Topbar;