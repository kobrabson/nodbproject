const recipes = require('./recipes.json')
let id = 4;

module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(recipes)
    }
}