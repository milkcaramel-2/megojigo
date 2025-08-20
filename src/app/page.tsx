"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentImageSet, setCurrentImageSet] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS service configuration
      const serviceId = 'service_megojigo'; // You'll need to set this up
      const templateId = 'template_contact'; // You'll need to set this up  
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to set this up

      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        message: formData.message,
        to_email: 'dsj152@naver.com',
        subject: '메고지고 떡집 문의'
      };

      // For now, simulate successful sending since EmailJS needs setup
      // Replace this with actual EmailJS call once configured:
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success
      setFormData({ name: '', phone: '', message: '' });
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleKakaoClick = () => {
    // Direct redirect to KakaoTalk channel
    window.open('https://pf.kakao.com/_thxdvn', '_blank');
  };

  const handleInstagramClick = () => {
    // Direct redirect to Instagram profile
    window.open('https://www.instagram.com/dsj_152?igsh=ODduY2JrMWp3d3ps', '_blank');
  };

  const handleProductsClick = () => {
    window.location.href = '/gallery';
  };

  const handleContactClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGalleryImageClick = () => {
    window.location.href = '/gallery';
  };
  const ricecakeProducts = [
    {
      id: 1,
      name: "백설기",
      description: "부드럽고 촉촉한 전통 떡",
      image: "/gallery1.jpg"
    },
    {
      id: 2,
      name: "무지개떡",
      description: "화려한 색감의 축하용 떡",
      image: "/gallery2.jpg"
    },
    {
      id: 3,
      name: "팥떡",
      description: "달콤한 팥앙금 떡",
      image: "/gallery3.jpg"
    },
    {
      id: 4,
      name: "참깨떡",
      description: "고소한 참깨 풍미",
      image: "/gallery4.jpg"
    },
    {
      id: 5,
      name: "꽃떡",
      description: "아름다운 꽃 장식 떡",
      image: "/gallery5.jpg"
    },
    {
      id: 6,
      name: "퓨전떡",
      description: "전통과 현대의 만남",
      image: "/gallery6.jpg"
    }
  ];

  // Create image sets for smooth cycling
  const imageSets = [
    [ricecakeProducts[0], ricecakeProducts[1], ricecakeProducts[2]], // Set 1
    [ricecakeProducts[3], ricecakeProducts[4], ricecakeProducts[5]], // Set 2
    [ricecakeProducts[2], ricecakeProducts[0], ricecakeProducts[4]], // Set 3
    [ricecakeProducts[1], ricecakeProducts[5], ricecakeProducts[3]]  // Set 4
  ];

  // Auto-cycle through image sets every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-16">
      
            {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
        <Image
                src="/sub_logo.png"
                alt="메고지고 로고"
                width={120}
                height={40}
                className="h-8 w-auto mt-1.5 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <div className="hidden md:flex items-baseline space-x-6">
                <button onClick={handleProductsClick} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:-translate-y-0.5">제품</button>
                <button onClick={handleContactClick} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg transform hover:-translate-y-0.5">연락처</button>
              </div>
              
              {/* Social Media Buttons */}
              <div className="flex space-x-2 sm:space-x-3">
                {/* KakaoTalk Button */}
                <button
                  onClick={handleKakaoClick}
                  className="group bg-white hover:bg-yellow-50 border-2 border-gray-200 hover:border-yellow-400 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 sm:space-x-2 transform hover:scale-105 hover:shadow-md"
                  aria-label="카카오톡 떡사장 채널"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 relative overflow-hidden rounded">
                    <Image
                      src="/kakaochannelllogo.png"
                      alt="KakaoTalk"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium hidden sm:block transition-colors duration-300 group-hover:text-gray-900">카카오</span>
                </button>

                {/* Instagram Button */}
                <button
                  onClick={handleInstagramClick}
                  className="group bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 border-2 border-gray-200 hover:border-pink-400 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 sm:space-x-2 transform hover:scale-105 hover:shadow-md"
                  aria-label="인스타그램 DSJ152"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 relative overflow-hidden rounded">
                    <Image
                      src="/instagramlogo.png"
                      alt="Instagram"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium hidden sm:block transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text">인스타그램</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className="md:hidden border-t border-gray-100 py-2">
            <div className="flex justify-center space-x-8">
              <button onClick={handleProductsClick} className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-all duration-300">제품</button>
              <button onClick={handleContactClick} className="text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-all duration-300">연락처</button>
            </div>
          </div>
        </div>
      </nav>

                        {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="text-center">
                  <div className="mb-8 animate-fade-in-up">
                    <Image
                      src="/megojigo_MAINLOGO.png"
                      alt="메고지고 메인 로고"
                      width={600}
                      height={240}
                      priority
                      className="mx-auto h-32 w-auto sm:h-40 lg:h-52 max-w-full transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="animate-fade-in-up-delay">
                    <div className="flex flex-col sm:flex-row items-center justify-center text-sm sm:text-base md:text-lg text-gray-500 space-y-2 sm:space-y-0">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-center leading-relaxed">
                          경기도 남양주시 별내중앙로 10 (별내동)<br className="sm:hidden" />
                          <span className="hidden sm:inline">, </span>아이파크스위트 상가 152호<br className="sm:hidden" />
                          <span className="hidden sm:inline">, </span>롯데시네마 건물 1층
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 떡사장 Character Introduction Section */}
            <section className="py-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-80"></div>
              <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up text-center sm:text-left">
                  <div className="relative">
                    <Image
                      src="/ttucksajang.png"
                      alt="떡사장 캐릭터"
                      width={140}
                      height={210}
                      className="w-24 h-36 sm:w-28 sm:h-42 lg:w-32 lg:h-48 rounded-xl border-4 border-brand-red/20 shadow-xl transition-transform duration-700 hover:scale-110 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-brand-red rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs sm:text-sm font-bold">떡</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      안녕하세요! <span className="text-brand-red text-2xl sm:text-3xl lg:text-4xl">떡사장</span>입니다
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      정성스럽게 만든 우리 떡을 소개해드릴게요
                    </p>
                  </div>
                </div>
              </div>
            </section>





      {/* Gallery Section */}
      <section className="py-8 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/95 to-brand-red/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3"><span className="text-3xl sm:text-4xl">떡사장</span>이 추천하는 떡 제품</h2>
            <p className="text-sm text-white/80">정성스럽게 만든 전통 한국 떡</p>
          </div>

          {/* Animated 3-Image Gallery - Smooth Sliding */}
          <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto mb-6">
            {/* Big Image on Left - Sliding Animation */}
            <div className="flex-1 group h-64 md:h-96">
                                          <div 
                              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full relative cursor-pointer"
                              onClick={handleGalleryImageClick}
                            >
                          <div className="relative h-full overflow-hidden">
                            {imageSets.map((set, setIndex) => (
                              <div
                                key={setIndex}
                                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                                style={{
                                  transform: `translateX(${(setIndex - currentImageSet) * 100}%)`
                                }}
        >
          <Image
                                  src={set[0].image}
                                  alt={set[0].name}
                                  width={600}
                                  height={450}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
            </div>
            
            {/* Two Images on Right - Sliding Animation */}
            <div className="w-full md:w-80 flex flex-row md:flex-col gap-4 h-32 md:h-96">
              {[1, 2].map((position, posIndex) => (
                                        <div key={posIndex} className="group flex-1 md:flex-none h-full md:h-[184px]">
                          <div 
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full relative cursor-pointer"
                            onClick={handleGalleryImageClick}
                          >
                            <div className="relative h-full overflow-hidden">
                              {imageSets.map((set, setIndex) => (
                                <div
                                  key={setIndex}
                                  className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                                  style={{
                                    transform: `translateX(${(setIndex - currentImageSet) * 100}%)`
                                  }}
        >
          <Image
                                    src={set[position].image}
                                    alt={set[position].name}
                                    width={320}
                                    height={180}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
              ))}
            </div>
          </div>

                            {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {imageSets.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageSet(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageSet
                            ? 'bg-white scale-125'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>

                                    {/* Simple View All Button */}
                  <div className="text-center">
                    <button 
                      onClick={() => window.location.href = '/gallery'}
                      className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      전체상품 보기
                    </button>
                    <p className="text-white/60 text-xs mt-2">이미지를 클릭해도 전체 상품을 확인할 수 있습니다</p>
                  </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 bg-white relative overflow-hidden border-t-4 border-brand-red">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                              <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 animate-fade-in-up-delay">
                      <span className="text-3xl sm:text-4xl">떡사장</span>에게 문의
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2 animate-fade-in-up-delay">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-brand-red rounded-full">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-brand-red">031-528-0152</p>
                    </div>
                    <p className="text-sm text-gray-600 animate-fade-in-up-delay">궁금한 점이 있으시면 언제든지 연락주세요</p>
                  </div>
          
                    <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-slide-in-right"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="px-3 py-2 rounded-lg border-2 border-gray-200 text-sm w-full font-medium focus:border-brand-red transition-all duration-300 placeholder-gray-400"
                  placeholder="성함"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-3 py-2 rounded-lg border-2 border-gray-200 text-sm w-full font-medium focus:border-brand-red transition-all duration-300 placeholder-gray-400"
                  placeholder="연락처"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={3}
                className="px-3 py-2 rounded-lg border-2 border-gray-200 text-sm w-full font-medium focus:border-brand-red transition-all duration-300 placeholder-gray-400 mb-4 resize-none"
                placeholder="문의 내용을 자세히 적어주세요"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-red text-white hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                                        {isSubmitting ? '전송중...' : '문의하기'}
              </button>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800 font-medium">문의가 성공적으로 전송되었습니다!</p>
                  </div>
                  <p className="text-green-600 text-sm mt-1">빠른 시일 내에 연락드리겠습니다.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-800 font-medium">전송에 실패했습니다.</p>
                  </div>
                  <p className="text-red-600 text-sm mt-1">전화(031-528-0152)로 직접 연락주시거나 다시 시도해주세요.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Logo Section */}
            <div className="text-center md:text-left">
              <div className="mb-4">
          <Image
                  src="/megojigo_SUBLOGO.png"
                  alt="메고지고 로고"
                  width={120}
                  height={40}
                  className="h-8 w-auto mx-auto md:mx-0 opacity-70"
                />
              </div>
              <p className="text-gray-600 text-sm">
                전통과 현대가 만나는<br />
                프리미엄 한국 떡
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-semibold text-gray-900 mb-3">연락처</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">031-528-0152</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">dsj152@naver.com</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="text-center md:text-left lg:col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-base font-semibold text-gray-900 mb-3">위치</h3>
              <div className="flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm text-gray-600 leading-relaxed">
                  경기도 남양주시 별내중앙로 10<br />
                  (별내동)<br />
                  아이파크스위트 상가 152호<br />
                  롯데시네마 건물 1층
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-500">
              @2025 메고지고 별내역점. All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
