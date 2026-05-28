import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import carbonChainProcess from '../assets/carbonchain-process.png'
import carbonChainIntro from '../assets/carbonchain-intro.png'
import carbonChainChallenge from '../assets/carbonchain-challenge.png'
import carbonChainProblem from '../assets/carbonchain-problem.png'
import carbonChainSolution from '../assets/carbonchain-solution.png'
import carbonChainRole from '../assets/carbonchain-role.png'

const PROJECT = 'Rowan Carbon Chain'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/242433013/The-Carbon-Chain' },
]

export default function CarbonChainPage({ dark, onBack, onHome, onToggle }) {
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
                <img src={carbonChainIntro} alt="Rowan Carbon Chain" loading="lazy" style={photoImg} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Rowan Carbon Chain</h1>
                  <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Researcher · UX/UI Designer · 6 Months</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    'Rowan Carbon Chain is a blockchain-based platform for issuing, managing, and retiring carbon offset certificates - enabling energy producers to tokenize verified offset data via smart contracts and transfer certificates to organisations looking to offset their carbon footprint.',
                    'The platform serves two distinct organisational contexts - producers and customers - each with multiple user roles ranging from financial directors approving certificate transfers to data entry operators submitting manual readings from physical devices on-site.',
                    'Five user roles, two organisational contexts, a certificate lifecycle spanning raw sensor readings to blockchain-issued ERC-721 tokens - and a regulatory audit trail as the core product value, not a feature.',
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
                <img src={carbonChainChallenge} alt="Challenge" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Designing for a market where data integrity is the product.</p>
                  <p style={{ margin: 0 }}>A single platform had to serve five user types with fundamentally different goals and levels of technical fluency:</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Admin (Financial Director level)</strong> - full control over devices, certificate approvals, user management, and certificate transfers</li>
                    <li><strong>Data Entry Operator</strong> - manual feedstock entry from spreadsheets, requiring a guided and forgiving input flow</li>
                    <li><strong>View-Only User</strong> - read access to platform data with no input capability</li>
                    <li><strong>Customer Financial Director</strong> - certificate requests, retirement, and wallet-based transfers</li>
                    <li><strong>Customer QA/QC</strong> - detailed provenance monitoring of offset origin and process data</li>
                  </ul>
                  <p style={{ margin: 0 }}>The platform covered the full carbon offset lifecycle: source device registration, raw readings ingestion, carbon credit generation, certificate issuance and approval, and retirement - across both automated smart device inputs and manual data imports, with no pre-existing design system to build from.</p>
                  <p style={{ margin: 0 }}>The risk was a platform that obscured the audit trail it was built to provide - technically functional but impossible to trust at the moments that determined regulatory credibility.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Problem' && (
            <>
              <div style={photoCard(dark)}>
                <img src={carbonChainProblem} alt="Problem" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>A carbon certificate is only as credible as the data trail behind it - and that trail spans devices, operators, process stages, and blockchain transactions that most users never see and can&apos;t interpret. The design problem was making that trail legible without making it overwhelming.</p>
                  <p style={{ margin: 0 }}>Carbon offset certificates derive their value entirely from the integrity of the data behind them. The platform&apos;s blockchain foundation introduced a class of UX problems that conventional data management patterns do not solve. Users needed to trace a certificate back through readings, devices, operators, and process stages - and trust what they found at every step.</p>
                  <p style={{ margin: 0 }}>The parallel challenge on the producer side was structural: the same interface had to support both automated SmartMiner device inputs and manual spreadsheet-based data entry from on-site operators, with each input type carrying different validation requirements, error states, and operator accountability.</p>
                  <p style={{ margin: 0 }}>Both problems were versions of the same root issue - a system where trust is earned through transparency, but transparency requires deliberate design decisions at every layer of the data model. The design had to surface provenance without overwhelming the users whose primary job is not data management.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'My Role' && (
            <>
              <div style={photoCard(dark)}>
                <img src={carbonChainRole} alt="My Role" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Lead UX/UI Designer and Researcher - Full ownership from discovery through UI delivery.</p>
                  <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>Domain research</strong> into carbon offset markets, biomethane production processes, and blockchain certificate mechanics</li>
                    <li><strong>Stakeholder interviews</strong> to map user roles, operational workflows, and regulatory constraints</li>
                    <li><strong>Information architecture</strong> across five user roles and two organisational contexts</li>
                    <li><strong>Sitemap and user flow mapping</strong> for all core journeys</li>
                    <li><strong>Low-fidelity and mid-fidelity wireframes</strong> across all surfaces</li>
                    <li><strong>Style guide, component library, and design tokens</strong></li>
                    <li><strong>High-fidelity UI delivery</strong> across light and dark modes</li>
                    <li><strong>Design QA and handoff support</strong></li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Process' && (
            <>
              <div style={photoCard(dark)}>
                <img src={carbonChainProcess} alt="Process" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
                <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li><strong>Domain Research First</strong> - The carbon offset market is structurally complex and heavily regulated. Before any design work began, I mapped the full biomethane production process - feedstock inputs, anaerobic digestion, biogas outputs, carbon intensity calculations - to understand what data the platform needed to capture and why each data point mattered to the certificate&apos;s integrity.</li>
                  <li><strong>User Role Mapping</strong> - Stakeholder sessions revealed five distinct user types across two organisational contexts, each with different permissions, mental models, and operational cadences. Mapping these explicitly before touching IA prevented the role-permission conflicts that typically surface late in platforms of this complexity.</li>
                  <li><strong>Information Architecture</strong> - Mapped the full IA for both producer and customer contexts before any UI work began. The admin and user role structures shared a navigation framework but diverged significantly in available actions - resolving this at IA stage avoided costly restructuring at prototype stage.</li>
                  <li><strong>Wireframes and Flows</strong> - Maintained low fidelity through two structural feedback rounds covering the core certificate lifecycle: device registration, readings submission, credit generation, certificate approval, and transfer. The multi-step source registration flow and certificate approval modal required particular iteration to balance completeness with operator speed.</li>
                  <li><strong>Style Guide and Component Library</strong> - Built a shared component library supporting both light and dark modes, anchored in an orange/near-black palette that communicated environmental credibility without defaulting to generic green. Components were designed to handle the data density of readings tables and certificate lists without sacrificing scannability.</li>
                </ol>
              </div>
            </>
          )}

          {activeTab === 'Key Decisions' && (
            <>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Treat provenance as a navigation problem, not a data problem. Early explorations surfaced too much raw data on primary views. The key decision was to layer the audit trail - summary metrics on the dashboard, certificate-level detail one level deep, readings and device data accessible from there. Users who need the full chain can reach it; users who don&apos;t are never overwhelmed by it.</p>
                  <p style={{ margin: 0 }}>Design for the manual entry operator, not the automated system. The platform was designed around smart device integrations, but a significant portion of real-world data entry comes from operators submitting manual readings from physical logs. Rather than treating manual input as an edge case, I designed the readings submission flow with clear field labelling, inline validation, and explicit blockchain transaction warnings - acknowledging that these users are entering data under operational pressure, not in controlled conditions.</p>
                  <p style={{ margin: 0 }}>Two modes, one design system. Rather than designing light and dark as separate visual themes, I built the component library around a shared token structure from the start. This enforced consistency across both modes, reduced design debt, and simplified developer implementation. The dark mode was not cosmetic - for on-site operators using the platform in low-light environments, it was an operational requirement.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Solution' && (
            <>
              <div style={photoCard(dark)}>
                <img src={carbonChainSolution} alt="Solution" loading="lazy" style={photoImg} />
              </div>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
                <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  <p style={{ margin: 0 }}>Dashboard · Sources · Certificates · Carbon Credits · Readings · Users</p>
                  <p style={{ margin: 0 }}>The final solution was a role-aware web platform covering the full carbon offset certificate lifecycle, from raw device readings through to blockchain-issued and retired ERC-721 certificates, built on a shared design system supporting both light and dark modes.</p>
                  <p style={{ margin: 0 }}><strong>Dashboard</strong> - At-a-glance summary of total carbon offset, certificates issued, and pending requests, with an offset trend chart and inline readings and credits tables providing immediate operational context without requiring navigation.</p>
                  <p style={{ margin: 0 }}><strong>Source and Device Management</strong> - A four-step source registration wizard (Share · Devices · Measurements · Control) supporting both smart automated devices and manual data import paths, with location coordinates, carbon impact classification, and operator assignment.</p>
                  <p style={{ margin: 0 }}><strong>Readings Submission</strong> - Per-device manual reading entry with image upload, date and value fields, inline validation, and an explicit blockchain transaction warning surfaced before submission - making the irreversibility of each entry legible before commitment.</p>
                  <p style={{ margin: 0 }}><strong>Certificate Lifecycle</strong> - Full certificate management from request through approval, including a carbon credits bundling modal that surfaces the constituent credits, offset amount, and due date before issuance. Status tracking across Active, Retired, Pending, and Split states visible at the list level.</p>
                  <p style={{ margin: 0 }}><strong>User and Role Management</strong> - Structured onboarding and role assignment across five permission levels, with organisation-scoped access controls and operator-per-source constraints enforced at the data model level.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === "Things I've learned.." && (
            <>
              <div style={contentBlock}>
                <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
                <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
                  <li><strong>Domain complexity is a design input, not background reading.</strong> Early in the project I treated the biomethane production process as context. When I mapped it against the data model, it became clear that the certificate&apos;s credibility depended on capturing specific process stages - and that gaps in that coverage were invisible in the UI but structurally significant. Understanding the domain deeply changed what I designed, not just how I described it.</li>
                  <li><strong>Role-permission design needs to be resolved before wireframes, not during them.</strong> Five user roles across two organisational contexts created a matrix of access states that became increasingly expensive to manage as fidelity increased. Resolving permission logic at the IA and user flow stage - before any component design - prevented the kind of late-stage inconsistency that erodes trust in a platform built around data integrity.</li>
                  <li><strong>Manual workflows deserve the same design rigour as automated ones.</strong> The platform&apos;s smart device integrations were the technically interesting part. But data entry operators submitting manual readings under time pressure were the highest-risk users in the system. Designing their flow with the same care as the certificate approval modal - clear states, explicit warnings, forgiving validation - was the decision that most improved real-world reliability.</li>
                </ul>
              </div>
            </>
          )}

    </PageLayout>
  )
}
