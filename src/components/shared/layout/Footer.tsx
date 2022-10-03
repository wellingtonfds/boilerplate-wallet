import { Col, Image, Layout, Row, Typography } from 'antd'
import styled from 'styled-components'

const { Footer: AntFooter } = Layout
const { Text } = Typography

export function Footer() {
  return (
    <FooterContainer>
      <Row justify='space-between' align='middle'>
        <Col>
          <Text type='secondary'>Made by Nftfy</Text>
        </Col>
        <Col style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LinkButton href='https://bit.ly/3xdGR4k' target='_blank'>
            <Image src='/assets/icons/discord.svg' alt='discord' width={16} height={16} preview={false} />
          </LinkButton>
          <LinkButton href='https://twitter.com/nftfyofficial' target='_blank'>
            <Image src='/assets/icons/twitter.svg' alt='twitter' width={16} height={16} preview={false} />
          </LinkButton>
          <LinkButton href='https://www.linkedin.com/company/nftfy/' target='_blank'>
            <Image src='/assets/icons/linkedin.svg' alt='linkedIn' width={16} height={16} preview={false} />
          </LinkButton>
        </Col>
      </Row>
    </FooterContainer>
  )
}

const { FooterContainer, LinkButton } = {
  FooterContainer: styled(AntFooter)`
    border-top: 1px solid var(--gray-4);
  `,
  LinkButton: styled.a`
    cursor: pointer;
  `
}
