# ShreeWin screen facts — checked 3 September 2026

This file is the project reference for the screenshots supplied on 3 September 2026. Treat the screens as dated evidence: rewrite visible wording for clarity, but do not add features or values that are not shown. The original PNG files were converted to metadata-free WebP files in `public/`.

## Screen map

| Asset | Visible information |
| --- | --- |
| `shreewin-welcome-offer.webp` | Homepage welcome panel promoting a first-deposit bonus up to ₹488. |
| `shreewin-first-deposit-bonus.webp` | One claim per account. Tiers: ₹300 + ₹48, ₹500 + ₹108, ₹1,000 + ₹188, ₹5,000 + ₹488. |
| `shreewin-homepage-lottery-games.webp` | Top categories: Lobby, Lottery, Popular, Mini Game and Slots. Lottery cards: WinGo, K3 and 5D. Aviator appears in Recommended Games. |
| `shreewin-agent-referral-bonus.webp` | Agent bonuses connected with an invited member's first three qualifying recharges and minimum activity. The on-screen rule says minimum turnover is five times the deposit amount. Each deposit can receive its bonus once. |
| `shreewin-referral-milestone-bonus.webp` | Referral milestones from 1 to 5,000 invited subordinates. Both invitation and the displayed minimum-deposit condition must be complete. Manipulative or cheating activity can cancel the bonus. |
| `shreewin-activity-award.webp` | Activity Award has weekly and daily tasks. Visible weekly Slots tasks: 10,000 target for ₹25 and 20,000 target for ₹50. A 50,000 target is visible, but its reward is not visible. |
| `shreewin-activity-center.webp` | Activity shortcuts: Activity Award, Invitation Bonus, Betting Rebate, Super Jackpot, First Gift and Invite Wheel. Cards: Gifts and Attendance Bonus. |
| `shreewin-first-gift.webp` | Screen date: 24 August 2026. New-user first-deposit compensation is shown as 50% of the first deposit, capped at ₹200, with automatic distribution after the displayed membership condition is met. |
| `shreewin-agency-dashboard.webp` | Direct and team subordinate records, registration and deposit counts, first-deposit count, Invitation Link, Partner Rewards, Copy Invitation Code and Subordinate Data. |
| `shreewin-agency-rules.webp` | Six subordinate levels, invitation-link/code tracking, commission calculation and collection records, level table, game-dependent commission rates and a Top 20 commission ranking note. Avoid transcribing unclear table units without a newer readable screen. |
| `shreewin-account-wallet.webp` | Wallet, Deposit, Withdraw, VIP, Game History, Transaction, Deposit History, Withdraw History, Notification, Gifts and Game Statistics. The private profile header was removed before publication. |
| `shreewin-account-service-center.webp` | Language; Settings, Feedback, Announcement, Customer Service, Beginner's Guide and About Us in Service Centre. |
| `shreewin-gift-code-entry.webp` | Gift Code input, Receive button and History area. |
| `shreewin-deposit-screen.webp` | UPI-QR, Innate UPI-QR, Paytm and ARPay. Preset amounts from ₹100 to ₹50,000 and a custom range of ₹100–₹50,000. |
| `shreewin-withdrawal-methods.webp` | UPI, Bank Card and USDT tabs; Add UPI; amount input. |
| `shreewin-usdt-withdrawal-rules.webp` | USDT request time 00:10–23:50, three requests per day, ₹1,000–₹10,00,000 range and three blockchain-network confirmations. Users are told to check receiving information and contact Customer Service if it is incorrect. |

## Referral bonus values visible on the screens

Agent recharge bonus:

- First recharge: ₹200 / 1,000 activity / ₹38; ₹500 / 2,500 / ₹88; ₹1,000 / 5,000 / ₹128; ₹2,500 / 12,500 / ₹188; ₹5,000+ / 25,000 / ₹388.
- Second recharge: ₹300 / 1,000 activity / ₹38; ₹1,000 / 2,500 / ₹88; ₹2,500 / 5,000 / ₹128; ₹5,000 / 12,500 / ₹188; ₹10,000+ / 25,000 / ₹388.
- Third recharge: ₹1,000 / 5,000 activity / ₹38; ₹2,500 / 12,500 / ₹88; ₹5,000 / 25,000 / ₹128; ₹10,000 / 50,000 / ₹188; ₹20,000+ / 1,00,000 / ₹388.

Referral milestone bonus:

- 1 invite / ₹300 minimum deposit / ₹38 bonus.
- 3 / ₹300 / ₹158.
- 10 / ₹500 / ₹580.
- 30 / ₹800 / ₹1,800.
- 50 / ₹1,200 / ₹2,800.
- 75 / ₹1,200 / ₹4,500.
- 100 / ₹1,200 / ₹5,800.
- 200 / ₹1,200 / ₹11,800.
- 500 / ₹1,200 / ₹29,000.
- 1,000 / ₹1,200 / ₹58,000.
- 2,000 / ₹1,200 / ₹1,18,000.
- 5,000 / ₹1,200 / ₹3,00,000.

## Daily Gift Code workflow

Update only `siteConfig.dailyGiftCode` in `app/site-config.ts`:

- Put the active code in `value`.
- Set `checkedOn` to the date it was checked.
- Use `null` when no active code has been confirmed; the website then says “No active code listed”.

Never publish a guessed or expired code. The website does not collect a user's password, OTP, UPI PIN or payment details.
