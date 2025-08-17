'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBellFill, BsQuestionCircleFill, BsXCircle } from 'react-icons/bs';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuthRequest, logoutRequest } from '@/redux/slices/authSlice';

export default function ManagerLayout({ children }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [activeTab, setActiveTab] = useState(Array(8).fill(false));

  // const user = useSelector((state) => state.auth.user);
  // const router = useRouter();
  // const dispatch = useDispatch();

  const activeCurrTab = (index) => {
    setActiveTab((prevState) => {
      const newContent = [...prevState];
      if (currentTab !== index) {
        newContent[currentTab] = false;
        newContent[index] = true;
        setCurrentTab(index);
      }
      return newContent;
    });
  };

  useEffect(() => {
    setCurrentTab(0);
    setActiveTab((prev) => {
      const temp = [...prev];
      temp[0] = true;
      return temp;
    });
  }, []);

  // if (!user || user.role !== 'admin') return null;

  return (
    <div className="min-h-screen w-screen flex flex-row">
      {/* Sidebar */}
      <aside className="min-w-[15%] max-w-[15%] lg:min-w-[20%] lg:max-w-[20%] hidden sm:block bg-white text-black border-r-2 border-gray-300">
        {/* Logo */}
        <div className="bg-gray-200">
          <div className="block p-4 text-center select-none cursor-default">
            <span className="text-2xl font-extrabold tracking-wide text-black">
              28<span className="mx-0.5">.</span>Shop
            </span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col justify-center items-center">
          <ul className="w-full h-full">
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[0] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(0)}
            >
              <Link href="/manager">Trang chủ</Link>
            </li>
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[1] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(1)}
            >
              <Link href="/manager/Product_manager">Sản phẩm</Link>
            </li>
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[2] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(2)}
            >
              <Link href="/manager/Category_manager">Danh mục</Link>
            </li>
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[3] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(3)}
            >
              <Link href="/manager/Order_manager">Đơn hàng</Link>
            </li>
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[5] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(5)}
            >
              <Link href="/manager/finance_manager">Doanh thu</Link>
            </li>
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[6] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(6)}
            >
              <Link href="/manager/User_manager">Người dùng</Link>
            </li>
            <li
              className={`px-3 py-2 font-bold border-b-2 border-gray-300 cursor-pointer ${
                activeTab[7] ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => activeCurrTab(7)}
            >
              <button
                type="button"
                onClick={() => {
                  // dispatch(logoutRequest());
                  alert('Đăng xuất (demo)');
                }}
              >
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <header className="hidden min-w-full bg-gray-200 p-3 sm:flex flex-row justify-between items-center">
          <div className="flex flex-row items-center text-red-500">
            <BsXCircle size={20} className="mx-1" />0 cảnh báo
          </div>
          <div className="flex flex-row justify-center items-center">
            <BsQuestionCircleFill size={20} className="mx-1 text-gray-500" />
            <div className="relative w-fit mx-1">
              <BsBellFill size={20} className="mx-1 text-gray-500" />
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full absolute bottom-0 right-0"></div>
            </div>
          </div>
        </header>

        {/* Children */}
        <main className="flex-1 bg-gray-100 w-full sm:min-w-[85%] h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
