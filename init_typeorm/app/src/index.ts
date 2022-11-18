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