export const Product = ({ image, title, price }) => {
    return (
        <article>
            <div className="img_card_contain">
                <img src={image} alt="" />
            </div>
            <div className="info_card_contain">
                <div className="contain_title_card">
                    <h3> {title}</h3>
                </div>

                <div className="contain_euro">
                    <p>{price}<span className="euro">€</span></p>
                </div>
                <div className="stelle">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>

            </div>
        </article>
    );
};