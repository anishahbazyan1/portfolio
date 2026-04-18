import { ExportOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import { site } from '../config/site'

const { Title, Paragraph } = Typography

export function ProjectsSection() {
  return (
    <section id="projects" style={{ paddingBlock: 48 }}>
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        {site.projects.map((project) => (
          <Col xs={24} md={12} key={project.title}>
            <Card
              title={project.title}
              extra={
                <Button type="link" href={project.link} target="_blank" rel="noreferrer" icon={<ExportOutlined />}>
                  Link
                </Button>
              }
            >
              <Paragraph>{project.description}</Paragraph>
              <Space wrap>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
