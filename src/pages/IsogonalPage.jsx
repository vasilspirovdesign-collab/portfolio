import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import isoqChallenge from '../assets/iso-q-challenge.png'
import isoqRole from '../assets/iso-q-role.png'

const PROJECT = 'ISO-Q Investment Platform'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
]

export default function IsogonalPage({ dark, onBack, onHome, onToggle }) {
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>ISO-Q Investment Platform</h1>
            <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Senior UX Designer · End-to-End Product Design · Design System</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'ISO-Q is a regulated investment platform that enables accredited institutional investors to discover, subscribe to, and hold interests in private funds — with support for both traditional and tokenized ownership structures, multiple funding currencies including crypto, and a full feeder fund formation and distribution layer built around AIFM regulatory oversight.',
              'The platform serves five distinct user types — Asset Managers, Fund Administrators, Investors, ISO-Q Admins, and the AIFM (Altarius) — each operating within a precisely defined permission structure, with fundamentally different goals, workflows, and levels of access to the same underlying fund and subscription data.',
              'The engagement required designing a product of considerable regulatory and operational complexity from the ground up: full information architecture across five role contexts, fifteen mapped use cases, multi-step onboarding wizards, document generation and review flows, NAV data management, KYC/AML integration, tokenization preference selection, Segregated Portfolio configuration, and an admin console spanning the entire platform lifecycle — delivered as a complete UX, UI, and design system package.',
            ].map((para, i) => (
              <p key={i} style={{ margin: 0, ...bodyText, color: textPrimary }}>{para}</p>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Challenge' && (
        <>
          <div style={photoCard(dark)}>
            <img src={isoqChallenge} alt="Challenge" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Designing a regulated investment platform where compliance is not a feature — it is the foundation.</p>
            <p style={{ margin: 0 }}>A single product had to serve five user types with fundamentally different mental models, permissions, and operational cadences:</p>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Asset Managers</strong> — a guided multi-step fund onboarding flow handling PPM uploads, AI-generated strategy summaries, share class configuration, fee terms, and lock-up structures, with progress persistence across sessions due to the complexity and length of each step</li>
              <li><strong>Fund Administrators</strong> — a focused, data-centric interface for NAV uploads and performance reporting, supporting automated feed integrations and manual drag-and-drop entry, with clear error handling for formatting issues and infrequent but high-stakes usage</li>
              <li><strong>Investors</strong> — a subscription flow communicating complex structural choices — AIFM-wrapped vs. direct, tokenized vs. traditional, bank wire vs. digital asset transfer — clearly enough for institutional decision-makers, while enforcing minimums, diversification rules, and KYC gates at the interface level</li>
              <li><strong>ISO-Q Admin</strong> — a full operations console covering user management, fund review, Segregated Portfolio configuration, document generation, AIFM submission coordination, funding confirmation, and token issuance across the full platform</li>
              <li><strong>AIFM (Altarius)</strong> — a streamlined approval portal surfacing compliance criteria, fund documentation, and allocation data for regulatory sign-off, with prominent approve/defer actions and minimal operational overhead post-approval</li>
            </ul>
            <p style={{ margin: 0 }}>The platform covered fifteen use cases across the complete fund investment lifecycle — from platform initialisation through fund onboarding, investor KYC, subscription, AIFM approval, funding confirmation, and token issuance — with no prior design system and a regulatory domain with exacting requirements at every interaction point.</p>
          </div>
        </div>
        </>
      )}

      {activeTab === 'Problem' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>The interface was not the hard part. Making five different users feel in control of the same regulated process — simultaneously — was.</p>
            <p style={{ margin: 0 }}>Private fund investment is structurally complex before any platform layer is added. Asset Managers are configuring legal and financial structures. Investors are making multi-million dollar commitments through a series of choices most platforms do not explain clearly. Fund Administrators are providing the operational data that determines reported fund value. The AIFM is approving structures that must meet specific regulatory thresholds before any subscription can proceed. The platform admin is coordinating all of them at once.</p>
            <p style={{ margin: 0 }}>The challenge was not building flows for each role in isolation. It was ensuring that actions taken by one role produced the right information state, the right notification, and the right next step for every other role that depended on them — without any individual user needing to understand the full system to complete their own part of it.</p>
            <p style={{ margin: 0 }}>Both dimensions pointed to the same root: a platform this interconnected fails not when individual flows break, but when the handoffs between roles are ambiguous, delayed, or invisible. The design had to make every cross-role dependency explicit, timely, and legible to the user whose next action depended on it.</p>
          </div>
        </div>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={photoCard(dark)}>
            <img src={isoqRole} alt="My Role" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Lead UX/UI Designer — Full ownership from discovery through UI delivery and design system handoff.</p>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Stakeholder interviews and requirements mapping</strong> across all five user roles</li>
              <li><strong>User persona definition</strong> covering goals, permissions, restrictions, and UX considerations per role</li>
              <li><strong>Fifteen use case flows</strong> mapped across the full fund investment lifecycle</li>
              <li><strong>Information architecture</strong> across five role contexts</li>
              <li><strong>User flow mapping</strong> for all core journeys</li>
              <li><strong>Low-fidelity and mid-fidelity wireframes</strong> across all platform surfaces</li>
              <li><strong>Interactive Figma prototype</strong> for stakeholder validation</li>
              <li><strong>Design system</strong> including tokens, component library, and documentation</li>
              <li><strong>High-fidelity UI delivery</strong> across all screens and role contexts</li>
              <li><strong>Design QA and specification support</strong> during developer handoff</li>
            </ul>
            <p style={{ margin: 0 }}>Tools: Figma · FigJam · Notion</p>
          </div>
        </div>
        </>
      )}

      {activeTab === 'Process' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h2>
          <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
            <li><strong>Persona and Permission Mapping Before Architecture</strong> — With five user roles each carrying distinct permission boundaries, the first step was documenting exactly what each role could see, do, initiate, and approve — and what they could not. This permission matrix became the structural foundation for every subsequent IA and flow decision, preventing the access inconsistencies that compound quickly in regulated platforms.</li>
            <li><strong>Discovery</strong> — Stakeholder sessions surfaced the regulatory constraints shaping the platform&apos;s core flows: the AIFM&apos;s $50 million minimum allocation requirement, the 50/50 diversification rule across at least two portfolios, the invitation-only onboarding model for Asset Managers and Fund Administrators, and the KYC/AML gate controlling when Investors could access fund listings. Each constraint translated directly into a design requirement at a specific point in a specific flow.</li>
            <li><strong>Use Case Mapping</strong> — Mapped fifteen use cases covering the full platform lifecycle before any wireframes were produced — from UC-01 (platform initialisation) through UC-15 (compliance checklist management). Mapping at this level of granularity surfaced the cross-role dependencies that were invisible in any individual flow but critical to the platform&apos;s operational logic: the sequence from investor subscription (UC-10) through admin processing (UC-11), AIFM approval (UC-12), investor funding (UC-13), and admin confirmation (UC-14) had to be designed as a connected system, not as five separate screens.</li>
            <li><strong>Information Architecture</strong> — Mapped the full IA across all five role contexts before any UI work began. The Asset Manager, Investor, and ISO-Q Admin surfaces had the most significant interdependencies — resolving data flows between fund onboarding, SP configuration, AIFM submission, and investor subscription at IA stage prevented structural conflicts that would have been expensive to resolve later.</li>
            <li><strong>Wireframes and Prototype</strong> — Maintained low fidelity through multiple structural feedback rounds. The fund onboarding wizard (UC-06) and investor subscription flow (UC-10) required the most iteration — both had to balance regulatory completeness with operational usability for users who would interact with them infrequently but with high-stakes consequences for errors or incomplete steps.</li>
            <li><strong>Design System</strong> — Built an institutional-grade design system with a conservative, trust-signalling visual language: a systematic token architecture, role-specific navigation patterns, multi-step wizard components with progress persistence and save-and-resume capability, compliance criteria display components, document preview and approval patterns, and NAV data upload interfaces — all documented for consistent use across all five role surfaces.</li>
          </ol>
        </div>
      )}

      {activeTab === 'Key Decisions' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}><strong>Model the permission matrix as a design artefact, not a developer concern.</strong> Early in the project, permission logic was treated as an implementation detail. When mapped explicitly against the IA, it became clear that several proposed flows were structurally impossible under the platform&apos;s role rules — an Asset Manager viewing investor-specific data, a Fund Administrator approving actions beyond data entry. Resolving these at the design stage eliminated an entire category of late-stage rework and ensured every screen was designed for the correct user with the correct access state from the start.</p>
            <p style={{ margin: 0 }}><strong>Design cross-role handoffs as explicit events, not implicit state changes.</strong> The platform&apos;s most consequential failure mode was not a broken flow — it was a user waiting on an action they did not know was required, from a role they could not see. Every cross-role handoff in the fifteen use cases was designed with explicit notification logic, clear status labelling, and visible next-step prompts. An investor waiting for AIFM approval sees a specific status. An admin waiting for investor funding sees a specific pending state. No user should be left wondering why nothing is happening.</p>
            <p style={{ margin: 0 }}><strong>Persist progress across every multi-step flow.</strong> The fund onboarding wizard and investor subscription flow both involve decisions — legal structure choices, fee term configurations, tokenization preferences — that users cannot reasonably complete in a single session. Designing save-and-resume capability as a hard requirement from the start, rather than a later enhancement, shaped the data architecture decisions and prevented the most common drop-off point in complex onboarding flows: users abandoning because they cannot pause.</p>
            <p style={{ margin: 0 }}><strong>Surface compliance criteria as primary UI, not fine print.</strong> The AIFM approval flow required a specific design decision: the $50 million minimum allocation and 50/50 diversification rule had to be immediately visible and machine-readable at the point of review — not buried in documentation. Designing these criteria as explicit, always-visible compliance indicators in the AIFM portal transformed a potentially slow review process into a fast, scannable decision surface. The same principle was applied throughout: wherever a regulatory constraint determined what a user could do next, that constraint was surfaced at the interaction point, not explained after the fact.</p>
          </div>
        </div>
      )}

      {activeTab === 'Solution' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Fund Onboarding · Investor Subscription · NAV Management · Admin Console · AIFM Portal</p>
            <p style={{ margin: 0 }}>The final solution was a fully role-aware investment platform covering fifteen use cases across five user contexts, built on a shared design system with role-specific navigation surfaces and a complete component library.</p>
            <p style={{ margin: 0 }}><strong>Asset Manager Fund Onboarding</strong> — A multi-step wizard guiding fund managers through PPM upload, AI-generated strategy summary review and confirmation, share class and fee term configuration, lock-up and liquidity settings, Fund Administrator invitation, and onboarding fee acknowledgement — with persistent progress saving and clear completion indicators at each stage.</p>
            <p style={{ margin: 0 }}><strong>Investor Registration and Subscription</strong> — A structured subscription flow covering KYC/AML onboarding via Apex, fund browsing post-approval, investment structure selection (AIFM-wrapped vs. direct), tokenization preference (tokenized vs. traditional), funding currency and method selection (USD, EUR, BTC, ETH via bank wire or digital asset transfer), subscription document acknowledgement, and post-approval funding instruction delivery — with investment minimum enforcement and diversification rules applied at the input level.</p>
            <p style={{ margin: 0 }}><strong>Fund Administrator NAV Management</strong> — A focused data entry interface for historical NAV upload via CSV or Excel, ongoing periodic updates, and automated feed integration setup (sFTP, FIX, API) — with drag-and-drop manual entry, last-upload confirmation display, and specific error messaging for data formatting issues.</p>
            <p style={{ margin: 0 }}><strong>ISO-Q Admin Console</strong> — A full operations dashboard covering user management across all roles, fund review and status management, Segregated Portfolio configuration and document generation, AIFM submission coordination, incoming funding monitoring and confirmation, token issuance, compliance checklist management, and audit log access — with pending task prioritisation on the home dashboard and safety confirmation gates on critical actions.</p>
            <p style={{ margin: 0 }}><strong>AIFM Approval Portal</strong> — A streamlined review interface for Altarius surfacing new SP structures, associated documentation (feeder PPM, Subscription Agreement), compliance criteria status (minimum allocation ≥ $50M, 50/50 diversification), and prominent approve/defer actions with feedback input for deferrals — designed for fast, confident decision-making with minimal platform overhead post-approval.</p>
            <p style={{ margin: 0 }}><strong>Design System</strong> — A complete institutional-grade component library covering role-specific navigation patterns, multi-step wizard components with save-and-resume, compliance criteria display components, document preview and approval patterns, NAV upload interfaces, status and notification patterns across all cross-role handoff points, and a full token system supporting the platform&apos;s conservative, trust-signalling visual language.</p>
          </div>
        </div>
      )}

      {activeTab === "Things I've learned.." && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h2>
          <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
            <li><strong>In multi-role platforms, the flows between users matter more than the flows within them.</strong> The fifteen use cases on this project were individually straightforward. The design complexity lived entirely in the handoffs — the moments where one user&apos;s completed action triggered another user&apos;s required next step. Every significant usability problem found in review traced back to a handoff that had been designed as a flow endpoint rather than a relay point. Mapping cross-role dependencies explicitly, before any wireframes were produced, was the single most valuable structural decision on the project.</li>
            <li><strong>Regulatory constraints are design requirements, not edge cases.</strong> The AIFM&apos;s minimum allocation threshold, the diversification rule, and the KYC gate before fund access were easy to treat as compliance footnotes. Each one was in fact a hard constraint that determined what the interface could allow a user to do at a specific moment. Designing those constraints into the interaction model — enforced at input level, surfaced as visible criteria, not buried in documentation — produced a more honest, more usable product than treating them as warnings the user would read and manage themselves.</li>
            <li><strong>Save-and-resume is a design decision, not a feature request.</strong> The fund onboarding wizard and subscription flow both involved decisions complex enough that no institutional user would complete them in a single session. Treating progress persistence as a core requirement from the start — rather than an enhancement to be added later — shaped the information architecture, the component design, and the data model in ways that would have been significantly more expensive to retrofit. The lesson is not specific to this project: any flow that requires more than one decision deserves a resume path by default.</li>
          </ul>
        </div>
      )}

    </PageLayout>
  )
}
