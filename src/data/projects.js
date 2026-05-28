export const PROJECTS = [
  { title: 'Opus Edu', description: 'OpusEdu is a platform where creators and learners connect to share and gain knowledge, powered by blockchain technology.' },
  { title: 'Hedera Transaction Tool', description: 'A transaction tool built on the Hedera network, enabling fast and low-cost token transfers with a clean, accessible interface.' },
  { title: 'Rowan Carbon Chain', description: 'A blockchain-based platform for issuing, managing, and retiring carbon offset certificates via smart contracts.' },
  { title: 'Opus Edu AI', description: 'A context-aware AI onboarding assistant built into OpusEdu, guiding new users through Web3 concepts and actions at the moments that matter most.' },
  { title: 'Explore Abu Dhabi', description: 'A blockchain-powered tourism app for Solana Breakpoint 2025 - letting users claim NFT badges at landmarks, climb a leaderboard, and redeem points for real-world rewards.' },
  { title: 'Binomial', description: 'A shared security platform on BNB enabling restaking of native tokens and LSTs to provide economic security for Actively Validated Services.' },
  { title: 'Metawin', description: 'A predictive markets platform within the MetaWin ecosystem - bet on real-life event outcomes across sports, politics, and crypto, resolved on-chain.' },
  { title: 'LimeCN Web3 Design System', description: 'An open-source Web3 component library built on shadcn/ui and Tailwind CSS, covering wallet states, token display, transaction flows, and address patterns.' },
  { title: 'ISO-Q', description: 'A regulated investment platform enabling accredited institutional investors to discover, subscribe to, and hold interests in private funds — with tokenized ownership, multi-currency support, and AIFM regulatory oversight.' },
]

export const FEATURED = ['Opus Edu', 'Hedera Transaction Tool', 'LimeCN Web3 Design System', 'Opus Edu AI']
  .map(title => PROJECTS.find(p => p.title === title))
