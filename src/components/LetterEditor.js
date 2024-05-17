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
                Throughout its “storied history,” Columbia University has stood at the forefront of national student movements. At each turn, Spectator was there to platform the voices of both activists and their critics. “After 1968” is a retrospective of Spectator content from four critical eras of protest on Columbia’s campus.
                </p>
                <p>
                Our retrospective begins in 1968, during protests against Columbia’s links to the Vietnam War and the planned 
                construction of a gymnasium in Morningside Park with separate entrances for Columbia students and Harlem 
                residents. Protests against the University’s perceived ties to racism and war research culminated in the 
                occupation of multiple buildings across campus. We then move to 1985, when Columbia became the first 
                major U.S university to fully divest from apartheid South Africa after years of pressure from students
                 and the Coalition for a Free South Africa’s blockade of Hamilton Hall. In 2019, after years of debate
                  on campus regarding Israel/Palestine, the Columbia College Student Council <a style = {{ color : "white" }} href="https://www.columbiaspectator.com/news/2019/11/25/ccsc-passes-ballot-initiative-to-hold-israel-divestment-referendum/?fbclid=IwAR2i-paau5TSMFF3lKTFpuCG5WpLVigDt3tmTqnW8A2vqblTY4wcui9H9Mg">approved a referendum</a> {" "}
                  asking whether the University should divest “from companies that profit from or engage in the State 
                  of Israel’s acts towards Palestinians.” 
                </p>
                <p>
                During the 2023-24 academic year, a significant part of campus life has been shaped by pro-Palestinian and pro-Israel protests. Pro-Palestinian protests have been spearheaded in large part by the University chapters of Students for Justice in Palestine and Jewish Voice for Peace, alongside the coalition of over 100 student organizations that comprise Columbia University Apartheid Divest. Pro-Israel students and faculty have responded with demonstrations and counterprotests of their own. As in 1968, faculty members march alongside their students, and hundreds of nonaffiliates from across New York City have come to voice their support or discontent from outside Columbia’s gates. This April, student organizers continued the referential tradition of protest, establishing the “Gaza Solidarity Encampment” and again occupying Hamilton—renamed “Hind’s Hall” by protesters in honor of a six-year-old Palestinian killed by the Israeli military in Gaza. After the second round of mass arrests in two weeks, Columbia remains at the center of a national media storm surrounding college protests, and encampments in solidarity with Gaza continue to spread across campuses internationally. In the midst of continued police presence on campus and widespread fury towards the Columbia administration, students are once again reckoning with their University’s complex history.
                </p>
                <p>
                On behalf of myself and Spectator’s editorial board, I urge you to engage critically with these archival pieces and consider their place within a broader historical context. In curating this edition of the Scope, we aimed to create a chronology of campus protests and draw from a wide range of perspectives. This survey of articles is an incomplete picture of both protests and student journalism at Columbia. Our intent is to underscore historical parallels, encourage increased engagement with Columbia’s past, and further inform discourse within our community.  
                </p>
                <p>
                Much is uncertain as we near the end of this tumultuous school year. Our hope is that this Scope helps contextualize the rich history of political engagement at Columbia and affirms the ability of students to narrate their own history.
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