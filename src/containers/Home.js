import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import LetterEditor from "../components/LetterEditor";
import Articles from "../components/Articles";
import styled from "styled-components";

const Wrapper = styled.div`
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