import React, { useState, useEffect } from "react";
import useInView from "@frontity/hooks/use-in-view";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect, styled } from "frontity";
import { fetch } from "frontity";

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
  });
  if (loading) return <div>Loading...</div>;
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {users.slide.map((user) => (
        <SwiperSlide key={user.id}>
          <img src={user.url} alt={user.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default connect(Slider);
