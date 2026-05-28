import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import metawinRole from '../assets/metawin-role.png'
import metawinChallenge from '../assets/metawin-challenge.png'
import metawinIntro from '../assets/metawin-intro.png'
import metawinProcess from '../assets/metawin-process.png'
import metawinKeyDecisions from '../assets/metawin-keydecisions.png'
import metawinSolution from '../assets/metawin-solution.png'

const PROJECT = 'Metawin'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://metawin.com' },
]

export default function MetawinPage({ dark, onBack, onHome, onToggle }) {
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
            <img src={metawinIntro} alt="Metawin" loading="eager" style={photoImg} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>MetaWin - Metamarket</h1>
              <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Senior UX Designer · UX Audit · Web App Design · Design System</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Metamarket is a predictive markets platform built within the MetaWin ecosystem, where users bet on the probability of real-life event outcomes - from US elections and Bitcoin price targets to NBA champions and Champions League winners - resolved through a decentralised Oracle service in a transparent, on-chain manner.',
                'The platform was designed to function both as a standalone product and as an embeddable plugin within the main MetaWin website - serving an existing user base already familiar with MetaWin\'s prizes and instant win products, while being accessible enough to onboard users encountering prediction markets for the first time.',
                'The engagement covered the full design lifecycle across five sprints: a UX audit of the existing platform, sitemap and wireframe design, style guide creation, full UI delivery across desktop and mobile, and a final implementation audit - delivering a coherent, extensible product on a structured timeline with clearly scoped deliverables at each phase.',
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
            <img src={metawinChallenge} alt="Challenge" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Designing a prediction market that has to work as a product and a plugin simultaneously.</p>
              <p style={{ margin: 0 }}>A single interface had to serve users across a wide range of engagement contexts:</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Casual MetaWin users</strong> - already on the platform for prizes and instant win games, encountering prediction markets as a new feature with no prior exposure to how outcome betting works</li>
                <li><strong>Active predictors</strong> - returning users managing an active portfolio across multiple markets, needing fast access to current positions, deposit balance, and market performance</li>
                <li><strong>Event-driven visitors</strong> - users arriving specifically for high-profile markets like the US Election or Bitcoin milestones, with no existing MetaWin relationship and no context for the broader platform</li>
              </ul>
              <p style={{ margin: 0 }}>The platform covered a wide range of interconnected market categories - sports, politics, crypto, AI, global events - each with different data densities, outcome structures, and resolution timelines, all within a single market browsing and betting interface.</p>
              <p style={{ margin: 0 }}>The dual-mode requirement - standalone and plugin - introduced a structural constraint that most prediction market designs do not face: every layout decision had to hold up both as a full-page experience and as an embedded component within a host website with its own navigation and chrome.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Problem' && (
        <>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>The interface was the visible part. The harder problem was making outcome probability feel like useful information rather than noise.</p>
              <p style={{ margin: 0 }}>Prediction markets present a specific class of UX challenge: the interface must communicate probability distributions, liquidity depth, volume, and resolution timelines simultaneously - for dozens of markets across completely different domains - without overwhelming users who are there to make a decision, not read a data report.</p>
              <p style={{ margin: 0 }}>The existing platform had accumulated UX debt across several dimensions: inconsistent component behaviour, unclear market status signalling, and a browsing experience that made it difficult to distinguish between active, new, high-volume, and recently resolved markets at a glance.</p>
              <p style={{ margin: 0 }}>The plugin constraint compounded this: a design that relied on full-page context to communicate hierarchy would break when embedded. Every component had to carry enough information to be legible in isolation, without the surrounding navigation structure that a standalone product would provide.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={photoCard(dark)}>
            <img src={metawinRole} alt="My Role" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Lead UX Designer - Full ownership across all five project sprints from audit through implementation review.</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>UX audit and analysis</strong> of the existing Metamarket platform</li>
                <li><strong>Sitemap mapping and information architecture</strong> for the full Metamarket section within MetaWin</li>
                <li><strong>Wireframe design</strong> across all core flows: market browsing, market detail, portfolio, and wallet</li>
                <li><strong>Style guide creation</strong> including colour palette, typography, and full component library</li>
                <li><strong>High-fidelity UI delivery</strong> across desktop and mobile</li>
                <li><strong>Implementation audit and design QA</strong> during developer handoff</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Process' && (
        <>
          <div style={photoCard(dark)}>
            <img src={metawinProcess} alt="Process" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h2>
            <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>UX Audit Before Any New Design</strong> - Sprint 1 was dedicated entirely to auditing the existing platform before producing a single new wireframe. This surfaced a set of recurring structural issues - inconsistent filter behaviour, unclear market state communication, and a portfolio view that conflated active positions with resolved history - that shaped the entire redesign direction. Skipping the audit would have reproduced the same problems in higher fidelity.</li>
              <li><strong>Sitemap and IA</strong> - Mapped the full Metamarket information architecture within the broader MetaWin navigation context, covering Categories, Highlighted Items, Specific Filters, Market Overview, Details, All Markets Page, Recent Activity, and Portfolio. Resolving the relationship between the Metamarket section and the host MetaWin navigation was the most structurally significant decision of the project - it determined how the plugin mode would work at every subsequent level.</li>
              <li><strong>Wireframes</strong> - Delivered sitemap and wireframes across Sprint 2 at 60 hours - the largest single sprint - covering the full market browsing experience, individual market detail view, portfolio management, and wallet integration. The filter and sort system received particular attention: All, New, Ended, Volume, and Liquidity tabs combined with category filters required a browsing model that degraded gracefully across both standalone and embedded contexts.</li>
              <li><strong>Style Guide</strong> - Sprint 3 produced a complete style guide anchored in a cobalt/midnight/aqua palette - high-contrast and dark-native, appropriate for a betting platform used across time zones and screen conditions. Play and Inter were selected as the typographic pairing: Play for display weight and brand presence, Inter for data legibility across dense market tables and probability readouts.</li>
              <li><strong>UI Design and Implementation Audit</strong> - Sprint 4 delivered full high-fidelity UI across desktop and mobile at 80 hours. Sprint 5 closed with an implementation audit - reviewing the built product against design specifications, flagging deviations, and ensuring component behaviour matched intent before public release.</li>
            </ol>
          </div>
        </>
      )}

      {activeTab === 'Key Decisions' && (
        <>
          <div style={photoCard(dark)}>
            <img src={metawinKeyDecisions} alt="Key Decisions" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}><strong>Lead with highlights, not with volume.</strong> Early explorations organised the market homepage by volume and liquidity - the metrics most meaningful to experienced predictors. User testing revealed that new users had no frame of reference for those numbers and skipped past them entirely. The final design leads with curated Highlights - editorially selected markets with strong visual treatment - followed by filterable category tabs. Power users reach volume and liquidity sorting in one tap; casual users get a legible entry point without needing to understand market mechanics first.</p>
              <p style={{ margin: 0 }}><strong>Market cards have to work without the page.</strong> The plugin constraint meant that every market card - the primary unit of the browsing experience - had to communicate market name, category, status, and a call to action without relying on surrounding context. This drove a component-first design approach where each card was pressure-tested in isolation before being placed in a grid. The result was a tighter, more self-contained component library that also improved the standalone experience.</p>
              <p style={{ margin: 0 }}><strong>Status is a first-class design element, not a label.</strong> In a platform where markets move between active, ended, and pending states - and where that distinction determines whether a user can bet, wait, or collect - treating status as a secondary label was a significant UX failure in the existing product. The redesign elevated market status to a primary visual property: colour-coded, persistently visible, and integrated into the card and detail view hierarchy rather than buried in metadata.</p>
              <p style={{ margin: 0 }}><strong>Design the portfolio as a decision surface, not a record.</strong> The existing portfolio view functioned primarily as a transaction history. The redesigned portfolio surfaced active positions, current probabilities, and available actions - deposit, withdraw, view detail - as primary content, with resolved positions accessible but not dominant. Users managing active positions across multiple markets needed a surface that told them what to do next, not just what they had done.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Solution' && (
        <>
          <div style={photoCard(dark)}>
            <img src={metawinSolution} alt="Solution" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Predictive Markets · Portfolio · Wallet · Profile · Community</p>
              <p style={{ margin: 0 }}>The final solution was a fully responsive predictive markets platform covering market browsing, individual market betting, portfolio management, and wallet integration - designed to function as both a standalone product and an embedded plugin within MetaWin.</p>
              <p style={{ margin: 0 }}><strong>Market Browsing</strong> - Filterable market directory with editorial Highlights, status-based tabs (All, New, Ended, Volume, Liquidity), and category filters spanning Top, For You, Basketball, US Election, AI, and Breaking News. Market cards surface outcome options, current probability distributions, and a direct bet entry point without requiring navigation to a detail page.</p>
              <p style={{ margin: 0 }}><strong>Market Detail</strong> - Individual market view showing full outcome breakdown, current probability percentages, liquidity depth, resolution timeline, and recent activity - with deposit and portfolio balance surfaced in the header for immediate context at the moment of betting.</p>
              <p style={{ margin: 0 }}><strong>Portfolio</strong> - Active position management view showing current bets, real-time probability against each position, and available actions. Distinguishes clearly between open, pending resolution, and settled positions without requiring users to parse transaction history.</p>
              <p style={{ margin: 0 }}><strong>Wallet Integration</strong> - Supports both Web3 wallet connection and custodial wallet access, with ETH balance, deposit, and network selector surfaced persistently in the top navigation across all platform states.</p>
              <p style={{ margin: 0 }}><strong>Style Guide and Design Library</strong> - Complete component library covering buttons across all states, filter dropdowns, pagination, icons, market cards, probability bars, navigation components, and notification patterns - documented for consistent use across both standalone and plugin implementations.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === "Things I've learned.." && (
        <>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h2>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>A UX audit is the highest-leverage activity on an existing product engagement.</strong> The 20 hours spent on the Sprint 1 audit identified structural problems that would have cost significantly more to fix if discovered during high-fidelity design. Treating the audit as a billable, time-boxed deliverable - rather than informal background review - gave the findings the same weight as any other project output and made stakeholder alignment on what needed to change substantially easier.</li>
              <li><strong>Plugin constraints are a gift to component design.</strong> The requirement to work as an embeddable module forced a level of component self-sufficiency that improved the standalone product as a side effect. Every component that had to work in isolation became more legible, more scannable, and more robust than it would have been if designed exclusively for full-page context. Designing for the most constrained use case first consistently produces better components.</li>
              <li><strong>In prediction markets, speed of comprehension is the conversion metric.</strong> Users arrive at a market with a question - should I bet on this, and on what? Every second spent parsing interface hierarchy rather than evaluating the market itself is friction that reduces conversion. The design decisions that had the most measurable impact were not visual - they were sequencing decisions about what information appeared first on the card and in the detail view, and in what order the eye was directed to move through it.</li>
            </ul>
          </div>
        </>
      )}

    </PageLayout>
  )
}
