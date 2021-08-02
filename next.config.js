module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: NEXT_PUBLIC_VERCEL_URL,
          },
        ],
      },
    ]
  },
}
