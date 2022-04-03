import axios, { Axios } from 'axios'
import React, { FormEventHandler } from 'react'
import { useRouter } from 'next/router'

const Registration = () => {
  const [userData, setUserData] = React.useState({
    teamname: '',
    email: '',
    password: '',
  })
  const route = useRouter()

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = await axios.post('http://localhost:5000/register', userData)

    if (data.data.message) {
      route.push('/login')
    }
  }
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="bg-grey-lighter flex min-h-screen flex-col">
        <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
          <form
            onSubmit={handleSubmit}
            method="post"
            className="w-full rounded bg-white px-6 py-8 text-black shadow-md"
          >
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://p1.hiclipart.com/preview/43/927/753/now-wooden-b-logo-png-clipart.jpg"
                alt="Workflow"
              />
              <h2 className="mt-6 mb-2 text-center text-3xl font-extrabold text-gray-900">
                Create your account
              </h2>
            </div>
            <input
              type="text"
              value={userData.teamname}
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="teamname"
              placeholder="Full Name"
              onChange={onChangeHandle}
            />
            <input
              type="text"
              value={userData.email}
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="email"
              onChange={onChangeHandle}
              placeholder="Email"
            />
            <input
              value={userData.password}
              type="password"
              className="border-grey-light mb-4 block w-full rounded border p-3"
              name="password"
              onChange={onChangeHandle}
              placeholder="Password"
            />

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="border-blue text-blue border-b no-underline"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
