import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    data.unshift("all");
    setCategories(data);
    // console.log("data/unshift", data);
  };

  useEffect(() => {
    getData();
  }, []);

  const clicked = (event, category) => {
    event.preventDefault();
    props.catSelection(category);
    console.log("category", category);
  };

  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item} onClick={(event) => clicked(event, item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
