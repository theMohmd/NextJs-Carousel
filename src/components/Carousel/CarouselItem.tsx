"use client";

import { apiProductType } from "@/types/apiProduct";
import Image from "next/image";
import { CartIcon } from "../ui/Icons";

type CarouselItemProps = { data: apiProductType };

const CarouselItem = ({ data }: CarouselItemProps) => {
    return (
        <div className="flex flex-col grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-1 size-full">
            <div className="flex justify-center items-center p-5 grow">
                <Image
                    className="object-contain max-w-[200px] aspect-square size-full md:max-w-[400px]"
                    src={data.image}
                    width={400}
                    height={400}
                    alt={data.title}
                />
            </div>
            <div className="flex flex-col justify-center p-5 ">
                <p className="text-2xl font-bold line-clamp-2">{data.title}</p>
                <p className="mt-2 text-neutral-700 line-clamp-6">
                    {data.description}
                </p>
                <div className="flex justify-between items-center mt-8">
                    <p className="text-2xl font-bold text-green-800">
                        {data.price}$
                    </p>
                    <button className="flex gap-1 items-center py-2 px-4 w-auto text-white bg-green-800 rounded-md duration-200 hover:bg-green-700 focus-visible:bg-green-700">
                        <p className="font-medium">Buy Now</p>
                        <div className="size-7">
                            <CartIcon />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
