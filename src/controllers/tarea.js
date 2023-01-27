const index = (req, res) => {
    res.render('tareas/index');
}

const crear = (req, res) => {
    res.render('tareas/crear');
}

module.exports = {
    index,
    crear
}