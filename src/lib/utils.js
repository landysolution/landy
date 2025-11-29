import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// export const BASE_URL = "https://api.landy.mn";
// export const FRONT_URL = "https://landy.mn";
export const BASE_URL = "http://localhost:9000";
export const FRONT_URL = "http://localhost:3000";

export const fetcher = (url) =>
  axios.get(`${BASE_URL}${url}`).then((res) => res.data);

export const districts = [
  "Бүгд",
  "Сүхбаатар",
  "Сонгинохайрхан",
  "Налайх",
  "Хан Уул",
  "Чингэлтэй",
  "Баянзүрх",
  "Баянгол",
];
