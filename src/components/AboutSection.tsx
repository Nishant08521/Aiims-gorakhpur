import aboutCampus from "@/assets/about-campus.jpg";

export default function AboutSection() {
  return (
    <section id="about-institute" className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-healthcare-green">About Us</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary">About AIIMS Gorakhpur</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            All India Institute of Medical Sciences, Gorakhpur is an autonomous institute of national importance
            established under the <strong>Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)</strong> initiative by
            the Ministry of Health &amp; Family Welfare, Government of India.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Serving as a premier centre for healthcare, medical education, and research for the people of
            Eastern Uttar Pradesh, Bihar, and neighbouring regions, AIIMS Gorakhpur operates a
            <strong> 550+ bed hospital</strong> with <strong>30+ departments</strong> catering to
            <strong> 3,500–4,000 OPD patients daily</strong>.
          </p>
          <a href="#" className="mt-5 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Read More →
          </a>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img src={aboutCampus} alt="AIIMS Gorakhpur campus aerial view" className="w-full object-cover" loading="lazy" width={800} height={600} />
        </div>
      </div>
    </section>
  );
}
