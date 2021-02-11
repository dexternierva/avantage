import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NewsContext } from "../../containers/GetNews";
import PrimaryButton, { LinkButton, TertiaryButton } from "../Buttons";
import { Card } from "..";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import { SectionHeader } from "..";
import { TopNewsContainer, TopNewsCta } from "./TopNews.elements";

function TopNewsCard ({ index, id, category, title, excerpt, url, featuredImage }) {
    let startDefault = 0;

    switch(index) {
        case 1:
            startDefault = 2;
            break;
        case 2: 
            startDefault = 6
            break;
        case 3:
            startDefault = 10
            break;
        default: 
            startDefault = 0;
    }

    return (
        <Row ss={2} es={6} sm={2} em={6} sd={startDefault} ed={4}>
            <Card>
                <Card.Content>
                    <Card.MainContent  fullCard={false}>
                        { category && <Card.PreTitle>{category}</Card.PreTitle> }
                        { featuredImage && 
                        <Card.Image>
                            <img src={`https://avantage.dev${featuredImage.url}`} alt={title} />
                        </Card.Image>
                        }
                        <Card.Title>{title}</Card.Title>
                        {/* <Card.Text>{excerpt}</Card.Text> */}
                        <Card.Cta fullCard={true}>
                            <LinkButton onClick={ () => window.open(url, '_blank') }>Read Article</LinkButton>
                        </Card.Cta>
                    </Card.MainContent>
                </Card.Content>
            </Card>
        </Row>
    )
}

function TopNews () {
    const history = useHistory();
    const handleClick = () => history.push('/news');
    const { loading, response, error } = useContext(NewsContext);
    
    if (response !== null) {
        const topNews = response.slice(0, 3).map((newsItem, index) => {
            return <TopNewsCard
                index={index + 1}
                key={newsItem.id}
                id={newsItem.id}
                category={newsItem.category}
                featuredImage={newsItem.featuredImage}
                title={newsItem.title}
                excerpt={newsItem.excerpt}
                url={newsItem.url}
            />
        })
  
        return (
            <TopNewsContainer>
                <SectionHeader>
                    <SectionHeader.PreTitle>Our <b>Resources</b></SectionHeader.PreTitle>
                    <SectionHeader.Title>Start Reading Our <b>Articles</b></SectionHeader.Title>
                </SectionHeader>

                <Grid>
                    <FullWidthSection>
                        {topNews}
                    </FullWidthSection>
                </Grid>

                <TopNewsCta>
                    <TertiaryButton onClick={ handleClick }>View All Articles</TertiaryButton>
                </TopNewsCta>
            </TopNewsContainer>
        ) 
            
    }

    return (
        <>
        { loading && <h3>Loading</h3> }
        { error && "Something went wrong, please try again later." }
        </>
    )
}

export default TopNews;