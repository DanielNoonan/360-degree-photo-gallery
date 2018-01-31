import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const IndexPage = () => (
    <PageContainer>
      <Helmet>
        <script src="https://scripts.sirv.com/sirv.js"></script>
      </Helmet>
      <PageTitle>July Catalogue</PageTitle>
      <ProductContainer>
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Egg-Chair/Egg%20Chair%20Anniversary.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Trainers/Trainers.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Trainers/Trainers.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Trainers/Trainers.spin" />
      </ProductContainer>
    </PageContainer>
)

export default IndexPage

const PageContainer = styled.div`
  background: #F6F6F6;
`

const ProductContainer = styled.div`
  background: white;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #E6E6E6;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ProductItem = styled.div`
  min-width: 200px;
  flex: 0 0 calc(100% / 12 * 4);
`

const PageTitle = styled.h1`
  text-align: center;
`