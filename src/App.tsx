import { FloatButton, Layout, Typography } from 'antd'
import { SiteHeader } from './components/SiteHeader'
import { site } from './config/site'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

const { Content, Footer } = Layout
const { Text } = Typography

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <Content style={{ maxWidth: 960, margin: '0 auto', width: '100%', paddingInline: 24 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">
          © {new Date().getFullYear()} {site.name}. Built with React, Vite, and Ant Design.
        </Text>
      </Footer>
      <FloatButton.BackTop />
    </Layout>
  )
}

export default App
