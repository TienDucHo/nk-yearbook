const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://172.24.149.91:8080"
  : "https://nk-yearbook.herokuapp.com";
