import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

/* const MainDiv = styled.div`
  width: 100%;
  text-align: center;
`

const Hero = styled.img`
  width: 100%;
` */

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/rum/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/rum/3.png'), url('/images/rum/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  /* Hero.defaultProps = {
    src: window.innerWidth <= 760 ? '/images/rum/mobile-main-hero-img.png' : '/images/rum/main-hero-img.png',
  } */

  return (
    /* <MainDiv>
      <Hero />
      <Page>
        <div style={{ textAlign: 'initial' }}>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </MainDiv> */
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'Rum Staking')}
        </Heading>
        <Text>{TranslateString(578, 'Best ideas come while sipping rum')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
