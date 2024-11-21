import { HeroSection } from '@/components/sections/hero-section';
import { GroupsSection } from '@/components/sections/groups-section';
import { ConnectSection } from '@/components/sections/connect-section';
import { CoursesSection } from '@/components/sections/courses-section';
import {Content } from '@/components/sections/content'
import {Project} from '@/components/sections/project'
import Timeline from '@/components/sections/timeline';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-16 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <HeroSection />
        <GroupsSection />
        <ConnectSection />
        <Project/>
        <Content/>
        <CoursesSection />
        <Timeline/>
        <Footer/>
      </div>
    </div>
  );
}