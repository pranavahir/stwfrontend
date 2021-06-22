const withImages = require('next-images');
const { withPlugins } = require('next-compose-plugins');

const nextConfig = {
  env: {
//  API_URL: "http://localhost:4000/graphql"  //local
// API_URL: "https://cryptic-mountain-48315.herokuapp.com/api/graphql"  //Test env
  API_URL:'https://stwecommerceapi.herokuapp.com/api/graphql', //production env

    
  },

  dllPlugin: {
    defaults: {
      exclude: [
        'stripe', 'pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7'
      ]
    }
  },
  // https://stwecommerce.hasura.app/v1/graphql

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config
  }
}


module.exports = withPlugins([withImages],nextConfig);
