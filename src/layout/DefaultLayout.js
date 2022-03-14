import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column  bg-light">
        <AppHeader />
        <div className="temp1" style={{ backgroundColor:'rgb(227, 242, 253)'}}>
          <AppContent  />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
