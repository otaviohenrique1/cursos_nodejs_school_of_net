const Hapi = require('@hapi/hapi');
const authBasic = require('@hapi/basic');

const validate = (request, username, password) => {
    // Temp DB
    const user = {
        username: 'admin',
        name: 'Administrador',
        email: 'admin@admin.com ',
        password: '123456789',
    };

    if (user.username === username && user.password && password) {
        return {
            credentials: { user },
            isValid: true
        }
    } else {
        return {
            credentials: {  },
            isValid: false
        }
    }
};

const init = async () => {
    const hapiServer = Hapi.Server({
        host: 'localhost',
        port: 3000
    });

    await hapiServer.register(authBasic);
    hapiServer.auth.strategy('simple', 'basic', { validate });

    hapiServer.route({
        method: ['GET', 'POST'],
        path: '/{name?}',
        handler: (request, h) => {
            const name = request.params.name ? request.params.name : 'No name';
            const query = request.query;
            const payload = request.payload; // Trabalha com PUT e POST
            // console.log(query);
            // h -> response
            // ? -> Opcional
            // http://localhost:3000/Leonan -> params
            // http://localhost:3000/?name=Leonan -> query
            console.log(payload);
            // return `Hello ${name} from Hapi.js by School of net`;
            return h.response({payload, params: request.params}).code(201);
        },
        options: {
            auth: 'simple'
        }
    });

    // hapiServer.route({
    //     method: ['GET', 'POST'],
    //     path: '/hello',
    //     handler: (request, h) => {
    //         // http://localhost:3000/hello
    //         return "Hello world";
    //     },
    // });

    await hapiServer.start();
    console.log('Hapi Server has been started at http://localhost:3000');
};

init();