import Navbar from "../components/Navbar";
import Heading from "./Heading";
import LetterEditor from "../components/LetterEditor";
import Articles from "../components/Articles";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: black;
`;

const Home = () => {
    return (
      <Wrapper>
        <Navbar/>
        <Heading/>
        <LetterEditor />
        <Articles/>
      </Wrapper>
    );
  };
  
  export default Home;