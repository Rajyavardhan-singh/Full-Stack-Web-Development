import styled from 'styled-components';

export const StyledButton = styled.button`
 /* width: 100px; */
 color: blue;
 background-color: ${(props)=>(props.variant==='bg-white' ? "white" : (props.variant==='bg-orange' ? "orange" : "black"))};
 /* background-color: white; */
 border: 2px solid whitesmoke;
 border-radius: 5px;

 /* height: 40px; */
 /* padding: 20px; */
`
export const FancyButton = styled(StyledButton)`
color: pink;
border:5px solid green;
&:hover {
    border: 2px solid whitesmoke; 
}
`