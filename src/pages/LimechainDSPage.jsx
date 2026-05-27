import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import limechainIntro from '../assets/limechain-intro.png'
import limechainDecisions from '../assets/limechain-decisions.png'
import limechainRole from '../assets/limechain-role.png'
import limechainProcess from '../assets/limechain-process.png'
import limechainChallenge from '../assets/limechain-challenge.png'
import limechainSolution from '../assets/limechain-solution.png'
import limechainLearned from '../assets/limechain-learned.png'

const PROJECT = 'Limechain Design System'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
]

export default function LimechainDSPage({ dark, onBack, onHome, onToggle }) {
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
            <img src={limechainIntro} alt="Limechain Design System" loading="lazy" style={photoImg} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Web3 Component Library</h1>
              <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Lead Designer · Design Systems · Component Architecture · Open Source</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'The Web3 Component Library is an open-source design system built on shadcn/ui and Tailwind CSS, purpose-built for the interaction patterns, data types, and visual conventions specific to Web3 products - wallets, token displays, transaction flows, address formatting, network states, and on-chain status indicators.',
                'The library emerged from a recurring problem across multiple client engagements: every new Web3 project started by rebuilding the same components from scratch - wallet connection modals, token amount inputs, address truncation, transaction confirmation states - each time slightly differently, with no shared foundation to build from.',
                'The engagement required both a design and a systems thinking contribution: defining a token architecture, establishing molecule-level components from atomic primitives, documenting themes and typography scales, and producing a library extensible enough for client use while being coherent enough to stand alone as an open-source resource.',
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
            <img src={limechainChallenge} alt="shadcn, Radix, MUI" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Building a design system for a domain that general-purpose component libraries do not serve.</p>
              <p style={{ margin: 0 }}>Existing component libraries - shadcn, Radix, MUI - solve general UI problems with precision. They do not solve Web3 UI problems. A single library had to cover interaction patterns with no mainstream analogue:</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Wallet states</strong> - connected, disconnected, pending, wrong network, and error states each requiring distinct visual treatment and copy</li>
                <li><strong>Token and asset display</strong> - amount formatting, token logos, USD conversion, balance visibility toggles, and decimal precision across dozens of assets</li>
                <li><strong>Transaction flows</strong> - multi-step confirmation patterns, gas estimation displays, pending and confirmed on-chain states, and irreversibility signalling</li>
                <li><strong>Address and identity</strong> - truncated address display, ENS resolution, copy-to-clipboard, and block explorer linking as standardised interaction patterns</li>
              </ul>
              <p style={{ margin: 0 }}>The library had to be opinionated enough to enforce visual and behavioural consistency across client products, while being flexible enough through theming and design tokens to be adopted into existing codebases without requiring a full visual overhaul.</p>
              <p style={{ margin: 0 }}>The risk was a system that solved internal consistency problems but created adoption friction - too specific to one product's visual language, or too abstract to be immediately useful to a developer picking it up for the first time.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Problem' && (
        <>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>I was resolving the absence of a shared language between designers and developers working on Web3 products.</p>
              <p style={{ margin: 0 }}>Each project surfaced the same unresolved questions: how a wallet connection button should behave across its states, how to present token values alongside their fiat equivalents, and how to communicate transaction status while it&apos;s still processing. These decisions were made repeatedly — often inconsistently within a single product and differently across projects — with no continuity or shared reference point.</p>
              <p style={{ margin: 0 }}>At a structural level, Web3 interaction patterns demand clarity and consistency, yet no open resource documented them in a way that aligned design decisions with implementation. Designers and developers were addressing identical challenges in parallel, independently, on every engagement.</p>
              <p style={{ margin: 0 }}>This highlighted a clear need: a shared system where interaction patterns are defined once, documented in a usable way, and consistently applied without being rebuilt from scratch each time.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={photoCard(dark)}>
            <img src={limechainRole} alt="My Role" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Lead Designer - Full ownership of design architecture, component design, token system, and documentation. Collaborated with developers on implementation parity and API alignment.</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Audit of recurring Web3 UI patterns</strong> across previous client projects to identify component candidates</li>
                <li><strong>Design token architecture</strong> covering colour, spacing, typography, radius, and shadow scales</li>
                <li><strong>Molecule-level component design</strong> built on shadcn/ui atomic primitives</li>
                <li><strong>Theme system design</strong> including light, dark, and high-contrast modes</li>
                <li><strong>Typography scale definition</strong> and pairing rationale</li>
                <li><strong>Component documentation</strong> covering states, variants, usage guidelines, and design rationale</li>
                <li><strong>Collaboration with developers</strong> on Tailwind implementation and component API consistency</li>
                <li><strong>Open-source release preparation</strong> including contribution guidelines and versioning structure</li>
              </ul>
              <p style={{ margin: 0 }}>Tools: Figma · FigJam · shadcn/ui · Tailwind CSS · Notion</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Process' && (
        <>
          <div style={photoCard(dark)}>
            <img src={limechainProcess} alt="Process" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
            <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Audit Before Architecture</strong> - Rather than designing components speculatively, I started by auditing the Web3 UI patterns that had recurred across previous client projects - MetaWin, Transaction Tool, Binomial, CarbonChain. This produced a prioritised component backlog grounded in real usage rather than theoretical completeness, and identified the token architecture requirements before a single component was designed.</li>
              <li><strong>Token System First</strong> - Before any component design, I defined the full design token structure: primitive tokens for raw values, semantic tokens mapping primitives to intent, and component tokens scoping semantic values to specific UI contexts. This layering meant that theming - switching between light, dark, and custom client palettes - required changes only at the semantic layer, not at the component level.</li>
              <li><strong>Typography and Spacing Scale</strong> - Defined a type scale appropriate for data-dense Web3 interfaces - where small numeric values, address strings, and status labels coexist with display headings and body copy - alongside a spacing scale calibrated for the tight information hierarchies typical in DeFi and wallet UIs.</li>
              <li><strong>Molecule Design</strong> - Designed components at the molecule level - assembling shadcn/ui atomic primitives into Web3-specific patterns with documented state coverage. Each component was designed across all relevant states before moving to the next, ensuring the system was complete rather than surface-deep.</li>
              <li><strong>Theme System</strong> - Built a theme architecture supporting light, dark, and extensible custom themes through Tailwind CSS variables, with explicit documentation of which tokens change between themes and which remain constant - enabling client adoption without requiring full visual redesign.</li>
              <li><strong>Developer Collaboration and Documentation</strong> - Worked closely with developers throughout implementation to ensure design intent and component API aligned. Documented each component with usage guidelines, state inventory, variant rationale, and implementation notes - making the library usable by a developer who had never seen the Figma files.</li>
            </ol>
          </div>
        </>
      )}

      {activeTab === 'Key Decisions' && (
        <>
          <div style={photoCard(dark)}>
            <img src={limechainDecisions} alt="Key Decisions" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}><strong>Build on shadcn/ui rather than from scratch.</strong> The decision to extend shadcn/ui rather than build a ground-up component system was deliberate. shadcn/ui provides accessible, unstyled primitives with clean APIs that developers already understand. Adding Web3-specific molecules on top of a trusted foundation meant the library inherited accessibility, keyboard behaviour, and React patterns for free - and meant developers could adopt individual components without migrating their entire stack.</p>
              <p style={{ margin: 0 }}><strong>Semantic tokens over direct value references.</strong> Early token explorations used primitive values directly in component definitions - specific hex codes, pixel values, named weights. The shift to a semantic token layer - where components reference intent (--color-surface-destructive) rather than value (--red-500) - was the architectural decision that made theming tractable. It also made the design-to-development handoff significantly cleaner: designers and developers shared the same token vocabulary rather than translating between them.</p>
              <p style={{ margin: 0 }}><strong>Design for irreversibility as a first-class concern.</strong> Web3 transactions cannot be undone. The confirmation and pending state components in the library were designed with this constraint as a hard requirement - not as a warning pattern bolted onto a generic modal. Progressive disclosure of transaction details, explicit gas and fee display before commitment, and distinct visual states for pending, confirmed, and failed transactions were designed as a system, not as individual edge cases.</p>
              <p style={{ margin: 0 }}><strong>Themes as client adoption surfaces, not cosmetic variations.</strong> The theme system was designed with client adoption in mind from the start. Each theme is a complete token override - not a colour swap - meaning a client can drop the library into their existing product, apply their brand tokens, and get consistent Web3 component behaviour without visual collision with their existing design language. This was the decision that made the library genuinely usable in client projects rather than just internally consistent.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Solution' && (
        <>
          <div style={photoCard(dark)}>
            <img src={limechainSolution} alt="Solution" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Tokens · Typography · Molecules · Themes · Documentation</p>
              <p style={{ margin: 0 }}>The final library is an open-source Web3 component system built on shadcn/ui and Tailwind CSS, covering the core interaction patterns specific to Web3 products across a documented token architecture and multi-theme system.</p>
              <p style={{ margin: 0 }}><strong>Design Token System</strong> - Three-layer token architecture: primitive tokens defining raw values, semantic tokens mapping values to intent, and component tokens scoping intent to specific UI contexts. Covers colour, spacing, radius, shadow, and typography scales with full light and dark mode coverage.</p>
              <p style={{ margin: 0 }}><strong>Typography Scale</strong> - A defined type scale calibrated for data-dense Web3 interfaces, covering display, heading, body, label, and monospace roles - with monospace treatment for addresses, transaction hashes, and numeric values to ensure alignment and legibility at every size.</p>
              <p style={{ margin: 0 }}><strong>Web3 Molecule Components</strong> - Purpose-built components covering: wallet connection button and modal across all connection states, token amount display with USD conversion and balance visibility toggle, address display with truncation, ENS resolution, copy, and block explorer link, transaction confirmation flow with gas display and irreversibility signalling, network selector and wrong-network state, and on-chain status indicators for pending, confirmed, and failed states.</p>
              <p style={{ margin: 0 }}><strong>Theme System</strong> - Light, dark, and extensible custom theme support through Tailwind CSS variables, with documented token override maps enabling client brand adoption without component-level changes.</p>
              <p style={{ margin: 0 }}><strong>Component Documentation</strong> - Each component documented with full state inventory, variant rationale, usage guidelines, accessibility notes, and implementation examples - written to be usable by a developer working without access to the source Figma files.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === "Things I've learned.." && (
        <>
          <div style={photoCard(dark)}>
            <img src={limechainLearned} alt="Things I've learned" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>A design system built from project audits is more useful than one built from first principles.</strong> The components that received the most use and the least revision were the ones identified through the client project audit - patterns that had already been validated under real product conditions. Speculative components designed without a grounding use case consistently required more iteration and saw less adoption. Starting from evidence rather than intuition is the single most reliable way to build a system that gets used.</li>
              <li><strong>Token naming is a communication problem, not a naming problem.</strong> Early token names were precise but not shared - designers understood them, developers interpreted them differently. The shift to semantic naming conventions that described intent rather than value forced alignment on what each token was actually for. The time spent on token naming paid back immediately in handoff clarity and significantly reduced the back-and-forth on implementation reviews.</li>
              <li><strong>Open-source discipline is different from internal design system discipline.</strong> An internal system can rely on shared context - people know what the components are for because they were in the room when they were designed. An open-source library has to communicate that context entirely through documentation. Writing component documentation for a developer who has never seen the product decisions behind a component is a different skill than designing the component itself - and one that took more time and iteration than anticipated.</li>
            </ul>
          </div>
        </>
      )}

    </PageLayout>
  )
}
