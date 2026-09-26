"use client";
import { useEffect, useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Chat = () => {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };

  useEffect(() => {
    const checkTawkMessenger = () => {
      if (tawkMessengerRef.current) {
        console.log("Tawk.to widget is ready.");
      } else {
        console.log("Tawk.to widget is not ready yet.");
      }
    };

    checkTawkMessenger();
  }, []);

  return (
    <div className="chat">
      <button onClick={handleMinimize}>Minimize the Chat</button>
      <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID}
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default Chat;
