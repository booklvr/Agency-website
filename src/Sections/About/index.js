// This is About component, It will contain about us info.
import styled, { keyframes } from 'styled-components'
import Hand from '../../assets/hand.svg'
import Wave from '../../assets/waves.svg'

const AboutSection = styled.div``

const Waves = styled.img``

const HandContainer = styled.div``

const About = () => {
  return (
    <AboutSection>
      <Waves src={Wave} alt='waves' width='400' />
      <HandContainer>
        <img src={Hand} alt='hand' width='400' />
      </HandContainer>
    </AboutSection>
  )
}

export default About
