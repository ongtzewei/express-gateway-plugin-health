module.exports = function (gatewayExpressApp) {
  gatewayExpressApp.get('/api/health', (req, res) => {
    res.status(200).send("Connected");
  });
};
