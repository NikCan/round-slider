import { EventCard, IEvent } from "entities/event";
import { FC, useEffect, useRef } from "react";
import { useWindowSize } from "shared/lib";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "./swiper-styles.scss";

interface EventsSwipperProps {
  events: IEvent[];
}
export const EventsSwipper: FC<EventsSwipperProps> = ({ events }) => {
  const { breakpoints } = useWindowSize();
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(0);
  }, [events]);

  const slides = events.map((el, i) => (
    <SwiperSlide key={i}>
      <EventCard event={el} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={"auto"}
      spaceBetween={breakpoints.sm ? 25 : 50}
      navigation={!breakpoints.sm}
      modules={[Navigation]}
      className="eventsSwiper"
    >
      {slides}
    </Swiper>
  );
};
