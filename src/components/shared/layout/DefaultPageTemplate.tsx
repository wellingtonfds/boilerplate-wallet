import { Divider as AntDivider, Layout } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import Head from 'next/head'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'
import { PageHeaderProps } from './PageHeader'

const { Content } = Layout

interface DefaultPageTemplateProps extends PageHeaderProps {
  children: ReactNode
  skipMetaTags?: boolean
}

export function DefaultPageTemplate({
  children,
  skipMetaTags,
  pageHeaderProps,
  pageHeaderAfter,
  pageHeaderTitle
}: DefaultPageTemplateProps) {
  const items: ItemType[] = [
    {
      label: 'Programs',
      key: `/stake/[network]`
    }
  ]

  return (
    <>
      {!skipMetaTags && (
        <Head>
          <title>Boiler Plate</title>
          <meta property='title' content='Boiler' />
        </Head>
      )}
      <Layout>
        <Header title='Boiler Plate' items={items} />
        <Divider />
        <Main>{children}</Main>
        <Footer />
      </Layout>
    </>
  )
}

const { Main, Divider } = {
  Main: styled(Content)`
    padding: 16px 24px;
    min-height: calc(100vh - 128px);
    max-width: calc(var(--screen-xl) - 48px);
    margin: 0 auto;
    width: 100%;
  `,
  Divider: styled(AntDivider)`
    margin: 0;
  `
}
