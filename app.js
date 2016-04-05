var koa = require('koa');
var router = require('koa-route');
var views = require('co-views');



const render = views(__dirname + '/views', {ext: 'ejs'});

var app = module.exports = koa();

app.use(router.get('/', index));

app.use(router.get('/about', about));

function *index() {
    this.body = yield render('index', {});
};

function *about() {
    this.body = yield render('about', {myCorp: {
        name:'BAVC',
        copyrigth: new Date().getFullYear()
    }});
};

app.listen(1337);

console.log("Server start on 1337 port.");