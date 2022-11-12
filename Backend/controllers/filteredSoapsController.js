export const filterSoaps = (req, res) => {
  const products = res.locals.products;
  res.render("FilteredProducts/FilteredProducts", {
    products: products,
  });
};
