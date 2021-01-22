import React, { useState } from "react";
import data from "../../pages/HomePage/Data";
import PrimaryButton from "../Buttons";
import Grid from "../Layout/Grid";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";

import { 
    Section, 
    Article, 
    ArticleContent,
    ArticleHeading,
    ArticleText,
    ArticleCta,
    ArticleNavLeft,
    ArticleNavRight,
    Image
} from "./Hero.elements";

function Hero () {
    const [index, setIndex] = useState(0);
    const { image, title, text } = data[index];

    function checkIdx (idx) {
        if (idx > data.length - 1) {
            return 0;
        } else if(idx < 0) {
            return data.length - 1;
        } 
        
        return idx;
    }

    function nextSlide () {
        setIndex((idx) => {
            return checkIdx(idx + 1);
        })
    }

    function prevSlide () {
        setIndex((idx) => {
            return checkIdx(idx - 1);
        })
    }

    function addEndListener (node, done) {
        node.addEventListener("transitionend", done, false);
    }

    return (
        <Grid>
            <Section>
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={image}
                        timeout={{ appear: 1000, exit: 800 }}
                        appear={false}
                        classNames={'img-'}
                        addEndListener={addEndListener}
                    >
                        <Image source={image} />
                    </CSSTransition>
                </TransitionGroup>
                <Article ss={1} es={8} sm={1} em={8} sd={2} ed={6}>
                    <SwitchTransition>
                        <CSSTransition
                            key={index}
                            timeout={1000}
                            appear={true}
                            classNames={'content-'}
                        >
                            <ArticleContent>
                                <ArticleHeading>{title}</ArticleHeading>
                                <ArticleText>{text}</ArticleText>
                                <ArticleCta>
                                    <PrimaryButton modifiers={["small"]} to="/signin">Learn More</PrimaryButton>
                                </ArticleCta>
                            </ArticleContent>
                        </CSSTransition>
                    </SwitchTransition>
                </Article>
                <ArticleNavLeft onClick={prevSlide}><MdChevronLeft /></ArticleNavLeft>
                <ArticleNavRight onClick={nextSlide}><MdChevronRight /></ArticleNavRight>
            </Section>
        </Grid>
    )
}

export default Hero;