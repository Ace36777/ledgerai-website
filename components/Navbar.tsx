import React from 'react';
import Link from 'next/link';

const logo = "/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-b-black via-blue-900 to-b-black text-white flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <img src={logo} alt="LedgerAI Logo" className="h-8 w-8 mr-3" />
        <span className="text-lg font-semibold">LedgerAI</span>
      </div>
      <ul className="flex space-x-4">
        <li><Link href="/connect">Connect</Link></li>
        <li><Link href="/categorization">Categorization</Link></li>
        <li><Link href="/journal">Journal</Link></li>
        <li><Link href="/assistant">Assistant</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}
