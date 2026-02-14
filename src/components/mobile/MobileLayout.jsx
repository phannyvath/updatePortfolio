import MobileHero from './MobileHero'
import MobileAbout from './MobileAbout'
import MobileSkills from './MobileSkills'
import MobileProjects from './MobileProjects'
import MobileExperience from './MobileExperience'
import MobileContact from './MobileContact'

const PAGES = {
  hero: MobileHero,
  about: MobileAbout,
  skills: MobileSkills,
  projects: MobileProjects,
  experience: MobileExperience,
  contact: MobileContact,
}

export default function MobileLayout({ activePage = 'hero', onNavigate }) {
  const PageComponent = PAGES[activePage] || MobileHero

  return (
    <div className="md:hidden min-h-screen h-screen overflow-hidden relative mobile-layout-bg">
      {/* Grid: theme-aware (yellow dark / blue light) */}
      <div className="mobile-layout-grid fixed inset-0 pointer-events-none z-0" />
      {/* Vignette: theme-aware */}
      <div className="mobile-layout-vignette fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10 h-full overflow-y-auto overflow-x-hidden">
        <PageComponent onNavigate={onNavigate} />
      </div>
    </div>
  )
}
