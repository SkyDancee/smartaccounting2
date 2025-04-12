import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaFacebook, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SmoothScrollLink from './SmoothScrollLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-primary"></span>
              SMART ACCOUNT AND CO
            </h3>
            <p className="text-gray-300 mb-6">
              Качественные бухгалтерские услуги на аутсорсинге для вашего бизнеса, которые помогут вам сосредоточиться на главном – развитии своего дела.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTelegram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-primary"></span>
              Навигация
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Услуги
                </Link>
              </li>
              <li>
                <Link href="/prices" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Цены
                </Link>
              </li>
              <li>
                <SmoothScrollLink href="/#principles" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Наши принципы
                </SmoothScrollLink>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span> Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-primary"></span>
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 123, офис 45</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+79991234567" className="text-gray-300 hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@smartaccounting.ru" className="text-gray-300 hover:text-white transition-colors">
                  info@smartaccounting.ru
                </a>
              </li>
              <li className="flex items-start">
                <FiClock className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-300">Сб-Вс: Выходной</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-primary"></span>
              Наши услуги
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Полное ведение бухгалтерского учета</li>
              <li className="text-gray-300">Ведение первичных документов</li>
              <li className="text-gray-300">Восстановление бухгалтерского учета</li>
              <li className="text-gray-300">Оптимизация налогов</li>
              <li className="text-gray-300">Сдача налоговой отчетности</li>
              <li className="text-gray-300">Кадровый учет</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} ООО "SMART ACCOUNT AND CO". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 