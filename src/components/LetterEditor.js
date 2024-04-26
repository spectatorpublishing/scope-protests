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
                    Last November, the Columbia College Student Council voted to place a question on its next ballot after a tumultuous four-year saga where the vote failed to pass twice. 
                    The question reads:
                </p>
                <p>
                    Should Columbia University divest its stocks, funds, and endowment from companies that profit from or engage in the State of Israel’s acts toward Palestinians that, according to Columbia University Apartheid Divest (CUAD), fall under the United Nations International Convention of the Suppression and Punishment of the Crime of Apartheid?
                </p>
                <p>
                    After months of delay due to COVID-19, Columbia College students are now scheduled to vote on this question between September 22 and September 25, 2020.

                    The Boycott, Divest, and Sanction movement advocates for colleges and universities to divest their endowments from companies that the movement claims profit off of Israeli aggression toward Palestine. As a member of the Columbia community, I know how contentious the topics of BDS, Palestine, and Israel can be on campus. Hopefully, this digital platform and the review of our predecessors' arguments will enable us to better engage in the critical inquiry of each side of the debate.

                    On behalf of myself and the editorial team, I urge you to read critically and consciously reexamine your own beliefs and positions if you are introduced to new perspectives within this scope.

                    Lastly, I would impress upon you that we strove to curate and edit these pieces devoid of any personal biases.

                </p>
                <p>
                    Warmly,
                </p>
                <p>
                    Ryan Oden
                </p>
                <p>
                    Administrative Deputy Editorial Page Editor
                </p>
            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;