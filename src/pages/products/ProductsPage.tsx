import { useContext, useEffect, useState } from 'react'
import FilterContext from '../../contexts/FilterContext'
import LoadingContext from '../../contexts/LoadingContext'
import MessageContext from '../../contexts/MessageContext'
import { IFilter } from '../../interfaces/Filter'
import { IProduct } from '../../interfaces/Product'
import ProductsService from '../../services/ProductsService'
import Breadcrumbs from './components/Breadcrumbs'
import Filters from './components/Filters'
import { Link } from 'react-router-dom'

function Product({ image, name, price }: IProduct) {
  const productURI = name.replaceAll(' ', '%2D')
  return (
    // Passei a className para o Link do Router, pois estava quebrando o estilo
    <Link
      to={{
        pathname: `product/${productURI}`,
        state: { product: { image, name, price } },
      }}
      className="products__card card"
    >
      {/* <li className="products__card card"> */}
      <div className="card">
        <img className="card__img" src={image} alt="" />
        <p className="card__description">{name}</p>
        <p className="card__price">R$ {price}</p>
      </div>
      {/* </li> */}
    </Link>
  )
}

function ProductsPage() {
  const [products, setProducts] = useState<IProduct[] | []>([])
  const [filters, setFilters] = useState<IFilter[]>([])

  const { filter } = useContext(FilterContext)
  const { addRequest, removeRequest } = useContext(LoadingContext)
  const { setMessage } = useContext(MessageContext)

  // eslint-disable-next-line
  useEffect(() => loadProducts(), [])

  function loadProducts() {
    addRequest()
    ProductsService.get()
      .then((r) => {
        setProducts(r.products)
        setFilters(r.filters)
      })
      .catch(() => setMessage('Ocorreu um erro ao carregar os produtos...'))
      .finally(() => removeRequest())
  }

  return (
    <main className="main">
      <Breadcrumbs />
      <Filters filters={filters} />
      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            {products
              .filter((p: IProduct) =>
                filter
                  ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
                  : true,
              )
              .map((p: IProduct) => (
                <Product
                  key={p.sku}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                />
              ))}
          </ol>
        </div>
        <div className="products__row">
          <ol className="products__list" />
        </div>
      </section>
    </main>
  )
}

export default ProductsPage
