'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Swip = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit labore ipsam explicabo dolores repellat quia quod vero, totam incidunt tenetur, magni unde repudiandae a blanditiis consectetur vel architecto placeat perferendis! Natus dicta iusto ea. Praesentium recusandae qui distinctio repudiandae?</SwiperSlide>
    ...
  </Swiper>
  )
}

export default Swip