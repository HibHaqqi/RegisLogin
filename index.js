const UserModel = require("./class/model/user")

async function main() {
    const user = new UserModel();
    console.log(await user.findByEmail("bob@example.com"));
}


main()