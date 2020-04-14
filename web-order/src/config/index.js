const HOST = process.env.HOST || 'localhost'

export const Config = {
  POS_API_HOST: `http://${HOST}:5000`,
  API_HOST: `http://${HOST}:4000`,
  ME_HOST: `http://${HOST}`,
}
