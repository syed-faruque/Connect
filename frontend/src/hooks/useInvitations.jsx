/**
 * author: Syed Faruque
 * created: June 2 2024
**/

import { useState, useEffect } from "react";

const useInvitations = (username, socket) => {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    if (!socket || !username) return;
    
    socket.emit("find_invites");
    socket.on("find_invites", (data) => {
      setInvites(data.invites);
    });

    return () => {
      socket.off("find_invites");
    };
  }, [socket, username]);

  return invites;
};

export default useInvitations;
