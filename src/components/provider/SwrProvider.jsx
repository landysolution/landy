"use client";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: (url) => fetch(url).then((r) => r.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
