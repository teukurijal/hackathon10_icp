import { AuthClient } from "@dfinity/auth-client";

let authClient: AuthClient | null = null;

export const initAuthClient = async (): Promise<void> => {
  if (!authClient) {
    authClient = await AuthClient.create();
  }
};

export const login = async (): Promise<string | null> => {
  if (!authClient) await initAuthClient();

  return new Promise((resolve, reject) => {
    authClient?.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1_000_000_000), // TTL: 7 days
      onSuccess: () => {
        const principal = authClient!.getIdentity().getPrincipal().toText();
        resolve(principal);
      },
      onError: (err) => reject(err),
    });
  });
};

export const logout = async (): Promise<void> => {
  if (!authClient) await initAuthClient();
  await authClient?.logout();
};

export const getPrincipal = (): string | null => {
  if (!authClient) return null;
  const identity = authClient.getIdentity();
  return identity.getPrincipal().toText();
};
