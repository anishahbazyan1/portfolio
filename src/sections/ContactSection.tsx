import { MailOutlined } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import { site } from '../config/site'

const { Title, Paragraph } = Typography

export function ContactSection() {
  return (
    <section id="contact" style={{ paddingBlock: 48, paddingBottom: 80 }}>
      <Title level={2}>Contact</Title>
      <Card>
        <Space direction="vertical" size="middle">
          <Paragraph style={{ marginBottom: 0 }}>
            Prefer email? Swap the address in <Typography.Text code>src/config/site.ts</Typography.Text>.
          </Paragraph>
          <Button type="primary" size="large" icon={<MailOutlined />} href={`mailto:${site.email}`}>
            {site.email}
          </Button>
        </Space>
      </Card>
    </section>
  )
}
