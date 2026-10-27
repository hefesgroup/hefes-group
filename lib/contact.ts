/** Field limits shared by the contact form and the API route. */
export const CONTACT_LIMITS = {
  name: 150,
  email: 254,
  company: 200,
  message: 5000,
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  /** Honeypot: hidden from people, filled in by bots. */
  website: string;
};

export type ContactResponse =
  | { ok: true; reference: string; debug?: Record<string, unknown> }
  | { ok?: false; error: string };
