import { Divider as AntDivider, Layout } from "antd"
import { ItemType } from "antd/es/menu/hooks/useItems"
import Head from "next/head"
import { ReactNode } from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { PageHeaderProps } from "./PageHeader"

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
  pageHeaderTitle,
}: DefaultPageTemplateProps) {
  const items: ItemType[] = [
    {
      label: "Programs",
      key: `/stake/[network]`,
    },
  ]

  return (
    <>
      {!skipMetaTags && (
        <Head>
          <title>Nftfy Rewards</title>
          <meta property="title" content="Nftfy Rewards" />
          <meta
            name="description"
            content="app.rewards.nftfy.org is a decentralized protocol where you can own rewards staking tokens."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://app.rewards.nftfy.org/" />
          <meta property="og:title" content="Nftfy - Rewards Program" />
          <meta
            property="og:description"
            content="app.rewards.nftfy.org is a decentralized protocol where you can own rewards staking tokens."
          />
          <meta property="og:image" content="https://nftfy.org/nftfy.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://nftfy.org/" />
          <meta name="twitter:title" content="Nftfy - Rewards Program" />
          <meta
            name="twitter:description"
            content="app.rewards.nftfy.org is a decentralized protocol where you can own rewards staking tokens."
          />
          <meta name="twitter:image" content="https://nftfy.org/nftfy.jpg" />
        </Head>
      )}
      <Layout>
        <Header title="Rewards" items={items} />
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
  `,
}
