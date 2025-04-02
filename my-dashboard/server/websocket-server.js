const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send simulated BTC/ETH price updates every 5 seconds
  setInterval(() => {
    const price = (Math.random() * 50000 + 30000).toFixed(2);
    ws.send(JSON.stringify({ type: "price_alert", price }));
  }, 5000);

  // Simulated weather alerts every 10 seconds
  setTimeout(() => {
    ws.send(JSON.stringify({ type: "weather_alert", message: "Heavy rain expected" }));
  }, 10000);

  ws.on("close", () => console.log("Client disconnected"));
});

console.log("WebSocket Server running on ws://localhost:8080");
