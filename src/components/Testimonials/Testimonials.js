import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
    TestimonialsCarousel,
    Testimonial,
    TestimonialContent
} from "./Testimonials.elements";

function Testimonials () {
    return (
        <TestimonialsCarousel>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                
                <Testimonial>
                <div class="fb-post" data-href="https://web.facebook.com/joy.laspinas.5/posts/3969672573053702" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/joy.laspinas.5/posts/3969672573053702" class="fb-xfbml-parse-ignore"><p>I highly recommend very honest and trnsparent. The staff are approchable and accomodating..</p>Posted by <a href="#" role="button">Joy Gonzales Laspiñas</a> on&nbsp;<a href="https://www.facebook.com/joy.laspinas.5/posts/3969672573053702">Saturday, October 24, 2020</a></blockquote></div>
                </Testimonial>
        
                <Testimonial>
                    <div class="fb-post" data-href="https://web.facebook.com/angeli.martin/posts/10223123307848769" data-width="" data-show-text="true"><blockquote cite="https://www.facebook.com/angeli.martin/posts/10223123307848769" class="fb-xfbml-parse-ignore"><p>All praises to A-vantage. The recruitement officers were very accomodating. Honesty, transparency and reliability are...</p>Posted by <a href="#" role="button">Angeli Martin Ocampo</a> on&nbsp;<a href="https://www.facebook.com/angeli.martin/posts/10223123307848769">Friday, October 23, 2020</a></blockquote></div>
                </Testimonial>
        
                <Testimonial>
                    <div class="fb-post" data-href="https://web.facebook.com/mariane.gorospe.35/posts/719222068621834" data-width="" data-show-text="true"><blockquote cite="https://www.facebook.com/mariane.gorospe.35/posts/719222068621834" class="fb-xfbml-parse-ignore"><p>Staff are very accomodating ang friendly. detailed and step-by-step process were clearly explained. it went smoothly. overall it was excellent!</p>Posted by <a href="#" role="button">Fe Gorospe</a> on&nbsp;<a href="https://www.facebook.com/mariane.gorospe.35/posts/719222068621834">Wednesday, June 17, 2020</a></blockquote></div>
                </Testimonial>
            </Carousel>
        </TestimonialsCarousel>
    )
}

export default Testimonials;