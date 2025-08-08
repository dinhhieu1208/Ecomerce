'use client';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import '../../../styles/tailwind.css';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
