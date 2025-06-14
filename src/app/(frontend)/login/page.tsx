import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import { login } from '@payloadcms/next/auth'
import { redirect } from 'next/navigation'

async function handleLogin(data: any) {
  'use server'

  const { user } = await login({
    collection: 'users',
    config: config,
    email: data.get('email'),
    password: data.get('password'),
  })

  if (user) {
    redirect('/cats')
  }
}

export default async function LoginPage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect('/cats')
  }

  return (
    <div className="flex flex-col items-center h-screen justify-center mt-[-32px]">
      <form className="card w-fit md:w-[550px]" action={handleLogin}>
        <div className="card-body">
          <h2 className='card-title'>Login into Cat Track</h2>
          
          <hr className="divider my-6" />
          
          <div className="input-group mb-4">
            <label>E-Mail</label>
            <input type="email" placeholder="user@email.com" name="email"></input>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="******" name="password"></input>
          </div>
          
          <hr className="divider my-6" />
          
          <button type="submit" className="button button-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
