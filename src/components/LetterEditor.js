import React from 'react';
import styled from 'styled-components';

const LetterWrap = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    color: white;
    
    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
    }

`;

const Title = styled.div`
    font-size: 5em;
    letter-spacing: 0.05em;
    padding:1vh 0 1vh 0;
    word-wrap:break-word;
    font-family: 'Lora,serif';

    @media (max-width: 768px) {
        font-size: 2em;
    }

`;

const Body = styled.div`
    font-size: 1.5em; 
    color: white;
    word-wrap:break-word;
    width:100%;
    font-family: 'Lora,serif';
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body>
                <p>Dear readers, </p>
                <p>
                    Throughout its “storied history,” Columbia University has stood at the forefront of national student movements. 
                    At each turn, Spectator was there to platform the voices of both activists and their critics. 
                    “After 1968” is a retrospective of Spectator content from four critical eras of protest on Columbia’s campus. 
                </p>
                <p>
                    Our retrospective begins in 1968 where protests against Columbia’s links to the Vietnam War and racism towards 
                    Black Harlemites culminated in the occupation of multiple buildings. We then move to 1985 in which Columbia 
                    became the first major U.S university to divest from apartheid South Africa after years of pressure from 
                    students and the Coalition for a Free South Africa’s takeover of Hamilton Hall. In 2020, after years of 
                    debate on Israel and Palestine, the Columbia College Student Council held its first BDS referendum asking
                    whether the University should divest from companies that “profit from or engage in the State of Israel’s 
                    treatment of Palestinians.” 
                </p>
                <p>
                    During the academic year of 2023-2024, a significant part of campus life has been shaped by the divestment 
                    campaign spearheaded by Students for Justice in Palestine, Barnard-Columbia  Jewish Voice for Peace, and 
                    the coalition of 100+ student organizations comprising Columbia University Apartheid Divest.  This April, 
                    student organizers continued the referential tradition of protest with their creation of multiple “liberated 
                    zones” across campus, including the ‘Gaza Solidarity Encampment’ and a once-again occupied Hamilton, renamed 
                    ‘Hind’s Hall’. After the second round of mass arrests in two weeks, Columbia remains at the center of a national 
                    media storm surrounding college protests, and a wave of anti-war encampments continues to spread internationally. 
                    In the midst of an unprecedented police presence on campus and widespread fury towards the Columbia administration, 
                    students are once again reckoning with their University’s complex history.
                </p>
                <p>
                    On behalf of myself and Spectator’s editorial board, I urge you to engage critically with these archival pieces, 
                    and consider their place within a broader historical context. In curating this Scope, we aimed to create a 
                    chronology of campus protests and draw from a wide range of perspectives. This survey of articles is an incomplete 
                    picture of both protests and student journalism at Columbia. Our intent is to underscore historical parallels, 
                    encourage further engagement with Columbia’s past, and further inform discourse within our community. 
                </p>
                <p>
                    Much is uncertain as we near the end of this tumultuous school year. My hope is that this Scope helps 
                    contextualize the rich history of political engagement at Columbia, and affirms the ability of students 
                    to narrate their own history.
                </p>
                <p>
                    Sincerely,
                </p>
                <p>
                    Sydney Goldson
                </p>
                <p>
                    Deputy Editorial Page Editor
                </p>
            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;