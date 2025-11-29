import Image from "next/image";
import AdBanner from "@/components/section/AdBanner";
import DistrictFilter from "@/components/section/DistrictFilter";
export default function Home() {
  return (
    <div>
      <AdBanner />
      <DistrictFilter />
    </div>
  );
}
