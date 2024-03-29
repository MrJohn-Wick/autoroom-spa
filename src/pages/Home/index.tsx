import { CardsCarousel } from '@autrm/components/CardsCarousel';
import { HeroSection } from '@autrm/components/HeroSection';
import { HowItWork } from '@autrm/components/HowItWork';
import { InstaSection } from '@autrm/components/InstaSection';
import deliveredCars from '@autrm/datas/delivered-cars.json';
import waitingCars from '@autrm/datas/waiting-cars.json';

export function Home() {
  return (
    <>
      <HeroSection />
      <CardsCarousel
        title="Ожидаемые авто"
        description="Автомобили, которые в скором времени будут доставлены и доступны для покупки."
        list={waitingCars}
      />
      <HowItWork />
      <CardsCarousel
        title="Привезенные под заказ"
        description="Автомобили, которые заказывали у нас."
        list={deliveredCars}
      />
      <InstaSection />
      {/* <div
        style={{
          width: '100%',
          height: '500px',
        }}
      >
        <iframe
          // id="telegram-post-telegram-3636"
          src="https://t.me/autoroom_by/3636?embed=2&amp;userpic=true"
          width="100%"
          height="500"
          frameBorder={0}
          scrolling="no"
        />
      </div> */}
    </>
  );
}
