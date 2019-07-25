import React, { useState, useEffect } from "react";

import moment from "moment";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { listenToService, loadHospitals } from "../api";

export default () => {
  const [hospitals, setHospitals] = useState([]);

  const loadData = (sort, order) =>
    loadHospitals(sort, order).then(data => setHospitals(data.data));

  useEffect(() => {
    listenToService("hospitals", () => {
      loadData();
    });
    loadData();
  }, []);
  return (
    <List>
      <Button onClick={() => loadData("owner", 1)}>Order by owner</Button>
      <Button onClick={() => loadData("createdAt", -1)}>Order by date</Button>
      {hospitals.map((hospital, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={hospital.name}
            secondary={`${hospital.owner} - Creation date: ${moment(
              hospital.createdAt
            ).format("LLL")}`}
          />
        </ListItem>
      ))}
    </List>
  );
};
