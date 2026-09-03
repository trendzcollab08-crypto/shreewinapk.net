export type EditorialImage = {
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export const shreeWinScreens = {
  welcomeOffer: {
    src: '/shreewin-welcome-offer.webp', title: 'Welcome offer panel', width: 720, height: 1413,
    alt: 'ShreeWin homepage showing a welcome offer panel',
    caption: 'The homepage offer panel links new users to the active first-deposit promotion. Read the live terms before joining.',
  },
  firstDepositBonus: {
    src: '/shreewin-first-deposit-bonus.webp', title: 'First-deposit bonus tiers', width: 720, height: 1400,
    alt: 'ShreeWin first-deposit bonus screen with four deposit tiers',
    caption: 'First-deposit bonus tiers are ₹300 + ₹48, ₹500 + ₹108, ₹1,000 + ₹188 and ₹5,000 + ₹488.',
  },
  homepageGames: {
    src: '/shreewin-homepage-lottery-games.webp', title: 'Game homepage', width: 720, height: 1355,
    alt: 'ShreeWin homepage showing Lobby, Lottery and game cards',
    caption: 'Use Lobby, Lottery, Popular, Mini Game and Slots from the main category row.',
  },
  agentRechargeBonus: {
    src: '/shreewin-agent-referral-bonus.webp', title: 'Agent recharge bonus', width: 720, height: 1377,
    alt: 'ShreeWin agent referral bonus table and conditions',
    caption: 'This referral offer connects an invited member’s first three qualifying recharges and minimum activity with agent bonus tiers.',
  },
  referralMilestones: {
    src: '/shreewin-referral-milestone-bonus.webp', title: 'Referral milestones', width: 720, height: 1413,
    alt: 'ShreeWin referral milestone table for invited subordinates',
    caption: 'Referral milestones combine invite count, minimum deposit and bonus levels from 1 to 5,000 invited subordinates.',
  },
  activityAward: {
    src: '/shreewin-activity-award.webp', title: 'Activity Award tasks', width: 720, height: 1415,
    alt: 'ShreeWin Activity Award page with weekly tasks',
    caption: 'Activity Award separates weekly and daily tasks. Each task shows its target, completion status and listed reward.',
  },
  activityCenter: {
    src: '/shreewin-activity-center.webp', title: 'Activity centre', width: 720, height: 1404,
    alt: 'ShreeWin Activity page with reward and bonus options',
    caption: 'Activity includes Activity Award, Invitation Bonus, Betting Rebate, Super Jackpot, First Gift, Invite Wheel, Gifts and Attendance Bonus.',
  },
  firstGift: {
    src: '/shreewin-first-gift.webp', title: 'First Gift details', width: 720, height: 1367,
    alt: 'ShreeWin First Gift activity details screen',
    caption: 'First Gift includes a new-user first-deposit compensation offer capped at ₹200, dated 24 August 2026.',
  },
  agencyDashboard: {
    src: '/shreewin-agency-dashboard.webp', title: 'Agency dashboard', width: 720, height: 1383,
    alt: 'ShreeWin Agency dashboard with team and invitation options',
    caption: 'Agency shows direct and team subordinate records, deposit activity, the invitation link and the invitation-code option.',
  },
  agencyRules: {
    src: '/shreewin-agency-rules.webp', title: 'Agency rules', width: 264, height: 1332,
    alt: 'ShreeWin Agency rules and rebate-level table',
    caption: 'The Agency rules explain six subordinate levels, invitation tracking, commission collection and level requirements.',
  },
  accountWallet: {
    src: '/shreewin-account-wallet.webp', title: 'Wallet and history options', width: 720, height: 1173,
    alt: 'ShreeWin Account screen with Wallet, Deposit, Withdraw and history options',
    caption: 'The Wallet area shows Deposit, Withdraw, game history, transaction history and account records in one place.',
  },
  accountServiceCenter: {
    src: '/shreewin-account-service-center.webp', title: 'Account and Service Centre', width: 720, height: 1431,
    alt: 'ShreeWin Account settings and customer-service options',
    caption: 'Account includes Gifts, Game Statistics, Language, Settings, Feedback, Announcement, Customer Service, Beginner’s Guide and About Us.',
  },
  giftCodeEntry: {
    src: '/shreewin-gift-code-entry.webp', title: 'Gift Code entry', width: 720, height: 1426,
    alt: 'ShreeWin Gift screen with gift-code entry field',
    caption: 'Open Gifts, enter an active code in the Gift Code field and tap Receive. The History area records previous claims.',
  },
  depositScreen: {
    src: '/shreewin-deposit-screen.webp', title: 'Deposit screen', width: 720, height: 1415,
    alt: 'ShreeWin Deposit screen with payment methods and amount choices',
    caption: 'Deposit provides UPI-QR, Innate UPI-QR, Paytm and ARPay, with preset and custom amount options.',
  },
  withdrawalMethods: {
    src: '/shreewin-withdrawal-methods.webp', title: 'Withdrawal methods', width: 720, height: 1444,
    alt: 'ShreeWin Withdrawal screen with UPI, bank card and USDT',
    caption: 'Choose UPI, bank card or USDT, then add the receiving account before entering an amount.',
  },
  usdtWithdrawalRules: {
    src: '/shreewin-usdt-withdrawal-rules.webp', title: 'USDT withdrawal rules', width: 720, height: 1404,
    alt: 'ShreeWin USDT withdrawal limits and account checks',
    caption: 'The USDT tab lists a ₹1,000–₹10,00,000 range, three daily requests and blockchain-network confirmation checks.',
  },
} as const satisfies Record<string, EditorialImage>;

export const currentPlatformScreens = Object.values(shreeWinScreens);
