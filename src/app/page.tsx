import Welcome from "@/components/welcome";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense>
      <Welcome />
    </Suspense>
  );
}
