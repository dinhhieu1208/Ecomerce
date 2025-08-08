// Trang home
// Router { / }

import React from 'react';
import Link from 'next/link';

export const TrangHome = () => {
  const clothes = [
    {
      _id: '1',
      name: 'Áo Thun Unisex Basic',
      priceFormat: '199.000',
      avatar: '/images/clother-1.jpg',
      status: 'active',
      rating: 4,
    },
    {
      _id: '2',
      name: 'Quần Jean Nam Rách Gối',
      priceFormat: '349.000',
      avatar: '/images/clother-2.jpg',
      status: 'inactive',
      rating: 3,
    },
    {
      _id: '3',
      name: 'Áo Sơ Mi Trắng Nữ',
      priceFormat: '259.000',
      avatar: '/images/clother-3.jpg',
      status: 'active',
      rating: 5,
    },
    {
      _id: '4',
      name: 'Áo Thun Unisex Basic',
      priceFormat: '199.000',
      avatar: '/images/clother-4.jpg',
      status: 'active',
      rating: 4,
    },
  ];

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
      <section className="mt-9  bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold text-center">
            Sản Phẩm của chúng tôi
          </h2>

          <ul className="md:grid grid-cols-4 gap-10 mt-11">
            <li className="mt-6 md:mt-0">
              <a href="#">
                <div className="rounded-lg overflow-hidden h-[250px] flex items-center justify-center bg-white">
                  <img
                    className="hover:scale-110 duration-500 transition-all w-full h-full object-contain"
                    src="/images/category2.png"
                    alt="Polo"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-center">Áo Polo</h3>
              </a>
            </li>

            <li className="mt-6 md:mt-0">
              <a href="#">
                <div className="rounded-lg overflow-hidden h-[250px] flex items-center justify-center bg-white">
                  <img
                    className="hover:scale-110 duration-500 transition-all w-full h-full object-contain"
                    src="/images/category3.jpg"
                    alt="Sơ Mi"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-center"> Áo Sơ Mi</h3>
              </a>
            </li>

            <li className="mt-6 md:mt-0">
              <a href="#">
                <div className="rounded-lg overflow-hidden h-[250px] flex items-center justify-center bg-white">
                  <img
                    className="hover:scale-110 duration-500 transition-all w-full h-full object-contain"
                    src="/images/category4.webp"
                    alt="Áo thun"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-center">Áo thun</h3>
              </a>
            </li>

            <li className="mt-6 md:mt-0">
              <a href="#">
                <div className="rounded-lg overflow-hidden h-[250px] flex items-center justify-center bg-white">
                  <img
                    className="hover:scale-110 duration-500 transition-all w-full h-full object-contain"
                    src="/images/category5.jpg"
                    alt="Áo Khoác"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-center">Áo Khoác</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-4 py-4">
          <div className="flex flex-col-1 lg:items-center justify-center">
            <h2 className="text-3xl font-bold text-center">
              Sản Phẩm Bán Chạy Nhất
            </h2>
          </div>

          <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {clothes.map((item) => (
              <li
                key={item._id}
                className="text-center group relative border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
              >
                <a href="#">
                  {/* Hiển thị trạng thái hết hàng */}
                  {item.status === 'inactive' && (
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-500 text-white rounded-xl">
                      Hết hàng
                    </span>
                  )}

                  {/* Ảnh sản phẩm */}
                  <div className="h-[250px] flex items-center justify-center overflow-hidden rounded-lg bg-white">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={item.avatar}
                      alt={item.name}
                    />
                  </div>

                  {/* Tên sản phẩm */}
                  <h3 className="text-[15px] mt-4 font-semibold">
                    {item.name}
                  </h3>

                  {/* Đánh giá sao */}
                  <div className="mt-2 text-sm flex justify-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>
                        <img
                          src={
                            index < item.rating
                              ? '/images/ico_star_active.png'
                              : '/images/ico_star_gray.png'
                          }
                          alt="star"
                          className="w-4 h-4"
                        />
                      </span>
                    ))}
                  </div>
                </a>

                {/* Giá và thêm vào giỏ hàng xuất hiện khi hover */}
                <div className="mt-2 relative h-5 overflow-hidden">
                  <div className="absolute flex items-center flex-col left-1/2 -translate-x-1/2 hover:bottom-0 -bottom-5 transition-all duration-300">
                    <div className="flex items-center justify-center font-bold text-[15px] text-center">
                      <span>{item.priceFormat} ₫</span>
                    </div>

                    {item.status === 'active' && (
                      <a
                        href="#"
                        className="uppercase text-xs font-medium relative after:absolute after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:left-0 hover:after:w-full after:transition-all after:duration-500"
                      >
                        Thêm vào giỏ
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Nút xem thêm */}
          <div className="flex justify-center mt-8">
            <Link
              href="/menu"
              className="h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-20 mt-20 mb-9 lg:mb-20 bg-gray-300">
        <div className="max-w-[1480px] w-full px-5 mx-auto py-0">
          <div className="lg:flex items-center justify-between gap-6">
            {/* Nội dung văn bản bên trái */}
            <div>
              <p className="text-[14px] uppercase text-gray-500">
                KHÁM PHÁ PHONG CÁCH MỚI:
              </p>
              <h2 className="text-3xl font-semibold py-4 lg:py-10 leading-[1.4]">
                Mặc Đẹp Mỗi Ngày <br />
                Tự Tin Thể Hiện Cá Tính Riêng
              </h2>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-white h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">
                  Mua Ngay
                </button>
              </div>
            </div>

            {/* Ảnh bên phải */}
            <div className="flex justify-center items-center px-4 lg:px-10">
              <div className="rounded-2xl overflow-hidden mt-6 lg:mt-0 w-full max-w-[800px]">
                <img
                  className="w-full h-auto object-cover hover:scale-110 duration-500 transition-all"
                  src="/images/banner2.webp"
                  alt="Banner thời trang"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default TrangHome;
