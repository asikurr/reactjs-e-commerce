import styled , {css} from "styled-components";

const ButtonStyle = css`
    background-color: black;
    color: white;
    border:none;
    
    &:hover{
    background-color: white;
    color: black;
    border:1px solid black;
    }
`;

const InvertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover{
      background-color: black;
      color: white;
    }
`;

const GoogleSignInStyle = css`
    background-color: #4285f4;
    color: #ffffff;
    border: none;
      
     &:hover{
       background-color: #357ae8;
       border: none;
       color: #000;
     }
`;

const GetButtonStyle = props => {
    if(props.isGoogleSignIn){
        return GoogleSignInStyle;
    }

    return props.inverted ? InvertedButtonStyle : ButtonStyle;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    
    ${GetButtonStyle}
`;