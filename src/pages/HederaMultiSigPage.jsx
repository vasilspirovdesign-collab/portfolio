import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import hederaMultisigIntro from '../assets/hedera-multisig-intro.png'
import hederaMultisigProblem from '../assets/hedera-multisig-problem.png'
import hederaMultisigRole from '../assets/hedera-multisig-role.png'
import hederaMultisigProcess from '../assets/hedera-multisig-process.png'

const PROJECT = 'Hedera MultiSig'

const TABS = [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Case Study', href: 'https://www.behance.net/gallery/249420957/Hedera-MultiSig' },
]

export default function HederaMultiSigPage({ dark, onBack, onHome, onToggle }) {
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
            <img src={hederaMultisigIntro} alt="Hedera MultiSig" loading="eager" style={photoImg} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Hedera MultiSig</h1>
            <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Senior UX Designer · End-to-End Product Design · Branding · Logo Design</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              'Hedera MultiSig is a web application that brings multi-signature wallet creation and collaborative transaction management to the Hedera network through a clean, accessible interface - making a capability previously limited to technical users available to a significantly broader audience.',
              'The platform allows users to create or load existing MultiSig accounts on Hedera, configure signing thresholds, manage signers, and initiate, review, and execute transactions - all within a single, account-aware interface supporting Mainnet, Testnet, and Previewnet environments.',
              'The scope covered the full product design: sitemap and information architecture, wireframes, logo design, style guide, and high-fidelity UI across light and dark modes - a complete, implementation-ready package for a technically novel workflow with no established consumer UX conventions.',
            ].map((para, i) => (
              <p key={i} style={{ margin: 0, ...bodyText, color: textPrimary }}>{para}</p>
            ))}
          </div>
        </div>
        </>
      )}

      {activeTab === 'Challenge' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Designing for a security-critical workflow where the core mechanism is invisible to most users.</p>
            <p style={{ margin: 0 }}>Multi-signature transactions on Hedera require coordinated action across multiple keyholders - a threshold of signers must approve before any transaction executes. The design had to serve two user types with different relationships to that mechanism:</p>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Technical users</strong> - already familiar with MultiSig concepts, key pairs, and on-chain threshold logic, expecting full control over signer configuration, threshold settings, gas fees, and contract interactions</li>
              <li><strong>Non-technical users</strong> - encountering MultiSig for the first time, needing a guided account creation flow that explained what a threshold meant and why it mattered, without assuming prior blockchain literacy</li>
            </ul>
            <p style={{ margin: 0 }}>The platform covered five core sections across the full account lifecycle: Dashboard, Assets, Transactions, Signers, and Settings - each with distinct data requirements and interaction patterns, connected through a multi-account navigation model that allowed users to switch between accounts without losing context.</p>
            <p style={{ margin: 0 }}>The risk was a product that served technical users well but remained inaccessible to the broader audience the project was explicitly built to reach - reproducing the same barrier it was designed to remove.</p>
          </div>
        </div>
      )}

      {activeTab === 'Problem' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Threshold-based signing has no mainstream consumer analogue - and that&apos;s the design problem. Multi-signature wallets exist because single points of failure are a security risk. But the logic of why 3 out of 4 signers provides meaningfully stronger guarantees than 1 is not self-evident to users who have never encountered the pattern before.</p>
            <p style={{ margin: 0 }}>The design had to communicate that logic at the moment it mattered: during account creation, when signer lists were being assembled and thresholds were being set.</p>
            <p style={{ margin: 0 }}>The parallel challenge was transaction state visibility. In a multi-sig system, a transaction exists in a pending state until enough signers have approved it - a concept with no mainstream consumer analogue. Users needed to understand at a glance how many signatures a pending transaction had collected, how many were still required, and what action, if any, was required from them. Getting this wrong at the component level would create a product that felt perpetually confusing rather than reassuringly transparent.</p>
          </div>
        </div>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={photoCard(dark)}>
            <img src={hederaMultisigRole} alt="My Role" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Lead UX/UI Designer - Full ownership from sitemap through UI delivery, including brand identity and logo design.</p>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Information architecture and sitemap</strong> across five core sections</li>
              <li><strong>User flow mapping</strong> for account creation, signer management, and transaction flows</li>
              <li><strong>Grid-based wireframes</strong> across all core screens at 1440px</li>
              <li><strong>Logo design and brand identity</strong></li>
              <li><strong>Style guide</strong> including colour palette, typography, and component library</li>
              <li><strong>High-fidelity UI delivery</strong> across light and dark modes</li>
              <li><strong>Design QA and implementation support</strong></li>
            </ul>
          </div>
        </div>
        </>
      )}

      {activeTab === 'Process' && (
        <>
          <div style={photoCard(dark)}>
            <img src={hederaMultisigProcess} alt="Process" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h2>
          <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
            <li><strong>Sitemap Before Screens</strong> - Mapped the full IA across five sections - Dashboard, Assets, Transactions, Signers, Settings - and two entry states (Create Account, Add Account) before any wireframes were produced. The Transactions section required the most structural attention: Waiting Signature, History, Sort/Filter, New Transaction, Send Tokens, and Contract Interaction each had distinct data models and action states that had to be resolved at the sitemap level to avoid conflicts downstream.</li>
            <li><strong>Grid-Based Wireframes</strong> - Built wireframes on a 12-column grid at 1440px, using the grid as a structural constraint from the first frame rather than applying it retrospectively. This enforced proportional consistency across the account creation wizard, the dashboard layout, and the transaction and signer management surfaces before any visual design decisions were made.</li>
            <li><strong>Account Creation Flow</strong> - The five-step account creation wizard (Connect Wallet - Personalise - Add Signers - Set Threshold - Summary) required particular care at each transition. The Summary screen - surfacing wallet name, address, network, threshold, and full signer list before commitment - was designed as an explicit review gate, making the full configuration visible and reversible before the account was created on-chain.</li>
            <li><strong>Logo Design</strong> - Developed a shield and keyhole mark rooted in the product&apos;s security rationale: the shield representing the protective layer multi-signature adds to asset management, the keyhole representing the access control and authority vested in each keyholder. The mark was designed to read cleanly at every scale from favicon to full-page header, rendered in the lime green gradient against both light and dark backgrounds.</li>
            <li><strong>Style Guide and UI</strong> - Built a dual-mode design system anchored in a lime green gradient primary (#B7F133 to #42E365) against a near-black (#000000) and white palette, with Sora as the typeface across all weights. The light mode UI served as the primary interface for most user-facing flows, with the dark mode creation and loading flows providing visual distinction for the setup context.</li>
          </ol>
        </div>
        </>
      )}

      {activeTab === 'Key Decisions' && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}><strong>Make threshold configuration a teaching moment, not a form field.</strong> Early wireframes treated the threshold setting as a number input with a label. Testing revealed that users unfamiliar with MultiSig had no basis for choosing a threshold - they did not know what they were trading off. The redesigned threshold step surfaced the logic explicitly: what threshold means, why it matters for security, and what the consequences of different values are - before asking for a number. Users who understood what they were configuring made more deliberate choices and expressed more confidence in the account they created.</p>
            <p style={{ margin: 0 }}><strong>Pending transactions need a status model, not just a status label.</strong> The transaction list had to communicate, at a glance, which transactions were waiting for signatures, how many had been collected, how many were still required, and whether the current user&apos;s signature was among those needed. Treating this as a single status label produced a list that required users to open each transaction to understand its state. Designing signing progress as a first-class data attribute - visible in the list row - made the dashboard meaningful rather than decorative.</p>
            <p style={{ margin: 0 }}><strong>Two entry paths, one coherent product.</strong> The home screen offered two explicit paths: Create Hedera Account and Load Existing Account. Rather than treating these as variants of the same flow, they were designed as distinct journeys with different information requirements - the creation flow guided users through configuration from scratch, while the load flow required only an account address, name, and network selection. Keeping them visually parallel but structurally distinct prevented the confusion that comes from overloading a single onboarding flow with conditional branching.</p>
            <p style={{ margin: 0 }}><strong>Support multiple accounts without multiplying complexity.</strong> The Switch Accounts capability - allowing users to manage multiple MultiSig accounts from a single interface - was a design requirement that could easily have produced a confusing nested navigation model. The solution was a persistent sidebar account context combined with a clear account switcher, ensuring users always knew which account they were operating in without requiring a separate account management surface.</p>
          </div>
        </div>
      )}

      {activeTab === 'Solution' && (
        <>
          <div style={photoCard(dark)}>
            <img src={hederaMultisigProblem} alt="Solution" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h2>
          <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ margin: 0 }}>Dashboard · Assets · Transactions · Signers · Settings</p>
            <p style={{ margin: 0 }}>Five sections. Two entry states. One design system covering both modes. The delivered product covered the complete Hedera MultiSig lifecycle - from account creation through transaction execution - built on a dual-mode component library with a full brand identity.</p>
            <p style={{ margin: 0 }}><strong>Account Creation Wizard</strong> - A five-step guided flow (Connect Wallet - Personalise - Add Signers - Set Threshold - Summary) supporting wallet connections via Blade Wallet, Hashpack, and MyHbarWallet, with network selection across Previewnet, Testnet, and Mainnet, and a full configuration summary before on-chain commitment.</p>
            <p style={{ margin: 0 }}><strong>Dashboard</strong> - Account overview surfacing HBAR balance, NFTs, token count, recent transactions, and a persistent New Transaction CTA - with account details, threshold display, and connected signer list visible in the sidebar for constant contextual reference.</p>
            <p style={{ margin: 0 }}><strong>Assets</strong> - Organised token and NFT holdings view providing a clear picture of what the MultiSig account holds across the Hedera network.</p>
            <p style={{ margin: 0 }}><strong>Transactions</strong> - Full transaction management covering pending signature collection, transaction history, sort and filter, new transaction creation, token sends with recipient, amount, token selection, and description, and contract interaction - with a 24-hour transaction validity window surfaced as a permanent reminder at the point of creation.</p>
            <p style={{ margin: 0 }}><strong>Signers</strong> - Signer list management showing user names, types (Owner/Signer), and wallet addresses, with add, edit, and remove actions and inline copy-to-clipboard for address sharing.</p>
            <p style={{ margin: 0 }}><strong>Settings</strong> - Threshold configuration and gas fee management, giving account owners control over the signing requirements and network cost parameters without requiring a new account creation flow.</p>
          </div>
        </div>
        </>
      )}

      {activeTab === "Things I've learned.." && (
        <div style={contentBlock}>
          <h2 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h2>
          <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
            <li><strong>Teach security concepts at the moment of configuration, not before.</strong> The instinct when designing a security-focused product is to front-load educational content - an explainer screen early in onboarding. On this project, the more effective approach was contextual: surfacing the explanation of threshold signing at the exact step where users had to make a threshold decision. Information delivered at the point of relevance is retained and acted on; information delivered in advance is skipped. The same principle applies to any product where users are configuring something they do not yet fully understand.</li>
            <li><strong>Multi-account navigation that arrives late in the brief costs twice as much.</strong> The Switch Accounts requirement appeared late in the project brief and was initially treated as a secondary feature. When mapped against the full user journey, it became clear that users managing treasury accounts, team funds, and personal accounts simultaneously would encounter the account context problem on every session. Designing the sidebar account model early - rather than retrofitting it - would have resolved several layout decisions that had to be revisited when the requirement was properly scoped.</li>
            <li><strong>A grid is a decision-making tool, not a finishing step.</strong> Building wireframes on the 12-column grid from the first frame, rather than applying grid constraints after structural decisions were made, produced a UI that required significantly less alignment correction at the high-fidelity stage. The grid is not a design constraint - it is a decision-making tool that eliminates an entire category of questions about spacing, proportion, and layout hierarchy before visual design begins.</li>
          </ul>
        </div>
      )}

    </PageLayout>
  )
}
