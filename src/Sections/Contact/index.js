// This is Contact component, it will contain contact form.
import styled from 'styled-components'
import InstagramIcon from '../../assets/instagram-square-brands.svg'
import TwitterIcon from '../../assets/twitter-square-brands.svg'
import LinkedInIcon from '../../assets/linkedin-brands.svg'
import FacebookIcon from '../../assets/facebook-square-brands.svg'

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5em + 2.5vw) 0;
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  position: relative;
  color: var(--white);

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

const Icons = styled.div`
  display: inline;
  margin-bottom: 3rem;
  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
      }
    }
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
    &[name='name'] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
  }

  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name='name'] {
        margin-right: 0;
      }
    }
  }
`

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <Icons>
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
      </Icons>
      <Form>
        <Row>
          <input type='text' name='name' placeholder='your name' />
          <input
            type='email'
            name='email'
            placeholder='enter working email id'
          />
        </Row>

        <textarea
          name='message'
          placeholder='your message'
          cols='30'
          rows='2'
        ></textarea>
        <div style={{ margin: '0 auto' }}>
          <button>Submit</button>
        </div>
      </Form>
    </ContactSection>
  )
}

export default Contact
