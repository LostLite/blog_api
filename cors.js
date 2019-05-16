export default (app) => {
  const corsOptions = {
    origin: (origin, callback) => {
      console.log(`Origin: ${origin}`);
      if (process.env.CORS_WHITELIST.split(', ').indexOf(origin) !== -1) {
        callback(null, true); // allow the connection
      } else {
        callback(new Error('Request origin not allowed by CORS Configuration.'));
      }
    },
    methods: 'GET, HEAD, PUT, POST, PATCH, DELETE',
  };

  // enable use of option method for GET and PATCH
  app.options('*', cors(corsOptions));
  app.use(cors(corsOptions));
};
