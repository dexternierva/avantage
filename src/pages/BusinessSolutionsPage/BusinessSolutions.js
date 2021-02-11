import React, { Fragment, useState, useEffect } from "react";
import {
    PageTitle,
    Inquiry,
    Stepper,
    SolutionsSummary
} from "../../components";

const stepsArr = [
    {
        title: "Job Order & Customization",
        desc: "Finalize with us your Manpower Request or Job Order for Filipino Workers.",
        img: "images/step1.jpg"
    },
    {
        title: "Verification & Accreditation",
        desc: "Meet our Philippine Embassy/Philippine Labor Office for Verification of required documents and we will take care of the rest!",
        img: "images/step2.jpg"
    },
    {
        title: "Sourcing & Recruitment",
        desc: "Sit back and relax while we are doing the sourcing and recruitment of the best and talented Filipino Workers that you need!",
        img: "images/step3.jpg"
    },
    {
        title: "Final Interview & Job Program Admission",
        desc: "Meet our pool of best and talented Filipino Workers and choose the very best for you!",
        img: "images/step4.jpg"
    },
    {
        title: "Visa & Document Processing",
        desc: "Our fast and efficient processing of your selected Filipino Workers will be in your Country the soonest and very surprising time!",
        img: "images/step5.jpg"
    },
    {
        title: "Deployment",
        desc: "Finally Meet and start a fruitful working environment with your selected Filipino workers!",
        img: "images/step6.jpg"
    }
];

function BusinessSolutions () {
    const [stepNumber, setStepNumber] = useState(1);

    useEffect(() => {
        const intervalID = setInterval(() => { 
            setStepNumber((prevStepNumber) => {
                if (prevStepNumber < stepsArr.length) {
                    return prevStepNumber + 1;
                } else {
                    return 1;
                }
            });     
        }, 5000)

        return () => clearInterval(intervalID); 
    }, [])

    return (
        <Fragment>
            <PageTitle imageSource={"./images/businesssolutions-hero.jpg"}>
                <PageTitle.Header>Business Solutions</PageTitle.Header>
            </PageTitle>

            <SolutionsSummary />
            
            <Stepper stepsArr={stepsArr} currentStep={stepNumber} />

            <Inquiry />
        </Fragment>
    )
}

export default BusinessSolutions;