const user = require("../models/user");

exports.getUsers = async (query) => {
    return await user.find(query);
}