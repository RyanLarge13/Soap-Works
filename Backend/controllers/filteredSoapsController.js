export const filterSoaps = (req, res) => {
  const products = res.locals.products;
  const type = res.locals.type;
  res.render("FilteredProducts/FilteredProducts", {
    products: products,
    type: type
  });
};
