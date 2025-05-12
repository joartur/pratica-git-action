type IAppConfig = {
  APP_PORT: number;
  NODE_ENV: string;
};

const AppConfig: IAppConfig = {
  APP_PORT: parseInt(process.env.APP_PORT ?? '5000'),
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export default AppConfig;
