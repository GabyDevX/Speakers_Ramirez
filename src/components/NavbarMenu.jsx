import React from 'react'
import NavBarItem from './NavBarItem'

function NavbarMenu() {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
  }

  return (
    <div style={styles}>
      <NavBarItem sectionId="/categoria/jbl" title="JBL Speakers" />
      <NavBarItem sectionId="/categoria/sony" title="Sony Speakers" />
      <NavBarItem sectionId="/producto/1" title="Detalle" />
    </div>
  )
}

export default NavbarMenu
