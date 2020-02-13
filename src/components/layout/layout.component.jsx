import React from 'react'
import Navbar from '../navbar/navbar.component'
import Footer from '../footer/footer.component'
import { Main } from './layout.style'

function layout({ children }) {
   return (
      <>
         <Navbar />
         <Main>{children}</Main>
         <Footer />
      </>
   )
}

export default layout
