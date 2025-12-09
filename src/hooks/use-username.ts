import { STORAGE_KEY } from "@/lib/consts";
import { generateUsername } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useUsername() {
  const [username, setUsername] = useState("generating username...");
  useEffect(() => {
    function main() {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    }

    main();
  }, []);

  return username;
}
