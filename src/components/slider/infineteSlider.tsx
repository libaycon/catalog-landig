import {useState, useEffect, useRef, useMemo } from 'react';
import Image from "next/image";
import EquipmentCard from '../cards/equipmentCard';


const InfiniteSlider = ({slides}:{slides:any}) => {
    const [activeIdex, setActiveIndex] = useState<number>(0);
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    },[]);

    useEffect(() => {
        timeoutRef.current = setTimeout((() => setActiveIndex((activeIdex + 1) % slides.length)), 3000);
        return () => clearTimeout(timeoutRef.current);
    }, [activeIdex, slides.lenght]);
    return (
        <div className='relative flex max-w-[260px] flex-row overflow-hidden'>
            <div className={`flex gap-4 transition-transform duration-1000 ease-in-out translate-x-[${activeIdex}0px]`} >

            {slides.map((slide:any, index:number) => (
                <div key={index} >
                    <EquipmentCard equipment={slide} />
                </div>   
            ))}
            </div>
        </div>
    )
}

export default InfiniteSlider;