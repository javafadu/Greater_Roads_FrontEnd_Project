import moment from "moment";

export const combineDateAndTime = (date, time) => {
  return moment(`${date} ${time}`).format("MM/DD/YYYY HH:mm:ss");
};
