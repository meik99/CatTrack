import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import { login } from '@payloadcms/next/auth'

async function handleLogin(data: any) {
  'use server'
  const payloadConfig = await config

  const { user } = await login({
    collection: 'users',
    config: config,
    email: data.get('email'),
    password: data.get('password'),
  })
}

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="flex flex-col">
      <form className="m-auto p-8 shadow" action={handleLogin}>
        <h2>Login into Cat Track</h2>
        and start managing your cats
        <hr className="divider" />
        <div className="input-group mb-4">
          <label>E-Mail</label>
          <input type="email" placeholder="user@email.com" name="email"></input>
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="******" name="password"></input>
        </div>
        <hr className="divider" />
        <button type="submit" className="button button-primary">
          Login
        </button>
      </form>
    </div>
  )
}
