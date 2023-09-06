const UserService = require('../service/user.service')

class UserController {
    constructor(){
        this.userService = new UserService();
    }
    async login(req, res) {
        let body = "";
        req.on("data", async(chunk)=>{
            body += chunk;
        })
        req.on("end",async ()=>{
            try {
                const bodyJson = JSON.parse(body);

                const login = await this.userService.login(bodyJson);
                res.writeHead(201, {"Content-Type":"application/json"})
                res.end(JSON.stringify({message: login,status:"SUccess",code:201}))
            } catch (error) {
                res.writeHead(400, {"Content-Type":"application/json"})
                res.end(JSON.stringify({message: error.message,status:"user sudah ada",code:400},))
            }
        })
       
      }
    async registration(req,res){
        let body ="";
        req.on("data", async(chunk)=>{
            body += chunk;
        })


        req.on("end",async ()=>{
            try {
                const bodyJson = JSON.parse(body);

                const registrasi = await this.userService.registration(bodyJson);
                res.writeHead(201, {"Content-Type":"application/json"})
                res.end(JSON.stringify({message: registrasi,status:"SUccess",code:201}))
            } catch (error) {
                res.writeHead(400, {"Content-Type":"application/json"})
                res.end(JSON.stringify({message: error.message,status:"Fai",code:400},))
            }
        })
    }


}

module.exports = UserController;