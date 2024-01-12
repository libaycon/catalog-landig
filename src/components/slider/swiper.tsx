'use client';
import { useEffect, useRef, RefObject } from "react";
import { register } from "swiper/element/bundle";
import './swiper.css'


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': any;
            'swiper-slide': any;
        }
    }
}

interface SwiperProps {
    children: React.ReactNode;
    [key: string]: any;
}

export default function Swiper (props: SwiperProps) {
    const swiperElRef: RefObject<HTMLElement> = useRef(null);
    const { children, ...rest } = props;
    
    useEffect(() => {
        register();

        const params = {
            navigator: true,
            ...rest,
        }
        swiperElRef.current && Object.assign(swiperElRef.current, params);
        //@ts-ignore
        swiperElRef.current.initialize();
    }, [])

    return (
        <swiper-container init="false" ref={swiperElRef}>
            {children}
        </swiper-container>
    )
}

const SwiperSlide = (props: SwiperProps) => {
    const { children, ...rest } = props;

    return (
        <swiper-slide {...rest}>
            {children}
        </swiper-slide>
    )
}

export { SwiperSlide };