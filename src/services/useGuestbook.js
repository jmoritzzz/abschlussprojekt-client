import { useState, useEffect } from "react";

export default function useGuestbook() {
  const [guestbook, setGuestbook] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const guestbookResponse = await fetch('https://abschlussprojekt-server.onrender.com/guestbook');
        const guestbookData = await guestbookResponse.json();
        setGuestbook(guestbookData);

      } catch (error) {
        console.error("Achtung, Fehler", error);
      }
    }

    fetchData();
  }, []);

  return guestbook;
}

