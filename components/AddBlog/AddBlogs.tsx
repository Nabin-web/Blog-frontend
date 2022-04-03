import axios, { AxiosRequestHeaders } from 'axios'
import { useRouter } from 'next/router'

import React, { useEffect } from 'react'

const AddBlog = () => {
  const route = useRouter()
  const [userId, setUserId] = React.useState('')
  const [blogData, setBlogData] = React.useState({
    title: '',
    description: '',
  })
  const [auth, setAuth] = React.useState({
    config: {
      headers: {},
    },
  })

  useEffect(() => {
    const id = localStorage.getItem('userId')
    setUserId(id ?? '')
    const token = localStorage.getItem('token')
    setAuth({
      ...auth,
      config: {
        headers: { Authorization: `Bearer ${token}` },
      },
    })
  }, [])

  const onhandleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setBlogData({
      ...blogData,
      [name]: value,
    })
    console.log('bllogdata', blogData)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = await axios.post(
        'http://localhost:5000/insert/' + userId,
        blogData,
        auth.config as unknown as AxiosRequestHeaders
      )
      if (data.data.success) {
        route.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className=" md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={onSubmit} action="#" method="POST">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    value={blogData.title}
                    onChange={onhandleChanges}
                    id="Title"
                    name="title"
                    type="text"
                    required
                    className="relative mb-2 block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter titile"
                  />
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      value={blogData.description}
                      onChange={onhandleChanges}
                      id="about"
                      name="description"
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="description"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description about the topic
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
