const notifiler = require('node-notifier');

// notifiler.notify('Hello World');
notifiler.notify({
    title: 'TITLE 1',
    message: 'Message 2',
    // icon: '',
    sound: false,
    wait: true
}, (err, response) => {
    console.log('Response');
});

notifiler.on('click', (obj, opts) => {
    console.log(obj, opts);
});