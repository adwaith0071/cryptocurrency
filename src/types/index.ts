export interface NavigationItem {
  label: string;
  href: string;
}

export interface CryptoData {
  name: string;
  symbol: string;
  change: string;
  changeColor: string;
  price: string;
  icon: string;
  bgColor: string;
  chart: string;
}

export interface FeatureCard {
  title: string;
  icon: string;
  hasBorder: boolean;
}

export interface LearningCard {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}