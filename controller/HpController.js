const ph = {
    nom: (req, res) => {
        res.render('index');
    },

    about: (req, res) => {
        res.render('about');
    },

    contact: (req, res) => {
        res.render('contact');
    },

    address:(req, res) => {
        res.render('address');
    },
    lans:(req, res) => {
        res.render('lans');
    }
};

module.exports = ph;
