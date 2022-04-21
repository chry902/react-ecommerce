import { useState } from "react";

export const Header = () => {

    const [search, setSearch] = useState("");

    const changing = (event) => {
        setSearch(event.target.value);
    };

    return (
        <header>
            <div className="logo_amazon">
                <i className="fa-brands fa-amazon fa-5x"></i>
            </div>
            <form>
                <input type="text" placeholder="Search..." value={search} onChange={changing} />
                <button>
                    <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                </button>
            </form>
            <div>
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
            </div>
        </header>
    );
};