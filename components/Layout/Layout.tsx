import React, { Children } from 'react'
import Header from '../Header/Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
