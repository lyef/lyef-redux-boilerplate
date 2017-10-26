require('babel-register')();
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

const { window } = new JSDOM('');
const { document } = (new JSDOM('')).window;

global.document = window;
global.window = document;


global.window.localStorage = {
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

global.window.localStorage = global.window.sessionStorage;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};

enzyme.configure({ adapter: new Adapter() });

