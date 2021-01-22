import React from "react";
import { FullWidthSection, Row } from "../Layout";

import {
    Container,
    Content,
    Header,
    Title,
    Text,
    Accreditation
} from "./Affiliations.elements.js";

function Affiliations () {
    return ( 
        <Container>
            <FullWidthSection>
                <Row ss={2} se={6} sm={2} em={6} sd={2} ed={12}>
                    <Content>
                        <Accreditation>
                            <img src="images/poea.png" alt="Philippine Overseas Employment Administration" />
                        </Accreditation>
                        <Header>
                            <Title>Accreditation</Title>
                            <Text>A-Vantage is accredited by Philippine Overseas Employment Administration.</Text>
                        </Header>
                    </Content>
                </Row>
            </FullWidthSection>
        </Container>      
    )
}

export default Affiliations;