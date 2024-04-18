import Carousel from "@/components/Carousel/Carousel";
import { useGetProducts } from "@/hooks/useGetProducts";
import { apiProductType } from "@/types/apiProduct";
import Error from "./error";

const Home = async () => {
    const data: apiProductType[] = await useGetProducts();
    return (
        <div className="flex justify-center items-center h-dvh p-5">
            {data && <Carousel data={data} />}
        </div>
    );
};

export default Home;
