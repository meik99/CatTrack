'use server'

import { logout } from '@payloadcms/next/auth'
import config from '@payload-config'
import { redirect } from 'next/navigation'

export async function handleLogout() {
  await logout({ config })
  redirect("/cats")
}
