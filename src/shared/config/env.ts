import Config from 'react-native-config';

type AppEnv = 'development' | 'staging' | 'production';

function required(name: string, value: string | undefined) : string {
    if (!value || value.trim().length === 0) {
        throw new Error('Missing required env var: ${name}');
    }
    return value;
}

const APP_ENV = (Config.APP_ENV as AppEnv | undefined) ?? 'development';

export const env = Object.freeze({
    APP_ENV,
    API_BASE_URL: required('API_BASE_URL', Config.API_BASE_URL),
    isDev: APP_ENV === 'development',
    isProd: APP_ENV === 'production'
})