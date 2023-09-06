const UserModel = require('../model/user')

class UserService {
    constructor() {
        this.userModel = new UserModel();
    }
    async findByEmail(inputEmail) {
        const email = await this.userModel.findByEmail(inputEmail);
        return email
    }
    async registration(payload) {
        try {
            const { email } = payload;
            const user = await this.findByEmail(email);
            if (user) {
                throw new Error("user sudah terdaftar")

            }
            const newUser = new UserModel(payload.id, payload.email, payload.password)
            await this.userModel.save(newUser)

            return "user tersimpan"
        } catch (error) {
            throw error;
        }

    }
    async login(payload) {
        try {
            const { email, password } = payload;
            const user = await this.findByEmail(email);
            const code = await this.findByEmail(password);
            if(user){
                if (user && code == payload) {
                    throw new Error("login berhasil")
            }
            
            }
            throw new Error("Password tidak sesuai")
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;