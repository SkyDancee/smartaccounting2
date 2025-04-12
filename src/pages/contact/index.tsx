import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Контакты - SmartAccounting</title>
        <meta name="description" content="Свяжитесь с нами для получения профессиональных бухгалтерских услуг" />
      </Head>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>

        {/* Двухколоночный макет: форма слева, карта справа */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Левая колонка - Контактная форма */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Правая колонка - Карта */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-primary">Наше местоположение</h2>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mb-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087992503!2d37.618675376957794!3d55.75639497987969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1715183693412!5m2!1sru!2sru"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Местоположение офиса"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-gray-600">
              г. Москва, ул. Примерная, д. 123 (показано примерное расположение)
            </p>
          </div>
        </div>

        {/* Блок с контактной информацией под колонками */}
        <div className="bg-blue-50 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Контактная информация</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-gray-600">info@smartaccounting.ru</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Режим работы</h3>
              <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-blue-100">
            <h3 className="text-lg font-medium mb-2 text-center">Как добраться</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <p className="text-gray-600">
                На метро: станция &quot;Примерная&quot;, выход №1
              </p>
              <p className="text-gray-600">
                На машине: есть парковка для клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 