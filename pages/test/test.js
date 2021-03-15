import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/test")
      .then((r) => r.json())
      .then((r) => {
        setData(r);
      });
  }, []);

  return (
    <>
      {data ? (
        <>
          <h1>{data.text || "..."}</h1>
          <h1>{data.count || "..."}</h1>
        </>
      ) : (
        <h1>Load..</h1>
      )}
    </>
  );
}
