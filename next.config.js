const withImages = require('next-images');
const { withPlugins } = require('next-compose-plugins');

const nextConfig = {
  env: {
//  API_URL: "http://localhost:4000/graphql"  //local stwapi
//  API_URL: "http://162.0.210.5:4457api/graphql"  //local stwapi
 
// API_URL: "https://cryptic-mountain-48315.herokuapp.com/api/graphql"  //Test env
  API_URL:'https://stwecommerceapi.digitechniq.in/api/graphql', //production env
  // API_URL:'https://docker.digitechniq.in/api/graphql', //production env
  // docker.digitechniq.in

    
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
