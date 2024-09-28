export const saltAndHashPassword = async (password: string): Promise<string> => {
  const salt = process.env["AUTH_SECRET"] || "default-salt";
  // use web crypto
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
