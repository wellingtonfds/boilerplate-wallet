import { ConnectButton } from "@web3modal/react"
import { Col, Layout, Menu, Row, Space, Typography } from "antd"
import { ItemType } from "antd/es/menu/hooks/useItems"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const { Header: AntHeader } = Layout
const { Title } = Typography

interface HeaderProps {
  title: string
  items: ItemType[]
}

export function Header({ title, items }: HeaderProps) {
  const router = useRouter()
  const [selectedKey, setSelectedKey] = useState<string>("")
  const screens = useBreakpoint()
  const isSmallDevices =
    (screens.xs || screens.sm) && !screens.md && !screens.lg

  useEffect(() => {
    setSelectedKey(router.route)
  }, [router.route])

  return (
    <AntHeader>
      <Row align="middle">
        <Col span={8}>
          <Space align="center" wrap size={12}>
            <Title style={{ fontWeight: "400" }} level={5}>
              {title}
            </Title>
          </Space>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "8px",
          }}
          span={16}
        >
          <Menu
            selectedKeys={[selectedKey]}
            mode="horizontal"
            style={{
              minWidth: "0",
              flexDirection: "row-reverse",
              flex: `${!isSmallDevices ? "1 0 auto" : ""}`,
            }}
            items={items}
          />
          <ConnectButton />
        </Col>
      </Row>
    </AntHeader>
  )
}
