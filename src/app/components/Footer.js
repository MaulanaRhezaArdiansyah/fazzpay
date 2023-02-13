export const Footer = () => {
  return (
    <footer className="w-full sm:h-20 flex md:flex-row justify-between items-center px-3 md:px-32 bg-[#6379F4] text-white">
      <p className="copyright">
        {new Date().getFullYear()} FazzPay. All right reserved.
      </p>
      <div className="flex md:gap-8">
        <p className="phone">+62 5637 8882 9901</p>
        <p className="email">contact@fazzpay.com</p>
      </div>
    </footer>
  );
};
