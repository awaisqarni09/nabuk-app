const LOCALHOST_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";
export const TURNSTILE_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

function isLocalSiteUrl(siteUrl: string | undefined): boolean {
  if (!siteUrl) return false;

  try {
    const url = new URL(siteUrl);
    return LOCALHOST_HOSTNAMES.has(url.hostname);
  } catch {
    return false;
  }
}

export function shouldUseTestTurnstileKeys(): boolean {
  return isLocalSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
}

export function getTurnstileSiteKey(): string {
  if (shouldUseTestTurnstileKeys()) return TURNSTILE_TEST_SITE_KEY;
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
}

export function getTurnstileSecretKey(): string | undefined {
  if (shouldUseTestTurnstileKeys()) return TURNSTILE_TEST_SECRET_KEY;
  return process.env.TURNSTILE_SECRET_KEY;
}
