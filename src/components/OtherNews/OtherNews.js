import React, { useContext } from "react";
import { Card } from "..";
import { NewsContext } from "../../containers/GetNews";
import {TertiaryButton} from "../Buttons";
import Row from "../Layout/Row";


function News ({ id, category, title, excerpt, url, featuredImage }) {
    let startDefault;
    startDefault = (id % 2 == 0) ? startDefault = 2 : startDefault = 8;

    return (
        <Row ss={2} es={6} sm={2} em={6} sd={startDefault} ed={6}>
            <Card>
                <Card.Content>
                    <Card.MainContent  fullCard={false}>
                        { category && <Card.PreTitle>{category}</Card.PreTitle> }
                        { featuredImage && 
                        <Card.Image>
                            <img src={`http://68.183.226.128${featuredImage.url}`} alt={title} />
                        </Card.Image>
                        }
                        <Card.Title fullCard={true}>{title}</Card.Title>
                        <Card.Text>{excerpt}</Card.Text>
                        <Card.Cta fullCard={true}>
                            <TertiaryButton onClick={ () => window.open(url, '_blank') }>Read Article</TertiaryButton>
                        </Card.Cta>
                    </Card.MainContent>
                </Card.Content>
            </Card>
        </Row>
    )
}

function OtherNews () {
    const { loading, response, error } = useContext(NewsContext);
    
    if (response !== null) {
        const otherNews = response.map((newsItem) => {
            if (newsItem.category !== "featured") {
                return <News
                    key={newsItem.id}
                    id={newsItem.id}
                    category={newsItem.category}
                    featuredImage={ newsItem.featuredImage }
                    title={ newsItem.title }
                    excerpt={ newsItem.excerpt }
                    url={ newsItem.url }
                />
            } 
        })
  
        return otherNews;
    }

    return (
        <>
        { loading && <h3>Loading</h3> }
        { error && "Something went wrong, please try again later." }
        </>
    )
}

export default OtherNews;