import styled from "styled-components";

const cdsLogo = "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"
const verticals = ["news", "opinion", "A&E", "sports", "multimedia", "spectrum", "the eye"]
const verticallinks = ["news", "opinion", "arts-and-entertainment", "sports", "multimedia", "spectrum", "eye"]


const NavWrap = styled.div`
    position: fixed;
    top: 0;
    width: calc(100vw - 5rem);
    background: rgba(0,0,0,0.7);
    z-index: 100;
    height: 50px;
    padding: 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 992px){
        justify-content: center;
    }
    font-family: 'Whitney', sans-serif;
    color: white;
    & .eyeLogo {
        width: 40px;
        margin-right: 1rem;
    }
    & .cdsLogo {
        height: 20px;
    }
    &>a>div {
        display: inline;
        margin: 0 1rem;
    }
    & a{
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    & .verticalLink {
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        transition: border-bottom 0.4s;
        @media(max-width: 992px){
            display: none;
        }
    }

    & .verticalLink:hover {
        border-bottom: 3px solid white;
    }
`

const Navbar = () => {
    const VerticalLinks = []
        for(let i = 0; i < verticals.length; i++){
            const verticalLink = (
                <a className = "verticalLink" href={"https://www.columbiaspectator.com/"+verticallinks[i]}>
                    {verticals[i].toUpperCase()}
                </a>
            )
            VerticalLinks.push(verticalLink)
        }


    return (
        <NavWrap>
            {/* <div>The Path to Bargaining</div> */}
            <a href="https://www.columbiaspectator.com/"><div className="mastheadWrap">
                <img className="cdsLogo" src={cdsLogo}/>
            </div></a>
            {VerticalLinks}
        </NavWrap>
    );
  };
  
  export default Navbar;