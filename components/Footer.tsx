import type { FooterContent } from "../data/portfolio";

type FooterProps = {
  content: FooterContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="footer py-8 text-center font-semibold text-white">
      <p className="footer__copy text-xs">
        &copy; {content.text}
      </p>
    </footer>
  );
}
