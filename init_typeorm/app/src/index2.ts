import "reflect-metadata";
import { Task } from "./entity/Task";
import { createConnection, getConnection, getRepository } from "typeorm";

(async() => {
    try {
        await createConnection();
        // const entityManager = getConnection().manager;
        // const res = await entityManager.findAndCount(Task);
        // console.log(res);
        const taskRepository = getRepository(Task);
        const res = await taskRepository.findAndCount();
        console.log(res);
    } catch (ex) {
        console.log('Error', ex);
    }
    
    // createConnection('con2')
    //     .then(() => console.log("Connection OK"))
    //     .catch(() => console.log("Connection error"));
    // const connection = await createConnection({
    //     name: 'con1',
    //     type: 'mysql',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: '',
    //     database: 'typeorm',
    // });
    // const con1 = getConnection('con1');
})();

/*
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
*/