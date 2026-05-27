import { useState, useEffect } from 'react'
import { t } from '../theme'
import { bodyText, heading, photoCard, photoImg, contentBlock } from '../styles'
import PageLayout from '../components/PageLayout'
import opusAIIntro from '../assets/opus-ai-cover.png'
import opusAIChallenge from '../assets/opus-ai-challenge.png'
import opusAIRole from '../assets/opus-ai-role.png'
import opusAIProcess from '../assets/opus-ai-process.png'
import opusAISolution from '../assets/opus-ai-solution.png'
import opusAIDecisions from '../assets/opus-ai-decisions.png'
import opusAILearned from '../assets/opus-ai-learned.png'

const PROJECT = 'Opus Edu AI'

const getTabs = (onOpenProject) => [
  'Introduction', 'Challenge', 'Problem', 'My Role', 'Process', 'Key Decisions', 'Solution', "Things I've learned..",
  { label: 'Opus Edu', onClick: () => onOpenProject?.('Opus Edu') },
]

export default function OpusAIPage({ dark, onBack, onHome, onToggle, onOpenProject }) {
  const [activeTab, setActiveTab] = useState('Introduction')
  useEffect(() => { document.title = `${PROJECT} - Vasil Spirov` }, [])

  const textPrimary = t(dark, 'text')

  return (
    <PageLayout
      dark={dark}
      onToggle={onToggle}
      onHome={onHome || onBack}
      crumbs={[{ label: 'Projects', onClick: onBack }, { label: PROJECT }]}
      tabs={getTabs(onOpenProject)}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {activeTab === 'Introduction' && (
        <>
          <div style={photoCard(dark)}>
            <img src={opusAIIntro} alt="Opus Edu AI" loading="lazy" style={photoImg} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '694px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Opus Edu AI</h1>
              <p style={{ margin: 0, ...bodyText, color: textPrimary }}>Role: Senior UX Designer · AI Feature Design · End-to-End Product Design</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Opus Edu AI is an onboarding assistant built directly into the OpusEdu platform, designed to help new users understand Web3 concepts, wallets, crypto payments, and blockchain-verified certificates through conversational, step-by-step guidance in plain language.',
                "The assistant serves the platform's most vulnerable user segment - learners encountering Web3 for the first time - at exactly the moments where confusion drives drop-off: wallet connection, crypto payment, and on-chain certificate interactions.",
                "The hardest brief isn’t ‘build an AI assistant.’ It’s ‘build one that doesn’t feel like an AI assistant’ - context-aware, invisible when it’s not needed, and genuinely useful the moment it is.",
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
            <img src={opusAIChallenge} alt="Challenge" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Challenge</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Designing an AI assistant for a product where the interface itself is already unfamiliar.</p>
              <p style={{ margin: 0 }}>The OpusEdu platform operates in a domain that is structurally confusing for mainstream users. Adding a conversational AI layer introduced a second layer of novelty on top of an already high cognitive load:</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>New learners</strong> - needed plain-language guidance through Web3 concepts at the exact moment they encountered them, without leaving the page or losing their place in a flow</li>
                <li><strong>Mid-flow users</strong> - needed direct action shortcuts that reduced steps rather than adding a parallel conversation to manage</li>
                <li><strong>Returning users</strong> - needed persistent history and shareable threads so prior guidance remained accessible and didn't have to be repeated</li>
              </ul>
              <p style={{ margin: 0 }}>The assistant had to work across the platform's core friction points - wallet setup, course activation, blockchain payment, and certificate management - each with different interaction states and contextual information requirements.</p>
              <p style={{ margin: 0 }}>The risk was an AI feature that added perceived complexity rather than reducing it: a chatbot that answered questions in a vacuum while users remained stuck in the interface around it.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Problem' && (
        <>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Problem</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Web3 onboarding has a &apos;valley of confusion&apos; between opening the app and completing a first action. Static tooltips don&apos;t cross it. A chatbot you have to find and open doesn&apos;t either. The problem was designing support that was already there.</p>
              <p style={{ margin: 0 }}>Web3 onboarding fails most users before they experience any product value. The friction is structural: wallet creation, seed phrase management, and blockchain transactions are concepts with no consumer analogue, and most platforms address them with static tooltips or help documentation that requires users to self-identify as confused before seeking help.</p>
              <p style={{ margin: 0 }}>The challenge on the design side was positional: an AI assistant that appears too early feels intrusive; one that appears too late has already lost the user. Context-awareness - surfacing guidance at the right interaction point, with the right scope, without forcing the user to formulate a question - was the core design problem, not the conversation UI itself.</p>
              <p style={{ margin: 0 }}>Both dimensions shared a root issue: users needed help that felt like part of the flow, not a detour from it. The design had to make the assistant invisible when not needed and immediately useful when it was.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'My Role' && (
        <>
          <div style={photoCard(dark)}>
            <img src={opusAIRole} alt="My Role" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>My Role</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Lead UX Designer - Full ownership from concept through UI delivery across desktop and mobile.</p>
              <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Audit of existing OpusEdu flows</strong> to identify highest-friction onboarding touchpoints</li>
                <li><strong>Competitive review</strong> of AI assistant integrations across Web3 and SaaS platforms</li>
                <li><strong>Conversational UX mapping</strong> and contextual trigger logic</li>
                <li><strong>Information architecture</strong> for assistant states across core user journeys</li>
                <li><strong>Low-fidelity and mid-fidelity wireframes</strong> for desktop and mobile</li>
                <li><strong>Interactive Figma prototype</strong> for stakeholder validation</li>
                <li><strong>Component library extensions and design tokens</strong> for AI-specific UI patterns</li>
                <li><strong>High-fidelity UI delivery</strong> across all assistant states and screen sizes</li>
              </ul>
              <p style={{ margin: 0 }}>Tools: Figma · FigJam · Notion</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Process' && (
        <>
          <div style={photoCard(dark)}>
            <img src={opusAIProcess} alt="Process" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Process</h1>
            <ol style={{ margin: 0, paddingLeft: '24px', listStyleType: 'decimal', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Friction Mapping Before Feature Design</strong> - Rather than designing the assistant as a standalone feature, I started by auditing the existing OpusEdu flows to identify where users were most likely to stall. This directed the assistant's contextual trigger logic toward wallet setup, payment confirmation, and certificate interactions - the three points with the highest drop-off risk - before any UI work began.</li>
              <li><strong>Discovery</strong> - Review of existing AI assistant integrations across both Web3-native products and mainstream SaaS platforms revealed a consistent failure mode: assistants that answered questions without enabling action. This shaped the core design requirement - the assistant needed direct action shortcuts, not just explanatory text.</li>
              <li><strong>Conversational UX Mapping</strong> - Mapped the assistant's contextual states against each core user journey before designing any UI. This surfaced the range of trigger conditions, response types, and action affordances the interface needed to support - and identified which states required visual integration with the surrounding page rather than a self-contained chat panel.</li>
              <li><strong>Wireframes and Prototype</strong> - Maintained low fidelity through structural feedback rounds covering the assistant's four primary states: collapsed, expanded panel, full-screen, and contextual inline. Pressure to move to visual design came early; holding at lo-fi through structural rounds prevented significant rework when the panel behaviour changed between mobile and desktop.</li>
              <li><strong>UI Design and Component Extensions</strong> - Extended the existing OpusEdu component library with AI-specific patterns: the expandable chat panel, action shortcut chips, conversation history list, and thread sharing controls. Consistency with the host product's visual language was a hard constraint - the assistant had to feel like OpusEdu, not like a third-party widget dropped in.</li>
            </ol>
          </div>
        </>
      )}

      {activeTab === 'Key Decisions' && (
        <>
          <div style={photoCard(dark)}>
            <img src={opusAIDecisions} alt="Key Decisions" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Key Decisions</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Design for the user who doesn&apos;t know what to ask. Most AI assistant interfaces are optimised for users who can articulate a question. OpusEdu&apos;s new learners often can&apos;t - they&apos;re confused about a concept they don&apos;t have language for yet. Rather than relying on open text input as the primary interaction, I prioritised contextual suggestions and direct action shortcuts that anticipated the user&apos;s next need based on where they were in the flow. The text input remained available; the shortcuts removed the need for it in the highest-friction moments.</p>
              <p style={{ margin: 0 }}>The assistant should never compete with the page. Early explorations used full-panel takeovers for the assistant interface. Testing revealed that users felt displaced from their task rather than supported through it. The final design used a persistent collapsed state, an expandable side panel, and a full-screen mode the user controlled - ensuring the assistant augmented the existing interface rather than replacing it at exactly the moments users needed to stay oriented.</p>
              <p style={{ margin: 0 }}>Persistent history is a trust feature, not a convenience feature. In a domain where users encounter genuinely new concepts, the ability to return to a previous explanation - or share it with another user - materially changes the relationship with the product. Designing persistent conversation history and shareable threads was not a feature enhancement; it was a response to the specific way Web3 confusion compounds across sessions.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Solution' && (
        <>
          <div style={photoCard(dark)}>
            <img src={opusAISolution} alt="Solution" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Solution</h1>
            <div style={{ ...bodyText, color: textPrimary, display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p style={{ margin: 0 }}>Onboarding Guidance · Web3 Simplified · Smart Step-by-Step Help</p>
              <p style={{ margin: 0 }}>The final solution was a context-aware AI assistant integrated directly into the OpusEdu platform workflow, available across desktop and mobile, designed to reduce Web3 onboarding friction at the moments it matters most.</p>
              <p style={{ margin: 0 }}><strong>Intelligent, Context-Aware Guidance</strong> - The assistant surfaces step-by-step explanations of Web3 concepts, wallet actions, and blockchain interactions at the relevant point in the user's flow - without requiring the user to navigate away from their current task or formulate a support request.</p>
              <p style={{ margin: 0 }}><strong>Direct Action Shortcuts</strong> - Inline action chips allow users to trigger common next steps - connect wallet, confirm payment, view certificate - directly from the assistant panel, reducing the gap between understanding and action.</p>
              <p style={{ margin: 0 }}><strong>Responsive and Expandable UI</strong> - A collapsed persistent state, an expandable side panel, and a full-screen mode give users control over how much of the interface the assistant occupies, accommodating both quick queries and extended onboarding sessions.</p>
              <p style={{ margin: 0 }}><strong>Persistent Conversation History</strong> - Previous assistant interactions are stored and accessible across sessions, allowing users to return to earlier explanations and reducing the need to re-ask questions across multiple visits.</p>
              <p style={{ margin: 0 }}><strong>Shareable and Editable Chat Threads</strong> - Conversations can be shared between users, making the assistant useful not just for individual onboarding but for teams or cohorts navigating the platform together.</p>
            </div>
          </div>
        </>
      )}

      {activeTab === "Things I've learned.." && (
        <>
          <div style={photoCard(dark)}>
            <img src={opusAILearned} alt="Things I've learned" loading="lazy" style={photoImg} />
          </div>
          <div style={contentBlock}>
            <h1 style={{ margin: 0, ...heading, color: textPrimary }}>Things I&apos;ve learned..</h1>
            <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '32px', ...bodyText, color: textPrimary }}>
              <li><strong>Designing the assistant as its own thing made it useless.</strong> Early in the project I designed the assistant as a self-contained interface. When mapped against the actual user journeys, it became clear that the assistant&apos;s value was entirely dependent on where it appeared and what it knew about the user&apos;s current state. Redesigning around contextual integration rather than standalone functionality changed the product significantly - and made it substantially more useful.</li>
              <li><strong>Action is more valuable than explanation in high-friction moments.</strong> The instinct when designing an AI assistant is to optimise for the quality of its responses. The more important design problem was reducing the distance between a response and the action it enabled. Direct action shortcuts were the most impactful single addition to the assistant - not because they were technically sophisticated, but because they closed the loop between understanding and doing.</li>
              <li><strong>Designing within an existing product is a different discipline than designing from scratch.</strong> The constraint of visual and behavioural consistency with the host product was more demanding than building a new design system. Every component, every state, every interaction had to be pressure-tested against the existing OpusEdu interface. That constraint produced a better-integrated result - but it required a different kind of discipline than the end-to-end work on the core platform.</li>
            </ul>
          </div>
        </>
      )}

    </PageLayout>
  )
}
