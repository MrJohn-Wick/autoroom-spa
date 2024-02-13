import { Cases } from '@autrm/components/Cases';
import { HeroSection } from '@autrm/components/HeroSection';
import { HowItWork } from '@autrm/components/HowItWork';
import { InstaFeed } from '@autrm/components/InstaFeed';

export function Home() {
  return (
    <>
      <HeroSection />
      <InstaFeed />
      <Cases />
      <HowItWork />
    </>
  );
}
