var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from user where username = ? ', 
        // select_password:'select * from user where  password = ?',
        update_user: 'update user set'
    }
}

module.exports = sqlMap;