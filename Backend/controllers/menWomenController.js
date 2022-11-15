export const renderMenWomen = (req, res) => {
  const soaps = res.locals.soaps;
  const kits = res.locals.kits;
  const subs = res.locals.subs;
  res.status(200).render("MenWomen/menWomen", {
    soaps: soaps,
    kits: kits,
    subs: subs,
  });
};
