import React from 'react'
import Link from 'next/link'

const PostWidget = () => {
  const [show, setShow] = React.useState(false)
  return (
    <Link href="/blog">
      <div className="b mb-8 rounded-full bg-pink-800  shadow-lg transition duration-500 hover:-translate-y-1 hover:bg-cyan-800">
        <div className="relative inline-block text-left">
          <div>
            <span className="float-left  ml-3 mt-1 cursor-pointer p-4 text-4xl font-bold text-white">
              +
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostWidget
