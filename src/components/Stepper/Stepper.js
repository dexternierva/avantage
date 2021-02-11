import React, { useState, useEffect, Fragment } from "react";
import Grid from "../Layout/Grid";
import { MdDone } from "react-icons/md";
import PrimaryButton from "../Buttons";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
    Container,
    ContainerRow,
    Steppers,
    StepperItem,
    StepperMobileContent,
    StepperNumber,
    StepperTitle,
    StepperDesc,
    StepperContent,
    StepperMainContent,
    StepperMainContentText,
    StepperContentPreTitle,
    StepperContentTitle,
    StepperContentText,
    StepperContentCta,
    StepperSectionHeader,
    StepperSectionHeaderPreTitle,
    StepperSectionHeaderTitle,
    Line,
    HorizontalProgressLine,
    VerticalProgressLine
} from "./Stepper.elements";

function ContentArea ({ stepNum, title, text, img }) {
    return (
        <StepperContent>
            <StepperMainContent>
                <SwitchTransition>
                <CSSTransition
                    key={stepNum}
                    timeout={{ enter: 500, exit: 100 }}
                    classNames="progress-text-"
                >
                    <StepperMainContentText>
                        <StepperContentPreTitle>Step {stepNum}</StepperContentPreTitle>
                        <StepperContentTitle>{title}</StepperContentTitle>
                        <StepperContentText>{text}</StepperContentText>
                    </StepperMainContentText>
                </CSSTransition>
                </SwitchTransition>
                <StepperContentCta>
                    <PrimaryButton>Start A Conversation</PrimaryButton>
                </StepperContentCta>
            </StepperMainContent>
        </StepperContent>
    )
}

function StepProgress ({ steps, step, index }) {
    return (
        <StepperItem className={step.highlighted ? 'active-item' : step.completed ? 'done' : 'not-done'}>
            <StepperNumber className={step.selected ? 'step-number-active' : 'step-number-disabled'}>{step.completed ? <MdDone /> : index + 1}</StepperNumber>
            <StepperMobileContent>
                <StepperTitle className={step.highlighted ? 'step-description-active' : 'step-description-disabled'}>{step.title}</StepperTitle>
                {step.highlighted && <StepperDesc>{step.desc}</StepperDesc>}
            </StepperMobileContent>
            {
                index !== steps.length - 1 && (
                    <Fragment>
                        <HorizontalProgressLine />
                        <VerticalProgressLine />
                        <Line />
                    </Fragment>
                )
            }
        </StepperItem>
    )
}

function Stepper ({ stepsArr, currentStep }) {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const steps = stepsArr;
        const current = currentStep;
        const stepsState = steps.map((step, index) => {
            const stepObj = {};
            stepObj.title = step.title;
            stepObj.desc = step.desc;
            stepObj.image = step.img;
            stepObj.completed = false;
            stepObj.highlighted = index === 0 ? true : false;
            stepObj.selected = index === 0 ? true : false;

            return stepObj;
        });
    
        const currentSteps = updateStep(current - 1, stepsState);
        
        setSteps(currentSteps);
    }, [stepsArr, currentStep]);

    const updateStep = function(stepNumber, steps) {
        const newSteps = [...steps];
        // completed - to show a checkmark
        // selected - to fill the step with (primary) color
        // highlighted - to make the description bold

        // 1. current step
        // 2. past step
        // 3. future steps

        let stepCounter = 0;
        while(stepCounter < newSteps.length) {
            // current step
            if (stepCounter === stepNumber) {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted: true,
                    selected: true,
                    completed: false
                };
                stepCounter++;
            }

            // past step
            else if(stepCounter < stepNumber) {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted: false,
                    selected: true,
                    completed: true
                };
                stepCounter++;
            }

            // future step
            else {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted: false,
                    selected: false,
                    completed: false
                };
                stepCounter++;
            }
        }

        return newSteps;
    }

    return (
        <Grid>
            <Container img={stepsArr[currentStep - 1].img}>
                <StepperSectionHeader ss={1} es={6} sd={1} ed={14}>
                    <StepperSectionHeaderPreTitle>What We Offer For <b>Business Clients</b></StepperSectionHeaderPreTitle>
                    <StepperSectionHeaderTitle>Our Business <b>Solutions</b></StepperSectionHeaderTitle>
                </StepperSectionHeader>
                
                <ContainerRow ss={2} es={6} sd={2} ed={12}>
                    <ContentArea 
                        stepNum={currentStep}
                        title={stepsArr[currentStep - 1].title}
                        text={stepsArr[currentStep - 1].desc}
                        img={stepsArr[currentStep - 1].img}
                    />
                    <Steppers>
                        {   
                            steps.map(function (step, index) { 
                                return (
                                    <StepProgress steps={stepsArr} step={step} index={index} key={index} />
                                )
                            })
                        }
                    </Steppers>
                </ContainerRow>
            </Container>
        </Grid>
    );
}

export default Stepper;