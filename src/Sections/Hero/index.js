// This is HeroSection component, Main top section of website
import styled from 'styled-components'
import Pink from '../../assets/blobPink.png'
import White from '../../assets/blobWhite.png'
import Purple from '../../assets/blobPurple.png'

const HeroSectionContainer = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: var(--black);

  display: flex;
  justify-content: center;
  position: relative;
`

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
`

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`

const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`

const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Blobs>
        <PinkBlob>
          <img src={Pink} alt='pink blob' width='400' />
        </PinkBlob>
        <WhiteBlob>
          <img src={White} alt='white blob' width='400' />
        </WhiteBlob>
        <PurpleBlob>
          <img src={Purple} alt='purple blob' width='400' />
        </PurpleBlob>
      </Blobs>
      HeroSection Component
    </HeroSectionContainer>
  )
}

export default HeroSection
