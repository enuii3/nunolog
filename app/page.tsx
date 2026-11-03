import { PortfolioFeed } from "@/components/portfolio-feed";
import { ProfileSection } from "@/components/profile-section";
import { Sandbox } from "@/components/sandbox";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <PortfolioFeed />
      <Sandbox />
    </>
  );
}
