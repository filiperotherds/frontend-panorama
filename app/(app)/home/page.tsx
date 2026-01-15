import { ClockCounter } from "@/components/clock-counter";
import { ProjectSelector } from "@/components/project-selector";

export default async function Home() {
  return (
    <div className="w-full flex items-center justify-center pb-28">
      <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-start space-y-8">
        <ProjectSelector />

        <ClockCounter />
      </div>
    </div>
  );
}
