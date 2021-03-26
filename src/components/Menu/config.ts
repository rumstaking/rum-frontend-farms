import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.rumstaking.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.rumstaking.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x1d54B2d7e2b8C6F2F3A84914E8720595a579ECe4',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/rum-swap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/rum-swap/',
      }, */
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x35f4e1af8d76f33ce8b051b6c15050afab9e83e2',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Audit by Hacken',
        href: 'https://rumstaking.com/files/hackenAudit.pdf',
      }, */
      {
        label: "Github",
        href: "https://github.com/rumstaking/",
      },
      {
        label: "Docs",
        href: "https://docs.rumstaking.com/",
      },
      {
        label: "Blog",
        href: "https://rumstaking.medium.com",
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://rumstaking.com/files/hackenAudit.pdf',
  }, */
]

export default config
