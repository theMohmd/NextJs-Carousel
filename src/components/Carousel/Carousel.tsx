import { apiProductType } from "@/types/apiProduct";
import CarouselItem from "./CarouselItem";

type CarouselProps = {
    data: apiProductType[];
};

const Carousel = ({ data }: CarouselProps) => {
    return (
        <div>
            {data.map((item) => (
                <CarouselItem key={item.id} data={item} />
            ))}
        </div>
    );
};

export default Carousel;
