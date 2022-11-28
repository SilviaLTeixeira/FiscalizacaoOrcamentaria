export const URL_SERVER =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1:5173"
    ? "http://localhost:3000"
    : "https://fiscalizacao-orcamentaria-server.glitch.me";