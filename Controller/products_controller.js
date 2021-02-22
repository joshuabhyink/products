module.exports = {
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price} = req.body
        db.create_product([name, description, price])
        .then((product) => 
            res.status(200).send(product)
        ).catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong, sit tight while we fix it!'})
            console.log(err)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_product(id)
        .then( (product) => res.status(200).send(product)
        ).catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong, sit tight while we fix it!'})
            console.log(err)
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products()
        .then( (product) => res.status(200).send(product)
        ).catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong, sit tight while we fix it!'})
            console.log(err)
        })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {desc} = req.query        
        db.update_product([id, desc])
        .then( (product) => res.status(200).send(product)
        ).catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong, sit tight while we fix it!'})
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id)
        .then( (product) => res.status(200).send(product)
        ).catch(err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong, sit tight while we fix it!'})
            console.log(err)
        })
    }
}