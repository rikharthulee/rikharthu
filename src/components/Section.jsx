export default function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24 border-b">
      <div className="container">
        {(eyebrow || title || intro) && (
          <div className="mb-8 max-w-2xl">
            {eyebrow && (
              <p className="text-xs uppercase tracking-widest text-gray-500">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {intro && <p className="mt-3 text-gray-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

