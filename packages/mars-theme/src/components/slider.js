import React, { useState, useEffect } from "react";
import useInView from "@frontity/hooks/use-in-view";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCss from "../assets/css/swiper-bundle.min.css";
import "../assets/css/slider.css";
import { Global, css, connect, styled, fetch } from "frontity";
import Skeleton from "react-loading-skeleton";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://design.classys.com/wp-json/acf/v2/options/slide")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  if (loading) return <Skeleton />;

  return (
    <>
      <Global styles={css(swiperCss)} />
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        css={css`
          max-width: 1100px;
          width: 100%;
          height: 500px;
        `}
      >
        {users.slide.map((item, i) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <img
              src={item.url}
              css={css`
                width: 100%;
                height: auto;
              `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default connect(Slider);
