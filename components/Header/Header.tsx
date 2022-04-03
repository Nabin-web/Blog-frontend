import Link from 'next/link'
import React, { useEffect } from 'react'

const category = [
  { name: 'TypeScript', slug: 'webdev' },

  { name: 'Add', slug: 'react' },
]

const Header = () => {
  const [userName, setUserName] = React.useState('')
  const [auth, setAuth] = React.useState({
    config: {
      headers: {},
    },
  })

  useEffect(() => {
    const userName = localStorage.getItem('userName')
    setUserName(userName ?? '')
    const token = localStorage.getItem('token')
    setAuth({
      ...auth,
      config: {
        headers: { Authorization: `Bearer ${token}` },
      },
    })
  }, [])

  const handleSubmit = () => {
    console.log('CLICKED')
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="float-left cursor-pointer text-4xl font-bold text-white">
              Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <span>
            {auth ? (
              <>
                <Link key={1} href="/">
                  <button
                    onClick={handleSubmit}
                    className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right"
                  >
                    logout
                  </button>
                </Link>
              </>
            ) : (
              <Link key={1} href="/login">
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                  Login
                </span>
              </Link>
            )}
          </span>
        </div>

        <div className="hidden md:float-left md:contents">
          <span>
            {auth ? (
              <>
                <Link key={1} href="/">
                  <button
                    onClick={handleSubmit}
                    className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right"
                  >
                    {userName}
                  </button>
                </Link>
              </>
            ) : (
              <Link key={1} href="/login">
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                  Login
                </span>
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
