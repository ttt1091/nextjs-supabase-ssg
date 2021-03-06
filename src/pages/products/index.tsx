import { FC } from 'react'
// import { getProducts, sendPosts } from '../../libs/product'
import { getProducts } from '../../libs/product'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Button,
  Code,
} from '@chakra-ui/react'
import Date from '../../components/Date'
import Link from 'next/link'

type Props = {
  products: any[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div>
      <Box>
        <Link href={`/products/2021`}>
          <a>
            <Button colorScheme='teal'  size='md'>2021</Button>
          </a>
        </Link>
      </Box>
      <Box>
        <Code>npm install date-fns</Code>
      </Box>
      <Box>
        <Table
        >
          <Tbody>
          {products.map((product) => (
            <Tr key="{product.id}">
              <Td>
                <Box>
                  <Date dateString={product.date} />
                </Box>
              </Td>
              <Td>({product.week})</Td>
              <Td>{product.holiday}</Td>
            </Tr>
          ))}
          </Tbody>
        </Table>
      </Box>
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