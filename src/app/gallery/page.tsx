'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '전통떡', '현대떡', '축하떡', '계절떡'];

  const ricecakeProducts = [
    { 
      id: 1, 
      name: "백설기", 
      description: "부드럽고 촉촉한 전통 떡", 
      extendedDescription: "순수한 멥쌀로만 만든 정통 백설기입니다.\n부드러운 식감과 은은한 단맛이 특징이며,\n전통 제조법으로 정성껏 쪄낸 고급 떡입니다.\n모든 연령층이 좋아하는 대표적인 한국 떡입니다.",
      image: "/gallery1.jpg", 
      category: "전통떡" 
    },
    { 
      id: 2, 
      name: "무지개떡", 
      description: "화려한 색감의 축하용 떡", 
      extendedDescription: "천연 색소로 만든 아름다운 일곱 색깔의 떡입니다.\n생일, 돌잔치, 결혼식 등 특별한 날을 위한 떡으로,\n보기에도 아름답고 맛도 뛰어난 축하용 떡입니다.\n각 층마다 다른 맛과 향을 느낄 수 있습니다.",
      image: "/gallery2.jpg", 
      category: "축하떡" 
    },
    { 
      id: 3, 
      name: "팥떡", 
      description: "달콤한 팥앙금 떡", 
      extendedDescription: "엄선된 국산 팥으로 직접 만든 고운 팥앙금과\n쫄깃한 떡의 완벽한 조화를 이룬 떡입니다.\n당도를 적절히 조절하여 남녀노소 누구나\n부담 없이 즐길 수 있는 건강한 전통 떡입니다.",
      image: "/gallery3.jpg", 
      category: "전통떡" 
    },
    { 
      id: 4, 
      name: "참깨떡", 
      description: "고소한 참깨 풍미", 
      extendedDescription: "볶은 참깨의 진한 고소함이 가득한 영양 떡입니다.\n참깨의 풍부한 영양과 고소한 맛이 어우러져\n건강과 맛을 동시에 잡은 웰빙 떡입니다.\n씹을수록 진해지는 참깨 향이 일품입니다.",
      image: "/gallery4.jpg", 
      category: "전통떡" 
    },
    { 
      id: 5, 
      name: "꽃떡", 
      description: "아름다운 꽃 장식 떡", 
      extendedDescription: "섬세한 손길로 하나하나 만든 꽃 모양 장식 떡입니다.\n시각적인 아름다움과 맛의 조화를 이룬 예술품 같은 떡으로,\n특별한 날의 테이블을 화사하게 장식해줍니다.\n먹기 아까울 정도로 정교하고 아름다운 떡입니다.",
      image: "/gallery5.jpg", 
      category: "축하떡" 
    },
    { 
      id: 6, 
      name: "퓨전떡", 
      description: "전통과 현대의 만남", 
      extendedDescription: "전통 떡 제조법에 현대적 감각을 더한 혁신적인 떡입니다.\n다양한 맛과 식감을 경험할 수 있는 창의적인 떡으로,\n젊은 세대부터 어른까지 모두가 만족하는 새로운 떡입니다.\n색다른 떡의 매력을 느낄 수 있는 특별한 제품입니다.",
      image: "/gallery6.jpg", 
      category: "현대떡" 
    },
    { 
      id: 7, 
      name: "송편", 
      description: "추석 전통 떡", 
      extendedDescription: "한국의 대표적인 명절 떡인 송편입니다.\n솔잎의 향긋함과 함께 쪄낸 전통 그대로의 맛으로,\n팥, 깨, 콩 등 다양한 소를 넣어 만든 정성스러운 떡입니다.\n추석 명절의 따뜻한 정을 담은 전통의 맛입니다.",
      image: "/gallery1.jpg", 
      category: "계절떡" 
    },
    { 
      id: 8, 
      name: "인절미", 
      description: "콩가루 묻힌 쫄깃한 떡", 
      extendedDescription: "쫄깃한 떡에 고소한 콩가루를 듬뿍 묻힌 전통 떡입니다.\n입 안에서 퍼지는 고소함과 쫄깃한 식감이 일품이며,\n옛날 할머니가 만들어주시던 그 맛 그대로입니다.\n누구나 좋아하는 대표적인 한국 전통 떡입니다.",
      image: "/gallery2.jpg", 
      category: "전통떡" 
    },
    { 
      id: 9, 
      name: "모듬떡", 
      description: "다양한 떡의 조화", 
      extendedDescription: "여러 종류의 떡을 한 번에 맛볼 수 있는 세트 상품입니다.\n백설기, 팥떡, 참깨떡 등 다양한 떡이 포함되어\n선택의 고민 없이 다양한 맛을 즐길 수 있습니다.\n가족 모임이나 손님 접대용으로 인기가 높은 상품입니다.",
      image: "/gallery3.jpg", 
      category: "현대떡" 
    },
    { 
      id: 10, 
      name: "단팥떡", 
      description: "진한 단팥의 맛", 
      extendedDescription: "정성껏 삶은 팥으로 만든 진짜 단팥 맛의 떡입니다.\n인공 감미료를 사용하지 않고 팥 본연의 단맛만을 살려\n건강하고 자연스러운 달콤함을 느낄 수 있습니다.\n어린이부터 어른까지 안심하고 드실 수 있는 건강 떡입니다.",
      image: "/gallery4.jpg", 
      category: "전통떡" 
    },
    { 
      id: 11, 
      name: "생크림떡", 
      description: "부드러운 생크림 떡", 
      extendedDescription: "신선한 생크림을 넣어 만든 부드럽고 촉촉한 떡입니다.\n전통 떡에 서양 디저트의 요소를 접목시킨 혁신적인 떡으로,\n새로운 식감과 맛을 경험할 수 있는 모던한 떡입니다.\n특별한 날 디저트로도 완벽한 프리미엄 떡입니다.",
      image: "/gallery5.jpg", 
      category: "현대떡" 
    },
    { 
      id: 12, 
      name: "약식", 
      description: "달콤한 약식", 
      extendedDescription: "찹쌀에 대추, 밤, 견과류를 넣고 정성껏 만든 전통 약식입니다.\n영양가가 풍부하고 자연스러운 단맛이 일품인 건강식으로,\n예로부터 귀한 손님을 위한 특별한 음식으로 여겨졌습니다.\n명절이나 특별한 날에 어울리는 고급스러운 전통 떡입니다.",
      image: "/gallery6.jpg", 
      category: "계절떡" 
    }
  ];

  const filteredProducts = selectedCategory === '전체' 
    ? ricecakeProducts 
    : ricecakeProducts.filter(product => product.category === selectedCategory);

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/megojigo_SUBLOGO.png"
                alt="메고지고 서브 로고"
                width={80}
                height={32}
                className="h-8 w-auto mr-4"
              />
              <h1 className="text-xl font-bold text-gray-900">떡 갤러리</h1>
            </div>
            <button 
              onClick={handleBackToHome}
              className="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              홈으로
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-brand-red py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-5xl lg:text-6xl">떡사장</span>의 모든 떡 제품
          </h1>
          <p className="text-xl text-white/90 mb-2">정성스럽게 만든 전통과 현대의 떡을 모두 만나보세요</p>
          <p className="text-white/70 text-sm">카테고리를 선택하여 원하시는 떡을 찾아보세요</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-gray-900 mb-4">카테고리 선택</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-red text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              총 <span className="font-bold text-brand-red">{filteredProducts.length}</span>개의 제품
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{product.description}</p>
                  <div className="border-t border-gray-100 pt-3 flex-grow">
                    <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                      {product.extendedDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-4xl lg:text-5xl">떡사장</span>에게 주문하세요
          </h2>
          <p className="text-xl text-white/90 mb-8">
            원하시는 떡이 있으시면 언제든지 연락주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:031-528-0152"
              className="bg-white text-brand-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              📞 031-528-0152
            </a>
            <button 
              onClick={handleBackToHome}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-brand-red transition-colors duration-300"
            >
              홈페이지로 돌아가기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
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
                  아이파크스위트 상가 152호
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-500">
              © 2024 메고지고. 모든 권리 보유.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
