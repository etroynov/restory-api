module.exports = {
  apps: [
    {
      name: "resto-api",
      script: "./packages/api",
      watch: true,
      env: {
        PORT: 8080,
        NODE_ENV: "production"
      },
    },

    {
      name: "resto-site",
      script: "npm",
      args: 'start --prefix packages/site',
      watch: true,
      env: {
        PORT: 8081,
        NODE_ENV: "production"
      },
    }
  ]
};
