import io from "socket.io-client";
import feathers from "@feathersjs/client";

const socket = io("http://localhost:3030");
const app = feathers();

app.configure(feathers.socketio(socket));

export const listenToService = (service, callback) => {
  app.service(service).on("created", callback);
};

export const loadHospitals = (sort = "createdAt", order = -1) => {
  return app.service("hospitals").find({
    query: {
      $sort: {
        [sort]: order
      }
    }
  });
};

export const addHospital = data => {
  return app.service("hospitals").create(data);
};
