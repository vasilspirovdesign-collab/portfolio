import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import InnerHeader from '../components/InnerHeader'
import SidebarNav from '../components/SidebarNav'
import hederaIntro from '../assets/hedera-intro.png'
import hederaChallenge from '../assets/hedera-challenge.png'
import hederaProblem from '../assets/hedera-problem.png'
import hederaRole from '../assets/hedera-role.png'

const PROJECT = 'Hedera Transaction Tool'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
]

export default function HederaPage({ dark, onBack, onHome, onToggle }) {
  const [activeTab, setActiveTab] = useState('Introduction')
  useEffect(() => { document.title = `${PROJECT} — Vasil Spirov` }, [])

  const textPrimary = dark ? '#d0d2d0' : '#414141'

  return (
    <div className="transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), fontFamily: 'Geist, system-ui, sans-serif' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onHome || onBack}
        crumbs={[{ label: 'Projects', onClick: onBack }, { label: PROJECT }]}
      />

      <div style={{ display: 'flex', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <SidebarNav dark={dark} tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="page-enter" style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '24px', minHeight: 'calc(100vh - 64px)' }}>
          <div key={activeTab} className="tab-enter" style={{ display: 'contents' }}>

          {activeTab === 'Introduction' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaIntro} alt="Hedera Transaction Tool" loading="lazy" style={photoImg} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Hedera Transaction Tool</h1>
                  <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: UX Designer</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    'Transaction Tool is a desktop application built for Hedera council members to execute critical network operations — including treasury management, file updates, token transfers, and software upgrades — through a secure, collaborative signing environment.',
                    'The platform serves two distinct user types — business users and technical power users — each operating with different levels of blockchain fluency but sharing the same need for auditability and operational confidence.',
                    'The engagement required designing a tool from the ground up for a domain with no established UX conventions: multi-signature blockchain workflows where a single misstep carries real financial and governance consequences.',
                  ].map((para, i) => (
                    <p key={i} style={{ margin: 0, ...bodyText, color: textPrimary }}>{para}</p>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'Challenge' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaChallenge} alt="Challenge" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Designing for high-stakes operations where trust is the interface.</p>
                  <p style={{ margin: 0 }}>A single product had to serve users with fundamentally different mental models:</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Business Users</strong> — clarity and confidence when initiating or reviewing transactions without deep technical knowledge</li>
                    <li><strong>Technical Power Users</strong> — full control over complex multi-party signing workflows, key management, and network-level operations</li>
                    <li><strong>Admins</strong> — oversight of organisation members, permissions, and account associations</li>
                  </ul>
                  <p style={{ margin: 0 }}>The platform covered six interconnected capability areas: transaction creation and signing, account management, token operations, consensus service, file service, and contact management — with no prior design system and a security-critical domain that offered no consumer UX patterns to reference.</p>
                  <p style={{ margin: 0 }}>The risk was a product that felt either too technical to trust or too simplified to be useful — at exactly the moments where operational errors are irreversible.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Problem' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaProblem} alt="Outdated Designs" loading="lazy" style={photoImg} />
              </div>
              <p style={{ margin: 0, fontFamily: 'Geist, system-ui, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: dark ? '#a2a3a5' : '#757575' }}>Outdated Designs</p>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>The hardest problem wasn&apos;t the interface. It was designing confidence into irreversible actions.</p>
                  <p style={{ margin: 0 }}>Existing tools available to Hedera council members provided insufficient coverage of transaction types and no support for multi-party signing workflows. Council operations — treasury transfers, network upgrades, software updates — required coordinated action across multiple keyholders, with no tooling built to support that process securely or legibly.</p>
                  <p style={{ margin: 0 }}>The parallel challenge was user range. The same interface had to serve a business user signing a transaction for the first time and a developer managing key pairs and batch operations at scale. Designing for the least technical user without stripping capability from the most technical one required deliberate layering at every interaction point.</p>
                  <p style={{ margin: 0 }}>Both problems shared a root: users needed to act with certainty in a context where certainty is structurally hard to provide. The design had to surface enough information — at the right moment — to make high-stakes decisions feel informed rather than blind.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'My Role' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaRole} alt="My Role" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Lead UX Designer — Full ownership from discovery through UI delivery and handoff.</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Stakeholder interviews</strong> to define operational requirements and governance constraints</li>
                    <li><strong>Competitive review</strong> of existing Hedera tooling and analogous signing interfaces</li>
                    <li><strong>Information architecture</strong> for two distinct user roles across six capability areas</li>
                    <li><strong>Low-fidelity and mid-fidelity wireframes</strong> across all core flows</li>
                    <li><strong>Interactive Figma prototype</strong> for stakeholder validation</li>
                    <li><strong>Style guide, component library, and design tokens</strong></li>
                    <li><strong>High-fidelity UI delivery</strong> across all screens</li>
                    <li><strong>Design QA and specification support</strong> during developer handoff</li>
                  </ul>
                  <p style={{ margin: 0 }}>Tools: Figma · FigJam · Notion</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Process' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
                <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li><strong>Establishing an Initial Action Plan</strong> — Rather than designing by feature area, I mapped user journeys against operational risk and signing complexity. This directed early effort toward the flows with the highest consequence — transaction creation, multi-signature collection, and key setup — before any account management or secondary surfaces.</li>
                  <li><strong>Discovery</strong> — Stakeholder sessions with the Limechain team surfaced the governance requirements behind the product: who signs what, in what order, and what constitutes a valid submission. This defined the constraints that shaped every subsequent design decision.</li>
                  <li><strong>Competitive Analysis</strong> — Reviewed existing Hedera tooling alongside analogous multi-signature interfaces in hardware wallet and institutional custody products to identify gaps in clarity, signing transparency, and error recovery.</li>
                  <li><strong>Information Architecture</strong> — Mapped the full IA for both admin and user roles before any UI work began. The two role structures shared navigation patterns but diverged significantly in available actions — surfacing these differences early prevented inconsistency at prototype stage.</li>
                  <li><strong>Wireframes and Prototype</strong> — Maintained low fidelity through two rounds of structural feedback before moving to visual design. Pressure to progress to high fidelity came early; holding at lo-fi preserved the ability to restructure flows without compounding visual debt.</li>
                  <li><strong>Style Guide and UI Design</strong> — Built a dark-mode component library anchored in the purple/near-black palette appropriate for a security-critical professional tool. Inter was selected for its technical legibility at small sizes across dense data views.</li>
                </ol>
              </div>
            </>
          )}

          {activeTab === 'Key Decisions' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === 'Solution' && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          {activeTab === "Things I've learned.." && (
            <>
              <div style={photoCard(dark)} />
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
                <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Content coming soon.</p>
              </div>
            </>
          )}

          </div>
        </main>
      </div>
    </div>
  )
}
