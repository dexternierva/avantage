import styled from "styled-components";

export const TestimonialsCarousel = styled.div`
    width: 100%;
    margin: auto !important;
    margin-top: 3% !important;

    .control-dots {
        padding-left: 5px !important;
        outline: 0;
        bottom: -12px !important;
    }

    .carousel .control-dots .dot {
        box-shadow: none !important;
        background: #047CC7 !important;
        outline: 0;
    }

    .carousel.carousel-slider .control-arrow {
        background: #047CC7 !important;
        height: 50px !important;
        position: absolute;
        top: 45% !important;
    }
    
    @media screen and (min-width: 768px) {
        width: 80%;
    }

    @media screen and (min-width: 991px) {
        outline: 0;
        width: 60% !important;
        margin: 0 auto;
    }
`;

export const Testimonial = styled.div`
    padding: 0 2rem;
    background: linear-gradient(180deg, #EAF0FF 0%, #F6F9FF 100%) !important;
    color: #000000;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 0;
    }
`;