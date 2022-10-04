import { Col, Layout, Row, Typography } from 'antd'
import styled from 'styled-components'

const { Footer: AntFooter } = Layout
const { Text } = Typography

export function Footer() {
  return (
    <FooterContainer>
      <Row justify='space-between' align='middle'>
        <Col>
          <Text type='secondary'>codeToYou</Text>
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
