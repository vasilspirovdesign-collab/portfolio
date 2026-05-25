import { t } from '../theme'
import InnerHeader from './InnerHeader'
import SidebarNav from './SidebarNav'

export default function PageLayout({ dark, onToggle, onHome, crumbs, tabs, activeTab, onTabChange, mainStyle, children }) {
  return (
    <div className="transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Geist, system-ui, sans-serif' }}>
      <InnerHeader dark={dark} onToggle={onToggle} onHome={onHome} crumbs={crumbs} />
      <div style={{ display: 'flex', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
        <main
          className="page-enter"
          style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px', minHeight: 'calc(100vh - 64px)', ...mainStyle }}
        >
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
