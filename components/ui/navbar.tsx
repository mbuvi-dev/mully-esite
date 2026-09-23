import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex item-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-blue-600">
          Figure out your dream home{" "}
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
        <Link href="/checkout" className="hover:text-blue-600">
          Checkout
        </Link>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:text-blue-600">
          Login
        </Link>
      </div>
    </nav>
  );
};
