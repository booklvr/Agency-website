// This is Services component
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SvgBlock from '../../components/SvgBlock'
import TextBlock from '../../components/TextBlock'
import Tube from '../../assets/3dtube.png'
import Cone from '../../assets/3dtriangle.png'
import Capsule from '../../assets/3dcapsule.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  margin: 10rem 10rem;
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
  const ref = useRef(null)
  const revealRefs = useRef([])
  revealRefs.current = []
  gsap.registerPlugin(ScrollTrigger)

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
    // console.log('revealRef', revealRefs.current)
  }

  useEffect(() => {
    const element = ref.current
    const line = document.getElementById('line')
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById('services'),
        start: 'top top+=180',
        end: 'bottom bottom',
        pin: element,
        pinReparent: true,
        // markers: true,
      },
    })

    t1.fromTo(
      line,
      {
        height: '15rem',
      },
      {
        height: '3rem',
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: 'top top+=200',
          end: 'bottom top+=220',
          scrub: true,
        },
      }
    )

    revealRefs.current.forEach((el, index) => {
      t1.from(el.childNodes[0], {
        x: -300,
        opacity: 0,
        duration: 2,

        ease: 'power2',
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=200',
          end: 'bottom bottom-=100',
          scrub: true,
          snap: true,
        },
      })
        .to(el.childNodes[1], {
          transform: 'scale(0)',

          ease: 'power2.inOut',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el.childNodes[1],
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            snap: true,
          },
        })
        .from(el.childNodes[2], {
          y: 400,
          duration: 2,
          ease: 'power2',

          scrollTrigger: {
            trigger: el,
            id: `section-${index + 1}`,
            start: 'top center+=100',
            end: 'bottom center-=200',
            scrub: true,
            snap: true,
          },
        })
    })
  }, [])

  return (
    <ServiceSection id='services'>
      <Background ref={ref}>
        <Title>What We Do</Title>
        <Line id='line' />
        <Triangle />
      </Background>
      <Content ref={addToRefs}>
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
      <Content ref={addToRefs}>
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
      <Content ref={addToRefs}>
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
