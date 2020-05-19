import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Lorem Ipsum</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Euismod in pellentesque</FeatureTitle>
          <FeatureText>
            Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.  
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Adipiscing bibendum</FeatureTitle>
          <FeatureText>
            Est pellentesque elit ullamcorper dignissim cras tincidunt.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Pretium fusce</FeatureTitle>
          <FeatureText>
            Metus vulputate eu scelerisque felis imperdiet proin fermentum.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Lectus urna</FeatureTitle>
          <FeatureText>
            Vitae aliquet nec ullamcorper sit amet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Egestas</FeatureTitle>
          <FeatureText>
            Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Bibendum</FeatureTitle>
          <FeatureText>
            Ut aliquam purus sit amet luctus. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
