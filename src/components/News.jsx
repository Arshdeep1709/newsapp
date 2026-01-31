
import React, { Component } from 'react'
import SubNews from './SubNews'

export class News extends Component {
//    articles = [
//     {
// "article_id": "111bbcf78ec88504603bfc83e0173370",
// "link": "https://cryptonewsbytes.com/how-did-the-matcha-meta-hack-lead-to-17-million-in-losses/",
// "title": "How did the Matcha Meta Hack lead to $17 million in losses?",
// "description": "A security incident tied to the matcha meta hack has resulted in almost $17 million worth of cryptocurrency being taken from users of Matcha Meta, a DeFi exchange meta aggregator created by 0x. The attack started at around 5:10pm London time on January 25, according to reports that described the event as a breach. Matcha...The post How did the Matcha Meta Hack lead to $17 million in losses? first appeared on CRYPTONEWSBYTES.COM.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "hack",
// "matcha meta hack"
// ],
// "creator": [
// "Crypto News"
// ],
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:57:33",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 19:58:22",
// "image_url": "https://cryptonewsbytes.com/wp-content/uploads/2026/01/How-did-the-Matcha-Meta-Hack-lead-to-17-million-in-losses.jpg",
// "video_url": null,
// "source_id": "cryptonewsbytes",
// "source_name": "Cryptonewsbytes",
// "source_priority": 3150594,
// "source_url": "https://cryptonewsbytes.com",
// "source_icon": "https://n.bytvi.com/crypto/cryptonewsbytes.jpg",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "740ea1e284126a2d0fdc2cba5352ecd5",
// "link": "https://bitcoinethereumnews.com/crypto/best-crypto-opportunity-for-q1-2026-new-crypto-protocol-just-activated/",
// "title": "Best Crypto Opportunity for Q1 2026: New Crypto Protocol Just Activated",
// "description": "The post Best Crypto Opportunity for Q1 2026: New Crypto Protocol Just Activated appeared on BitcoinEthereumNews.com.The year 2026 is turning out to be a pivot in the top crypto market in the first quarter of the year. As old crypto names are being pursued by many investors, a new generation of decentralized utility is silently replacing it. The passage of a particular new crypto protocol has broken a huge technical barrier. This fact is beginning to herald the significant change in our thinking regarding on-chain lending. The indications of a giant breakout are all over to people who know where to look. The early entry window is closing rapidly with the technology finally becoming a reality besides being a plan. Mutuum Finance (MUTM) Mutuum Finance (MUTM) is the new crypto generation project that transforms the way individuals lend and borrow cryptocurrency. The protocol’s design employs two major markets to offer more options to users. These are the Peer-to-Contract (P2C) lending. Under this model, you will be able to deposit assets such as ETH or USDT into huge liquidity pools. You receive in return a high APY which increases with time. To illustrate, a user who deposits an amount of $5,000 into an USDT pool with an APY of 10% would experience their balance steadily increase as the protocol charges borrowers. The second market is Peer-to-peer (P2P). This is to users with more control preferences. You have the liberty to fix your own borrow rates and you can also opt in the fixed or variable type of interest. A particular Loan-to-Value (LTV) ratio is also used in this model. You can borrow $750 of every $1,000 of cryptocurrency that you offer as security. This two-sided strategy will render the protocol adaptable to all. Presale Momentum and Tokenomics The MUTM presale has grown in an incredible way. The project has already raised more than $20.1 million. Overall,...",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "crypto"
// ],
// "creator": [
// "Bitcoin Ethereum News"
// ],
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:57:28",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 19:58:07",
// "image_url": "https://www.cryptopolitan.com/wp-content/uploads/2026/01/60bb658b-9bb3-4362-b9d8-02ac5cec7445.jpg",
// "video_url": null,
// "source_id": "bitcoinethereumnews",
// "source_name": "Bitcoin Ethereum News",
// "source_priority": 2178265,
// "source_url": "https://bitcoinethereumnews.com",
// "source_icon": "https://n.bytvi.com/crypto/bitcoinethereumnews.png",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": true
// },
// {
// "article_id": "e1795ac16259ea922aaa89c94a62cc33",
// "link": "https://coindoo.com/breaking-the-blockchain-barrier-why-blockdags-hybrid-system-makes-its-0-05-listing-price-a-bargain/",
// "title": "Breaking the Blockchain Barrier: Why BlockDAG’s Hybrid System Makes Its $0.05 Listing Price a Bargain",
// "description": "As of January 30, 2026, major cryptocurrencies remain under pressure following a broad market pullback. Bitcoin is trading near $82,300, [...]The post Breaking the Blockchain Barrier: Why BlockDAG’s Hybrid System Makes Its $0.05 Listing Price a Bargain appeared first on Coindoo.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "altcoins"
// ],
// "creator": [
// "Alexander Stefanov"
// ],
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:57:03",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 19:57:32",
// "image_url": "https://coindoo.com/wp-content/uploads/2026/01/IMAGE-2026-01-30-163142.jpg",
// "video_url": null,
// "source_id": "coindoo",
// "source_name": "Coindoo",
// "source_priority": 897086,
// "source_url": "https://coindoo.com",
// "source_icon": "https://n.bytvi.com/crypto/coindoo.png",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "67f43a347b121e51bb6889296aadf3fc",
// "link": "https://www.fool.com/investing/2026/01/30/2-important-changes-coming-to-cryptocurrency-tradi/",
// "title": "2 Important Changes Coming to Cryptocurrency Trading in 2026",
// "description": "Clearer regulations and a shift toward stable tokenized assets could transform the market.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "btc",
// "eth",
// "investing",
// "f2fc0f87-9898-4132-9fcc-063e4eb273c5",
// "other"
// ],
// "creator": [
// "newsfeedback@fool.com (leo sun)"
// ],
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:57:00",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 20:46:02",
// "image_url": "https://g.foolcdn.com/image/?op=resize&url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F850188%2Fbitcoin-tokens.jpg&w=3840",
// "video_url": null,
// "source_id": "fool",
// "source_name": null,
// "source_priority": 28963,
// "source_url": null,
// "source_icon": null,
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "0b7f8bf8b7e08af0a308349a319d3817",
// "link": "https://www.pymnts.com/cryptocurrency/2026/citi-analysts-say-crypto-bill-could-be-delayed-beyond-2026/",
// "title": "Citi Analysts Say Crypto Bill Could Be Delayed Beyond 2026",
// "description": "Citi analysts said the CLARITY Act could still pass this year, although there is a growing chance it could be delayed beyond 2026, CoinDesk reported Friday (Jan. 30). The cryptocurrency bill’s definitions around decentralized finance (DeFi) are the greatest obstacle to progress on the crypto market structure legislation, the analysts said, according to the [...]The post Citi Analysts Say Crypto Bill Could Be Delayed Beyond 2026 appeared first on PYMNTS.com.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "regulations",
// "stablecoins",
// "government",
// "legislation",
// "cryptocurrency",
// "pymnts news",
// "what's hot",
// "news",
// "citi"
// ],
// "creator": [
// "pymnts"
// ],
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:55:54",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 20:13:18",
// "image_url": "https://www.pymnts.com/wp-content/uploads/2025/04/cryptocurrency-bitcoin-1.jpg",
// "video_url": null,
// "source_id": "pymnts",
// "source_name": null,
// "source_priority": 12704,
// "source_url": null,
// "source_icon": null,
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "1ed824177316657244b0349edde7157e",
// "link": "https://www.fxstreet.es/news/usd-cny-potencial-recapitalizacion-en-el-sector-financiero-mufg-202601301955",
// "title": "USD/CNY: Potencial recapitalización en el sector financiero – MUFG",
// "description": "Informes no confirmados sugieren que China podría inyectar 200.000 millones de RMB en grandes aseguradoras para reforzar sus colchones de capital, junto con otros 300.000 millones de RMB en bancos importantes. Este movimiento tiene como objetivo apoyar al sector bancario en medio de la presión a la baja sobre los márgenes de interés netos",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": null,
// "creator": null,
// "coin": null,
// "language": "spanish",
// "pubDate": "2026-01-30 19:55:22",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 19:57:10",
// "image_url": "https://editorial.fxsstatic.com/images/i/china-people-bank-02_Medium.jpg",
// "video_url": null,
// "source_id": "fxstreet_es",
// "source_name": "Fxstreet Es",
// "source_priority": 471232,
// "source_url": "https://www.fxstreet.es",
// "source_icon": "https://n.bytvi.com/crypto/fxstreet_es.jpg",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "30269fe857d702ab01e510b422f39dd4",
// "link": "https://bitcoinworld.co.in/coinbase-ceo-davos-banker-reception/",
// "title": "Coinbase CEO’s Chilly Davos Reception Reveals Stark Divide in Cryptocurrency Regulation Debate",
// "description": "BitcoinWorldCoinbase CEO’s Chilly Davos Reception Reveals Stark Divide in Cryptocurrency Regulation DebateDAVOS, Switzerland – In a revealing series of encounters that captured the ongoing tension between traditional finance and the digital asset sector, Coinbase CEO Brian Armstrong received a notably cold reception from top U.S. banking executives during the 2025 World Economic Forum. This pivotal moment, first reported by The Wall Street Journal, underscores the significant [...]This post Coinbase CEO’s Chilly Davos Reception Reveals Stark Divide in Cryptocurrency Regulation Debate first appeared on BitcoinWorld.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "cryptocurrency",
// "banking",
// "#wall-street",
// "crypto news",
// "davos forum",
// "finance regulation"
// ],
// "creator": null,
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:55:11",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 19:58:30",
// "image_url": "https://bitcoinworld.co.in/wp-content/uploads/coinbase-ceo-davos-banker-reception-803x600.jpg",
// "video_url": null,
// "source_id": "bitcoinworld",
// "source_name": "Bitcoinworld.co.in",
// "source_priority": 4345355,
// "source_url": "https://bitcoinworld.co.in",
// "source_icon": "https://n.bytvi.com/crypto/bitcoinworld.jpg",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "fea1ed4b9596ae8baf7b85f740a3f663",
// "link": "https://bitcoinethereumnews.com/crypto/is-livlive-the-ultimate-2026-crypto-presale-2-2m-raised-and-bonus200-code-fuel-explosive-demand/",
// "title": "Is LivLive the Ultimate 2026 Crypto Presale? $2.2M+ Raised and BONUS200 Code Fuel Explosive Demand",
// "description": "The post Is LivLive the Ultimate 2026 Crypto Presale? $2.2M+ Raised and BONUS200 Code Fuel Explosive Demand appeared on BitcoinEthereumNews.com.Imagine stumbling upon a crypto presale that blends real-world engagement with blockchain innovation, turning everyday actions into tangible rewards. In the buzzing landscape of 2026, projects like LivLive, Remittix, and Little Pepe are capturing investor attention, each vying for a spot as the top crypto to buy amid rising market optimism. LivLive stands out with its explosive presale momentum, already surpassing $2.2 million raised, while Remittix and Little Pepe push forward with their own developments in payments and meme-driven hype. As the crypto presale market heats up, discerning investors are hunting for opportunities that promise not just hype but sustainable growth. With predictions of a bullish year ahead, these projects highlight the shift toward utility-focused tokens, but one is rapidly emerging as the best crypto presale for those seeking high-potential returns before prices skyrocket. LivLive’s Presale Surge Redefines Engagement LivLive is shattering expectations in its ongoing crypto presale, having raised over $2.2 million toward a $15 million soft cap, with the current price locked at an accessible $0.02. This AR-powered platform turns physical presence and actions into tokenized value via $LIVE, creating a gamified ecosystem where users verify real-world interactions through wearables and scans. For investors, this means backing a project that fosters genuine adoption, as brands and consumers form a closed-loop loyalty system that spans industries and communities, driving long-term token demand and value appreciation. One standout aspect is how early adopters can grab exclusive Token & NFT Packs, which include long-term mining power, bonus tokens, and access to a $2.5 million Treasure Vault. This setup benefits investors by providing immediate perks and sustained earning potential, positioning them to capitalize on ecosystem growth as more users join quests and missions for real-world prizes like luxury items or VIP experiences. By securing these packs now, participants essentially lock in compounding...",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "crypto"
// ],
// "creator": [
// "Bitcoin Ethereum News"
// ],
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:55:08",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 19:58:07",
// "image_url": null,
// "video_url": null,
// "source_id": "bitcoinethereumnews",
// "source_name": "Bitcoin Ethereum News",
// "source_priority": 2178265,
// "source_url": "https://bitcoinethereumnews.com",
// "source_icon": "https://n.bytvi.com/crypto/bitcoinethereumnews.png",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": true
// },
// {
// "article_id": "bde6886a910a3f02f0a6b274d1bab1af",
// "link": "https://www.fxstreet.com/news/usd-cny-potential-recapitalization-in-financial-sector-mufg-202601301955",
// "title": "USD/CNY: Potential recapitalization in financial sector – MUFG",
// "description": "Unconfirmed reports suggest that China may inject RMB 200 billion into large insurers to bolster their capital buffers, alongside an additional RMB 300 billion into major banks. This move aims to support the banking sector amid downward pressure on net interest margins.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": null,
// "creator": null,
// "coin": null,
// "language": "english",
// "pubDate": "2026-01-30 19:55:00",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 20:51:20",
// "image_url": "https://editorial.fxsstatic.com/images/i/china-people-bank-02_Medium.jpg",
// "video_url": null,
// "source_id": "fxstreet",
// "source_name": "Fxstreet",
// "source_priority": 116812,
// "source_url": "https://www.fxstreet.com",
// "source_icon": null,
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// },
// {
// "article_id": "dd676f27562769ff7f0fd1d5517fb353",
// "link": "https://www.coindesk.com/markets/2026/01/30/bitwise-cio-matt-hougan-says-bitcoin-could-hit-usd6-5-million-in-20-years",
// "title": "Bitwise CIO Matt Hougan says bitcoin could hit $6.5 million in 20 years",
// "description": "After a bruising 2025, Hougan sees sideways Bitcoin trading, rising institutional interest and early central bank curiosity setting up the next cycle.",
// "content": "ONLY AVAILABLE IN PAID PLANS",
// "keywords": [
// "bitwise",
// "gold",
// "bitwise asset management",
// "btc",
// "news",
// "markets"
// ],
// "creator": [
// "AI Boost"
// ],
// "coin": [
// "BTC"
// ],
// "language": "english",
// "pubDate": "2026-01-30 19:54:53",
// "pubDateTZ": "UTC",
// "fetched_at": "2026-01-30 20:10:11",
// "image_url": "https://cdn.sanity.io/images/s3y3vcno/production/c2b834bfe732d35de56b1e4ece3567e1f90aa37e-1280x821.png?auto=format&crop=focalpoint&fit=clip&fm=jpg&h=540&q=75&w=960",
// "video_url": null,
// "source_id": "coindesk",
// "source_name": "Coindesk",
// "source_priority": 633,
// "source_url": "https://www.coindesk.com",
// "source_icon": "https://n.bytvi.com/crypto/coindesk.png",
// "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
// "duplicate": false
// }
//    ]
    constructor(){
        super()
        this.state = {
            // articles : this.articles
            articles : []
            // loading : false
        }
    }
    async componentDidMount(){
        let url = "https://newsdata.io/api/1/crypto?apikey=pub_1823ef360ce84afab445af29aa132500"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.results})
    }
  render() {
    return (
      <>
      <div className="container my-4">
        <h2>NewsApp - Top headlines</h2>
        <div className="row">
           {this.state.articles.map((item)=>{   
            return(
                <div className="col-md-5 mb-5 mx-5"key={item.article_id}>
        <SubNews
        title = {item.title?item.title.slice(0,40):""}
        description = {item.description?item.description.slice(0,80):""}
        imgUrl = {item.image_url?item.image_url:"https://images.pexels.com/photos/5980572/pexels-photo-5980572.jpeg"} 
        unqId = {item.link}
        />
        </div>
            )
           })}

           
        </div>
        </div>
      </>
    )
  }
}

export default News
