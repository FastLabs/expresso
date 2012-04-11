var module = { };

module.data = function(req, res) {
    res.send({data: 123});
};

exports.api = module;