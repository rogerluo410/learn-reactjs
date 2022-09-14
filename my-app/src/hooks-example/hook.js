import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    alert(`${friendID} is ${isOnline ? "online" : "offline"}`);
  }, [isOnline, friendID]);

  return { isOnline, setIsOnline };
}

export default useFriendStatus;
