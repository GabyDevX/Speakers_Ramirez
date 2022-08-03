import React from 'react'
import cartIcon from '../cartIcon.png'
import { Link } from 'react-router-dom'

function CartWidget({ count }) {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    gap: '.5rem',
  }

  const cartIconStyle = {
    height: 40,
    width: 'auto',
    cursor: 'pointer',
  }

  const styleLink = {
    textDecoration: 'none',
    color: '#000',
  }
  return (
    <Link to={'/cart'} style={styleLink}>
      <div style={styles}>
        <img src={cartIcon} alt="logo" style={cartIconStyle} />
        <p>{count}</p>
      </div>
    </Link>
  )
}

export default CartWidget
