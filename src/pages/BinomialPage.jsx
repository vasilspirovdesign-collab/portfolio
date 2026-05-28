import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import bnbIntro from '../assets/bnb-intro.png'
import bnbProcess from '../assets/bnb-process.png'
import bnbSolution from '../assets/bnb-solution.png'
import bnbChallenge from '../assets/bnb-challenge.png'

const PROJECT = 'Binomial'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/242220167/Binomial-Staking-Protocol' },
]

export default function BinomialPage({ dark, onBack, onHome, onToggle }) {
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
            <img src={bnbIntro} alt="Binomial" loading="eager" style={photoImg} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Binomial</h1>
              <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Senior UX Designer · Branding · Web App Design · Logo Design</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Binomial is a shared security platform built on the BNB ecosystem, enabling stakers to restake native tokens and Liquid Staking Tokens (LSTs) to provide economic security for Actively Validated Services - allowing rollups and other protocols to tap into a large pool of assets and validation resources without bootstrapping security from scratch.',
                'The platform serves three distinct user types - stakers looking to amplify yield, operators running AVS software and managing delegations, and protocol teams seeking shared security infrastructure - each operating with different levels of DeFi fluency and fundamentally different goals within the same system.',
                'Binomial had no brand, no product, and no visual language for a financial mechanism that barely existed yet. The brief was to create all three simultaneously - from logo and identity through to a responsive web application covering restaking, delegation, and an AVS marketplace.',
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
            <img src={bnbChallenge} alt="Challenge" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Designing a DeFi platform where the underlying mechanism is genuinely new.</p>
              <p style={{ margin: 0 }}>A single interface had to serve users across a wide spectrum of technical fluency:</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Stakers</strong> - needed clarity on what restaking means, what assets are eligible, which operators to delegate to, and what their yield exposure looks like across time periods</li>
                <li><strong>Operators</strong> - needed oversight of their delegation relationships, restake concentrations, and AVS commitments, with the ability to manage identity and configuration</li>
                <li><strong>Validators</strong> - needed a structured onboarding path to commit stake, register an address, and participate in network security with explicit understanding of their obligations</li>
              </ul>
              <p style={{ margin: 0 }}>The platform covered five interconnected sections: Dashboard, Restake, Validator Stake, Operator, and AVS - each with distinct data models, permission states, and interaction patterns - built on a shared component system that had to work consistently across desktop, tablet, and mobile.</p>
              <p style={{ margin: 0 }}>The risk was a product that served technically sophisticated DeFi users but failed to communicate the logic of restaking clearly enough to expand the addressable audience - leaving yield on the table by making participation feel opaque rather than accessible.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Problem' && (
        <>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Restaking asks users to take on risk they can&apos;t fully model. Show too little and they act blind. Show too much and they leave. The design problem was finding the threshold between legible and overwhelming - at every step of a multi-party flow.</p>
              <p style={{ margin: 0 }}>Restaking introduces a layer of economic complexity that has no direct analogue in conventional DeFi. Users are not simply staking tokens - they are extending the security guarantees of those tokens to third-party services, delegating to operators who run AVS software on their behalf, and taking on correlated slashing exposure they may not fully understand. Communicating this accurately without triggering drop-off required deliberate decisions about information hierarchy at every step.</p>
              <p style={{ margin: 0 }}>The parallel challenge was operator experience. Operators needed to manage delegation relationships, monitor restake concentration across multiple stakers, and maintain their AVS commitments - all within an interface that also had to serve first-time stakers who had never interacted with a restaking protocol before.</p>
              <p style={{ margin: 0 }}>Both problems shared a root: the product was technically capable of serving a wide audience, but only if the design absorbed enough of the underlying complexity that users could act confidently without needing to fully understand the mechanics first.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Lead UX/UI Designer - Full ownership from brand identity through responsive web app delivery.</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Competitive benchmarking</strong> across restaking and liquid staking platforms</li>
                <li><strong>Information architecture</strong> across five sections and all three user roles</li>
                <li><strong>User flow mapping</strong> for core journeys: restake, delegate to operator, become validator, browse AVS</li>
                <li><strong>Low-fidelity and mid-fidelity wireframes</strong> across all core screens</li>
                <li><strong>Brand identity design</strong> including logo, colour system, and typography</li>
                <li><strong>Component library and design tokens</strong></li>
                <li><strong>High-fidelity UI delivery</strong> across desktop and responsive mobile breakpoints</li>
                <li><strong>Marketing website</strong> design and build</li>
              </ul>
              <p style={{ margin: 0 }}>Tools: Figma · FigJam · Notion</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Process' && (
        <>
          <div style={photoCard(dark)}>
            <img src={bnbProcess} alt="Process" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h2>
            <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Understanding the Mechanism Before Designing the Interface</strong> - Restaking on BNB introduced financial and technical relationships - operator delegation chains, AVS slashing conditions, LST market caps - that had no direct UX precedent. I spent the early phase mapping the full system logic before touching IA, ensuring that every design decision downstream was grounded in how the protocol actually worked rather than how it superficially resembled existing DeFi products.</li>
              <li><strong>Competitive Benchmarking</strong> - Reviewed the restaking and liquid staking landscape - EigenLayer, Lido, Rocket Pool, and BNB-native staking interfaces - to identify patterns worth adopting and failure modes worth avoiding. The dominant failure across all of them was the same: operator and AVS selection presented as raw data tables with no guidance on what a good choice looked like.</li>
              <li><strong>Information Architecture</strong> - Mapped the full IA across five sections and three role contexts before any UI work began. The Dashboard, Restake, and Operator sections had significant data interdependencies - resolving these at structure level prevented the kind of inconsistency that compounds quickly in data-heavy DeFi interfaces.</li>
              <li><strong>Wireframes and Prototype</strong> - Maintained low fidelity through structural feedback rounds covering the core user journeys: restake an asset, delegate to an operator, become a validator, and browse available AVS. The restake deposit flow and the validator onboarding path required the most iteration - both had to balance completeness of information with speed of execution.</li>
              <li><strong>Brand Identity and Design System</strong> - Developed the full brand identity in parallel with the UX work. The logo used a geometric B mark with forward-facing arrow elements communicating momentum and precision - rendered in Binomial yellow against near-black for maximum contrast at every scale from favicon to full-page hero. Montserrat was selected for its technical legibility and modern weight range across both dense data views and large display type. The component library was built token-first to support consistent responsive behaviour across all breakpoints.</li>
            </ol>
          </div>
        </>
      )}

      {activeTab === 'Key Decisions' && (
        <>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}><strong>Surface delegation context before asking for commitment.</strong> Early explorations presented the operator selection as a simple list. Stakers with no prior relationship to these operators had no basis for choosing. The redesigned operator table surfaced restake concentration, number of stakers, AVS secured, and total ETH/BNB restaked as primary columns - giving users enough signal to make an informed delegation decision without requiring them to leave the platform.</p>
              <p style={{ margin: 0 }}><strong>Separate restaking from validator staking architecturally, not just visually.</strong> The two paths - restaking LSTs as a staker versus depositing BNB to become a validator - serve fundamentally different users with different risk profiles and different mental models of what they are doing. Treating them as a single flow created confusion in early wireframes. Separating them into distinct navigation sections with distinct entry points resolved this and made the platform legible to both audiences simultaneously.</p>
              <p style={{ margin: 0 }}><strong>Build the responsive system from the first token, not as an afterthought.</strong> The brief required full responsive support across desktop, tablet, and mobile. Rather than designing desktop-first and adapting down, the component library was built around a token structure that enforced consistent spacing, type scaling, and layout behaviour across breakpoints from the start. The mobile restake flow - particularly the deposit screen and wallet connection modal - required specific layout decisions that would have been expensive to retrofit from a desktop-only system.</p>
              <p style={{ margin: 0 }}><strong>Yellow as a trust signal, not just a brand colour.</strong> In a domain where interfaces default to blue or green as signals of financial credibility, the Binomial yellow/black palette was a deliberate differentiator. The palette communicated energy and precision without relying on the conventions of legacy fintech - appropriate for a protocol positioning itself as infrastructure for the next generation of BNB-native applications.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Solution' && (
        <>
          <div style={photoCard(dark)}>
            <img src={bnbSolution} alt="Solution" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h2>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Dashboard · Restake · Validator Stake · Operator · AVS</p>
              <p style={{ margin: 0 }}>The final solution was a fully responsive web application covering five sections across three user role contexts, built on a shared design system with a complete brand identity, marketing website, and component library.</p>
              <p style={{ margin: 0 }}><strong>Dashboard</strong> - At-a-glance overview of total restaked assets, accumulated points, and delegation status, with an asset breakdown across ETH, LSTs, and other tokens showing restaked balance, wallet balance, and TVL for each supported asset.</p>
              <p style={{ margin: 0 }}><strong>Restake</strong> - Per-asset deposit and withdrawal flow with amount entry, restaked balance display, delegation assignment, and contextual protocol information. Supports both native tokens and a full range of Liquid Staking Tokens from Lido, Mantle, Swell, Strader, and Binance.</p>
              <p style={{ margin: 0 }}><strong>Validator Stake</strong> - Structured onboarding path for users becoming validators - choose between becoming a validator and native staking, specify deposit amount and validator address, and submit with clear confirmation of obligations and network participation terms.</p>
              <p style={{ margin: 0 }}><strong>Operator</strong> - Browsable operator directory with restake concentration, number of stakers, AVS secured, and total stake metrics as primary columns. My Operators view shows personal delegation relationships with inline edit capability for operator name and image.</p>
              <p style={{ margin: 0 }}><strong>AVS</strong> - Directory of Actively Validated Services available within the Binomial ecosystem - including Eoracle, Cyber Mach, Hyperlane, Lagrange ZK, Open Layer, and Witness Chain - each with ETH restaked, Binomial restaked, operator count, and staker count surfaced as primary discovery metrics.</p>
              <p style={{ margin: 0 }}><strong>Points Calculator</strong> - Scenario modelling tool allowing users to estimate future points yield by selecting assets, entering amounts, and adjusting the staking period via a 0-365 day slider - making the reward mechanics tangible before any capital commitment.</p>
              <p style={{ margin: 0 }}><strong>Marketing Website</strong> - Single-scroll landing page communicating the shared security proposition to non-technical audiences, with waitlist capture, four core value propositions, and a features section - designed and built for fast iteration ahead of the public launch.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === "Things I've learned.." && (
        <>
          <div style={contentBlock}>
            <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h2>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Domain expert, not domain visitor.</strong> I have designed several DeFi products, but restaking on BNB introduced relationships - operator delegation chains, AVS slashing conditions, LST concentration risk - that I had to genuinely understand before I could structure them clearly. Rushing to wireframes before that understanding was solid would have produced an interface that looked like a DeFi dashboard but failed to communicate what actually mattered. Domain fluency is a design prerequisite, not background reading.</li>
              <li><strong>Data-dense interfaces fail at the column level, not the page level.</strong> The operator and AVS tables looked fine in wireframes. In high fidelity with real data, the column hierarchy became the core usability problem - what leads, what supports, what is secondary. Getting this wrong at the component level compounds across every table in the product. The decision to lead with restake concentration and TVL rather than operator name and staker count was the single most impactful information design choice in the entire project.</li>
              <li><strong>Responsive design debt is fastest to accumulate in DeFi.</strong> The combination of data tables, wallet connection states, deposit forms, and numeric inputs creates a class of responsive problems that are genuinely hard to solve after the fact. Building the token system and component behaviour for all breakpoints from the start added time in the early phase but eliminated an entire category of late-stage rework - and produced a more consistent product across every device.</li>
            </ul>
          </div>
        </>
      )}

    </PageLayout>
  )
}
