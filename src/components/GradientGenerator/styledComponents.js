// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient (${props => props.backgroundImage});
  height: 100vh;
  justify-content: center;
  align-items:center;
  
`
export const CustomHeading = styled.h1`
  color: white;
  font-family: 'roboto';
  margin: 20px;
`
export const CustomParagraph = styled.p`
  color: white;
  font-family: 'roboto';
  margin: 20px;
`
export const ButtonList = styled.div`
  display: flex;
`
export const ParagraphsList = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CustomButton = styled.button`
  padding: 20px;
  color: black;
  border: none;
  border-radius: 5px;
  background-color: #00c9b7;
`
