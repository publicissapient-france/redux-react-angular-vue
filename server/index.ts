import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import cors from '@koa/cors';

import { add, getAll } from './todos';

const app = new Koa();
const router = new Router();

router.get('/todos/all', (ctx, next) => {
  ctx.body = getAll();
});

router.get('/todos/add', (ctx, next) => {
  ctx.body = add({ id: null, text: Math.random().toString().substr(2), done: false })
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  //.use(bodyParser)
  ;

/*// response
app.use(ctx => {
  ctx.body = '<pre>' + JSON.stringify(ctx.request, undefined, 2) + '</pre>';
});*/

const port = 3100;

app.listen(port);
console.log(`Koa is up and running on port ${port}...`);
