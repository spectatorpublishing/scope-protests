import React from 'react';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    color: white;
`;

const Title = styled.div`
    font-size: 5em;
    letter-spacing: 0.05em;
    text-align: center;
    word-wrap:break-word;
    font-family: 'Lora,serif';

    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

const Articles = () => {
    return (
        <ArticleWrapper>
            <Title>EXPLORE PIECES</Title>
            
        </ArticleWrapper>
    );
  };
  
  export default Articles;