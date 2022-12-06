export const renderContact = (req, res) => {
  res.status(200).render("Contact/contact");
};

export const sendMessage = (req, res) => {
  const { name, email, number } = req.body;
  
};
