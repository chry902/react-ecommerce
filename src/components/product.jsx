import RateStar from "./RateStar";

export const Product = ({ item }) => {
  const image = item.image || "img";
  const title = item.title || "titolo";
  const price = item.price || "prezo";
  const rateo = item.rating || 5;
  // console.log("array", rateo);

  // const { rate } = rating;
  // console.log("destrct", rate);

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
          <p>
            {price}
            <span className="euro">€</span>
          </p>
          <div className="stelle">
            <RateStar rating={rateo} />
          </div>
        </div>
      </div>
    </article>
  );
};
