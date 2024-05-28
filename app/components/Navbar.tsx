import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex">
      <div className="container mx-auto flex items-center justify-between space-x-4">
        <div className="text-white text-lg font-semibold">
          <Link href="/">民泊</Link>
        </div>
      </div>
      <ul className="flex justify-between w-full space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            ホーム
          </Link>
        </li>
        <li>
          <Link href="/facility" className="text-white hover:text-gray-400">
            施設
          </Link>
        </li>
        <li>
          <Link href="/fee" className="text-white hover:text-gray-400">
            料金
          </Link>
        </li>
        <li>
          <Link href="/reservation" className="text-white hover:text-gray-400">
            予約
          </Link>
        </li>
        <li>
          <Link href="/access" className="text-white hover:text-gray-400">
            アクセス
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-400">
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
