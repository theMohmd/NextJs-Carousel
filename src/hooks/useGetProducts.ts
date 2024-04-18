export const useGetProducts = async () => {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};
