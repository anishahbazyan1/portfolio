import { EnvironmentOutlined } from '@ant-design/icons'
import { Card, Space, Typography } from 'antd'
import { site } from '../config/site'

const { Title, Paragraph } = Typography

export function AboutSection() {
  return (
    <section id="about" style={{ paddingBlock: 48 }}>
      <Title level={2}>About</Title>
      <Card>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Paragraph style={{ marginBottom: 0, fontSize: 16 }}>
            This starter is wired with React, TypeScript, Vite, pnpm, and Ant Design. Replace
            this paragraph with your story: what you focus on, teams you like to work with, and
            what you are looking for next.
          </Paragraph>
          <Paragraph type="secondary" style={{ marginBottom: 0 }}>
            <EnvironmentOutlined /> {site.location}
          </Paragraph>
        </Space>
      </Card>
    </section>
  )
}
