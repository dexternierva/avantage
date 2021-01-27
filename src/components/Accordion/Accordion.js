import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Grid, FullWidthSection } from "../Layout";
import {
    AccordionSection,
    Container,
    Wrap,
    Dropdown
} from "./Accordion.elements.js"
import { CSSTransition } from "react-transition-group";

const Accordion = () => {

    const Data = [
        {
            question: 'Job Order & Customization',
            answer: 'Finalize with us your Manpower Request or Job Order for Filipino Workers.'
        },
        {
            question: 'Verification & Accreditation',
            answer: 'Meet our Philippine Embassy/Philippine Labor Office for Verification of required documents and we will take care of the rest!'
        },
        {
            question: 'Sourcing & Recruitment',
            answer: 'Sit back and relax while we are doing the sourcing and recruitment of the best and talented Filipino Workers that you need!'
        },
        {
            question: 'Final Interview & Job Program Admission',
            answer: 'Meet our pool of best and talented Filipino Workers and choose the very best for you!'
        },
        {
            question: 'Visa & Document Processing',
            answer: 'Our fast and efficient processing of your selected Filipino Workers will be in your Country the soonest and very surprising time!'
        },
        {
            question: 'Deployment',
            answer: 'Finally Meet and start a fruitful working environment with your selected Filipino workers!'
        }
    ];

    const [clicked, setClicked] = useState(null);

    const toggle = function (index) {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: '#047CC7', size: '25px' }}>
            <Grid>
                <FullWidthSection>
                    <AccordionSection ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                        <Container>
                        {Data.map((item, index) => {
                            return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h3><span>Step {index + 1}:</span>{item.question}</h3>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {/* {clicked === index ? (
                                    <Dropdown>
                                        <h4>{item.answer}</h4>
                                    </Dropdown>
                                ) : null} */}
                                {/* <Dropdown className={clicked === index ? "dropdown active" : "dropdown inactive"}>
                                    <h4>{item.answer}</h4>
                                </Dropdown> */}
                                
                                <CSSTransition in={clicked} timeout={300} classNames="my-node">
                                    <Dropdown className={clicked === index ? "active" : "inactive"}>
                                        <h4>{item.answer}</h4>
                                    </Dropdown>
                                </CSSTransition>
                                
                            </>
                            );
                        })}
                        </Container>
                    </AccordionSection>
                </FullWidthSection>
            </Grid>
        </IconContext.Provider>
    );
};

export default Accordion;
