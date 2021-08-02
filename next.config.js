module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.VERCEL_URL,
          },
          {
            key: 'test',
            value: process.env.VERCEL_URL,
          },
        ],
      },
    ]
  },
}
