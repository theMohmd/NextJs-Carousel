"use client";

import { apiProductType } from "@/types/apiProduct";
import CarouselItem from "./CarouselItem";
import { useState } from "react";
import { RightChevronIcon, LeftChevronIcon } from "../ui/Icons";

type CarouselProps = {
    data: apiProductType[];
};

const ClassName = "text-green-800 w-8 absolute top-0 h-full hover:bg-opacity-20 hover:bg-green-800";
const Carousel = ({ data }: CarouselProps) => {
    const [index, setindex] = useState(0);
    const prevAction = () => {
        setindex((prev) => {
            if (prev > 0) return prev - 1;
            else return data.length - 1;
        });
    };
    const nextAction = () => {
        setindex((prev) => {
            if (prev < data.length - 1) return prev + 1;
            else return 0;
        });
    };
    return (
        <div className="flex overflow-hidden relative p-5 px-8 w-full bg-white rounded-xl aspect-[2/3] max-w-[800px] md:aspect-[2]">
            <div className="size-full [&>*]:grow-0 [&>*]:shrink-0 flex overflow-hidden">
                {data.map((item) => (
                    <div
                        key={item.id}
                        style={{ translate: `${-100 * index}%` }}
                        className="duration-500 size-full"
                    >
                        <CarouselItem data={item} />
                    </div>
                ))}
            </div>
            <button
                className={ClassName}
                style={{ right: 0 }}
                onClick={nextAction}
            >
                <RightChevronIcon />
            </button>
            <button
                className={ClassName}
                style={{ left: 0 }}
                onClick={prevAction}
            >
                <LeftChevronIcon />
            </button>
        </div>
    );
};

export default Carousel;
