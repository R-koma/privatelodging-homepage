import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8 text-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/" className="hover:text-gray-400">
            ホーム
          </Link>
          <Link href="/facility" className="hover:text-gray-400">
            施設
          </Link>
          <Link href="/reservation" className="hover:text-gray-400">
            予約
          </Link>
          <Link href="/access" className="hover:text-gray-400">
            アクセス
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            お問い合わせ
          </Link>
        </div>
        <div className="mb-4">
          <span>&copy; 2024 民泊ホームページ. All rights reserved.</span>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
