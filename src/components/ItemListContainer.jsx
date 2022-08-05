import React, { useState, useEffect, useContext } from 'react'
import CardSection from './CardSection'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/ContextData'

function ItemListContainer({ titulo }) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()
  const { productsData } = useContext(MyContext)

  const styles = {
    background:
      'linear-gradient(45deg, rgba(16,13,77,1) 18%, rgba(9,9,121,1) 69%, rgba(0,122,147,1) 100%)',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '5rem',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }
  useEffect(() => {
    setLoading(true)
    setProducts([])

    console.log(productsData)
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!idCategoria) {
          resolve(productsData)
        } else {
          resolve(
            productsData.filter(
              (p) => p.idCategoria === idCategoria.toLowerCase(),
            ),
          )
        }
      }, 3000)
    })

    myPromise
      .then((response) => {
        setProducts(response)
      })
      .catch((error) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [idCategoria])

  return (
    <div style={styles}>
      {error ? <h1>No se encontraron los productos</h1> : <h1>{titulo}</h1>}
      <CardSection
        products={products}
        seccion={
          loading
            ? 'loading...'
            : idCategoria
            ? idCategoria.toUpperCase() + ' ' + 'Speakers'
            : 'Nuestros Speakers'
        }
      />
    </div>
  )
}

export default ItemListContainer
