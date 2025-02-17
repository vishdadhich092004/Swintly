function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Swintly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
