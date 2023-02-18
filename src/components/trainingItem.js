import { nanoid } from "nanoid";
import moment from "moment";

export default function trainingItem(date, distance) {
  return {
    id: nanoid(),
    date: moment(date, 'YYYY-DD-MM'),
    distance
  }
}