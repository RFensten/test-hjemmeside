import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config';

export const prerender = false;

// COPY the config to avoid mutating the original read-only import
const serverConfig = { ...config };

// Forcefully inject credentials ONLY on the server-side runtime
// This bypasses any client-side bundling stripping of secrets
if (import.meta.env.PROD && serverConfig.storage.kind === 'github') {
    // We have to cast to 'any' because the type definition might likely be strict/readonly
    (serverConfig.storage as any).clientId = import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID;
    (serverConfig.storage as any).clientSecret = import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
}

export const ALL = makeHandler({
    config: serverConfig,
});
