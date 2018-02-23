let production = process.env.NODE_ENV === 'production'

let prodOrDevConfigs = production ? require('./config.prod.js').default : require('./config.dev.js').default

const configService = {
    ...prodOrDevConfigs
    }
export default configService