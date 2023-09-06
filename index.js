const UserModel = require("./class/model/user")
const UserController = require("./class/controller/user.controller")
const http = require("http");
const url = require("url")

const server = http.createServer( async (req, res) => {
    // const method = req.method;
    const parsedUrl = url.parse(req.url, true);
    
    const userController = new UserController();
    switch (parsedUrl.pathname) {
      case "/registrasi":
        await userController.registration(req, res);
        break;
      case "/login":
        await userController.login(req, res);
        break;
      default:
        break;
    }
  });
  
server.listen(3000, () => {
    console.log("Server Berjalan di Port 3000!");
  });

async function main() {
    const user = new UserModel();
    console.log(await user.findByEmail("bob@example.com"));
}


main()