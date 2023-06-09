const productBuilder = (id, price, productQuantity, name, image) => {
  return {
    id,
    price,
    productQuantity,
    name,
    image,
  };
};

export default productBuilder