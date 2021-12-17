import { FC } from 'react'
import { getProducts } from '../../libs/product'

type Props = {
  products: any[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key="{product.id}">
          {product.title} / {product.body}
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  }
}

export default Products;