import React, { useContext } from 'react'
import CartItem from './CartItem'
import { MyContext } from '../context/ContextData'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { clear, cart } = useContext(MyContext)
  const limpiar = () => {
    clear()
  }
  const total = cart.reduce(
    (total, cartItem) => total + cartItem.precio * cartItem.quantity,
    0,
  )
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '1rem',
    borderRadius: 6,
    alignItems: 'stretch',
    gap: '2rem',
  }
  const stylesGeneral = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    paddingTop: '4rem',
    display: 'flex',
    flexDirection: 'Column',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: '1rem',
    alignItems: 'stretch',
    minHeight: 'calc(100vh - 5rem)',
  }
  const styleLimpiar = {
    width: '30%',
    margin: '1rem 0',
    padding: '0 2rem',
    textAlign: 'center',
    borderRadius: 6,
    border: 'none',
    backgroundColor: '#fff',
    color: '#427da7',
  }
  const styleButtons = {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
  const styleTotal = {
    margin: 'auto',
    width: '20%',
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: 6,
    fontSize: '1.4rem',
  }
  return (
    <div style={stylesGeneral}>
      {cart.length > 0 ? (
        <>
          <div style={styles}>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <div>
            <p style={styleTotal}>Total: {total}</p>
            <div style={styleButtons}>
              <button style={styleLimpiar} onClick={limpiar}>
                Limpiar carrito
              </button>
              <button style={styleLimpiar} onClick={limpiar}>
                Comprar
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>
            No hay ningún producto en el carrito
          </h1>
          <Link style={{ textAlign: 'center' }} to="/">
            <button style={styleLimpiar} onClick={limpiar}>
              Explorar tienda
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Cart
