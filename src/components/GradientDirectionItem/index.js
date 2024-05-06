// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, onChangeDirectionButton} = props
  const {displayText, value} = gradientDetails
  const h = () => {
    onChangeDirectionButton(value)
  }
  return <DirectionButton onClick={h}>{displayText}</DirectionButton>
}
export default GradientDirectionItem
