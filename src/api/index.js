import io from "socket.io-client";
import feathers from "@feathersjs/client";

const socket = io("http://localhost:3030");
const app = feathers();

app.configure(feathers.socketio(socket));

export const listenToService = (service, callback) => {
  // TODO 
};

export const loadHospitals = (sort = "createdAt", order = -1) => {
  // TODO 
};

export const addHospital = data => {
  // TODO 
};
