import { ArrowDownOutlined } from '@ant-design/icons'
import { Button, Space, Typography } from 'antd'
import { site } from '../config/site'

const { Title, Paragraph } = Typography

export function HeroSection() {
  return (
    <section id="hero" style={{ paddingBlock: 72 }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={1} style={{ marginBottom: 0 }}>
          {site.name}
        </Title>
        <Title level={3} type="secondary" style={{ marginTop: 0, fontWeight: 500 }}>
          {site.role}
        </Title>
        <Paragraph style={{ fontSize: 18, maxWidth: 640 }}>{site.tagline}</Paragraph>
        <Space wrap>
          <Button type="primary" size="large" href="#projects">
            View projects
          </Button>
          <Button size="large" href="#contact">
            Get in touch
          </Button>
          <Button type="link" size="large" href="#about" icon={<ArrowDownOutlined />}>
            About me
          </Button>
        </Space>
      </Space>
    </section>
  )
}
