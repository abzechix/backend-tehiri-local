module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ad4f3bbfa3912effa5e8668dfa4772c5'),
    },
  },
});
