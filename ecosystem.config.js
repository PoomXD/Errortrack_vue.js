module.exports = {
    apps : [{
      name: "app",
      script: "serve -l 8080 -s dist",
      autorestart: true,
      env: {
          NODE_ENV: "development",
      },
      env_production: {
          NODE_ENV: "production",
      }
    }]
  }
  