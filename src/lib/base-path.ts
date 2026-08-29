export const withBasePath = (path: string) =>
  process.env.NODE_ENV === "production" ? `/portfolio${path}` : path;
