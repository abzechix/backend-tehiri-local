module.exports = ({ env }) => ({
    upload: {
      provider: 'ftp-v2',
      providerOptions: {
        host: 'ftp.zoos6698.odns.fr',
        port: 21,
        user: 'tehiri@tehiri.ntic-center-corporation.com',
        password: 'Azerty2020',
        basePath: '/',
        baseUrl: 'tehiri.ntic-center-corporation.com/',
      },
    },
  });