import { candidate, skills, experiences, achievements } from '@/src/data/candidate';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';
import { Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { GithubIcon as Github, LinkedInIcon as Linkedin } from '@/src/components/Icons';

export const metadata = {
  title: `Resume | ${candidate.name} — Software Developer & Full-Stack Engineer`,
  description: `Official resume of Dhiraj Kumar — Software Developer & Full-Stack Engineer. B.Tech CSE (CGPA 8.88), MERN stack specialist, 300+ LeetCode problems solved.`,
  alternates: {
    canonical: 'https://dhirajkumar.me/resume',
  },
  openGraph: {
    title: `Resume | ${candidate.name}`,
    description: `Official resume of Dhiraj Kumar — Software Developer & Full-Stack Engineer.`,
    url: 'https://dhirajkumar.me/resume',
    type: 'profile',
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
      <Nav />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-[#252529] mb-10">
          <div>
            <span className="section-label mb-2">Curriculum Vitae</span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAFAFA]">
              {candidate.name}
            </h1>
            <p className="text-lg text-[#818CF8] font-medium mt-1">
              {candidate.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A1A1AA] font-mono mt-3">
              <span className="flex items-center gap-1"><MapPin size={14} /> {candidate.location}</span>
              <span className="flex items-center gap-1"><Mail size={14} /> {candidate.email}</span>
              <span className="flex items-center gap-1"><Phone size={14} /> {candidate.phoneIntl}</span>
            </div>
          </div>

          <a
            href="/Dhiraj_Kumar_Resume.pdf"
            download="Dhiraj_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6366F1] text-white font-medium text-sm hover:bg-[#4F46E5] transition-all shadow-lg self-start md:self-auto"
          >
            <Download size={18} /> Download PDF Resume
          </a>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#FAFAFA] flex items-center gap-2 mb-6 pb-2 border-b border-[#252529]">
            <GraduationCap className="text-[#6366F1]" size={22} /> Education
          </h2>
          <div className="bg-[#16161A] border border-[#252529] rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-semibold text-base text-[#FAFAFA]">{candidate.degree}</h3>
              <span className="text-xs font-mono text-[#818CF8]">{candidate.duration}</span>
            </div>
            <p className="text-sm text-[#A1A1AA] mb-2">{candidate.university}</p>
            <p className="text-xs font-mono text-[#2DD4BF]">CGPA: {candidate.cgpa} / 10</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#FAFAFA] flex items-center gap-2 mb-6 pb-2 border-b border-[#252529]">
            <Briefcase className="text-[#2DD4BF]" size={22} /> Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-[#16161A] border border-[#252529] rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-base text-[#FAFAFA]">{exp.role}</h3>
                    <p className="text-sm text-[#6366F1] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA]">{exp.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-[#A1A1AA] mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="px-2.5 py-0.5 text-xs font-mono rounded bg-[#252529] text-[#FAFAFA]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#FAFAFA] flex items-center gap-2 mb-6 pb-2 border-b border-[#252529]">
            <Code className="text-[#818CF8]" size={22} /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-5">
              <h3 className="text-xs font-mono text-[#818CF8] uppercase tracking-wider mb-2">Languages & CS</h3>
              <p className="text-sm text-[#A1A1AA]">{[...skills.languages, ...skills.csFundamentals].join(', ')}</p>
            </div>
            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-5">
              <h3 className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-2">Frontend & Backend</h3>
              <p className="text-sm text-[#A1A1AA]">{[...skills.frontend, ...skills.backend].join(', ')}</p>
            </div>
            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-5">
              <h3 className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider mb-2">Databases & DevOps</h3>
              <p className="text-sm text-[#A1A1AA]">{[...skills.databases, ...skills.devops].join(', ')}</p>
            </div>
            <div className="bg-[#16161A] border border-[#252529] rounded-xl p-5">
              <h3 className="text-xs font-mono text-[#EF4444] uppercase tracking-wider mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-[#A1A1AA]">{[...skills.ml, ...skills.aiApis].join(', ')}</p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[#FAFAFA] flex items-center gap-2 mb-6 pb-2 border-b border-[#252529]">
            <Award className="text-[#F59E0B]" size={22} /> Key Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((ach, idx) => (
              <div key={idx} className="bg-[#16161A] border border-[#252529] rounded-xl p-5 flex items-start gap-4">
                <span className="text-2xl">{ach.icon}</span>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-[#FAFAFA]">{ach.title}</h3>
                  <p className="text-xs text-[#A1A1AA] mt-1">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
