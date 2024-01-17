import { useState } from "react";
import img0 from "../../public/assets/img/blog/dotdead.jpg";
import img81 from "../../public/assets/img/blog/moonthrow.webp";
import img82 from "../../public/assets/img/blog/dotupgrades.webp";
import img83 from "../../public/assets/img/blog/top6dot.webp";
import img80 from "../../public/assets/img/blog/gav.jpg";
import img1 from "../../public/assets/img/blog/polkadotgreece.webp";
import img2 from "../../public/assets/img/blog/tools.webp";
import img3 from "../../public/assets/img/blog/defi.webp";
import img4 from "../../public/assets/img/blog/outsideblock.webp";
import img5 from "../../public/assets/img/blog/6ways.webp";
import img6 from "../../public/assets/img/blog/acala.webp";
import img7 from "../../public/assets/img/blog/unlock.webp";
import img8 from "../../public/assets/img/blog/increase.webp";
import img9 from "../../public/assets/img/blog/vision.webp";
import img10 from "../../public/assets/img/blog/current-state.webp";
import img11 from "../../public/assets/img/blog/7chains.webp";
import img12 from "../../public/assets/img/blog/opengov.webp";
import img13 from "../../public/assets/img/blog/tannsi.webp";
import img14 from "../../public/assets/img/blog/dotmysteries.webp";
import img15 from "../../public/assets/img/blog/sdk.webp";
import img16 from "../../public/assets/img/blog/snowbridge.webp";
import img17 from "../../public/assets/img/blog/supernova.webp";
import img18 from "../../public/assets/img/blog/whydot.webp";
import img19 from "../../public/assets/img/blog/opengov2.webp";
import img20 from "../../public/assets/img/blog/forkless.webp";
import img21 from "../../public/assets/img/blog/polimec.webp";
import img22 from "../../public/assets/img/blog/stakedot.webp";
import img23 from "../../public/assets/img/blog/stregnts.webp";
import img24 from "../../public/assets/img/blog/easydot.webp";
import img25 from "../../public/assets/img/blog/ownblockchain.webp";
import img26 from "../../public/assets/img/blog/consortia.webp";
import img27 from "../../public/assets/img/blog/govperiods.webp";
import img28 from "../../public/assets/img/blog/omnipool.webp";
import img29 from "../../public/assets/img/blog/polka.webp";
import img30 from "../../public/assets/img/blog/opengovaka.webp";
import img31 from "../../public/assets/img/blog/opengovksm.webp";
import img32 from "../../public/assets/img/blog/backtodot.webp";
import img33 from "../../public/assets/img/blog/dotmultichain.webp";
import img34 from "../../public/assets/img/blog/interoperability.webp";
import img35 from "../../public/assets/img/blog/dotgen.webp";
import img36 from "../../public/assets/img/blog/xcm.webp";
import img37 from "../../public/assets/img/blog/liquidstaking.webp";
import img38 from "../../public/assets/img/blog/darwinia.webp";
import img39 from "../../public/assets/img/blog/joinpressure.webp";
import img40 from "../../public/assets/img/blog/ewt22.webp";
import img41 from "../../public/assets/img/blog/gm.webp";
import img42 from "../../public/assets/img/blog/xcausd.webp";
import img43 from "../../public/assets/img/blog/zeitgeist.webp";
import img44 from "../../public/assets/img/blog/bifrost.webp";
import img45 from "../../public/assets/img/blog/moonriver.webp";
import img46 from "../../public/assets/img/blog/wag.webp";
import img47 from "../../public/assets/img/blog/gromlins.webp";
import img48 from "../../public/assets/img/blog/skybreach.webp";
// import img49 from "../../public/assets/img/blog/delegate.webp";
import img50 from "../../public/assets/img/blog/1stxcm.webp";






import Image from "next/image";

const AllBlogData = () => {
  const blogsData = [


    {
      id: 83,
      img: img83,
      title: "Enterprise adoption",
      commentor: "CrisPap",
      date: "13/11/2023",
      tag: `polkadot`,
      description1:
        "2/ @AstarNetwork & Sony",
      description2:
      "With a heavy focus on Japanese markets Astar managed to form 1 of the greatest collabs during 2023! Together they organized...",
      description3:
        ".",
      // description4:
        // "Ιδανικό για αρχάριους στον χώρο των κρυπτονομισμάτων καθώς απλοποιεί περίπλοκες τεχνικές ορολογίες με κατανοητό τρόπο.",
      description5: "https://twitter.com/Cris_Pap8/status/1740434242411401383",
    },

    {
      id: 82,
      img: img82,
      title: "Polkadot Upgrades for 2024",
      commentor: "CrisPap",
      date: "13/11/2023",
      tag: `polkadot`,
      description1:
      "1/ Most anticipated upgrades on @Polkadot during 2024",
      description2:
      "#Polkadot replaces parachain auctions & crowdloans with blockspace allocation & coretime purchases while ...",
      description3:
        ".",
      // description4:
        // "Ιδανικό για αρχάριους στον χώρο των κρυπτονομισμάτων καθώς απλοποιεί περίπλοκες τεχνικές ορολογίες με κατανοητό τρόπο.",
      description5: "https://twitter.com/Cris_Pap8/status/1744758666643804400",
    },


    {
      id: 81,
      img: img81,
      title: "Throwback into MoonbeamNetwork",
      commentor: "CrisPap",
      date: "13/11/2023",
      tag: `polkadot`,
      description1:
        "The most widely used & supported by the community parachain that played an essential role for the growth and adaption of @Polkadot",
      description2:
      "",
      description3:
        ".",
      // description4:
        // "Ιδανικό για αρχάριους στον χώρο των κρυπτονομισμάτων καθώς απλοποιεί περίπλοκες τεχνικές ορολογίες με κατανοητό τρόπο.",
      description5: "https://twitter.com/Cris_Pap8/status/1721566259119018313",
    },

    {
      id: 0,
      img: img0,
      title: "Polkadot is dead 🚩",
      commentor: "CrisPap",
      date: "13/11/2023",
      tag: `polkadot`,
      description1:
        "Polkadot is dead, just has more than 5 thousand monthly code commits & hundreds of active developers building on it daily",
      description2:
      " Polkadot is dead, just was never mentioned by SEC as a security because its a software",
      description3:
        ".",
      // description4:
        // "Ιδανικό για αρχάριους στον χώρο των κρυπτονομισμάτων καθώς απλοποιεί περίπλοκες τεχνικές ορολογίες με κατανοητό τρόπο.",
      description5: "https://twitter.com/Cris_Pap8/status/1729501260594733226",
    },

    {
        id: 80,
        img: img80,
        title: "Polkadot Thesis",
        commentor: "CrisPap",
        date: "13/11/2023",
        tag: `Polkadot, gavin wood`,
        description1:
          "How do you remain so calm in such a volatile & stressful environment?",
        description2:
        " The answer is simple and always the same",
        description3:
          "Conviction!",
        // description4:
          // "Ιδανικό για αρχάριους στον χώρο των κρυπτονομισμάτων καθώς απλοποιεί περίπλοκες τεχνικές ορολογίες με κατανοητό τρόπο.",
        description5: "https://twitter.com/Cris_Pap8/status/1725530924845019528",
      },



    {
      id: 1,
      img: img1,
      title: "Polkadot Greece",
      commentor: "CrisPap",
      date: "13/11/2023",
      tag: `Polkadot Greece, first library in Greek, personal initiative`,
      description1:
        "Im super excited to announce that @Polkadot is coming to Greece!🇬🇷💙 ",
      description2:
      "Καλώς όρισες στο Polkadot Greece! Ανακάλυψε τις βασικές αρχές και τα κύρια χαρακτηριστικά του Polkadot εύκολα και γρήγορα!",
      description3:
        "Το Polkadot Greece είναι η πρώτη ελληνική βιβλιοθήκη που περιέχει όλες τις απαραίτητες πληροφορίες για να ξεκινήσει κάποιος το ταξίδι του στο οικοσύστημα του Polkadot.",
      // description4:
        // "Ιδανικό για αρχάριους στον χώρο των κρυπτονομισμάτων καθώς απλοποιεί περίπλοκες τεχνικές ορολογίες με κατανοητό τρόπο.",
      description5: "https://x.com/Cris_Pap8/status/1724022484612133144?s=20",
      },
    {
      id: 2,
      img: img2,
      title: "The importance of Tools",
      commentor: "CrisPap ",
      date: "09/11/2023",
      tag: `Tools, non-tecnhical individuals, importance, tranformation`,
      description1:
        "The key to blockchain industry transformation is undoubtedly developers🎯",
      description2:
      "Whats coming next as the most important aspect on that list?",
      description3:
        "TOOLS ‼️",
      description4:
        "Useful user-based tools that ordinary people utilize on a daily basis!. The highly complex nature of Web3 technologies can be very confusing for non-technical individuals ❌",
      description5: "https://x.com/Cris_Pap8/status/1722697327851261961?s=20",
      },
    {
      id: 3,
      img: img3,
      title: "DeFi dApps on Polkadot",
      commentor: "CrisPap ",
      date: "03/11/2023",
      tag: `DeFi, dApps, Polkadot, HydraDx, BifrostFinance, StellaSwap, liquidity`,
      description1:
        "𝘊𝘰𝘰𝘭 #DeFi 𝘥𝘈𝘱𝘱𝘴 𝘰𝘯 @Polkadot 𝘵𝘩𝘢𝘵 𝘶 𝘤𝘢𝘯 𝘶𝘴𝘦 𝘳𝘪𝘨𝘩𝘵 𝘢𝘸𝘢𝘺🟣",
      description2:
      "🐍@hydra_dx: A powerful next-gen platform that offers a number of advantages over other AMMs!",
      description3:
        "LP your DOT into #OmniPool to earn trading fees while u counter IL with LRNA. Compound your existed position by single-staking your LPed DOT & farm HDX with a ~25%APR based on loyalty",
      description4:
        "🌈 @BifrostFinance: The utopia of derivatives! Stake your DOT tokens to get up to ~60%APR & mint vDOT to enter the LiquidStaking arena",
        description5: "https://x.com/Cris_Pap8/status/1720408740464148592?s=20",
    },
  
    {
      id: 4,
      img: img4,
      title: "Think outside the block with Kusama Network",
      commentor: "CrisPap ",
      date: "01/11/2023",
      tag: `Kusama, technology, characteristics, parachains, Nominated POS`,
      description1:
        "1/ Think outside the 𝘣𝘭𝘰𝘤𝘬 with @kusamanetwork ⚫",
      description2:
      "Lets talk 𝗰𝗵𝗮𝗼𝘀! 🧵",
      description3:
      "2/ Kusama is designed to be more agile and responsive than other blockchain networks & it offers the perfect playground for developers who want to experiment with wild ideas & new technologies❕",
      description4:
      "3/ A powerful L0 that acts as a solid foundation layer for innovation & provides a highly scalable multichain environment!",
        description5: "https://x.com/Cris_Pap8/status/1719784980384010502?s=20",
    },
    {
      id: 5,
      img: img5,
      title: "6 Ways to get involved in the polkadot ecosystem",
      commentor: "CrisPap ",
      date: "30/10/2023",
      tag: `Polkadot eco, Contribute, parachain, node, ecosystem agent, educate`,
      description1:
        "6 𝘸𝘢𝘺𝘴 𝘵𝘰 𝘨𝘦𝘵 𝘪𝘯𝘷𝘰𝘭𝘷𝘦𝘥 𝘪𝘯 𝘵𝘩𝘦 @Polkadot 𝘦𝘤𝘰𝘴𝘺𝘴𝘵𝘦𝘮!",
      description2:
      "🏗 𝗖𝗼𝗻𝘁𝗿𝗶𝗯𝘂𝘁𝗲 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗼𝗱𝗲𝗯𝗮𝘀𝗲: Open-source & available to all developers who are willing to help improve Polkadot's code, fix bugs, introduce new features or even create user-friendly docs",
      description3:
      "⛓ 𝗕𝘂𝗶𝗹𝗱 𝗮 𝗽𝗮𝗿𝗮𝗰𝗵𝗮𝗶𝗻: Develop a custom blockchain network that is connected directly to the Polkadot relay-chain & can be used to deploy a wide variety of dApps on top of it",
      description4:
        "🔄 𝗥𝘂𝗻 𝗮 𝗻𝗼𝗱𝗲: Operating a node not only boosts Polkadot's security but also plays a crucial role in making the network more decentralized",
        description5: "https://x.com/Cris_Pap8/status/1719020578370146635?s=20",
    },
    {
      id: 6,
      img: img6,
      title: "Throwback into Acala",
      commentor: "CrisPap ",
      date: "19/10/2023",
      tag: `Polkadot, Acala, parachains, performance, Acala 2.0`,
      description1:
        "1/ After almost 2 years in since the auctions debut on @Polkadot its a good moment to revisit the past🟣. Lets analyse the overall performance of the first 5 parachain winners & examine their current state!",
      description2:
      "Throwback into @AcalaNetwork 🧵",
      description3:
      "2/ Acala was the 1st auction winner with more than 32M DOT contributions during an epic battle with Moonbeam🔔",
      description4:
        "A DeFi platform that was designed to host a wide range of dApps on top of it which developed 2 flagship products-> aUSD & Liquid Staking!",
        description5: "https://x.com/Cris_Pap8/status/1715000878954873212?s=20",
    },

    {
      id: 7,
      img: img7,
      title: "What will u do with your unlocked $DOT from @Polkadot crowdloans?",
      commentor: "CrisPap ",
      date: "16/10/2023",
      tag: `Polkadot, Unlock, Crowdloan, Nomination pools, Liquid staking`,
      description1:
        "1/ What will u do with your unlocked $DOT from @Polkadot crowdloans?",
      description2:
      "Lets explore together the available current options to put your DOT to work 🟣 🧵",
      description3:
      "2/ Nomination Pools: Alright thats the most obvious & easy option!",
      description4:
        "Stake your DOT into your preferable pool for ~16%. Extremely user-friendly UI with no entry barriers as even 1DOT is enough",
        description5: "https://x.com/Cris_Pap8/status/1713929723787522557?s=20",
    },

    {
      id: 8,
      img: img8,
      title: "4 ways to increase on-chain activity on @Polkadot $DOT 🟣",
      commentor: "CrisPap ",
      date: "13/10/2023",
      tag: `Polkadot, onchain acticity, Builders, Hackathons, developers, deep liquidity, simplicity`,
      description1:
        "4 ways to increase on-chain activity on @Polkadot $DOT 🟣",
      description2:
      "Power to the Builders: Cant stress enough the importance of empowering & motivating devs to join our ecosystem!",
      description3:
      "Bringing new blood into dot's ranks could lead to so many benefits✅",
      description4:
        "From fresh ideas to innovative solutions or dApps & an overall improvement on multiple fields",
      description5: "https://x.com/Cris_Pap8/status/1712846681849422301?s=20",
    },

    {
      id: 9,
      img: img9,
      title: "My visions for Polkadot!",
      commentor: "CrisPap ",
      date: "11/10/2023",
      tag: `Polkadot, vision, long term, software, future of web3`,
      description1:
        "𝗪𝗵𝗮𝘁 𝗶 𝘄𝗮𝗻𝘁 from @Polkadot",
      description2:
      "is to become the wonderland for pioneers and innovators where Polkadot-stack obsessively attracts new developers while reaching excessive high-usage with killer-dapps leveraging each other through an extensive utilization of XCM capabilities. A thriving ecosystem with an ever-expanding liquidity flow & a constant immense growth of users that having the urge for daily interactions on otherworldly opportunities & deep involvement on leading ground-breaking protocols!",
      description3:
      "𝘚𝘩𝘰𝘳𝘵-𝘵𝘦𝘳𝘮, 𝘭𝘪𝘵𝘦𝘳𝘢𝘭, 𝘦𝘷𝘰𝘭𝘶𝘵𝘪𝘰𝘯𝘢𝘳𝘺: (1-2 years)",
      description4:
        "𝗪𝗵𝗮𝘁 𝗶 𝗥𝗘𝗔𝗟𝗟𝗬 𝘄𝗮𝗻𝘁 from #Polkadot is to be recognized as the golden standard for Web3 worldwide adaption and be established as the biggest most efficient blockspace service provider in the whole tech-industry while offering superior blockchain solutions & computation power to top-notch businesses and progressive thinkers! A prominent specialized & super compatible software where its security layer is used on every app or next-gen dapp online, $DOT is declared a global currency payment-system due to its accessibly and sustainability & its dynamic sophisticated on-chain governance thesis is implemented by entire nations!",
        description5: "https://x.com/Cris_Pap8/status/1712125053490377200?s=20",
    },

    {
      id: 10,
      img: img10,
      title: "Whats the current state of on-chain activity on @Polkadot",
      commentor: "CrisPap ",
      date: "09/10/2023",
      tag: `Polkadot,on chain activity, Active users, active addresses, Sustainability, OpenGov`,
      description1:
      "1/ Whats the current state of on-chain activity on @Polkadot $DOT & why it must be drastically increased 🟣🧵",
      description2:
      "2/ Lets start with some stats🧮",
      description3:
      "Just in 1month Active Users on Polkadot have been decreased around 35% & we are witnessing an overall downtrend that touches -300% throughout the year!",
      description4:
        "3/ Data for Active Addresses show a steady annual decline as well  & are decreased ~110% this month only!",
        description5: "https://x.com/Cris_Pap8/status/1711400883462803670?s=20",
    },

    {
      id: 11,
      img: img11,
      title: "Top 7 most underrated parachains on @Polkadot",
      commentor: "CrisPap ",
      date: "04/10/2023",
      tag: `Polkadot,underatted, parachains, phala, moonbeam, astar, bifrost, hydra, interlay, invarch`,
      description1:
        "Top 7 most underrated parachains on @Polkadot",
      description2:
      "@AstarNetwork: The blue dragon",
      description3:
      "Astar creates the perfect environment for developers with the support of EVM, WASM & ink! along with its unique Build2Earn mechanism!",
      description4:
        "-Non-stop expansion in Japan",
        description5: "https://x.com/Cris_Pap8/status/1709645710583329213?s=20",
    },

    {
      id: 12,
      img: img12,
      title: "Importance of OpenGov on @Polkadot and @kusamanetwork explained!",
      commentor: "CrisPap ",
      date: "26/09/2023",
      tag: `Polkadot, Governance,decentralized, votes, delegations`,
      description1: "1/ Importance of OpenGov on @Polkadot and @kusamanetwork explained!",
      description2:
      "2/ OpenGov is the worlds most advanced on-chain governance system which is designed for flexibility and adaptability! 🧵👇",
      description3:
      "Fully decentralized, efficient and transparent leading the way in the entire blockchain industry🟣",
      description4:
        "3/ OpenGov is not controlled by any single entity but instead it is governed by the Polkadot & Kusama stakeholders!",
        description5: "https://x.com/Cris_Pap8/status/1706639823996432727?s=20",
    },

    {
      id: 13,
      img: img13,
      title: "Tanssi Network explained!",
      commentor: "CrisPap ",
      date: "22/09/2023",
      tag: `Polkadot, Tanssi, dev-friendly, eliminate appchain infrastructure, enhance interoperability, xchain connectivity`,
      description1:
        "1/ With the increasing demand for app-chains across Web3 & @Polkadot's desire for a major catalyst that ll boost dapp development into our eco, @TanssiNetwork comes in play right on time with a very promising solution! Lets dive in 🧵",
      description2:
      "2/ Tanssi is an app-chain infrastructure protocol that aims to accelerate adoption on Polkadot & drastically reduce the barriers of entry by offering a set of customizable tools & resources available as-a-service!",
      description3:
      "In fact, there r already 35+ projects w8ing to integrate its tech",
      description4:
        "3/ The main focus is to tackle 4 current problems:",
        description5: "https://x.com/Cris_Pap8/status/1705241557085905179?s=20",
    },

    {
        id: 14,
        img: img14,
        title: "Unlock the Polkadot Mysteries",
        commentor: "CrisPap ",
        date: "20/09/2023",
        tag: `Polkadot, Blockspace, Coretime, Asynchronous Backing, Shared security`,
        description1:
          "1/ Unlock the @Polkadot mysteries! 🧵",
        description2:
        "2/ With the introduction of Polkadot 2.0 in Copenhagen there are certain terms we hear way more often than before!",
        description3:
        "-Blockspace",
        description4:
          "-Coretime",
          description5: "https://x.com/Cris_Pap8/status/1704528153488613645?s=20",
      },

      {
        id: 15,
        img: img15,
        title: "Polkadot SDK",
        commentor: "CrisPap ",
        date: "18/09/2023",
        tag: `Polkadot, developers,SDK, tool box, `,
        description1:
          "1/ Last month we witnessed the fusion of 3 independent repos on @Polkadot and the rename of Substrate into @PolkadotDevs 🟣. What significant changes this transformation brings & how it impacts the developers’ workflow?",
        description2:
        "2/ So briefly lets start with what happened⤵️",
        description3:
        "Polkadot merged 3 of its repos Substrate, Polkadot & Cumulus into a big single repo, called Polkadot-SDK!",
        description4:
          "More info:",
          description5: "https://x.com/Cris_Pap8/status/1703803412263866833?s=20",
      },

      {
        id: 16,
        img: img16,
        title: "Snowbridge+Beefy",
        commentor: "CrisPap ",
        date: "15/09/2023",
        tag: `Polkadot, Snowbridge, Beefy, DeFi, bridges, Security, xchain bridges`,
        description1:
          "1/ Snowbridge+Beefy approaching fast & ll tremendously reshape xchain communications on @Polkadot🟣",
        description2:
        "However, rn the vast majority of our eco utilises heavily @wormholecrypto services which is quite alarming🚨",
        description3:
        "Lets highlight the risks & the possible solutions to this problem🧵",
        description4:
          "2/ DeFi has seen a massive growth in recent years and cross-chain bridges have become a crucial component on enabling communication between different blockchain networks🔄",
          description5: "https://x.com/Cris_Pap8/status/1702648733844848901?s=20",
      },

      {
        id: 17,
        img: img17,
        title: "Astar announced Supernova",
        commentor: "CrisPap ",
        date: "13/09/2023",
        tag: `Polkadot, Astar, Polygon, liquidity, xchain communication`,
        description1:
          "1/So @AstarNetwork just announced Supernova!",
        description2:
        "An expansion on ETH as L2 solution with the help of @0xPolygonLabs",
        description3:
        "But what does this mean for @Polkadot?",
        description4:
          "There are 2 sides of the same coin here..🧵",
          description5: "https://x.com/Cris_Pap8/status/1701972335756992681?s=20",
      },

      {
        id: 18,
        img: img18,
        title: "Why @Polkadot 🟣",
        commentor: "CrisPap ",
        date: "11/09/2023",
        tag: `Polkadot, builders, developers, SDK, advanced tech, OpenGov`,
        description1:
          "Why @Polkadot 🟣 🧵",
        description2:
        "2/ Builders",
        description3:
        "Polkadot is considered one of the largest developer bases of any blockchain network with over 700 active full-time devs!",
        description4:
          "Notably, we have witnessed more than 50% increase in the past years & these numbers are expected to rapidly grow even further",
          description5: "https://x.com/Cris_Pap8/status/1701272558354522176?s=20",
      },

      {
        id: 19,
        img: img19,
        title: "OpenGov",
        commentor: "CrisPap ",
        date: "27/06/2023",
        tag: `Polkadot, participation, treasury, OpenGov`,
        description1:
          "OpenGov participation rate on @Polkadot must be drastically increased!",
        description2:
        "Currenty the state of the treasury sitting at >45M $DOT ($225M USD) that r dedicated for the growth of our eco",
        description3:
        "Its your responsibility as a token holder to decide its direction & protect it!",
        description4:
          "Make it count🟣",
          description5: "https://x.com/Cris_Pap8/status/1673744884744831001?s=20",
      },

      {
        id: 20,
        img: img20,
        title: "Forkless Upgrades",
        commentor: "CrisPap ",
        date: "26/06/2023",
        tag: `Polkadot, Forkless upgrades, forks, WASM, Substrate based, governance`,
        description1:
          "1/ @Polkadot provides a superior solution that ensures max upgradability & flexibility on its network while aiming to replace for good the problematic outdated time-consuming fork practices!",
        description2:
        "Lets talk Forkless Upgrades 🧵",
        description3:
        "2/ Before digging in, lets 1st have a look on what exactly is a hard-fork ",
        description4:
          "A hard-fork refers to a specific process of upgrade or modification within the network that introduces significant new changes to its core foundation!",
          description5: "https://x.com/Cris_Pap8/status/1673412702637641728?s=20",
      },

      {
        id: 21,
        img: img21,
        title: "Lets talk Polimec",
        commentor: "CrisPap ",
        date: "16/03/2023",
        tag: `Polkadot, Polimec, Roles, Tiers, Kilt, PLMC`,
        description1:
          "1/ Name me a project that has strong bonds with @Kiltprotocol, co-developed along with Parity and is going for a parachain on @Polkadot ?!..",
        description2:
        "Lets talk @PolimecProtocol 🧵",
        description3:
        "2/ OVERVIEW",
        description4:
          "Polimec, which stands for Polkadot Liquidity Mechanism, is a community-driven funding protocol that encourages stakeholders to participate on project-funding rounds through an efficient and fully decentralized process!",
          description5: "https://x.com/Cris_Pap8/status/1636412702099927040?s=20",
      },

      {
        id: 22,
        img: img22,
        title: "Where to stake your dot",
        commentor: "CrisPap ",
        date: "06/03/2023",
        tag: `Polkadot, Staking, nomination pools, security, decentralization`,
        description1:
          "1/ Where do you stake your precious $DOT?",
        description2:
        "If the answer is not on @Polkadot Nomination Pools you are doing it wrong! Let me tell you why.. 🧵",
        description3:
        "2/ Nomination Pools are the new upgraded Polkadot’s staking system that allows users to stake their DOT tokens natively and earn competitive rewards for up to 18%!",
        description4:
          "3/ Their simplistic unique architecture introduces a very straightforward staking process and increases tremendously the accessibility as anyone can participate with ONLY 1 DOT🔥",
          description5: "https://x.com/Cris_Pap8/status/1632740287586942977?s=20",
      },

      {
        id: 23,
        img: img23,
        title: "Biggest strengths of Polkadot",
        commentor: "CrisPap ",
        date: "24/02/2023",
        tag: `Polkadot,Forkless upgrades, shared security, substrate, XCM, Gavin wood`,
        description1:
          "1/ Want to know the biggest strengths of @Polkadot?",
        description2:
        "4 unique advantages that setting DOT miles ahead from any other competitor! 🧵",
        description3:
        "2/ FORKLESS UPGRADES",
        description4:
          "The ability to automatically make forkless upgrades gives Polkadot a huge edge over other blockchains as it eliminates the problematic & time-consuming fork practices",
          description5: "https://x.com/Cris_Pap8/status/1629201169242259457?s=20",
      },

      {
        id: 24,
        img: img24,
        title: "Easy dot",
        commentor: "CrisPap ",
        date: "15/02/2023",
        tag: `Polkadot,Kusama, relay chain, substrate, parachains, crowdloan,parathreads, opengov`,
        description1:
          "1/ EASY DOT🟣",
        description2:
        "Learn fast about all the important aspects on @Polkadot explained in a single Tweet! 🧵",
        description3:
        "2/ POLKADOT",
        description4:
          "Polkadot is the world’s 1st Layer0 blockchain network that solves the interoperability & scalability problem in our industry by allowing other L1s to connect and develop on top of it on a highly secure and full decentralized manner!",
          description5: "https://x.com/Cris_Pap8/status/1625919068208349184?s=20",
      },

      {
        id: 25,
        img: img25,
        title: "How to launch your blockchain",
        commentor: "CrisPap ",
        date: "07/02/2023",
        tag: `Polkadot,blockchain, parathreads, shared security, forkless upgrades, on chain governance`,
        description1:
          "1/ Did you know that with just ~100 $DOT you can launch your own blockchain on top of @Polkadot?",
        description2:
        "Let me tell you how 🧵",
        description3:
        "2/ The answer is Parathreads!",
        description4:
          "Their architecture provides an easy & inexpensive access to RelayChain while also leveraging the numerous benefits of Polkadot🔥",
          description5: "https://x.com/Cris_Pap8/status/1623011835027894287?s=20",
      },

      {
        id: 26,
        img: img26,
        title: "Consortia Realy chain",
        commentor: "CrisPap ",
        date: "26/01/2023",
        tag: `Polkadot,EWT, consortia relay chain, Data privacy, independece, selfsovereignity`,
        description1:
          "Imagine building something so important that even the leading Web3-company on core blockchain infrastructure helps you design its architecture!",
        description2:
        "This is why @energywebx and @paritytech joined forces to develop Consortia Relay Chain on @Polkadot 🧵",
        description3:
        "The EnergyWeb Consortia Relay Chain aka EW-CRC is the 1st identity-focus decentralized global multichain network that empowers application-specific blockchains for enterprises🔥",
        description4:
          "In this way EWT also leverages Substrate framework and connects to the broader Polkadot ecosystem!",
          description5: "https://x.com/Cris_Pap8/status/1618648749441699840?s=20",
      },

      {
        id: 27,
        img: img27,
        title: "Different periods on opengov",
        commentor: "CrisPap ",
        date: "17/01/2023",
        tag: `Polkadot,OpenGov, periods, proposals`,
        description1:
          "We already covered Tracks and some of the key principles of #OpenGov on @kusamanetwork and now its time to break down the different periods that play a vital role on every proposal",
        description2:
        "Lets dive in🧵",
        description3:
        "2/ There are 3 main periods in total that we will focus on",
        description4:
          "-Deciding Period",
          description5: "https://x.com/Cris_Pap8/status/1615363851666722817?s=20",
      },

      {
        id: 28,
        img: img28,
        title: "Omnipool HydraDX",
        commentor: "CrisPap ",
        date: "12/01/2023",
        tag: `Polkadot,HydraDx, Omnipool, liquidity, AMM, LRNA, impermanent loss`,
        description1:
          "1/ It is scary how bullish I am on #OmniPool and everything @hydra_dx is developing around it!",
        description2:
        "Let me tell you what is OmniPool and how it solves the liquidity crisis on @Polkadot 🧵",
        description3:
        "2/ 1st lets talk HDX",
        description4:
          "HydraDX is a protocol owned liquidity (POL), built on Substrate that with the power of XCM unlocks cross-chain communications & enables interoperability with other networks trustlessly!",
          description5: "https://x.com/Cris_Pap8/status/1613621420449226753?s=20",
      },

      {
        id: 29,
        img: img29,
        title: "Polkadot",
        commentor: "CrisPap ",
        date: "09/01/2023",
        tag: `Polkadot,Forkless upgrades, native compatibility, shared security, PTP, web3 grants`,
        description1:
          "1/🧵 @Polkadot is 100% open-source and anyone can contribute to its codebase with ease on so many ways!",
        description2:
        "Get to know the numerous benefits you can extract by building your application-specific blockchain with the Substrate framework👇",
        description3:
        "2/ Forkless Upgrades",
        description4:
          "Upgradability at its finest without a hardfork comes in life from Polkadot  by its transparent, on-chain governance system!",
          description5: "https://x.com/Cris_Pap8/status/1612473052281073669?s=20",
      },

      {
        id: 30,
        img: img30,
        title: "OpenGov aka Gov2",
        commentor: "CrisPap ",
        date: "21/12/2022",
        tag: `Kusama,Polkadot,OpenGov, accessibility, delegations`,
        description1:
          "1/🧵 It’s been more than 5 months since Gavin Wood introduced to the public OpenGov aka Gov2 which is already live and operational on @kusamanetwork for hard testing before it is deployed on @Polkadot",
        description2:
        "What is OpenGov tho and what are some major changes we should focus on?",
        description3:
        "2/ Polkadot was already the front-leader in our industry on decentralized governance even with Gov1",
        description4:
          "However an upgrade to optimize even further the entire process was inevitable as there was & still is a big demand of a solid Gov system that is reliable,secure & open to everyone",
          description5: "https://x.com/Cris_Pap8/status/1605568866733563905?s=20",
      },

      {
        id: 31,
        img: img31,
        title: "OpenGov Kusama",
        commentor: "CrisPap ",
        date: "23/12/2022",
        tag: `Kusama,OpenGov, Origins, Tracks`,
        description1:
          "1/🧵Now that OpenGov is up & running successfully on @kusamanetwork there are many new terms popping up constantly in front of our eyes",
        description2:
        "One of them is ofc Tracks!",
        description3:
        "If you want to know more about Tracks and their deep relationship with Origins this is for you",
        description4:
          "2/ As we mentioned on a previous thread Origins kick start the entire process and are vital for the overall operation & execution of OpenGov as they differentiate each proposal (Track) according to its importance and category",
          description5: "https://x.com/Cris_Pap8/status/1606340836517609472?s=20",
      },

      {
        id: 32,
        img: img32,
        title: "Back to Dot",
        commentor: "CrisPap ",
        date: "27/08/2022",
        tag: `Polkadot,infrastructure, interoperability, XCM`,
        description1:
          "1/ 🧵 Back to $DOT",
        description2:
        "Due to the relatively slow existed networks back in the days that were unable to scale, Dr @gavofyork presented into a 21 page document a new blockchain model named @Polkadot",
        description3:
        "2/ Its infrastructure connects several blockchains into a single network while enables the exchange of data between them without compromising their security",
        description4:
          "3/ Also as multiple other projects (Parachains) running on top of its chain (Relaychain), they can bring new features or extra functionalities while leveraging its advanced tech",
          description5: "https://x.com/Cris_Pap8/status/1563506667202850816?s=20",
      },

      {
        id: 33,
        img: img33,
        title: "Polkadot - Multichain",
        commentor: "CrisPap ",
        date: "01/07/2022",
        tag: `Polkadot, XCM, bridging future`,
        description1:
          "1/ @Polkadot multichain vision & its innovative advanced tech with Parachains,Croadloans, Liquid Staking & especially XCMP+XCM is the main reason i got instantly hooked",
        description2:
        "Impossible not to be even more inspired by listening to Gav speech about XCM evolution & the intro of XCM v3",
        description3:
        "2/ XCM v3 focuses mainly on 3 key features",
        description4:
          "-More programmable with the ability to trigger onchain actions after certain circumstances",
          description5: "https://x.com/Cris_Pap8/status/1542852581063524353?s=20",
      },

      {
        id: 34,
        img: img34,
        title: "Polkadot - Interoperability",
        commentor: "CrisPap ",
        date: "08/08/2022",
        tag: `Polkadot, XCM, Parachains, Relay chain`,
        description1:
          "1/ @Polkadot aims to solve the cross-chain interoperability problem and unite all blockchains",
        description2:
        "To allow them to talk with each other $DOT developed a scaling solution of interconnected blockchain networks called Parachains!",
        description3:
        "But what are Parachains?",
        description4:
          "2/ Parachains are next generation parallel independent blockchains hosted on Polkadot's Relaychain",
          description5: "https://x.com/Cris_Pap8/status/1556686327147528192?s=20",
      },

      {
        id: 35,
        img: img35,
        title: "Polkadot - Gen",
        commentor: "CrisPap ",
        date: "08/07/2022",
        tag: `Polkadot, Staking, Crowdloans, Governance`,
        description1:
          "1/ @Polkadot is the host of parachain networks and empowers the multichain vision of web3 by enabling cross-chain functionality amongst them",
        description2:
        "$DOT as its native token were designed to serve mainly 3 key purposes",
        description3:
        "2/ Staking",
        description4:
          "Polkadot uses the Proof of Stake(PoS) consesus mechanism that relies on the team effort of DOT holders & validators for processing transactions and generating new blocks",
          description5: "https://x.com/Cris_Pap8/status/1545449885444571138?s=20",
      },

      {
        id: 36,
        img: img36,
        title: "Polkadot - DeFi xchain bridge",
        commentor: "CrisPap ",
        date: "27/07/2022",
        tag: `Polkadot, DeFi, XCM`,
        description1:
          "1/ With the exponential growth of DeFi,xchain bridges have become a necessity.",
        description2:
        "However there r many fundamental concerns regarding their security vulnerabilities & the risks they pose to users @Polkadot  offers an optimal solution to this problem & counters any challenges with XCM",
        description3:
        "2/ Different blockchain networks are unable to interoperate, communicate or share information with each other XcBridges connect these separate blockchains, allow users to access other protocols and enable token or data transfers between them",
        description4:
          "At least thats what they aim for…",
          description5: "https://x.com/Cris_Pap8/status/1552056159045132288?s=20",
      },

      {
        id: 37,
        img: img37,
        title: "Polkadot - Liquid staking",
        commentor: "CrisPap ",
        date: "06/07/2022",
        tag: `Polkadot, Liquid staking `,
        description1:
          "1/ Another very interesting concept that was introduced on @Polkado eco is Liquid Staking",
        description2:
        "Many parachains created $DOT derivatives that enabling enormous new capabilities for investors",
        description3:
        "2/ By staking DOT with the traditional way, tokens remain locked with no other use case beyond earning rewards (~14%APR)",
        description4:
          "In addition staking unbonding period on Polkadot is 28d which gives limited flexibility and no easy access to liquidity",
          description5: "https://x.com/Cris_Pap8/status/1544673188587651072?s=20",
      },

      {
        id: 38,
        img: img38,
        title: "Darwinia",
        commentor: "CrisPap ",
        date: "02/09/2022",
        tag: `Polkadot,Darwinia`,
        description1:
          "1/ A huge step forward for the Dotsama ecosystem as @DarwiniaNetwork parachain is now onboarded on @Polkadot and brings an optimal cross-chain bridging solution with LCMP!",
        description2:
        "Lets look deeper and breakdown Darwinia + LCMP even more👇",
        description3:
        "2/ Darwinia is a reliable cross-chain messaging infrastructure built on Substrate!",
        description4:
          "By utilizing the power of light-clients aims to be the main foundation layer for next-generation dApps and provide them with an accessible way to enable even more cross-chain capabilities",
          description5: "https://x.com/Cris_Pap8/status/1565725658705272834?s=20",
      },

      {
        id: 39,
        img: img39,
        title: "Public Presure",
        commentor: "CrisPap ",
        date: "27/09/2022",
        tag: `jointhepresure, public presure`,
        description1:
          "1/ Want to know more about @jointhepressure and the importance of @Polkadot on their mission?",
        description2:
        "-What is Public Pressure?",
        description3:
        "-What problem tries to solve?",
        description4:
          "-How?",
          description5: "https://x.com/Cris_Pap8/status/1574826361218338816?s=20",
      },

      {
        id: 40,
        img: img40,
        title: "EWT",
        commentor: "CrisPap ",
        date: "19/09/2022",
        tag: `EWT`,
        description1:
          "1/ Learn about @energywebx $EWT the leading alliance for the blockchain development in the energy sector that aims to connect tech+users+companies for the better good by leveraging @Polkadot and Substrate framework👇",
        description2:
        "2/ EnergyWeb is a non-profit, open-source organization with main focus to build low carbon customer-centric energy systems which will be reliable and fully energy efficient!",
        description3:
        "3/ Its mission is to persuade the entire population and enterprises to shift to green energy consumption by establishing decentralized operating systems for power grids that will allow to track and manage the energy that is used and then distributed back around the world",
        description4:
          "4/ Enterprises",
          description5: "https://x.com/Cris_Pap8/status/1571872726016753664?s=20",
      },

      {
        id: 41,
        img: img41,
        title: "GM chain",
        commentor: "CrisPap ",
        date: "12/07/2022",
        tag: `GM,parachain`,
        description1:
          "1/ $GM! Just one simple word can change your entire day or even build parachains on @kusamanetwork",
        description2:
        "Learn more about how everything started & all the important info about @GmOrDie_  vision👇",
        description3:
        "2/ The need to GM with FRENs inside @ChaosDAΟ was too big that the creation of a dedicated space for GMing became a necessity!",
        description4:
          "No matter the mood or the circumstances the OGMers Chads were spreading it🔥",
          description5: "https://x.com/Cris_Pap8/status/1546626904719081472?s=20",
      },

      {
        id: 42,
        img: img42,
        title: "XCausd on moonriver",
        commentor: "CrisPap ",
        date: "19/04/2022",
        tag: `xcausd, moonriver,acala`,
        description1:
          "1/ xcAUSD on @MoonriverNW 🔥 @AcalaNetwork goal always was to build the native stablecoin for both $DOT and $KSM & unlock enough liquidity to boost the entire eco!",
        description2:
        "Thats why they also introduced a 250M $aUSD fund to empower their vision",
        description3:
        "But what is $aUSD?",
        description4:
          "",
          description5: "https://x.com/Cris_Pap8/status/1516428677277532164?s=20",
      },

      {
        id: 43,
        img: img43,
        title: "Zeitgeist",
        commentor: "CrisPap ",
        date: "28/06/2022",
        tag: `zeitgeist`,
        description1:
          "1/ After the TGE schedule ann we can tell that the highly anticipated @ZeitgeistPM launch is closer than ever!",
        description2:
        "The development of a fully decentralized prediction market software is a very interting concept that can increase heavily the community engangement within Dotsama🔥",
        description3:
        "2/ Zeitgeist is built on top of the Substrate!",
        description4:
          "A powerful highly secured framework for building innovative and full interoperable blockchain networks by utilizing the most advanced tech existed nowadays",
          description5: "https://x.com/Cris_Pap8/status/1541810946863243269?s=20",
      },

      {
        id: 44,
        img: img44,
        title: "Bifrost",
        commentor: "CrisPap ",
        date: "23/06/2022",
        tag: `bifrost`,
        description1:
          "1/🧵 Breaking down @bifrost_finance the OG parachain on @kusamanetwork that introduced so many innovative features for the entire Dotsama community🔥",
        description2:
        "2/ Bifrost is a Web3 derivatives protocol that provides decentralised cross-chain liquidity for staked assets",
        description3:
        "Leveraging the cross-consensus message (XCM) can provide cross-chain liquid staking services for multiple chains!",
        description4:
          "3/ Bifrost's Kusama parachain slot auction was officially opened on 11th of June and eventually won the 5th round of parachain slot bidding with around 137M KSM!",
          description5: "https://x.com/Cris_Pap8/status/1539991521365315585?s=20",
      },

      {
        id: 45,
        img: img45,
        title: "Moonriver",
        commentor: "CrisPap ",
        date: "30/05/2022",
        tag: `moonriver`,
        description1:
          "1/ Throwback to @MoonriverNW journey",
        description2:
        "The undisputed unicorn that shocked the entire Dotsama community!",
        description3:
        "Lets talk $MOVR 🔥",
        description4:
          "2/ Moonriver focuses on EVM compatibility...",
          description5: "https://x.com/Cris_Pap8/status/1531369927600390148?s=20",
      },

      {
        id: 46,
        img: img46,
        title: "WagMedia",
        commentor: "CrisPap ",
        date: "01/08/2022",
        tag: `wagmedia`,
        description1:
          "1/ Content creators play a significant role in the growth of $DOT & $KSM eco!",
        description2:
        "Thanks to @thatMediaWag, which is undoubtedly the best place to find pure talents, i created a Questionnaire that indicates more insides about them Creators of Dotsama findings👇",
        description3:
        "💥Expect Content💥",
        description4:
          "2/ How long does it take to create an article/thread?",
          description5: "https://x.com/Cris_Pap8/status/1554116076652449792?s=20",
      },

      {
        id: 47,
        img: img47,
        title: "Gromlins",
        commentor: "CrisPap ",
        date: "03/09/2022",
        tag: `gromlins`,
        description1:
          "1/ #GROMLINS parade already started on @RaresamaNFT 🎉",
        description2:
        "Trading was enabled this morning and only after few hours we r witnessing more than 250K $GLMR in volume🤯",
        description3:
        "Lets explore more these beautiful creatures and highlight some interesting stats so far",
        description4:
          "2/ Max Supply of the collection is 3333 (1700+ unique addresses) with a huge number being distributed to DOTSAMA community!",
          description5: "https://x.com/Cris_Pap8/status/1566086290180825089?s=20",
      },

      {
        id: 48,
        img: img48,
        title: "Skybreach",
        commentor: "CrisPap ",
        date: "22/04/2022",
        tag: `skybreach`,
        description1:
          "1/ Land Sales on #Skybreach #Metaverse recent update introduced the benefits of stacked plots, avatar movement & the importance of $RMRK token",
        description2:
        "Lets upgrade it a bit more and highlight some of the best strategies we can currently follow",
        description3:
        "2/ Kokopelli Gem",
        description4:
          "-Grand your super early access...",
          description5: "https://x.com/Cris_Pap8/status/1517501985674731520?s=20",
      },

     

      {
        id: 50,
        img: img50,
        title: "1st Cross Chain Communication",
        commentor: "CrisPap ",
        date: "13/01/2022",
        tag: `Polkadot, XCM, GLMR , MOVR`,
        description1:
          "1/ xcKSM & xcRMRK ll be the first cross-chain assets on $MOVR & $GLMR network",
        description2:
        "Moonbeam introduced XC-20s Substrate assets which are at the same time Erc20 compatible and have the power to move across all parachains🤯",
        description3:
        "2/ XCM format enables those cross-chain communications between interoperable blockchains & is capable of connecting the entire ecosystem together",
        description4:
          "This is something the whole #DOTSAMA community was waiting for so long!!",
          description5: "https://x.com/Cris_Pap8/status/1481389327393468416?s=20",
      },
      
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
