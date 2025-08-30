import { NavigationItem, CryptoData, FeatureCard, LearningCard, FAQ, FooterSection } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", href: "#" },
  { label: "Trade", href: "#" },
  { label: "Market", href: "#" },
  { label: "Learn", href: "#" },
  { label: "Support", href: "#" },
];

export const CRYPTO_DATA: CryptoData[] = [
  {
    name: "Bitcoin",
    symbol: "INR",
    change: "+14.04%",
    changeColor: "text-[#00c22a]",
    price: "49,645 Inr",
    icon: "/coins-2--5.png",
    bgColor: "bg-[#fee71526]",
    chart: "/vector-1-1.svg",
  },
  {
    name: "Ethereum",
    symbol: "INR",
    change: "+43.04%",
    changeColor: "text-[#00c22a]",
    price: "36,675 Inr",
    icon: "/coins-2--5-1.png",
    bgColor: "bg-[#5928af26]",
    chart: "/vector-1-3.svg",
  },
  {
    name: "Solana",
    symbol: "INR",
    change: "-14.23%",
    changeColor: "text-[#c20000]",
    price: "1,456 Inr",
    icon: "/coins-2--5-2.png",
    bgColor: "bg-[#33875a26]",
    chart: "/vector-1.svg",
  },
  {
    name: "Doge",
    symbol: "INR",
    change: "+17.06%",
    changeColor: "text-[#00c22a]",
    price: "41,645 Inr",
    icon: "/coins-2--5-3.png",
    bgColor: "bg-[#cc313d26]",
    chart: "/vector-1-2.svg",
  },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Learn Crypto",
    icon: "/learn-1.png",
    hasBorder: true,
  },
  {
    title: "Learn Earn",
    icon: "/learn-1-1.png",
    hasBorder: false,
  },
  {
    title: "How To Trade",
    icon: "/learn-1-2.png",
    hasBorder: false,
  },
  {
    title: "Build Portfolio",
    icon: "/learn-1-3.png",
    hasBorder: false,
  },
];

export const LEARNING_CARDS: LearningCard[] = Array(6).fill({
  title: "Let's learn How crypto Currency Work?",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data",
});

export const FAQ_DATA: FAQ[] = [
  {
    question: "What is cryptocurrency?",
    answer: "Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks.",
  },
  {
    question: "What is a blockchain?",
    answer: "A blockchain is a distributed ledger that records transactions across a network of computers.",
  },
  {
    question: "What is a cryptocurrency wallet?",
    answer: "A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies.",
  },
  {
    question: "How do I start investing in cryptocurrency?",
    answer: "Choose a reliable exchange, create an account, complete verification, deposit funds, and buy cryptocurrencies.",
  },
  {
    question: "How do I keep my cryptocurrency secure?",
    answer: "Use strong passwords, enable two-factor authentication, and store your crypto in reputable wallets.",
  },
  {
    question: "What are the most popular cryptocurrencies?",
    answer: "Popular cryptocurrencies include Bitcoin, Ethereum, Binance Coin, Cardano, and Solana.",
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Link",
    links: ["About Us", "Feature", "Career", "Contact Us"],
  },
  {
    title: "Help",
    links: ["Customer Support", "Terms", "Privacy", "FAQs"],
  },
  {
    title: "Others",
    links: [
      "Start Trading",
      "Earn Free Crypto",
      "Crypto Wallet",
      "Payment Option",
    ],
  },
];