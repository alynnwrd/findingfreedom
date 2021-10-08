const router = require("express").Router();
const { Header } = require("../../models");

router.get("/", async (req, res) => {
  res.render("header");
});
//post
router.post('/', async (req, res) => {
  try { 
    const headerData = await Header.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    email: req.body.email,
  });
  res.status(200).json(headerData)
} catch (err) {
  res.status(400).json(err);
}
});

//update
router.put('/:id', async (req, res) => {
  // TODO: Where is this action method sending the data from the body of the fetch request? Why?
  try {
    const headerUpdate = await Header.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phone: req.body.phone,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    // TODO: If the database is updated successfully.
    res.status(200).json(headerUpdate);
  } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
