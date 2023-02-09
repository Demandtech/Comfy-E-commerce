import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
          <h1>Coming Soon...</h1>
          <Link className='btn' to={'/'}>Home</Link>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  text-align: center;
`
export default CheckoutPage
