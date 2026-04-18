import { Card, Tag, Typography } from 'antd'
import { site } from '../config/site'

const { Title } = Typography

export function SkillsSection() {
  return (
    <section id="skills" style={{ paddingBlock: 48 }}>
      <Title level={2}>Skills</Title>
      <Card>
        {site.skills.map((skill) => (
          <Tag key={skill} color="processing" style={{ marginBottom: 8, fontSize: 14, padding: '4px 10px' }}>
            {skill}
          </Tag>
        ))}
      </Card>
    </section>
  )
}
