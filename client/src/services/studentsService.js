import http from "./httpService";
import { apiUrl } from "../config.json";

export function getStudents() {
  return http.get(apiUrl)
}

export function createStudent({studentname, knowledge}) {
  return http.post(apiUrl, {studentname, knowledge})
}

export default {
  getStudents,
  createStudent
};

