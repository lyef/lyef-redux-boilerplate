require('babel-register')();

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

const { window } = new JSDOM('');
const { document } = (new JSDOM('')).window;

global.document = window;
global.window = document;


global.window.localStorage = global.window.sessionStorage = {
    getItem(key) {
        return this[key];
    },
    setItem(key, value) {
        this[key] = value;
    },
    removeItem(key) {
        delete this[key];
    },
};
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};
