import { FC } from 'react'
// import { getProducts, sendPosts } from '../../libs/product'
import { getCalendar } from '../../../libs/2021/calendar'
import {
  Table,
  Tbody,
  Tr,
  Td,
  Box,
  Button,
  Code,
} from '@chakra-ui/react'
import Date from '../../../components/Date'
import Link from 'next/link'

type Props = {
  products: any[];
};

const Products: FC<Props> = ({ products }) => {
  return (
    <div>
      <Box>
        <Link href={`/products`}>
          <a>
            <Button colorScheme='teal'  size='md'>ALL</Button>
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
  const products = await getCalendar();
  return {
    props: {
      products,
    },
  }
}

export default Products;