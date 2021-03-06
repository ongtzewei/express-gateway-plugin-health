module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerGatewayRoute(require('./routes/health'));

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  },
  options: {
    baseUrl: {
      title: 'Base Url',
      description: 'the base url to initialize',
      type: 'string',
      required: true
    },
    maxRequestsPerSecond: {
      title: 'Max Requests per second',
      description: 'the max rps value',
      type: 'number'
    }
  }
};
