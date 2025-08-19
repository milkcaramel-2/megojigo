'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '크림떡', '찹쌀떡'];

  const ricecakeProducts = [
    { 
      id: 1, 
      name: "두바이초콜릿찹쌀떡", 
      description: "두바이 초콜릿의 특별한 맛", 
      extendedDescription: "Premium Middle Eastern chocolate meets Korean rice cake.\nRich chocolate flavor with chewy texture.",
      image: "/grid_img/cream/dubaichocolate.jpg", 
      category: "크림떡" 
    },
    { 
      id: 2, 
      name: "치즈떡", 
      description: "부드러운 치즈 크림의 조화", 
      extendedDescription: "Fresh cheese meets soft rice cake.\nCreamy texture with savory taste.",
      image: "/grid_img/cream/cheese.jpg", 
      category: "크림떡" 
    },
    { 
      id: 3, 
      name: "딸기크림떡", 
      description: "상큼한 딸기의 달콤함", 
      extendedDescription: "Sweet and tangy strawberry with smooth cream.\nPerfect spring flavor combination.",
      image: "/grid_img/cream/Strawberrry.jpg", 
      category: "크림떡" 
    },
    { 
      id: 4, 
      name: "카다이프 초코찹쌀떡", 
      description: "카다이프의 특별한 식감", 
      extendedDescription: "바삭한 면 식감과 진한 초콜릿 맛.\n독특하고 새로운 식감의 만남.",
      image: "/grid_img/cream/cadaiff.jpg", 
      category: "크림떡" 
    },
    { 
      id: 5, 
      name: "밤티라미수떡", 
      description: "티라미수와 밤의 조화", 
      extendedDescription: "부드러운 밤과 티라미수 크림.\n커피 향이 은은한 고급 디저트.",
      image: "/grid_img/cream/bamtiramisu.jpg", 
      category: "크림떡" 
    },
    { 
      id: 6, 
      name: "인절미크림떡", 
      description: "전통과 현대의 만남", 
      extendedDescription: "Traditional soybean powder meets modern cream.\nNutty and sweet fusion flavor.",
      image: "/grid_img/cream/injulmicream.jpg", 
      category: "크림떡" 
    },
    { 
      id: 7, 
      name: "찹쌀빙고 말차", 
      description: "말차의 깊은 향", 
      extendedDescription: "프리미엄 말차와 부드러운 크림.\n은은한 쓴맛과 단맛의 절묘한 조화.",
      image: "/grid_img/cream/malcha.jpg", 
      category: "크림떡" 
    },
    { 
      id: 8, 
      name: "찹쌀빙고 크림", 
      description: "순수한 크림의 부드러움", 
      extendedDescription: "Pure fresh cream with glutinous rice.\nClassic flavor loved by everyone.",
      image: "/grid_img/cream/cream.jpg", 
      category: "크림떡" 
    },
    { 
      id: 9, 
      name: "카이막떡", 
      description: "카이막 크림의 진한 맛", 
      extendedDescription: "전통 카이막 크림의 진한 풍미.\n독특하고 진한 맛의 경험.",
      image: "/grid_img/cream/kaimac.jpg", 
      category: "크림떡" 
    },
    { 
      id: 10, 
      name: "메론크림떡", 
      description: "여름 메론의 상큼함", 
      extendedDescription: "Sweet summer melon with smooth cream.\nRefreshing and cooling taste.",
      image: "/grid_img/cream/melonc.jpg", 
      category: "크림떡" 
    },
    { 
      id: 11, 
      name: "그릭요거떡", 
      description: "건강한 그릭요거트의 맛", 
      extendedDescription: "Healthy Greek yogurt with probiotics.\nTangy and refreshing wellness treat.",
      image: "/grid_img/cream/greekyogurt.jpg", 
      category: "크림떡" 
    },
    { 
      id: 12, 
      name: "초코크림떡", 
      description: "클래식 초콜릿의 진한 맛", 
      extendedDescription: "Rich chocolate cream with chewy rice cake.\nClassic flavor for chocolate lovers.",
      image: "/grid_img/cream/chocolate.jpg", 
      category: "크림떡" 
    },
    { 
      id: 13, 
      name: "크런치돼지떡", 
      description: "돼지바 아이스크림 맛", 
      extendedDescription: "인기 돼지바 아이스크림을 연상시킨 맛.\n바삭한 크런치와 부드러운 크림의 조화.",
      image: "/grid_img/cream/piggy.jpg", 
      category: "크림떡" 
    },
    { 
      id: 14, 
      name: "피카찹쌀떡", 
      description: "피스타치오의 고소한 맛", 
      extendedDescription: "고소하고 부드러운 피스타치오 크림떡.\n녹색의 자연스러운 빛깔과 풍부한 맛.",
      image: "/grid_img/cream/pica.jpg", 
      category: "크림떡" 
    },
    { 
      id: 15, 
      name: "껍질째 먹는 군고구마떡", 
      description: "달콤한 고구마의 자연스러운 맛", 
      extendedDescription: "껍질째 구운 고구마의 진한 단맛.\n자연스럽고 건강한 달콤함.",
      image: "/grid_img/chapsal/goguma.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 16, 
      name: "라이스파이", 
      description: "바삭한 파이와 쫄깃한 떡", 
      extendedDescription: "바삭한 파이 껍질과 쫄깃한 찹쌀떡.\n독특한 식감의 새로운 경험.",
      image: "/grid_img/chapsal/ricepie.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 17, 
      name: "렌틸콩 찹쌀떡", 
      description: "건강한 렌틸콩의 영양", 
      extendedDescription: "영양가 풍부한 렌틸콩과 찹쌀떡.\n건강과 맛을 동시에 잡은 웰빙 떡.",
      image: "/grid_img/chapsal/lentilkong.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 18, 
      name: "망개떡", 
      description: "전통 망개잎의 향긋함", 
      extendedDescription: "망개잎으로 감싼 전통 떡.\n자연의 향긋함과 쫄깃한 식감.",
      image: "/grid_img/chapsal/manggae.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 19, 
      name: "바나나찹쌀떡", 
      description: "달콤한 바나나의 부드러움", 
      extendedDescription: "신선한 바나나와 쫄깃한 찹쌀떡.\n자연스러운 달콤함과 부드러운 식감.",
      image: "/grid_img/chapsal/banana.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 20, 
      name: "벗겨바나나떡", 
      description: "껍질 벗긴 바나나의 순수함", 
      extendedDescription: "껍질을 벗긴 바나나 모양의 특별한 떡.\n시각적 재미와 달콤한 바나나 맛.",
      image: "/grid_img/chapsal/butbanana.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 21, 
      name: "쑥 찹쌀떡", 
      description: "쑥의 자연스러운 향", 
      extendedDescription: "신선한 쑥을 넣어 만든 건강한 떡.\n쑥 특유의 향긋함과 자연스러운 녹색.",
      image: "/grid_img/chapsal/ssuk.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 22, 
      name: "아몬드찹쌀떡", 
      description: "고소한 아몬드의 풍미", 
      extendedDescription: "고급 아몬드를 넣어 만든 영양 떡.\n고소함과 쫄깃함의 완벽한 조화.",
      image: "/grid_img/chapsal/almond.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 23, 
      name: "오메기떡", 
      description: "제주도 전통 오메기떡", 
      extendedDescription: "제주도 특산 오메기떡의 전통 맛.\n쫄깃하고 담백한 제주의 향토 떡.",
      image: "/grid_img/chapsal/omegi.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 24, 
      name: "잣부심찹쌀떡", 
      description: "잣의 고급스러운 풍미", 
      extendedDescription: "고급 잣을 넣어 만든 부심 떡.\n잣의 고소함과 부드러운 식감.",
      image: "/grid_img/chapsal/jjatbushim.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 25, 
      name: "통째로 생딸기모찌", 
      description: "통딸기가 들어간 모찌", 
      extendedDescription: "신선한 딸기를 통째로 넣은 모찌.\n과즙이 터지는 상큼한 맛.",
      image: "/grid_img/chapsal/strawberrymojji.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 26, 
      name: "통째로 샤인머스캣모찌", 
      description: "프리미엄 샤인머스캣 모찌", 
      extendedDescription: "고급 샤인머스캣을 통째로 넣은 모찌.\n달콤하고 향긋한 포도의 풍미.",
      image: "/grid_img/chapsal/shinemusketmojji.jpg", 
      category: "찹쌀떡" 
    },
    { 
      id: 27, 
      name: "호박 찹쌀떡", 
      description: "달콤한 호박의 자연스러운 맛", 
      extendedDescription: "신선한 호박을 넣어 만든 건강한 떡.\n호박의 자연스러운 단맛과 부드러운 식감.",
      image: "/grid_img/chapsal/pumpkin.jpg", 
      category: "찹쌀떡" 
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
              <button onClick={handleBackToHome} className="flex items-center mr-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/megojigo_SUBLOGO.png"
                alt="메고지고 서브 로고"
                width={80}
                height={32}
                  className="h-8 w-auto"
              />
              </button>
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
            <span className="text-5xl lg:text-6xl">떡사장</span>의 특별한 떡 컬렉션
          </h1>
          <p className="text-xl text-white/90 mb-2">크림떡과 찹쌀떡의 다양한 맛을 만나보세요</p>
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


        </div>
      </footer>
    </div>
  );
}
