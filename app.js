const koa = require('koa.io');
const app = koa();
const serve = require('koa-static');
const compress = require('koa-compress');
var pjson = require('./package.json');
require('./connect-market');
app.use(serve('public'));
app.listen(pjson.port);

// Compress
app.use(compress());


console.log(getTime()+" server running at :"+pjson.port);

function getTime () {
    const date = new Date();
    return "["+date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds()+"]";
}
