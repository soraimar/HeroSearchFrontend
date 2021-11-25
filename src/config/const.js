const isProduction = process.env.NODE_ENV === 'production'

const config = {
    API_BASE_PATH: isProduction ? 'https://cencosud-api.herokuapp.com/' : 'http://localhost:3001/',
    BASE_PATH: isProduction ? 'https://cencosud-test.herokuapp.com/' : 'http://localhost:3000/',
}

module.exports = config