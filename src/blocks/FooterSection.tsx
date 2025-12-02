export function FooterSection() {
  return (
    <footer className="p-4 bg-surface-elevated md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-text-primary"
        >
          <div className="mr-2 h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          Logo
        </a>
        <p className="my-6 text-text-secondary">
          Open-source library of over 400+ web components and interactive elements built for better web.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-text-primary">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-text-secondary sm:text-center">
          © 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

