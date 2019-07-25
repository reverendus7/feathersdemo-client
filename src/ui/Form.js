import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";
import { addHospital } from "../api/index";

export default () => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  return (
    <div style={{ margin: "4rem", display: "flex", flexDirection: "column" }}>
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        label="Owner"
        value={owner}
        onChange={e => setOwner(e.target.value)}
      />
      <Button
        style={{ marginTop: "2rem" }}
        variant="contained"
        onClick={() => {
          addHospital({
            name,
            owner
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
};
