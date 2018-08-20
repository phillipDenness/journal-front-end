
const env = process.env.NODE_ENV; // 'dev' or 'test'

   const test = {
    app: {
      port: 3000
    },
    api: {
    protocol: 'http',
      host: 'journaljack-env-1.un4wzhvicb.eu-west-2.elasticbeanstalk.com',
      port: 80
    },
   };
   
   const dev = {
    app: {
      port: 3000
    },
    api: {
      protocol: 'http',
      host: 'localhost',
      port: 8080
    },
   };
   
   const config = {
    dev,
    test
   };
   
   module.exports = config['dev'];