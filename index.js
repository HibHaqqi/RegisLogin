const UserModel = require("./class/model/user")
const UserController = require("./class/controller/user.controller")
const http = require("http");

const server = http.createServer(async (req, res) => {
    const method = req.method;
    const userController = new UserController();
    switch (method) {
        case "POST":
            await userController.registration(req, res);
            break;

        default:
            break;
    }
})

server.listen(3000, () => {
    console.log("Server Berjalan di Port 3000!");
  });

async function main() {
    const user = new UserModel();
    console.log(await user.findByEmail("bob@example.com"));
}


main()