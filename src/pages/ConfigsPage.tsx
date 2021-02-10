import React from 'react'
import { MainHeader } from '../components/Layout/MainHeader'
import { Layout } from '../components/Layout'
import { MainContentArea } from '../components/Layout/MainContentArea'
import { MainHeading } from '../components/shared/Heading'

export function ConfigsPage() {
  return (
    <Layout title="Configs">
      <MainHeader>
        <MainHeading>Configs page</MainHeading>
      </MainHeader>
      <MainContentArea>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ipsum nisi, doloremque
          odit vel ut accusantium omnis voluptate, totam eum voluptas tempore in! Cumque iusto neque
          corrupti dicta debitis aliquid.
        </p>
      </MainContentArea>
    </Layout>
  )
}
