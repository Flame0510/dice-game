import DiceGame from '@/components/DiceGame';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gioco dei Dadi',
  description: 'Un gioco dei dadi per 2 giocatori',
};

export default function Home() {
  return <DiceGame />;
}
