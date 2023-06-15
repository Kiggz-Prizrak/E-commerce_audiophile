import Image from "./Image";

const CheckoutRecapItem = ({
  id,
  image,
  name,
  price,
  productQuantity,
  link,
}) => {
  return (
    <>
      <div className="checkoutRecapItem-content">
        <Image image={image} link={link} />
        <div className="checkoutRecapItem-text">
          <p>{name}</p>
          <p className="subtitle">{price} $</p>
        </div>
      </div>
      <p>{` x ${productQuantity}`}</p>
    </>
  );
};

export default CheckoutRecapItem;
