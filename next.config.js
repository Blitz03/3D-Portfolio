/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    // Add a rule to handle glb files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/models/[name].[hash].[ext]", // Output path and file name for GLB/GLTF files
            // You can adjust the output path and file naming based on your project needs
          },
        },
      ],
    });

    // Add a rule to handle mp3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/audio/[name].[hash].[ext]", // Output path and file name for MP3 files
            // You can adjust the output path and file naming based on your project needs
          },
        },
      ],
    });

    // Return the updated webpack config
    return config;
  },
};

module.exports = nextConfig;
