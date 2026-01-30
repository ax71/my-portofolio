"use client";

import { GitHubCalendar } from "react-github-calendar";
import { PORTFOLIO_CONTENT } from "@/lib/data";

export default function GithubActivity() {
  const { headline } = PORTFOLIO_CONTENT.githubActivity;
  return (
    <div className="flex flex-col gap-10">
      <div className="flex">
        <h2 className="text-3xl font-bold text-navy-text md:text-5xl md:w-1/3">
          {headline}
        </h2>
      </div>
      <div className="flex justify-center items-center p-8 border border-navy-accent/20 rounded-xl bg-navy-surface">
        <GitHubCalendar
          username="ax71"
          year={2026}
          colorScheme="dark"
          blockSize={12}
          blockMargin={5}
          fontSize={14}
          theme={{
            dark: ["#1A3D63", "#2d5485", "#4A7FA7", "#7aaed9", "#B3CFE5"],
          }}
        />
      </div>
    </div>
  );
}
