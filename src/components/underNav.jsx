

import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const UnderNav = () => {
    const [categories, setCategories] = useState(mock);

    const getData = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products/categories/"
        );
        const data = await response.json();
        setCategories(data);
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="under_nav">
            <ul>
                {categories.map((item, index) => (
                    <li key={index}>
                        <a href={item}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};