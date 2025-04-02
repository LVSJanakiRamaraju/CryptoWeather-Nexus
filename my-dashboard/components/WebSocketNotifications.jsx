import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const WebSocketNotifications = () => {
  const [price, setPrice] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL);

    socket.onopen = () => console.log("WebSocket Connected");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "price_alert") {
        setPrice(data.price);
        toast.success(`BTC/ETH Price Alert: ${data.price}`);
      } else if (data.type === "weather_alert") {
        setAlerts((prev) => [...prev, data]);
        toast(`Weather Alert: ${data.message}`, { icon: "🌦️" });
      }
    };

    socket.onclose = () => console.log("WebSocket Disconnected");

    return () => socket.close();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Real-Time Notifications</h1>
      <Toaster />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">BTC/ETH Price:</h2>
        <p className="text-xl font-bold">{price ? `$${price}` : "Loading..."}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Weather Alerts:</h2>
        {alerts.map((alert, index) => (
          <div key={index} className="border p-2 my-2 rounded bg-gray-100">
            {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketNotifications;
