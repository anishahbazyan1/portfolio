import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Flex, Layout, Space, Typography } from 'antd'
import { site } from '../config/site'

const { Header } = Layout
const { Text, Link } = Typography

const nav = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: 24,
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <Flex align="center" gap="large" wrap>
        <Text strong style={{ fontSize: 16 }}>
          {site.name}
        </Text>
        <Space size="middle" wrap className="site-header-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </Space>
      </Flex>
      <Space size="small" wrap>
        <Button type="text" icon={<GithubOutlined />} href={site.social.github} target="_blank" rel="noreferrer" />
        <Button type="text" icon={<LinkedinOutlined />} href={site.social.linkedin} target="_blank" rel="noreferrer" />
        <Button type="primary" icon={<MailOutlined />} href={`mailto:${site.email}`}>
          Email
        </Button>
      </Space>
    </Header>
  )
}
