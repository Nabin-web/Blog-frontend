import axios, { AxiosRequestHeaders } from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { PostCard, PostWidget } from '../components/index'
import React, { useEffect } from 'react'

const Home: NextPage = () => {
  const [posts, setPosts] = React.useState([])
  const [auth, setAuth] = React.useState({
    config: {
      headers: '',
    },
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    setAuth({
      ...auth,
      config: {
        headers: `Bearer ${token}`,
      },
    })
  }, [])
  const fetchPost = async () => {
    const data: any = await axios.get(
      'http://localhost:5000/posts',
      auth.config as AxiosRequestHeaders
    )
    setPosts(data.data.data)
    console.log(data.data.data)
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <title> Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12  lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts &&
            Array.isArray(posts) &&
            posts.map((post, index) => (
              <PostCard post={post} index={index} key={index} />
            ))}
        </div>
        <div className="col-span-1 lg:col-span-1">
          <div className="lg-sticky relative">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const auth = {
//     config: {
//       headers: `Bearer ${localStorage.getItem('token')}`,
//     },
//   }
//   const data = await axios.get(
//     'http://localhost:5000/posts',
//     auth.config as AxiosRequestHeaders
//   )
//   return { props: data, revalidate: 10 }
// }

export default Home
