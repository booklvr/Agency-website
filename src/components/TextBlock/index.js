// This is TextBlock component, To render text with same format
import styled from 'styled-components'

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  @media only Screen and (max-width: 48em) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`

const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`

const Subtext = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <LeftBlock>
      <Topic>
        <Circle /> <span>{topic}</span>
      </Topic>
      <Title>{title}</Title>
      <Subtext>{subText}</Subtext>
      {children}
    </LeftBlock>
  )
}

export default TextBlock
