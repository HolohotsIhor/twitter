/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Disable the PostCSS transform for CSS modules
        '*.module.css': ['style-loader', 'css-loader'],
        // Configure the PostCSS transform for global CSS
        '*.css': [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  'tailwindcss': {},
                  'autoprefixer': {},
                },
              },
            },
          },
        ],
      },
    },
  },
}

export default nextConfig