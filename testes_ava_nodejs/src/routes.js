import home from "./routes/home";
import people from "./routes/person";

export default (app) => {
    app.use('/', home);
    app.use('/people', people);
};