import styled ,{keyframes} from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80%{
    transform: translateX(1rem);
  }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ProductContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-item:center;
    margin:10rem 0;
`;

export const ProductContainerTitle = styled.h1`
    font-size:3rem;
    font-family:Nastaliq;
    text-align:center;
    margin-bottom:5rem;
`;

export const ProductBoxes = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-item:center;
    text-align:center;
`;

export const SpanVisible = styled.span`
    transform: translateY(0);
    color:#fff;
    font-size:2.5rem;
`;

export const SpanInvisible = styled.span`
    display: inline-block;
    padding: 0;
    position: absolute;
    left: .5rem;
    top: -100%;
    transition: top .2s;
    color:#fff;
    font-size:4rem;
`;


export const Btn = styled.button`
    padding:1rem 4rem;
    font-size: 1.5rem;
    font-weight: 300;
    border: none;
    border-radius: 2rem;
    background-image: linear-gradient(to left,#843910, #CEA176);
    color: #fff;
    position: relative;
    overflow: hidden;
    transition: all .3s;
    text-align:center;

    & > *{
        display: inline-block;
        transition: transform .2s;
        width: 100%;
        height: 100%;
    }


    &:hover ${SpanVisible}{
        transform: translateY(125%);
    }

    &:hover ${SpanInvisible}{
        top: -.5rem;
    }
    `;

export const ProductBox = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    text-align:center;
    position:relative;
`;



export const ProductImageTextContainer = styled.div`
    transition: all .2s;
    opacity: 0;
    position: absolute;
    top: 8%;
    right: 0;
    transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    text-align: center;
`;

export const ProductImage = styled.img`
    width:100%;
    transition: all .2s;
    backface-visibility: hidden;

    &:hover{
        filter:blur(6px);
    }

    &:hover + ${ProductImageTextContainer}{
        animation: ${fade} 1s alternate;
        animation-iteration-count: 1;
        animation-fill-mode:forwards;
    }
`;

// export const ProductImageTextContainer = styled.div`
//     transition: .5s ease;
//     opacity: 0;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     text-align: center;
// `;

export const ProductImageText = styled.pre`
    width:100%;
    color:#000;
    font-size:2rem;
    white-space: pre;
    font-family:Nastaliq;
    font-weight:bold;
    background-color:#fff;
    padding:1rem;
`;

export const ProductTitle = styled.h1`
    font-size:2rem;
    font-family:Nastaliq;
    margin:3rem 0;
`;

export const ProductBtnContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-item:center;
`;

export const ProductBtn = styled.button`
    width:13rem;
    height:4rem;
    font-size:2rem;
    font-family:Nastaliq;
    background-color:#843910;
    color:#fff;
    border:none;
    border-radius:1rem;
    margin:2rem auto;
    cursor:pointer;
`;
