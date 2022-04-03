import Link from 'next/link'
import React, { useEffect } from 'react'

const Header = () => {
  const [userName, setUserName] = React.useState('')
  const [auth, setAuth] = React.useState({
    config: {
      headers: {},
    },
  })

  const [bool, setBool] = React.useState(false)

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

  useEffect(() => {
    bool && localStorage.clear()
  }, [bool])

  const handleSubmit = () => {
    console.log('CLICKED')
    setBool(!bool)
    window.location.href = '/login'
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="float-left cursor-pointer text-4xl font-bold text-white">
              BlogBook
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <span>
            {userName.length ? (
              <>
                <Link key={1} href="/">
                  <button
                    onClick={() => {
                      handleSubmit()
                    }}
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
            {userName ? (
              <>
                <Link key={1} href="/">
                  <button className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                    {userName}
                  </button>
                </Link>
              </>
            ) : (
              <Link key={1} href="/register">
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                  Register
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
