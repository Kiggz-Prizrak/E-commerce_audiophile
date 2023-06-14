const productBuilder = (id, price, productQuantity, name, image, slug) => {
  return {
    id,
    price,
    productQuantity,
    name,
    image,
    slug,
  };
};

export default productBuilder