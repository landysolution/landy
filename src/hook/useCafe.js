"use client";
import useSWR from "swr";
import axios from "axios";
import { BASE_URL } from "@/lib/utils";
export const useCafe = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    `${BASE_URL}/cafe`,
    fetcher 
  );

  return {
    cafes: data ?? [],
    isLoading,
    error,
    mutate,
  };
};
