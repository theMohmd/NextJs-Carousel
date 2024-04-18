import { apiProductType } from "@/types/apiProduct";
import Image from "next/image";

type CarouselItemProps = { data: apiProductType };

const CarouselItem = ({ data }: CarouselItemProps) => {
    return (
        <div>
            <Image src={data.image} width={100} height={100} alt={data.title} />
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>{data.description}</p>
        </div>
    );
};

export default CarouselItem;
