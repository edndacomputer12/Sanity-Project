import Image from 'next/image';
import { Header } from './components/Header';
import { MainInfo } from './components/MainInfo';

export default function Home() {
  return (
    <div>
      <Header />
      <MainInfo />
    </div>
  );
}
