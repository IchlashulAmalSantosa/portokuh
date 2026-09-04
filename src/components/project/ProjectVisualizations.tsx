'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Map, BarChart3, Activity, X } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectVisualization } from '@/types';

const ICONS = { map: Map, 'bar-chart': BarChart3, activity: Activity } as const;

interface ProjectVisualizationsProps {
  items: ProjectVisualization[];
  description?: string; // Tambahkan prop ini
}

export function ProjectVisualizations({
  items,
  description,
}: ProjectVisualizationsProps) {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title="Project Visualizations"
        description={description || 'Key charts and data visualizations.'}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((viz) => {
          const Icon = ICONS[viz.icon];
          return (
            <Card key={viz.title}>
              <div
                className={`relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-dashed border-border/40 bg-background-soft/20 backdrop-blur-sm ${
                  viz.image ? 'cursor-pointer group' : ''
                }`}
                onClick={() =>
                  viz.image && setSelectedImage({ src: viz.image, title: viz.title })
                }
              >
                {viz.image ? (
                  <>
                    <Image
                      src={viz.image}
                      alt={viz.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                      Klik untuk memperbesar
                    </div>
                  </>
                ) : (
                  <Icon className="h-8 w-8 text-muted" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-4 text-sm font-medium">{viz.title}</h3>
              <p className="mt-1 text-sm text-muted">{viz.caption}</p>
            </Card>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-background/90 rounded-2xl border border-border p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-foreground">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
