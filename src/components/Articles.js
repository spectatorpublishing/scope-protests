import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import left from '../assets/left-white-arrow.png';
import right from '../assets/right-white-arrow.png';
import up from '../assets/up-white-arrow.png';
import down from '../assets/down-white-arrow.png';
import { articledata } from '../data/articles';

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
    padding-bottom: 5rem;

    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

const Map = styled.div`
`;

const UpArrow = styled.div`
    width: 10%;
    height: 5%;
    margin: auto;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'not-allowed')};
    opacity: ${({ clickable }) => (clickable ? 1 : 0.5)};
    & img {
        width: 100%;
        height: 100%;
    }
`;

const Center = styled.div`
    display: flex;
    align-items: center;
`;

const LeftArrow = styled.div`
    width: 10%;
    height: 5%;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'not-allowed')};
    opacity: ${({ clickable }) => (clickable ? 1 : 0.5)};
    & img {
        width: 100%;
        height: 100%;
    }
`;

const ArticlesBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 4rem;
`;

const RightArrow = styled.div`
    width: 10%;
    height: 5%;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'not-allowed')};
    opacity: ${({ clickable }) => (clickable ? 1 : 0.5)};
    & img {
        width: 100%;
        height: 100%;
    }
`;

const DownArrow = styled.div`
    width: 10%;
    height: 5%;
    margin: auto;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'not-allowed')};
    opacity: ${({ clickable }) => (clickable ? 1 : 0.5)};
    & img {
        width: 100%;
        height: 100%;
    }
`;

const ArticleInfo = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: 'Lora,serif';
`;

const Year = styled.div`
    margin-top: 2rem;
    font-weight: bold;
    font-size: 3rem;
`;

const Article = styled.div`
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ),
        /* bottom, image */
        url(${props => props.image});

    background-position: center;
    background-size: cover;
    text-align: center;
    width: 30vw;
    height: 24vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1324px) {
        width: 60vw;
        height: 24vh;
    }
`;

const ArticleTitle = styled.div`
    font-size: 3rem;
    text-shadow: 5px 5px 2px black;

    @media (max-width: 1324px) {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

const ArticleDate = styled.div`
    font-size: 1.5rem; 

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Articles = () => {
    const [currentYearIndex, setCurrentYearIndex] = useState(0);
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const [showSecondArticle, setShowSecondArticle] = useState(true);
    const years = Object.keys(articledata);
    const articles = articledata[years[currentYearIndex]];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1324) {
                setShowSecondArticle(false);
            } else {
                setShowSecondArticle(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLeftArrow = () => {
        if (currentArticleIndex > 0) {
            setCurrentArticleIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleRightArrow = () => {
        if (window.innerWidth > 1324){
            if (currentArticleIndex < articles.length - 2) {
                setCurrentArticleIndex(prevIndex => prevIndex + 1);
            }
        } else if (currentArticleIndex < articles.length - 1) {
            setCurrentArticleIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleUpArrow = () => {
        if (currentYearIndex > 0) {
            setCurrentYearIndex(prevIndex => prevIndex - 1);
            setCurrentArticleIndex(0); // Reset article index when changing year
        }
    };

    const handleDownArrow = () => {
        if (currentYearIndex < years.length - 1) {
            setCurrentYearIndex(prevIndex => prevIndex + 1);
            setCurrentArticleIndex(0); // Reset article index when changing year
        }
    };

    const leftArrowClickable = currentArticleIndex > 0;
    const rightArrowClickable = window.innerWidth > 1324 ? currentArticleIndex < articles.length - 2 : currentArticleIndex < articles.length - 1;
    const upArrowClickable = currentYearIndex > 0;
    const downArrowClickable = currentYearIndex < years.length - 1;


    return (
        <ArticleWrapper>
            <Title>EXPLORE PIECES</Title>
            <Map>
                <UpArrow clickable={upArrowClickable} onClick={handleUpArrow}><img src={up}/></UpArrow>
                <Center>
                    <LeftArrow clickable={leftArrowClickable} onClick={handleLeftArrow}><img src={left}/></LeftArrow>
                    <ArticleInfo>
                        <Year>{years[currentYearIndex]}</Year>
                        <ArticlesBox>
                            <a href={articles[currentArticleIndex].article_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Article image={articles[currentArticleIndex].image_url}>
                                    <ArticleTitle>{articles[currentArticleIndex].article_title}</ArticleTitle>
                                    <ArticleDate>{articles[currentArticleIndex].article_date}</ArticleDate>
                                </Article>
                            </a>
                            {showSecondArticle && articles[currentArticleIndex + 1] && (
                                <a href={articles[currentArticleIndex + 1].article_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <Article image={articles[currentArticleIndex + 1].image_url}>
                                        <ArticleTitle>{articles[currentArticleIndex + 1].article_title}</ArticleTitle>
                                        <ArticleDate>{articles[currentArticleIndex + 1].article_date}</ArticleDate>
                                    </Article>
                                </a>
                            )}
                        </ArticlesBox>
                    </ArticleInfo>
                    <RightArrow clickable={rightArrowClickable} onClick={handleRightArrow}><img src={right}/></RightArrow>
                </Center>
                <DownArrow clickable={downArrowClickable} onClick={handleDownArrow}><img src={down}/></DownArrow>
            </Map>
        </ArticleWrapper>
    );
  };
  
  export default Articles;