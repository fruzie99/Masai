import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <h1>Q1: Status Toggle</h1>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
