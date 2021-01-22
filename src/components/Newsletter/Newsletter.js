import React from "react";
import { Grid, FullWidthSection } from "../Layout";
import PrimaryButton, { TertiaryButton } from "../Buttons";
import {
    Container,
    Subscription,
    SubscriptionContentText,
    SubscriptionContentForm,
    SubscriptionHeading,
    SubscriptionText,
    Form,
    FormInput
} from "./Newsletter.elements";

function Newsletter () {
    return (
        <Container>
            <Grid>
                <FullWidthSection>
                    <Subscription ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                        <SubscriptionContentText>
                            <SubscriptionHeading>Sign up for our newsletter.</SubscriptionHeading>
                            <SubscriptionText>Join our exclusive membership to receive the latest news and trends.</SubscriptionText>
                        </SubscriptionContentText>
                        <SubscriptionContentForm>
                            <Form>
                                <FormInput name="email" type="email" placeholder="Enter Your Email Here" />
                                <PrimaryButton>Subscribe</PrimaryButton>
                            </Form>
                        </SubscriptionContentForm>
                    </Subscription>
                </FullWidthSection>
            </Grid>
        </Container>
    )
}

export default Newsletter;