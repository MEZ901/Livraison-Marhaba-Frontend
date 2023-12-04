import { useEffect, useRef } from "react";
import io from "socket.io-client";

const useSocket = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:8080");

    const socket = socketRef.current;

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return socketRef.current;
};

export default useSocket;
