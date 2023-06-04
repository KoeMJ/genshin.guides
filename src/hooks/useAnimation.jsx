import { useState, useEffect } from "react";

const useAnimation = () => {
  const [animation, setAnimation] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAnimation(false);
    }, 200);
    const timeOut2 = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timeOut, timeOut2);
  }, [loading]);
  return [animation, loading, setLoading];
};

export default useAnimation;
