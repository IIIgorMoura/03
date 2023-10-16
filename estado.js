let estado = function (a) {
    if (a == 'sp' || a == 'rj') {
        return "Estado autorizado"
    } else {
        return "Estado recusado"
    }
}

module.exports = estado