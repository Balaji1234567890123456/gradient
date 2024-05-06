// Write your code here
import {Component} from 'react'
import {
  GradientContainer,
  CustomHeading,
  CustomParagraph,
  ParagraphsList,
  CustomButton,
  ButtonList,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    gradientDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onChangeDirection = direction => {
    this.setState({gradientDirection: direction})
  }

  onGenerate = () => {
    const {gradientDirection, fromColor, toColor} = this.state
    this.setState({
      gradientValue: `to ${gradientDirection},${fromColor},${toColor} `,
    })
  }

  render() {
    const {gradientValue, fromColor, toColor} = this.state
    return (
      <GradientContainer
        backgroundImage={gradientValue}
        data-testid="gradientGenerator"
      >
        <CustomHeading>Generate a CSS Color Gradient</CustomHeading>
        <CustomParagraph>Choose Direction</CustomParagraph>
        <ButtonList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.value}
              onChangeDirectionButton={this.onChangeDirection}
              gradientDetails={eachItem}
            />
          ))}
        </ButtonList>
        <CustomParagraph>Pick the Colors</CustomParagraph>
        <ParagraphsList>
          <CustomParagraph>{fromColor}</CustomParagraph>
          <CustomParagraph>{toColor}</CustomParagraph>
        </ParagraphsList>
        <ParagraphsList>
          <input
            type="color"
            value={fromColor}
            onChange={this.onChangeFromColor}
          />
          <input type="color" value={toColor} onChange={this.onChangeToColor} />
        </ParagraphsList>
        <CustomButton onClick={this.onGenerate}>Generate</CustomButton>
      </GradientContainer>
    )
  }
}
export default GradientGenerator
