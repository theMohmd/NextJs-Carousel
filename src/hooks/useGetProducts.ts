export const useGetProducts = async () => {
    //fake delay for loading demonstrations
    await new Promise((res) => setTimeout(res, 1000));

    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};
