module.exports = {
  apps: [
    {
      name: "go-delivery",
      script: "npm",
      args: "run preview",
      instances: "1",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 4173
      }
    }
  ]
};
