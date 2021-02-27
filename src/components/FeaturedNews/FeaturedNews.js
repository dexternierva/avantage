import React, { useContext } from "react";
import { Card } from "..";
import { NewsContext } from "../../containers/GetNews";
import PrimaryButton from "../Buttons";


function News ({ title, excerpt, url, featuredImage }) {
    return (
        <Card>
            <Card.Content>
                { featuredImage && 
                <Card.Image>
                    <img src={`https://avantage.dev${featuredImage.url}`} alt={title} />
                </Card.Image>
                }
                <Card.MainContent  fullCard={true}>
                    <Card.Title fullCard={true}>{title}</Card.Title>
                    <Card.Text>{excerpt}</Card.Text>
                    <Card.Cta fullCard={true}>
                        <PrimaryButton onClick={ () => window.open(url, '_blank') }>Read Article</PrimaryButton>
                    </Card.Cta>
                </Card.MainContent>
            </Card.Content>
        </Card>
    )
}

function FeaturedNews () {
    const { loading, response, error } = useContext(NewsContext);
    
    if (response !== null) {
        const featuredNews = response.map((newsItem) => {
            if (newsItem.category === "featured") {
                return <News
                    key={newsItem.id}
                    featuredImage={ newsItem.featuredImage }
                    title={ newsItem.title }
                    excerpt={ newsItem.excerpt }
                    url={ newsItem.url }
                />
            } 
        })
  
        return featuredNews;
    }

    return (
        <>
        { loading && <h3>Loading</h3> }
        { error && "Something went wrong, please try again later." }
        </>
    )
}

export default FeaturedNews;