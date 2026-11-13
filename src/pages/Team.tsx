import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import TeamDirectory from '../components/TeamDirectory'

export default function Team() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="Meet Miss Niu Tech’s leadership, managers and delivery teams."
        image="/media/hero-about.jpg"
      />
      <TeamDirectory />
      <CTASection title="Let's talk about your growth plans" />
    </>
  )
}
