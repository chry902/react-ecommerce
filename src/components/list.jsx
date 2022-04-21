import { useState, useEffect } from "react";

import { Product } from "./product";

const mock = [
    {
        id: 0,
        title: "prodotto 1",
        price: 0,
        image: "",
    },
    {
        id: 1,
        title: "prodotto 2",
        price: 0,
        image: "",
    },
    {
        id: 2,
        title: "prodotto 3",
        price: 0,
        image: "",
    },
];



export const List = ({ category }) => {

    const [products, setProducts] = useState(mock);
    const [source, setSource] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getProducts = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products/"
        );
        const products = await response.json();
        setProducts(products);
        setSource(products);
        setLoading(false);
    };


    useEffect(() => {
        getProducts();
    }, []);


    useEffect(() => {
        const filtered = source.filter((product) => {
            if (category === "all") {
                return product;

            } else {
                return product.category === category;
            }
        });
        setProducts(filtered);
    }, [category]);



    return (
        <section>
            <ul className="grid_1">
                {products.map((item) => (
                    <li key={item.id} className={isLoading ? "loading" : ""}>
                        <Product image={item.image} title={item.title} price={item.price} />
                    </li>
                ))}
            </ul>
        </section>
    );
};