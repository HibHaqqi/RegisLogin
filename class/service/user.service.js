const UserModel = require('../model/user')

class UserService {
    constructor(){
        this.userModel = new UserModel();
    }
    async findByEmail(inputEmail){
        const userModel = await this.userModel.findByEmail(inputEmail);
        if(userModel === userModel.)
    }

}

modeule.exports = UserService;