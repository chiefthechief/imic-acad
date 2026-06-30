import Image from "next/image";

const tags = [
  "Deutsch AG",
  "Model UN",
  "Robotik-Club",
  "Football",
  "Swimming",
  "Chess",
  "Debattierclub",
  "Coding Club",
  "Orchestra",
  "Community Service",
  "Drama",
  "Yearbook",
];

const collageImages = [
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    alt: "Students collaborating on campus projects",
    className: "col-span-1 row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    alt: "Students enjoying outdoor activities",
    className: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Classroom learning and discussions",
    className: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    alt: "Students participating in campus life activities",
    className: "col-span-1 row-span-1 md:col-span-2",
    aspect: "aspect-[16/7]",
  },
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
            More Than a School — A Community
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-dark/75">
            Life at IMIC extends far beyond the classroom. From competitive
            sports and performing arts to Model UN and our celebrated Robotik-Club,
            students discover passions, forge lifelong friendships, and develop
            the leadership skills that define tomorrow&apos;s global citizens.
          </p>
        </div>

        {/* Masonry collage */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {collageImages.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-sm ${img.className} ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Activity tags */}
        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-navy/20 px-4 py-2 text-xs font-medium text-navy transition-colors hover:border-crimson hover:text-crimson"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
