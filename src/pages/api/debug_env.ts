export const prerender = false;

export async function GET() {
    const clientId = import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID;
    const clientSecret = import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
    const secret = import.meta.env.KEYSTATIC_SECRET;
    const url = import.meta.env.KEYSTATIC_URL;
    const base = import.meta.env.BASE_URL;
    const mode = import.meta.env.MODE;
    const prod = import.meta.env.PROD;

    return new Response(
        JSON.stringify({
            hasClientId: !!clientId,
            clientIdPrefix: clientId ? clientId.substring(0, 5) + '...' : 'MISSING',
            hasClientSecret: !!clientSecret,
            clientSecretPrefix: clientSecret ? clientSecret.substring(0, 5) + '...' : 'MISSING',
            hasSecret: !!secret,
            hasKeystaticUrl: !!url,
            keystaticUrl: url || 'MISSING',
            isProd: prod,
            mode: mode,
        }, null, 2),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}
