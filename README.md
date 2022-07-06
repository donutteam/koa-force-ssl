# Koa Force SSL
A class for creating Koa middlewares that redirect requests to their HTTPS counterparts.

**Note:** Requests from a local IP address are *not* redirected. This is acheived by using the [is-local-ip](https://www.npmjs.com/package/is-local-ip) package.

## Installation
Install the package with NPM:

```
npm install --save-dev @donutteam/koa-force-ssl
```

## Usage
To use this class, simply instantiate an instance and add it to your Koa stack:

```js
const app = new Koa();

const forceSSLMiddleware = new ForceSSLMiddleware();

// Be sure to add the execute function of the instance
//	and NOT the instance itself
app.use(forceSSLMiddleware.execute);
```

## License
[MIT](https://github.com/donutteam/koa-force-ssl/blob/main/LICENSE.md)