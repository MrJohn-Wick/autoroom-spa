import { Cases } from '@autrm/components/Cases';
import { HeroSection } from '@autrm/components/HeroSection';
import { HowItWork } from '@autrm/components/HowItWork';
import { InstaSection } from '@autrm/components/InstaSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <Cases />
      <HowItWork />
      <InstaSection />
    </>
  );
}
