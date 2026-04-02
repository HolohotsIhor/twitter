/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com', 'fakestoreapi.com'],
  },
  experimental: {
    turbo: {
      rules: {
        '*.module.css': ['style-loader', 'css-loader'],
        '*.css': [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
      },
    },
  },
};

export default nextConfig;
