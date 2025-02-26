import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/invoices">Invoices</Link></li>
        <li><Link href="/customers">Customers</Link></li>
      </ul>
    </nav>
  );
}
