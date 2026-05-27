import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import hederaIntro from '../assets/hedera-intro.png'
import hederaChallenge from '../assets/hedera-challenge.png'
import hederaProblem from '../assets/hedera-problem.png'
import hederaRole from '../assets/hedera-role.png'
import hederaProcess from '../assets/hedera-process.png'
import hederaSolution from '../assets/hedera-solution.png'
import hederaDecisions from '../assets/hedera-decisions.png'
import hederaLearned from '../assets/hedera-learned.png'

const PROJECT = 'Hedera Transaction Tool'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/249567625/Transaction-Tool' },
]

export default function HederaPage({ dark, onBack, onHome, onToggle }) {
  const [activeTab, setActiveTab] = useState('Introduction')
  useEffect(() => { document.title = `${PROJECT} - Vasil Spirov` }, [])

  const textPrimary = t(dark, 'text')

  return (
    <PageLayout
      dark={dark}
      onToggle={onToggle}
      onHome={onHome || onBack}
      crumbs={[{ label: 'Projects', onClick: onBack }, { label: PROJECT }]}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

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
                    'Transaction Tool is a desktop application built for Hedera council members to execute critical network operations - including treasury management, file updates, token transfers, and software upgrades - through a secure, collaborative signing environment.',
                    'The platform serves two distinct user types - business users and technical power users - each operating with different levels of blockchain fluency but sharing the same need for auditability and operational confidence.',
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
                    <li><strong>Business Users</strong> - clarity and confidence when initiating or reviewing transactions without deep technical knowledge</li>
                    <li><strong>Technical Power Users</strong> - full control over complex multi-party signing workflows, key management, and network-level operations</li>
                    <li><strong>Admins</strong> - oversight of organisation members, permissions, and account associations</li>
                  </ul>
                  <p style={{ margin: 0 }}>The platform covered six interconnected capability areas: transaction creation and signing, account management, token operations, consensus service, file service, and contact management - with no prior design system and a security-critical domain that offered no consumer UX patterns to reference.</p>
                  <p style={{ margin: 0 }}>The risk was a product that felt either too technical to trust or too simplified to be useful - at exactly the moments where operational errors are irreversible.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Problem' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaProblem} alt="Outdated Designs" loading="lazy" style={photoImg} />
              </div>
              <p style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: dark ? '#a2a3a5' : '#757575' }}>Outdated Designs</p>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>The challenge was not the interface itself, but designing confidence into irreversible actions.</p>
                  <p style={{ margin: 0 }}>Existing tools available to Hedera council members provided insufficient coverage of transaction types and lacked support for multi-party signing workflows. Council operations — treasury transfers, network upgrades, software updates — required coordinated action across multiple keyholders, yet no tooling existed to support that process in a secure or legible way.</p>
                  <p style={{ margin: 0 }}>Another constraint was the breadth of users. The same interface needed to serve both a business user signing a transaction for the first time and a developer managing key pairs and batch operations at scale. Designing for the least technical user without limiting the most advanced one required careful layering at every interaction point.</p>
                  <p style={{ margin: 0 }}>At the core, both challenges reflected the same issue: users needed to act with certainty in environments where certainty is inherently difficult. The design had to surface the right information at the right moment, so high-stakes decisions felt informed rather than blind.</p>
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
                  <p style={{ margin: 0 }}>Lead UX Designer - Full ownership from discovery through UI delivery and handoff.</p>
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
              <div style={photoCard(dark)}>
                <img src={hederaProcess} alt="Process" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
                <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li><strong>Establishing an Initial Action Plan</strong> - Rather than designing by feature area, I mapped user journeys against operational risk and signing complexity. This directed early effort toward the flows with the highest consequence - transaction creation, multi-signature collection, and key setup - before any account management or secondary surfaces.</li>
                  <li><strong>Discovery</strong> - Stakeholder sessions with the Limechain team surfaced the governance requirements behind the product: who signs what, in what order, and what constitutes a valid submission. This defined the constraints that shaped every subsequent design decision.</li>
                  <li><strong>Competitive Analysis</strong> - Reviewed existing Hedera tooling alongside analogous multi-signature interfaces in hardware wallet and institutional custody products to identify gaps in clarity, signing transparency, and error recovery.</li>
                  <li><strong>Information Architecture</strong> - Mapped the full IA for both admin and user roles before any UI work began. The two role structures shared navigation patterns but diverged significantly in available actions - surfacing these differences early prevented inconsistency at prototype stage.</li>
                  <li><strong>Wireframes and Prototype</strong> - Maintained low fidelity through two rounds of structural feedback before moving to visual design. Pressure to progress to high fidelity came early; holding at lo-fi preserved the ability to restructure flows without compounding visual debt.</li>
                  <li><strong>Style Guide and UI Design</strong> - Built a dark-mode component library anchored in the purple/near-black palette appropriate for a security-critical professional tool. Inter was selected for its technical legibility at small sizes across dense data views.</li>
                </ol>
              </div>
            </>
          )}

          {activeTab === 'Key Decisions' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaDecisions} alt="Key Decisions" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Design for the signer who has never signed before, not the one who does it daily. Multi-signature workflows are opaque by default - keys, thresholds, and confirmation states are invisible unless explicitly surfaced. I designed the signing flow to make each party&apos;s action visible in real time, with explicit confirmation states at every step. Power users lose no capability; first-time signers gain the context they need to act with confidence.</p>
                  <p style={{ margin: 0 }}>One architecture, two role surfaces. Rather than building separate navigation structures for admin and user roles, I mapped both onto a shared IA and introduced role-specific visibility at the action level. This reduced cognitive overhead for users moving between roles and simplified developer implementation without sacrificing access control precision.</p>
                  <p style={{ margin: 0 }}>Treat irreversibility as a design constraint, not a warning. Blockchain transactions cannot be undone. Rather than relying on confirmation dialogs as a catch-all, I introduced progressive disclosure throughout the transaction creation flow - surfacing fee estimates, recipient details, and signing requirements before any commitment point. The goal was informed action, not friction for friction&apos;s sake.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Solution' && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaSolution} alt="Solution" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Transactions · Accounts · Tokens · Consensus Service · File Service · Contact List</p>
                  <p style={{ margin: 0 }}>The final solution was a desktop application covering six operational areas across two user roles, built on a shared component system with role-aware access controls.</p>
                  <p style={{ margin: 0 }}><strong>Multi-Signature Transaction Workflow</strong> - A five-stage signing pipeline (Create → Review → Share → Sign → Execute) with real-time visibility into each collaborator&apos;s action and automatic collation and submission of completed signatures.</p>
                  <p style={{ margin: 0 }}><strong>Secure Key and Identity Management</strong> - Local key generation and recovery phrase handling, wallet integration for signing, and configurable role-based permissions scoped to the organisation level.</p>
                  <p style={{ margin: 0 }}><strong>Batch Transaction Support</strong> - Token transfers to multiple accounts and bulk account or topic updates executed within a single flow, reducing operational overhead for high-volume council actions.</p>
                  <p style={{ margin: 0 }}><strong>Hedera Asset Management</strong> - Direct access to network files, preparation of upgrades for Testnet and Mainnet, and management of special network configuration files.</p>
                  <p style={{ margin: 0 }}><strong>Time-Delayed Transaction Execution</strong> - Transactions built and staged for execution at a future timestamp, enabling scheduled mainnet updates and consensus-aligned governance actions.</p>
                  <p style={{ margin: 0 }}><strong>Privacy-Aware Collaboration</strong> - Encrypted storage and sharing for security-related updates, NDA-bound transactions, and council-only operations.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === "Things I've learned.." && (
            <>
              <div style={photoCard(dark)}>
                <img src={hederaLearned} alt="Things I've learned" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
                <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li><strong>Security-critical products require trust to be designed, not assumed.</strong> Early in the project I treated confirmation states as a final-step concern. When mapped against the full signing journey, it became clear that trust had to be established at every handoff point - not just before submission. Retrofitting trust signals into a flow that wasn&apos;t built around them is significantly more expensive than designing for them from the start.</li>
                  <li><strong>Role-based design debt compounds faster than visual debt.</strong> The decision to share a single IA across admin and user roles required careful discipline throughout. Every component, every action, every empty state needed to be considered from both perspectives simultaneously. Documenting role logic in the IA before any UI work began was the single decision that made the rest of the project tractable.</li>
                  <li><strong>Domain expertise from the client is a design input, not just a brief.</strong> The Hedera governance model - thresholds, key types, transaction categories - had no accessible analogues in consumer product design. Regular working sessions with the technical team to pressure-test interaction assumptions prevented several flows that would have been technically invalid from reaching prototype stage.</li>
                </ul>
              </div>
            </>
          )}

    </PageLayout>
  )
}
