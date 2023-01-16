import Layout from '@/components/Layout'
import data from '@/utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetail() {
    const router = useRouter()
    const {slug} = router.query
    const product = data.products.find((x)=> x.slug === slug)

    if(!product){
        return <h1>Product not Found</h1>
    }
  return (
    <Layout title={product.name}>
        <div className='py-2'>
            <Link href='/'>back to products</Link>
        </div>
    </Layout>
  )
}
