import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";

const CoverWrapper = styled.div`
    background:url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/67TKSDXV3FE6TKZTS4KBVD7WNI.png) #01304C;
    background-size: cover;
    background-position: top;
    width:100%;
    height: 100vh;
    
    @media (max-width: 500px) {
        width:100%;
        height: 110vh;
    }

    @media (max-width: 768px) {
        height:25vh;
        position: relative;
    }
`;

const Headline = styled.div`
    color: white;
    padding-top: 25vh;
`;

const SectionTitle = styled.div`
    font-family: 'Whitney,serif';
    font-size: 3rem;
    margin: 2vw 2vw 2vw 9vw;
`;

const Title = styled.div`
    font-family: 'Quattrocento, sans-serif';
    font-size: 10rem;
    text-align: center;
    width: 100%;
`;

const Credits = styled.div`
    font-family: 'Quattrocento, sans-serif';
    font-size: 1.5rem;
    position: absolute;
    text-align: right;
    bottom: 0;
    right: 5%;
`;

const Heading = () => {
    return (
        <div>
            <CoverWrapper>
                <div>
                    <Navbar/>
                </div>
                <Headline>
                    <SectionTitle>OPINION ARCHIVE</SectionTitle>
                    <Title>Protests Title</Title>
                    <Credits>
                        <p>Illustration By Name</p>
                        <p>Engineering By Darien Moment</p>
                    </Credits>
                </Headline>
            </CoverWrapper>
        </div>
    );
};

export default Heading;