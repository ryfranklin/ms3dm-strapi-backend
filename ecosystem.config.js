module.exports = {
  apps: [
    {
      name: 'ms3dm-strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_CLIENT: 'mysql',
        HOST: '0.0.0.0',
        PORT: 1337,
        URL: 'https://content.ms3dm.tech',
      },
    },
  ],
}; 