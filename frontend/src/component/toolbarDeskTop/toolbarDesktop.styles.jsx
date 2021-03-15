import styled , {css ,keyframes} from 'styled-components';
import { Link} from 'react-router-dom';


const rotate = keyframes`
  0%{
    box-shadow:0;
  }
  50% {
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  100% {
    box-shadow:0 ;
  }
`;


const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  80%{
    transform: translateY(1rem);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;



const ToolbarLinkContainerStyles = css`
    display: inline-block;
    width:7rem;
    padding:1rem 2rem;
    text-decoration:none;
    text-align:center;
`;



export const LogoImg = styled.img`
  width: 4rem ;
  height: 4rem;
  margin-right: auto
`;

export const ToolbarContainer = styled.div`
    width:100%;
    height:6rem;
    background-color:#843910;
    display:flex;
    align-items:center;
`;

export const ToolbarUl = styled.ul`
  list-style:none;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ToolbarLinkLi = styled.li`
    ${ToolbarLinkContainerStyles};
    color:#fff;
    border-bottom:transparent;
    transition:all 0.2s;
    font-size:1.5rem;
    font-family:Nastaliq;
    border-radius:5rem;
    position:relative;
    padding:2rem;

    ul {
       display:none;
    }

    &:hover > ul {
      display: block;
      animation: ${fade} 1s linear;
      animation-iteration-count: 1;
    }

    &:hover{
      color:#CEA176;
      transform:scale(1.1);
      animation: ${rotate} 1s linear infinite;
    }
`;

export const ToolbarLinka = styled.a`
    text-decoration:none;
    color:#fff;
    font-family:Nastaliq;
`;
// clip-path: polygon(93% 8%, 100% 0, 100% 100%, 82% 100%, 46% 100%, 0 100%, 0 56%, 0 43%, 0 9%);
export const ToolbarSubUL = styled.ul`
    list-style: none;
    background-color:#fff;
    width:12rem;
    padding-top:1rem;
    clip-path: polygon(80% 0, 84% 6%, 100% 6%, 100% 55%, 100% 100%, 50% 100%, 0 100%, 0 60%, 0 6%, 75% 6%);
    border:none;
    outline:none;
    position:absolute;
    top:4rem;
    right:4rem;
    z-index:1000;
    border-top-left-radius:1rem;
    border-bottom-left-radius:1rem;
    border-bottom-right-radius:1rem;
`;

export const ToolbarSubLi = styled.li`
    padding:1rem 2rem;
    transition:all 0.2s;

    &:not(:last-child){
      border-bottom:1px solid #eee;
    }

    &:last-child{
      border-bottom-left-radius:1rem;
      border-bottom-right-radius:1rem;
    }
    
    &:hover{
      background-color:#CEA176;
    }

    &:hover a{
      color:#fff;
    }
`;

export const ToolbarSuba = styled.a`
    padding:1rem 2rem;
    color:#000;
    text-decoration:none;
    font-family:Nastaliq;
`;

export const ToolbarLink = styled(Link)`
    ${ToolbarLinkContainerStyles};
    color:#fff;
    border-bottom:transparent;
    transition:all 0.2s;
    font-size:1.5rem;
    font-family:Nastaliq;
    border-radius:5rem;

    &:hover{
      color:#CEA176;
      transform:scale(1.1);
      animation: ${rotate} 1s linear infinite;
    }
`;

export const ToolbarLinkLogo = styled(Link)` //or as={div} in tag
    ${ToolbarLinkContainerStyles};
    margin-right:auto;
`;