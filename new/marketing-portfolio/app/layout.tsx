import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '김마케터 | 마케팅 포트폴리오',
  description: '디지털 마케팅 전문가 김마케터의 포트폴리오 홈페이지입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="page-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
