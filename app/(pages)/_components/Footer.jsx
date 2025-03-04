import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full light-text dark-text">
        <footer className="footer footer-center rounded py-4 text-base">
          <nav className="flex gap-6">
            <a href="APP_NAMEi" className="link link-hover">
              Support
            </a>
            <Link href="/tos" className="link link-hover">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by
              APP_NAME
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};
export default Footer;
