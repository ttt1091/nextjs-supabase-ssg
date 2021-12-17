import { FC } from 'react'
import { getProducts, sendPosts } from '../../libs/product'

type Props = {
  products: any[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key="{product.id}">
          {product.date} / ({product.week})
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts();
  // sendPosts() ここを外すとDB登録が出来る
  return {
    props: {
      products,
    },
  }
}

export default Products;