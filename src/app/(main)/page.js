// Trang home
// Router { / }

import React from 'react';
import Link from 'next/link';

export const TrangHome = () => {
  return (
    <main className="bg-[#F2F0F1]">
      <section className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-xl">
            <h2 className="text-[48px] font-black mb-8">
              CHUYÊN THỜI TRANG PHONG CÁCH, HIỆN ĐẠI
            </h2>
            <p className="text-[16px] font-normal opacity-60 mb-12">
              Chúng tôi chuyên cung cấp nhiều loại quần áo được chế tác tỉ mỉ,
              được thiết kế để làm nổi bật cá tính của bạn và đáp ứng phong cách
              của bạn.
            </p>
            <a
              href="#"
              className="inline-block text-white bg-black py-4 px-[65px] rounded-full mb-12"
            >
              Xem ngay
            </a>
            <div className="flex flex-wrap gap-4 lg:gap-0">
              <div className="border-r border-gray-400 pr-8 mr-8 last:border-none last:pr-0 last:mr-0">
                <div className="text-[40px] font-bold">200+</div>
                <div className="opacity-60">Thương Hiệu</div>
              </div>
              <div className="border-r border-gray-400 pr-8 mr-8 last:border-none last:pr-0 last:mr-0">
                <div className="text-[40px] font-bold">2,000+</div>
                <div className="opacity-60">Sản Phẩm Chất Lượng</div>
              </div>
              <div className="pr-0 mr-0">
                <div className="text-[40px] font-bold">200+</div>
                <div className="opacity-60">Khách Hàng</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="/images/Banner.jpg"
              alt=""
              className="w-full object-cover pt-[50px] -mb-2"
            />
            <img
              src="img/Vector.svg"
              alt=""
              className="w-[56px] absolute top-[250px] left-[10px]"
            />
            <img
              src="img/Vector.svg"
              alt=""
              className="w-[104px] absolute top-[65px] right-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-0 lg:justify-between py-7">
            <div className="w-1/2 lg:w-auto flex justify-center">
              <img
                src="/images/Logo-1.png"
                alt=""
                className="h-[33px] object-contain"
              />
            </div>
            <div className="w-1/2 lg:w-auto flex justify-center">
              <img
                src="/images/Logo-2.png"
                alt=""
                className="h-[33px] object-contain"
              />
            </div>
            <div className="w-1/2 lg:w-auto flex justify-center">
              <img
                src="/images/Logo-3.png"
                alt=""
                className="h-[33px] object-contain"
              />
            </div>
            <div className="w-1/2 lg:w-auto flex justify-center">
              <img
                src="/images/Logo-4.png"
                alt=""
                className="h-[33px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='"max-w-[1200px] mx-auto px-4 py-4'>
          <div className="flex flex-col-1 lg:items-center justify-between">
            <h2 className="text-xl font-bold lg:text-xl mt-4">
              Bộ sưu tập Mới nhất
            </h2>
            <Link
              href="/menu"
              className="mt-4 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default TrangHome;
