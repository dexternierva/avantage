import React, { Fragment, useState, useEffect } from "react";
import {
    Grid,
    PageTitle,
    SectionContent,
    Inquiry,
    Stepper
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

            <Grid>
                <SectionContent noPaddingBottom={true}>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                        <SectionContent.PreTitle>Sourcing &amp; Recruitment.</SectionContent.PreTitle>
                    </SectionContent.ContainerRow>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                        <SectionContent.Title>We are sourcing the right candidate for you!</SectionContent.Title>
                        <SectionContent.Text>
                            <p>We search nationwide for the right candidate for your manpower needs and make sure that the candidates comply with and have the capability and ability as per your requirements.</p>
                        </SectionContent.Text>
                    </SectionContent.ContainerRow>
                </SectionContent>
            </Grid>

            <Stepper stepsArr={stepsArr} currentStep={stepNumber} />

            <Grid>
                <SectionContent>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                        <SectionContent.PreTitle>Managed Recruitment.</SectionContent.PreTitle>
                    </SectionContent.ContainerRow>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                        <SectionContent.Title>We select the best among the best for you!</SectionContent.Title>
                        <SectionContent.Text>
                            <p>We select the best candidate for you that will benefit your company or organization in the long-term. We make sure that we recommend well qualified candidates to you that would be an asset to your company or organization.</p>
                        </SectionContent.Text>
                    </SectionContent.ContainerRow>
                </SectionContent>
            </Grid>

            <Inquiry />
        </Fragment>
    )
}

export default BusinessSolutions;