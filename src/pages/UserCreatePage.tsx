import React from 'react'
import { Layout } from '../components/Layout'
import { UserCreate } from '../components/UserCreate/'

export function UserCreatePage() {
  return (
    <Layout title="Add">
      <UserCreate />
    </Layout>
  )
}
