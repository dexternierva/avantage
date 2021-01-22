import React, { Fragment } from "react";
import Grid from "../Layout/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import {
    ServicesContainer,
    Content,
    ProgressBar,
    Steps,
    Step,
    StepTitle,
    StepText,
    StepBullet,
    StepNumber
} from "./Services.elements";

const steps = [
    {
        title: "Job Order & Customization",
        desc: "Danish pastry tootsie roll jelly jelly beans chupa chups tootsie roll chupa chups candy canes. Marshmallow tootsie roll candy tart candy canes. Pastry chocolate cake jelly-o jelly-o."
    },
    {
        title: "Verification & Accreditation",
        desc: "Powder caramels oat cake cookie cheesecake fruitcake croissant. Jujubes sweet chocolate bar dessert toffee chocolate bar gingerbread jelly-o wafer. Muffin jelly gummies."
    },
    {
        title: "Sourcing & Recruitment",
        desc: "Marshmallow fruitcake topping jujubes macaroon wafer lollipop fruitcake. Biscuit gingerbread topping bonbon danish cake biscuit pastry. Cake caramels candy canes tiramisu chocolate cake wafer dessert bonbon biscuit."
    },
    {
        title: "Final Interview & Job Program Admission",
        desc: "Gummi bears marshmallow jelly halvah apple pie sugar plum. Sweet candy gingerbread candy canes candy canes bear claw. Pudding powder candy canes pastry cupcake. Bonbon jelly-o lemon drops chocolate bar."
    },
    {
        title: "Visa & Document Processing",
        desc: "Croissant ice cream croissant candy. Jelly-o jujubes candy lollipop jujubes tootsie roll. Soufflé danish danish chocolate cake brownie candy canes. Lollipop liquorice carrot cake."
    },
    {
        title: "Deployment",
        desc: "Sugar plum soufflé sweet tiramisu. Lollipop marzipan sesame snaps macaroon carrot cake sesame snaps chupa chups. Pudding ice cream candy caramels apple pie."
    }
];

function Services () {
    let counter = 0;

    return (
        <Fragment>
            <SectionHeader>
                <SectionHeader.PreTitle>How We Work</SectionHeader.PreTitle>
                <SectionHeader.Title>Application Process <b>Made Simple</b></SectionHeader.Title>
            </SectionHeader>

            <Grid>
                <ServicesContainer>
                    <Content sd={2} se={12}>
                        <h3>Job Order &amp; Customization</h3>
                        <p>Danish pastry tootsie roll jelly jelly beans chupa chups tootsie roll chupa chups candy canes. Marshmallow tootsie roll candy tart candy canes. Pastry chocolate cake jelly-o jelly-o. Tiramisu dragée macaroon dessert chocolate cake caramels soufflé candy canes jelly beans. Gummies biscuit candy canes. Jujubes chupa chups lemon drops pudding jelly beans jelly-o.</p>

                        <p>Candy powder tiramisu marshmallow cheesecake cake chocolate bar. Bonbon bear claw chocolate bar powder. Pie tart gummies danish wafer ice cream. Fruitcake cookie lemon drops croissant cookie donut pie cupcake. Powder gingerbread toffee cupcake lollipop marshmallow muffin cupcake biscuit. Gummies caramels biscuit pie candy canes soufflé. Jelly muffin muffin topping gingerbread macaroon jelly beans danish lemon drops. Apple pie bonbon jelly-o apple pie caramels.</p>
                    </Content>
                    <ProgressBar sd={2} ed={12} ss={1} es={8}>
                        {/* <Steps>
                            <Step>
                                <StepBullet />
                                <StepText>Job Order &amp; Customization</StepText>
                            </Step>
                            <Step>
                                <StepBullet />
                                <StepText>Verification &amp; Accreditation</StepText>
                            </Step>
                            <Step>
                                <StepBullet />
                                <StepText>Sourcing &amp; Recruitment</StepText>
                            </Step>
                            <Step>
                                <StepBullet />
                                <StepText>Final Interview &amp; Job Program Admission</StepText>
                            </Step>
                            <Step>
                                <StepBullet />
                                <StepText>Visa &amp; Document Processing</StepText>
                            </Step>
                            <Step>
                                <StepBullet />
                                <StepText>Deployment</StepText>
                            </Step>
                        </Steps> */}
                        <Steps>
                            {   
                                steps.map(function (step) { 
                                    return (
                                        <Fragment>
                                            <Step>
                                                <StepNumber>Step {counter += 1}</StepNumber>
                                                <StepTitle>{step.title}</StepTitle>
                                                {/* <StepText>{step.desc}</StepText> */}
                                            </Step>
                                        </Fragment>
                                    )
                                 })
                            }
                        </Steps>
                    </ProgressBar>
                </ServicesContainer>
            </Grid>
        </Fragment>
    )
}

export default Services;