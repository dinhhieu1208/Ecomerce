'use client';

import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Đăng nhập');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white w-full max-w-md p-8 rounded-lg shadow-md space-y-4"
      >
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">{currentState}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {currentState === 'Đăng nhập'
              ? 'Chào mừng bạn quay lại!'
              : 'Tạo tài khoản mới để bắt đầu'}
          </p>
        </div>

        {currentState === 'Đăng ký' && (
          <input
            type="text"
            placeholder="Tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <div className="flex justify-between text-sm text-gray-600">
          <p className="cursor-pointer hover:text-black">Quên mật khẩu?</p>
          {currentState === 'Đăng nhập' ? (
            <p
              className="cursor-pointer hover:text-black"
              onClick={() => setCurrentState('Đăng ký')}
            >
              Tạo tài khoản
            </p>
          ) : (
            <p
              className="cursor-pointer hover:text-black"
              onClick={() => setCurrentState('Đăng nhập')}
            >
              Đăng nhập tại đây
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          {currentState === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng ký'}
        </button>
      </form>
    </section>
  );
};

export default Login;
