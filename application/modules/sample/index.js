module.exports = function (app) {
    app.get("/", (req, res) => {
        res.send('This be sample route');
    })
}