const Hapi = require('@hapi/hapi');
const authBasic = require('@hapi/basic');
const Blipp = require('blipp');
const Boom = require('boom');
const Vision = require('@hapi/vision');
const NameValidate = require('./nameValidate');

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

    await hapiServer.register({ plugin: Blipp });
    await hapiServer.register(Vision);
    await hapiServer.register(authBasic);
    hapiServer.auth.strategy('simple', 'basic', { validate });
    hapiServer.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: './templates',
        layoutPath: './templates/layouts',
        layout: true
    });

    hapiServer.route({
        method: 'GET',
        path: '/template',
        config: {
            description: 'Handle vision API',
            handler: (request, h) => {
                return h.view('home');
            }
        }
    });

    hapiServer.route({
        method: 'POST',
        path: '/{name?}',
        config: {
            description: 'Desc for home route',
            // auth: 'simple',
            validate: {
                payload: NameValidate
            },
            handler: (request, h) => {
                return 'Hello';
                // const name = request.params.name ? request.params.name : '';
                // const payload = request.payload;
                // if (!name) {
                //     return Boom.badRequest('Privide na valid name')
                // }
                // return h.response({payload, params: request.params}).code(201);
                // const name = request.params.name ? request.params.name : 'No name';
                // const query = request.query;
                // const payload = request.payload; // Trabalha com PUT e POST
                // console.log(query);
                // h -> response
                // ? -> Opcional
                // http://localhost:3000/Leonan -> params
                // http://localhost:3000/?name=Leonan -> query
                // console.log(payload);
                // return `Hello ${name} from Hapi.js by School of net`;
                // return h.response({payload, params: request.params}).code(201);
            },
        },
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