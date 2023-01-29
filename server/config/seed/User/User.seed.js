// models for seeding
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const { firstnameList, lastnameList } = require('./store/names.store');
const { getRandomInt } = require('../../../utils/index.utils');

module.exports.generateUsers = async (userCount, adminCount) => {
    let userList = [];
    try {
        for( let i=0; i<userCount; i++ ) {
            const user = {
                username: `user-${i}`,
                email: `user-${i}@test.com`,
                firstname: firstnameList[getRandomInt(0, firstnameList.length)],
                lastname: lastnameList[getRandomInt(0, lastnameList.length)],
                password:`User${i}!pw123`,
                admin: i < adminCount
                    ? true
                    : false
            }
            user.password = await bcrypt.hash(user.password, saltRounds);
            userList.push(user);
        }
        return userList;
    } catch(e) {
        console.log(e);
        return e;
    }
    
}