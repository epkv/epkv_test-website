import { useEffect, useState } from "react";

export function useMenuPosition(triggerRef, isMobile) {
  const [position, setPosition] = useState({ top: 0 });

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const updatePosition = () => {
      const rect = trigger.getBoundingClientRect();

      if (isMobile) {
        setPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      } else {
        setPosition({
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isMobile, triggerRef]);

  return { position };
}
