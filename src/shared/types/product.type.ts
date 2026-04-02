export type DummyJsonProduct = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
};

export type DummyJsonProductsResponse = {
    products: DummyJsonProduct[];
    total: number;
    skip: number;
    limit: number;
};