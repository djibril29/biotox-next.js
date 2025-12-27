import Hero from '@/components/home/Hero';
import VideoSection from '@/components/home/VideoSection';
import Domains from '@/components/home/Domains';
import CTABanner from '@/components/home/CTABanner';
import FeatureSection from '@/components/home/FeatureSection';
import Testimonials from '@/components/home/Testimonials';
import ProgressSection from '@/components/home/ProgressSection';
import LatestNews from '@/components/home/LatestNews';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Domains />
      <CTABanner />
      <FeatureSection />
      <Testimonials />
      <ProgressSection />
      <LatestNews />
      <CTA />
    </>
  );
}
