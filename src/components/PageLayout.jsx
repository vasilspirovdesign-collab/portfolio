import { useState, useEffect, useCallback } from 'react'
import { t } from '../theme'
import InnerHeader from './InnerHeader'
import SidebarNav from './SidebarNav'

export default function PageLayout({ dark, onToggle, onHome, crumbs, tabs, activeTab, onTabChange, mainStyle, children }) {
  const [completedTabs, setCompletedTabs] = useState(new Set())

  const markCompleted = useCallback(() => {
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80
    if (atBottom) {
      setCompletedTabs(prev => {
        if (prev.has(activeTab)) return prev
        return new Set([...prev, activeTab])
      })
    }
  }, [activeTab])

  useEffect(() => {
    window.addEventListener('scroll', markCompleted, { passive: true })
    // also check on mount in case content is short
    markCompleted()
    return () => window.removeEventListener('scroll', markCompleted)
  }, [markCompleted])

  // re-check after tab switch (content height changes)
  useEffect(() => {
    const id = setTimeout(markCompleted, 50)
    return () => clearTimeout(id)
  }, [activeTab, markCompleted])

  return (
    <div className="transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <InnerHeader dark={dark} onToggle={onToggle} onHome={onHome} crumbs={crumbs} />
      <div style={{ display: 'flex', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={tabs} activeTab={activeTab} onTabChange={(tab) => { window.scrollTo({ top: 0, behavior: 'smooth' }); onTabChange?.(tab) }} completedTabs={completedTabs} />
        <main
          id="main-content"
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
