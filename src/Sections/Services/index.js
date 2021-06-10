// This is Services component
import styled from 'styled-components'
import SvgBlock from '../../components/SvgBlock'
import TextBlock from '../../components/TextBlock'
import Tube from '../../assets/3dtube.png'
import Cone from '../../assets/3dtriangle.png'
import Capsule from '../../assets/3dcapsule.png'

const ServiceSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20rem;
  position: relative;
  color: var(--white);
`

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  background-color: var(--black);
  background-size: auto 100vh;
  z-index: -1;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;

  &::before {
    content: '';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`

const Line = styled.span`
  border-left: 4px solid var(--white);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`

const Content = styled.div`
  display: flex;
  /* margin: 10rem 10rem; */
  margin: 3rem 10rem;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
`

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`

const Services = () => {
  return (
    <ServiceSection>
      <Background>
        <Title>What We Do</Title>
        <Line />
        <Triangle />
      </Background>
      <Content>
        <TextBlock
          topic='Design'
          title='We build award winning Designs'
          subText='We help clients to build great design to attract more customers'
        />
        <OBJ>
          <img src={Tube} alt='Tube' width='400' height='400' />
        </OBJ>
        <SvgBlock svg='Design.svg'></SvgBlock>
      </Content>
      <Content>
        <TextBlock
          topic='Develop'
          title='We develop high quality Web & App'
          subText='We build appropriate solutions to develop your website and app with best tools available'
        />
        <OBJ>
          <img src={Cone} alt='Triangle' width='400' height='400' />
        </OBJ>
        <SvgBlock svg='Develop.svg'></SvgBlock>
      </Content>
      <Content>
        <TextBlock
          topic='Support'
          title='We provide support for your digital presence'
          subText='Once your system is online, we will stay on hand to help you use it an provide technical support and maintenance for your business.'
        />
        <OBJ>
          <img src={Capsule} alt='Capsule' width='400' height='400' />
        </OBJ>
        <SvgBlock svg='Support.svg'></SvgBlock>
      </Content>
    </ServiceSection>
  )
}

export default Services
