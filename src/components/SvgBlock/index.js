import styled from 'styled-components'

// This is SvgBlock component, It will render svgs like in the services section.
const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;

  svg {
    width: ;
  }
`

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default
  return (
    <RightBlock>
      <img src={SvgIcon} alt='Services' />
    </RightBlock>
  )
}

export default SvgBlock
