'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => router.push('/')}
            className="cursor-pointer flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-black">28.Shop</span>
          </div>

          {/* Navbar */}
          <ul className="hidden lg:flex items-center space-x-8 text-black text-sm font-medium">
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link href="/">Trang Chủ</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link href="/product">Sản Phẩm</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link href="/blog">Giới thiệu</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] hover:after:scale-x-100 after:scale-x-0 after:w-full after:transition-all after:duration-300">
              <Link href="/contact">Liên Hệ</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            {/* Search */}
            <form className="relative hidden lg:flex items-center border border-gray-300 rounded-full px-3 h-10 w-72">
              <img
                src="/images/icon_search.png"
                alt="Search"
                className="w-4 h-4 absolute left-4"
              />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="bg-transparent w-full pl-10 pr-4 text-sm focus:outline-none"
              />
            </form>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsMobileSearchOpen(true)}
              className="block lg:hidden"
            >
              <img
                src="/images/icon_search.png"
                alt="Search"
                className="w-6 h-6"
              />
            </button>

            {/* Giỏ hàng & User */}
            <Link href="/login">
              <img src="/icons/user.svg" alt="User" className="w-6 h-6" />
            </Link>
            <Link href="/cart">
              <img src="/icons/carts.svg" alt="Cart" className="w-6 h-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block lg:hidden"
            >
              <img
                src="/images/nav menu.png"
                alt="Menu"
                className="w-6 h-6 invert"
              />
            </button>
          </div>
        </div>
      </div>

      {/*  Mobile  */}
      {isMobileSearchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileSearchOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-4 shadow-md animate-slide-down">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Tìm kiếm</span>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>
            <form className="flex items-center border border-gray-300 rounded-full px-3 h-10 w-full">
              <img
                src="/images/icon_search.png"
                alt="Search"
                className="w-4 h-4 mr-2"
              />
              <input
                type="text"
                placeholder="Tìm theo sản phẩm..."
                className="w-full text-sm focus:outline-none"
              />
            </form>
          </div>
        </>
      )}

      {/* ===== Mobile Menu Overlay ===== */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-white text-black z-40 p-6 space-y-6 shadow-lg">
            <ul className="space-y-5 text-base text-black divide-y divide-gray-600 ">
              <li>
                <Link href="/">Giới Thiệu</Link>
              </li>
              <li>
                <Link href="/product">Sản Phẩm</Link>
              </li>
              <li>
                <Link href="/blog">Bài Viết</Link>
              </li>
              <li>
                <Link href="/contact">Liên Hệ</Link>
              </li>
            </ul>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute  mx-3 py-1 text-xs px-2 -top-0 right-0 bg-black text-white rounded-xl border-2 border-collapse"
            >
              ✕
            </button>
          </div>
        </>
      )}
    </header>
  );
}
