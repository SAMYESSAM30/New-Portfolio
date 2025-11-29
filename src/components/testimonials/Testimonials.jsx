import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Img1 from '../../assets/testimonial1.png'
import Img2 from '../../assets/testimonial2.png'
import Img3 from '../../assets/testimonial3.png'
import './testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const data = [
        {
            id: 1,
            image: Img1,
            title: 'Samy Essam',
            description: "Working with Samy was an absolute pleasure. His attention to detail and commitment to delivering high-quality code is exceptional. The project was completed on time and exceeded our expectations."
        },
        {
            id: 2,
            image: Img2,
            title: 'Walid Mostafa',
            description: "Samy is a talented developer who brings creativity and technical expertise to every project. His responsive designs and clean code make him a valuable asset to any team."
        },
        {
            id: 3,
            image: Img3,
            title: 'Honye Ahmed',
            description: "Professional, reliable, and skilled. Samy transformed our vision into a beautiful, functional website. His communication throughout the project was excellent."
        },
    ];

    return (
        <section ref={sectionRef} className='testimonial container section' id="testimonials">
            <h2 className="section__title">{t("testimonials.title")}</h2>
            <span className="section__subtitle">{t("testimonials.subtitle")}</span>
            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className='testimonial__container'>
                {data.map((item, index) => {
                    return (
                        <SwiperSlide className='testimonial__card' key={index}>
                            <img src={item.image} alt={item.title} className='testimonial__img'></img>
                            <h3 className='testimonial__name'>{item.title}</h3>
                            <p className='testimonial__description'>{item.description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials