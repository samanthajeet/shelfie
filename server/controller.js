module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get('db');
    db.get_inventory().then( (response) => {
      res.status(200).send(response)
    })
  },

  createProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, img_url } = req.body;
    console.log(name, price, img_url)
    db.create_product(name, price, img_url).then( (response) => {
      res.status(200).send(response)
    })
  },

  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    db.delete_product(id).then( (response) => {
      res.status(200).send(response)
    })
    

  }
}