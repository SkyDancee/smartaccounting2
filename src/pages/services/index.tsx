import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import ServicesSection from '../../components/ServicesSection';

// Эта переменная используется в ServicesSection компоненте
// const services = [
//   {
//     title: 'Полное ведение бухгалтерского учета',
//     description: 'Профессиональное ведение бухгалтерского учета полного цикла в соответствии с законодательством РФ',
//     icon: <FiFileText className="text-primary text-3xl" />
//   },
//   {
//     title: 'Ведение первичной документации',
//     description: 'Полное ведение первичных бухгалтерских документов, организация документооборота',
//     icon: <FiClipboard className="text-primary text-3xl" />
//   },
//   {
//     title: 'Восстановление бухгалтерского учета',
//     description: 'Восстановление бухгалтерского учета при отсутствии или некорректном ведении',
//     icon: <FiRefreshCcw className="text-primary text-3xl" />
//   },
//   {
//     title: 'Оптимизация налогов',
//     description: 'Легальные способы оптимизации налогообложения для снижения налоговой нагрузки',
//     icon: <FiDollarSign className="text-primary text-3xl" />
//   },
//   {
//     title: 'Сдача отчетности',
//     description: 'Своевременная подготовка и сдача всех налоговых и статистических отчетов',
//     icon: <FiFileText className="text-primary text-3xl" />
//   },
//   {
//     title: 'Кадровый учет',
//     description: 'Полное ведение кадрового учета и оформление документации по сотрудникам',
//     icon: <FiUsers className="text-primary text-3xl" />
//   }
// ];

const Services: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Услуги - SMART ACCOUNT AND CO</title>
        <meta name="description" content="Профессиональные бухгалтерские услуги на аутсорсинге для вашего бизнеса" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full filter blur-[120px] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              Наши услуги
            </h1>
            <p className="text-xl mb-8 text-blue-100" data-aos="fade-up" data-aos-delay="100">
              ООО "SMART ACCOUNT AND CO" предлагает полный спектр бухгалтерских услуг на аутсорсинге для вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Как мы работаем</h2>
            <p className="text-gray-600 text-lg">
              Процесс сотрудничества с ООО "SMART ACCOUNT AND CO" прост и эффективен
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Консультация</h3>
                <p className="text-gray-600">
                  Первичная консультация для определения ваших потребностей и объема необходимых услуг
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-2 bg-primary/20 z-0"></div>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Заключение договора</h3>
                <p className="text-gray-600">
                  Подписание договора с четким описанием услуг, сроков и стоимости обслуживания
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-2 bg-primary/20 z-0"></div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-8 rounded-xl shadow-custom">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Работа с вашей бухгалтерией</h3>
                <p className="text-gray-600">
                  Мы берем на себя все бухгалтерские задачи, регулярно информируя вас о состоянии дел
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Преимущества бухгалтерии на аутсорсинге
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="bg-primary/10 p-2 rounded-full text-primary flex-shrink-0 mt-1">
                    <FiCheck size={18} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Экономия средств</h3>
                    <p className="text-gray-600">
                      Выгоднее, чем содержать штатного бухгалтера — вы не платите налоги с зарплаты и не обеспечиваете рабочее место
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="bg-primary/10 p-2 rounded-full text-primary flex-shrink-0 mt-1">
                    <FiCheck size={18} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
                    <p className="text-gray-600">
                      Работу выполняют опытные специалисты, которые постоянно следят за изменениями в законодательстве
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="bg-primary/10 p-2 rounded-full text-primary flex-shrink-0 mt-1">
                    <FiCheck size={18} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Своевременность</h3>
                    <p className="text-gray-600">
                      Мы гарантируем своевременную сдачу всех отчетов и уплату налогов, исключая штрафы и пени
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="bg-gray-50 p-10 rounded-2xl shadow-custom">
                <h3 className="text-2xl font-bold mb-6 text-center">Стоимость услуг</h3>
                <div className="text-center mb-8">
                  <p className="text-gray-600 text-lg">
                    Стоимость наших услуг зависит от объема работы и особенностей вашего бизнеса
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-white rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">ИП на УСН</span>
                      <span className="text-primary font-bold">от 5 000 ₽/мес</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">ООО на УСН</span>
                      <span className="text-primary font-bold">от 8 000 ₽/мес</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">ООО на ОСНО</span>
                      <span className="text-primary font-bold">от 15 000 ₽/мес</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link 
                    href="/calculator" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Рассчитать стоимость
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-[100px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-[100px] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
                <p className="text-blue-100 text-lg">
                  Свяжитесь с нами для получения бесплатной консультации по вашему бизнесу
                </p>
              </div>
              <div>
                <Link 
                  href="/contact" 
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Получить консультацию
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services; 