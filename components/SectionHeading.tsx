type SectionHeadingProps = {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const baseTitleClass =
  "relative mt-4 mb-8 text-center text-[1.25rem] font-bold text-white min-[968px]:text-[2rem] md:mb-12 after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:top-8 after:h-[0.18rem] after:w-16 after:bg-accent md:after:top-12 md:after:w-20";

const baseDescriptionClass =
  "mx-auto mb-10 max-w-2xl text-center text-sm text-white/70 md:text-base";

export function SectionHeading({
  title,
  description,
  titleClassName,
  descriptionClassName
}: SectionHeadingProps) {
  return (
    <>
      <h2 className={`${baseTitleClass} ${titleClassName ?? ""}`.trim()}>
        {title}
      </h2>
      {description ? (
        <p
          className={`${baseDescriptionClass} ${
            descriptionClassName ?? ""
          }`.trim()}
        >
          {description}
        </p>
      ) : null}
    </>
  );
}
