// This is Contact component, it will contain contact form.
import styled from 'styled-components'
import InstagramIcon from '../../assets/instagram-square-brands.svg'
import TwitterIcon from '../../assets/twitter-square-brands.svg'
import LinkedInIcon from '../../assets/linkedin-brands.svg'
import FacebookIcon from '../../assets/facebook-square-brands.svg'

const ContactSection = styled.div`
  width: 100vw;
`

const Title = styled.h4``

const Icon = styled.div``

const Contact = () => {
  return (
    <ContactSection>
      <Title>Get in touch</Title>
      <Icon>
        <a href='http://facebook.com/'>
          <img src={FacebookIcon} alt='Facebook' />
        </a>
        <a href='http://linkedin.com/'>
          <img src={LinkedInIcon} alt='Facebook' />
        </a>
        <a href='http://twitter.com/'>
          <img src={TwitterIcon} alt='Facebook' />
        </a>
        <a href='http://instagram.com/'>
          <img src={InstagramIcon} alt='Facebook' />
        </a>
      </Icon>
    </ContactSection>
  )
}

export default Contact
