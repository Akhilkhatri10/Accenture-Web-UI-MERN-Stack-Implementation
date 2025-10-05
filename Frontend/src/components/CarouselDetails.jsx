// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { Autoplay } from 'swiper/modules';


import React from 'react';
import image11 from '../assets/image11.webp';
import image12 from '../assets/image12.webp';
import image13 from '../assets/image13.webp';
import image14 from '../assets/image14.webp';
import image15 from '../assets/image15.webp';
import image16 from '../assets/image16.webp';
import image17 from '../assets/image17.webp';
import Carousel from './Carousel';

const CarouselDetails = () => {
    const carouselData = [
        {
            imageUrl: image11,
            title: 'Microsoft scales cloud at the speed of AI',
            description:
                'The cloud services leader is reinventing its supply chain to meet surging AI demand—doubling data center capacity while boosting speed, resilience and sustainability. Centralized data and digital twin-powered control towers are enabling smarter decisions and unlocking $100M in savings across global operations.',
        },
        {
            imageUrl: image12,
            title: 'HP reimagines global learning',
            description:
                'The global tech leader is transforming training with a bold new strategy—empowering its people with personalized, scalable learning to build a future-ready, high-performing sales force.',
        },
        {
            imageUrl: image13,
            title: "The UK's cyber defense, reinvented",
            description:
                'The National Cyber Security Centre built a scalable, agile platform that blocks over 350 million cyber threats a month, ensuring a safer digital future for UK services, people and organizations.',
        },
        {
            imageUrl: image14,
            title: "Spotify's advertising revolution",
            description:
                'The streaming giant is turning up the volume on digital audio ads—using data and AI to fine-tune the media mix.',
        },
        {
            imageUrl: image15,
            title:
                "Singapore's Ministry of Manpower redefines employment dispute resolution",
            description:
                'The government agency is fast-tracking employment claims with an AI-powered platform that cuts resolution time in half.',
        },
        {
            imageUrl: image16,
            title: 'Generali transforms learning with AI',
            description:
                'The global insurer is upskilling 87,000 employees, advancing continuous learning, future-ready skills and talent mobility.',
        },
        {
            imageUrl: image17,
            title: 'NHS leads a new era of smokefree births',
            description:
                'The public health system is cutting smoking rates and boosting prenatal care—using real-time data and a new digital platform to make pregnancy safer across Greater Manchester.',
        },
    ];

    return (
        <Swiper
            navigation={true}
            loop={true}
            speed={1000}
            autoplay={{
                delay: 8000,          // 8 seconds delay between slides
                disableOnInteraction: false,  // keeps autoplay working after manual swipe
            }}
            modules={[Navigation, Autoplay]}
            className="mt-28"
        >
            {carouselData.map((card, index) => (
                <SwiperSlide key={index}>
                    <Carousel
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselDetails;
