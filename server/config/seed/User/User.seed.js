// models for seeding
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const { firstnameList, lastnameList } = require('./store/names.store');
const { getRandomInt } = require('../../../utils/index.utils');

module.exports.generateUsers = async (userCount, adminCount) => {
    let userList = [];
    try {
        for( let i=0; i<userCount; i++ ) {
            username = i<adminCount ? `admin-${i}` : `user-${i}`;
            email = i<adminCount ? `admin${i}@test.com` : `user-${i}@test.com`;
            admin = i<adminCount ? true : false;
            teacherAdmin = i<adminCount ? true : false;
            
            const user = {
                username, email, admin, teacherAdmin,
                firstname: firstnameList[getRandomInt(0, firstnameList.length)],
                lastname: lastnameList[getRandomInt(0, lastnameList.length)],
                password:`User${i}!pw123`,
                
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