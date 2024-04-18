import Carousel from "@/components/Carousel/Carousel";
import { useGetProducts } from "@/hooks/useGetProducts";
import { apiProductType } from "@/types/apiProduct";

const Home = async () => {
    const data: apiProductType[] = await useGetProducts();
    return (
        <div className="flex justify-center items-center background h-dvh p-5">
            <Carousel data={data} />
        </div>
    );
};

export default Home;
