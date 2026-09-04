import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';

/** About Me: photo on one side, bio + stats on the other. */
export function AboutMe() {
  const [before, after] = profile.bio.split('{highlight}');

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading title="About Me" />

      {/* Mengubah grid menjadi 12 kolom agar proporsi foto dan teks bisa diatur presisi */}
      <div className="grid gap-8 sm:grid-cols-12 sm:items-center">
        {/* Container Foto: Mengambil 4 dari 12 kolom di layar desktop, serta diberi max-w agar tetap proporsional */}
        <div className="flex justify-center sm:col-span-4 lg:col-span-3">
          <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-2xl border border-border/40 bg-background-soft/30 backdrop-blur-xl shadow-[var(--shadow-glass)]">
            <Image
              src={profile.photo}
              alt={`Foto profil ${profile.name}`}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 220px, 80vw"
              priority
            />
          </div>
        </div>

        {/* Container Teks + Stats: Mengambil 8 dari 12 kolom */}
        <div className="sm:col-span-8 lg:col-span-9">
          <p className="text-muted leading-relaxed">
            {before}
            <span className="text-accent font-medium">{profile.bioHighlight}</span>
            {after}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/40 bg-background-soft/30 p-4 backdrop-blur-md"
              >
                <dt className="text-xs text-muted">{stat.label}</dt>
                <dd className="mt-1 text-base font-semibold sm:text-lg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
