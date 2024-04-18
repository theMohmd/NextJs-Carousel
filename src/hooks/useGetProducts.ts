export const useGetProducts = async () => {
    await new Promise((res) => setTimeout(res, 3000));
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};
