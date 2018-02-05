import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const IndexPage = () => (
    <PageContainer>
      <Helmet>
        <script src="https://scripts.sirv.com/sirv.js"></script>
      </Helmet>
      <PageTitle>Jewellery</PageTitle>
      <ProductContainer>
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Jewellery.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Ring%202/Ring%202.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Bracelet/Bracelet.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Ring%201/Ring%201.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Bracelet%20Two/Bracelet%20Two.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/earring%20Indian%20Gold/earring%20Indian%20Gold.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Moonstone%20Ring/Moonstone%20Ring.spin" />
        <ProductItem className="Sirv" data-src="https://peggiblo.sirv.com/Spins/Jewellery/Wedding%20Ring/Wedding%20Ring.spin" />
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