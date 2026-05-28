import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import abuDhabiIntro from '../assets/abu-dhabi-intro.png'
import abuDhabiDecisions from '../assets/abu-dhabi-decisions.png'
import abuDhabiProblem from '../assets/abu-dhabi-problem.png'
import abuDhabiRole from '../assets/abu-dhabi-role.png'
import abuDhabiProcess from '../assets/abu-dhabi-process.png'
import abuDhabiSolution from '../assets/abu-dhabi-solution.png'
import abuDhabiLearned from '../assets/abu-dhabi-learned.png'

const PROJECT = 'Explore Abu Dhabi'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/249428413/Explore-Abu-Dhabi' },
]

export default function AbuDhabiPage({ dark, onBack, onHome, onToggle }) {
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
            <img src={abuDhabiIntro} alt="Explore Abu Dhabi" loading="lazy" style={photoImg} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Explore Abu Dhabi</h1>
              <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: UX/UI Designer · Branding · Mobile App · Website Design · Logo Design</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Explore Abu Dhabi is a blockchain-powered mobile app that turns tourism and event engagement into a game - letting users scan QR codes at landmarks and event booths, claim cNFT badges on Solana, climb a leaderboard, and redeem points for real-world rewards across the city.',
                'The app launched at Solana Breakpoint 2025, serving two distinct audiences simultaneously: crypto-native conference attendees already comfortable with Web3, and first-time tourists who had never interacted with a blockchain product in their lives.',
                'The engagement covered the full product scope - UX/UI design, branding, logo design, a component library, marketing materials, and a Webflow landing page - delivered under a hard deadline set by a live international event with no room to slip.',
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
            <img src={abuDhabiDecisions} alt="Challenge" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Designing for two audiences with opposing relationships to the same technology.</p>
              <p style={{ margin: 0 }}>A single product had to serve users with fundamentally different starting points:</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Crypto-native Breakpoint attendees</strong> - expected Web3 functionality, recognised wallet concepts, and wanted a credible showcase of what Solana could do in a consumer context</li>
                <li><strong>General tourists</strong> - unfamiliar with wallets, seed phrases, or blockchain transactions entirely, and needed an experience that felt like a loyalty app, not a crypto product</li>
                <li><strong>Abu Dhabi Tourism Authority and Solana</strong> - needed verifiable foot-traffic data, real engagement metrics, and a flagship consumer use case to present at Breakpoint in January</li>
              </ul>
              <p style={{ margin: 0 }}>The platform covered six interconnected sections across fourteen sub-flows: Attractions, Passport, Leaderboard, Redeem, Map, and User Profile - each requiring its own information architecture while sharing a single navigation system and design language.</p>
              <p style={{ margin: 0 }}>The design tension was explicit from the start: the app had to feel familiar enough for non-crypto users to engage with immediately, while being technically credible enough to serve as a flagship Web3 consumer showcase on a global stage.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Problem' && (
        <>
          <div style={photoCard(dark)}>
            <img src={abuDhabiProblem} alt="Problem" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Blockchain transactions are cold, technical, and irreversible. The job was to make one feel like opening a gift.</p>
              <p style={{ margin: 0 }}>Most Web3 consumer apps fail at the same point: the gap between social login and first on-chain action. Seed phrases, wallet prompts, gas fees, and confirmation dialogs create a wall of technical friction that drops the majority of mainstream users before they experience any product value.</p>
              <p style={{ margin: 0 }}>The parallel challenge was motivational: existing tourism apps in Abu Dhabi felt like digital brochures - passive, static, and offering no reason to venture beyond the conference venue. The app needed to make city exploration feel rewarding in real time, not just informative in retrospect.</p>
              <p style={{ margin: 0 }}>Both problems shared the same root: users needed to get from opening the app to claiming their first badge in under 30 seconds - without ever knowing a blockchain was involved. The design had to absorb the entire technical stack invisibly, so the only thing the user experienced was the reward.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={photoCard(dark)}>
            <img src={abuDhabiRole} alt="My Role" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Lead UX/UI Designer - Full ownership from discovery through App Store delivery, including brand identity and marketing materials.</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>User interviews, surveys, and analytics review</strong> to define audience segments and engagement goals</li>
                <li><strong>Information architecture</strong> across six sections and fourteen sub-flows</li>
                <li><strong>User flow mapping</strong> with explicit focus on the login-to-first-badge critical path</li>
                <li><strong>Low-fidelity and mid-fidelity wireframes</strong> across all core screens</li>
                <li><strong>Brand identity design</strong> including logo, colour system, and typography</li>
                <li><strong>Component library and design tokens</strong></li>
                <li><strong>High-fidelity UI delivery</strong> across iOS and Android</li>
                <li><strong>Webflow landing page</strong> design and build</li>
                <li><strong>Marketing materials</strong> for event and social distribution</li>
                <li><strong>Design QA and App Store submission support</strong></li>
              </ul>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Process' && (
        <>
          <div style={photoCard(dark)}>
            <img src={abuDhabiProcess} alt="Process" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
            <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Establishing the Critical Path First</strong> - Rather than designing by section, I mapped the full user journey from app open to first badge claim and identified the single highest-risk moment: the transition from social login to wallet provisioning. Every structural decision in the early flows was made to protect that moment - keep it invisible, keep it fast, keep it silent.</li>
              <li><strong>Discovery</strong> - Interviews and surveys with both tourist and crypto-native user segments revealed a consistent divergence: crypto users wanted control and transparency; tourists wanted simplicity and instant gratification. Both groups, however, shared one expectation - that rewards needed to feel earned and redeemable for something real. This shaped the entire redemption architecture.</li>
              <li><strong>Competitive Analysis</strong> - Benchmarked against both conventional tourism and loyalty apps and existing Web3 consumer products. Conventional apps consistently failed on motivation; Web3 apps consistently failed on accessibility. The gap between them was exactly where Explore Abu Dhabi needed to sit.</li>
              <li><strong>Information Architecture</strong> - Mapped the full IA across six sections and fourteen sub-flows before any UI work began. The Passport, Leaderboard, and Redeem sections had significant interdependencies - resolving these at IA stage prevented flow conflicts that would have been expensive to untangle at prototype stage.</li>
              <li><strong>Wireframes and Prototype</strong> - Maintained low fidelity through structural feedback rounds covering the core engagement loop: open - login - map - scan - mint - redeem. The badge claiming flow required the most iteration - the QR scan, geofence validation, and mint animation all had to feel instantaneous while the blockchain transaction completed in the background.</li>
              <li><strong>Brand Identity and Design System</strong> - Developed the full brand identity alongside the UX work: a falcon-wing logo mark rooted in Abu Dhabi's national bird, a warm black and terracotta colour palette that communicated prestige without defaulting to generic luxury, and a Palatino/Geist typographic pairing that balanced cultural weight with digital clarity. The component library was built to support both the mobile app and the Webflow landing page from a single token set.</li>
            </ol>
          </div>
        </>
      )}

      {activeTab === 'Key Decisions' && (
        <>
          <div style={photoCard(dark)}>
            <img src={abuDhabiDecisions} alt="Key Decisions" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Hide the wallet without losing it. A Solana wallet provisioned silently via Turnkey in the background - no seed phrase prompt, no password, no request to fund anything. The wallet was surfaced only inside the Profile section behind an &apos;Advanced&apos; toggle for users who wanted it. Zero wallet errors were ever visible to non-crypto users. The technical complexity was real; the user never saw it.</p>
              <p style={{ margin: 0 }}>Make claiming feel earned, not transacted. QR code scanning combined with geofencing and a time window ensured badges could only be claimed physically on location. A short mint animation with haptic confirmation turned what was technically a database write into a genuine moment of delight - the difference between a receipt and a reward.</p>
              <p style={{ margin: 0 }}>Gamify without infantilizing. The brief called for gamification targeted at an international audience at a serious industry event. No confetti, no cartoon mascots. Points were expressed as quiet typographic counters; badge rarity showed through muted tier designations rather than colour explosions. The system felt earned rather than assigned - appropriate for both the cultural context and the audience.</p>
              <p style={{ margin: 0 }}>Rewards that spend like money. Points were redeemable for physical pickups at partner venues - coffee, museum entries, gallery prints, event discounts. The redemption architecture was designed to make points feel like a currency with real-world weight, not a number that accumulated with nowhere to go.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Solution' && (
        <>
          <div style={photoCard(dark)}>
            <img src={abuDhabiSolution} alt="Solution" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Attractions · Passport · Leaderboard · Redeem · Map · User Profile</p>
              <p style={{ margin: 0 }}>The final solution was a live iOS and Android app covering six sections across fourteen sub-flows, built on a silent Solana wallet integration and a full brand identity system, delivered in time for the Solana Breakpoint 2025 launch.</p>
              <p style={{ margin: 0 }}><strong>Silent Wallet Onboarding</strong> - Social login via Apple, Google, or X provisioned a Solana wallet automatically in the background. First-time users went from sign-up to interactive map in under 30 seconds with no blockchain interaction visible at any point in the flow.</p>
              <p style={{ margin: 0 }}><strong>Badge Claiming Flow</strong> - QR code scan combined with GPS geofencing and event time windows validated physical presence before triggering the on-chain mint. Three badge types - Landmark, Side Event, and Booth - each with distinct point values and rarity tiers.</p>
              <p style={{ margin: 0 }}><strong>NFT Passport</strong> - A personal collection view showing all claimed badges, total points, tier progress, and a shareable passport card for social distribution. The Passport served as both achievement record and social proof of city exploration.</p>
              <p style={{ margin: 0 }}><strong>Leaderboard</strong> - Points and badge-based rankings sortable across both dimensions, with individual ranking detail and user profile views. Designed to drive return engagement throughout the event duration.</p>
              <p style={{ margin: 0 }}><strong>Redeem</strong> - Point balance, available rewards from partner venues, and claimed reward history. Reward codes displayed at point of collection for physical redemption - no app connectivity required at the venue.</p>
              <p style={{ margin: 0 }}><strong>Interactive Map</strong> - Filterable city map showing attractions, events, restaurants, and museums with proximity-aware activity suggestions and direct links to attraction detail pages with embedded redemption options.</p>
              <p style={{ margin: 0 }}><strong>Landing Page</strong> - A single-scroll Webflow page explaining the app to non-crypto users in under 10 seconds - hero with QR and store badges, three feature stories, and a Solana credit at the foot. Built for fast iteration and live before Breakpoint.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === "Things I've learned.." && (
        <>
          <div style={photoCard(dark)}>
            <img src={abuDhabiLearned} alt="Things I've learned" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Platform submission is a design constraint, not a post-design task.</strong> The App Store review process consumed a significant portion of time originally allocated to design iteration. Apple&apos;s guidelines around blockchain functionality, in-app purchases, and NFT terminology required multiple submission revisions. Building familiarity with platform standards before the design phase - not after - would have recovered that time and prevented late-stage design changes driven by compliance rather than user needs.</li>
              <li><strong>Testing on real devices is non-negotiable for location-dependent flows.</strong> The QR scanning, GPS geofencing, and haptic feedback components of the badge claiming flow behaved materially differently on physical hardware than in the simulator. Camera performance, GPS accuracy, and touch responsiveness are design problems as much as engineering ones - catching them in testing rather than post-launch required real devices from early in the prototype phase.</li>
              <li><strong>Sponsor and stakeholder communication is a design deliverable.</strong> Coordinating between Solana, the Abu Dhabi Tourism Authority, and the Breakpoint event team required the same level of precision as any design artefact. Misaligned expectations about marketing materials, brand usage, and feature scope created rework that competed directly with delivery time. Treating stakeholder alignment as a structured design activity - with explicit sign-off at each stage - would have reduced that friction significantly.</li>
            </ul>
          </div>
        </>
      )}

    </PageLayout>
  )
}
