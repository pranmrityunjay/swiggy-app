import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [Flag, changeFlag] = useState(true);
  
  useEffect(() => {
    window.addEventListener("online", () => {
      changeFlag(true);
    });

    window.addEventListener("offline", () => {
      changeFlag(false);
    });
  }, []);

  return Flag;
};

export default useOnlineStatus;
