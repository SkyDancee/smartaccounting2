import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiArrowRight, FiStar, FiUsers, FiBarChart2, FiCalendar, FiFileText, FiShield } from 'react-icons/fi';
import Layout from '../components/Layout';
import PartnersMarquee from '../components/PartnersMarquee';
import ServicesSection from '../components/ServicesSection';
import PrinciplesSection from '../components/PrinciplesSection';
import { handleHashScroll } from '../utils/scrollUtils';
import SmoothScrollLink from '../components/SmoothScrollLink';

const Home: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    handleHashScroll();
  }, []);

  return (
    <Layout>
      <Head>
        <title>SMART ACCOUNT AND CO - Профессиональные бухгалтерские услуги на аутсорсинге</title>
        <meta name="description" content="Профессиональные бухгалтерские услуги на аутсорсинге для вашего бизнеса" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-blue-900">
          <Image
            src="/images/hero-accounting.jpg"
            alt="Professional accounting services"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            onError={(e) => {
              // Если изображение не загрузилось, установим цвет фона вместо него
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-primary/80 to-blue-600/80"></div>
        </div>
        <div className="absolute inset-0 bg-pattern opacity-10 z-[1]"></div>
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full filter blur-[150px] opacity-20"
          style={{ zIndex: 1 }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ваш бизнес — <br />
                <span className="text-primary drop-shadow-lg">наша бухгалтерия</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-white mb-8 max-w-lg drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                ООО "SMART ACCOUNT AND CO" предлагает качественные бухгалтерские услуги на аутсорсинге, чтобы вы могли сосредоточиться на развитии своего бизнеса.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Получить консультацию
                  <FiArrowRight className="ml-2" />
                </Link>
                <SmoothScrollLink href="#principles" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Наши принципы
                </SmoothScrollLink>
              </motion.div>
              <motion.div 
                className="mt-12 flex items-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                      <div className="w-full h-full bg-blue-400 flex items-center justify-center text-white font-bold">
                        {i}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-primary drop-shadow mb-1">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <p className="text-white text-sm text-shadow-sm">Более 500 довольных клиентов</p>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-12 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10"
              >
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
                  <div className="absolute -top-4 -right-4 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md">
                    Smart подход
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Наши услуги</h3>
                  <ul className="space-y-4">
                    {[
                      'Полное ведение бухгалтерского учета', 
                      'Ведение первичных документов', 
                      'Восстановление бухгалтерского учета', 
                      'Оптимизация налогов', 
                      'Сдача отчетности', 
                      'Кадровый учет'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-primary/10 p-1 rounded-full mr-4 text-primary flex-shrink-0">
                          <FiCheck size={16} />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Стоимость услуг</p>
                        <p className="text-2xl font-bold text-primary">Договорная</p>
                      </div>
                      <Link href="/prices" className="text-primary hover:text-primary/80 font-semibold flex items-center">
                        Подробнее <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute top-1/2 -right-5 w-20 h-20 bg-primary rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <PartnersMarquee />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши преимущества</h2>
            <p className="text-gray-600 text-lg">
              ООО "SMART ACCOUNT AND CO" стремится предоставить максимально качественные услуги, которые помогут вашему бизнесу расти и развиваться
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FiFileText />} 
              title="Полный учет" 
              description="Ведем полный бухгалтерский учет и первичную документацию в соответствии с законодательством"
              delay={100}
            />
            <FeatureCard 
              icon={<FiBarChart2 />} 
              title="Оптимизация налогов" 
              description="Помогаем законно минимизировать налоговую нагрузку и избежать штрафов"
              delay={200}
            />
            <FeatureCard 
              icon={<FiCalendar />} 
              title="Сдача отчетности" 
              description="Подготовка и сдача всех необходимых налоговых и статистических отчетов"
              delay={300}
            />
            <FeatureCard 
              icon={<FiUsers />} 
              title="Кадровый учет" 
              description="Полное ведение кадрового учета и оформление документации по сотрудникам"
              delay={400}
            />
            <FeatureCard 
              icon={<FiShield />} 
              title="Восстановление учета" 
              description="Качественное восстановление бухгалтерского учета любой сложности"
              delay={500}
            />
            <FeatureCard 
              icon={<FiShield />} 
              title="Экономия средств" 
              description="Снижение затрат на содержание штатного бухгалтера и организацию рабочего места"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection className="bg-gray-50" />

      {/* Principles Section */}
      <PrinciplesSection id="principles" className="bg-white" />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              value={10} 
              suffix="+" 
              label="Лет опыта" 
              inView={statsInView}
              delay={100}
            />
            <StatCard 
              value={500} 
              suffix="+" 
              label="Довольных клиентов" 
              inView={statsInView}
              delay={200}
            />
            <StatCard 
              value={1000} 
              suffix="+" 
              label="Сданных отчетов" 
              inView={statsInView}
              delay={300}
            />
            <StatCard 
              value={98} 
              suffix="%" 
              label="Клиентов рекомендуют нас" 
              inView={statsInView}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-12 relative z-10">
                  <div className="bg-white rounded-lg shadow-xl p-6 relative z-20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">О нашей компании</h3>
                    <p className="text-gray-600 mb-6">
                      ООО "SMART ACCOUNT AND CO" - это команда профессиональных бухгалтеров, предлагающая качественные бухгалтерские услуги на аутсорсинге для бизнеса любого масштаба.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Наша миссия - освободить вас от бухгалтерских забот, чтобы вы могли сосредоточиться на развитии своего бизнеса.
                    </p>
                    <Link href="/contact" className="text-primary hover:text-primary/80 font-semibold flex items-center">
                      Связаться с нами <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-primary rounded-lg"></div>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Почему клиенты <span className="text-primary">выбирают нас</span> 
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <FiCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
                    <p className="text-gray-600">Все наши сотрудники имеют профильное образование и регулярно повышают квалификацию</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <FiCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ответственность</h3>
                    <p className="text-gray-600">Мы несем полную ответственность за качество и своевременность выполнения всех работ</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <FiCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                    <p className="text-gray-600">Для каждого клиента мы разрабатываем индивидуальное решение, учитывая особенности его бизнеса</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Отзывы наших клиентов</h2>
            <p className="text-gray-600 text-lg">
              Узнайте, что говорят о нас те, кто уже воспользовался нашими услугами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            <TestimonialCard
              text="Очень доволен сотрудничеством! Специалисты SMART ACCOUNT AND CO помогли нам оптимизировать налоговую нагрузку и навести порядок в бухгалтерии."
              author="Иван Петров"
              position="Генеральный директор, ООО «Технолайн»"
            />
            <TestimonialCard
              text="Работаем с SMART ACCOUNT AND CO уже 3 года. Всегда на связи, оперативно отвечают на вопросы, помогают разобраться в сложных ситуациях. Рекомендую!"
              author="Ольга Смирнова"
              position="Финансовый директор, ООО «Мебельная фабрика»"
            />
            <TestimonialCard
              text="Обратился в SMART ACCOUNT AND CO, когда открывал свой первый бизнес. Помогли с регистрацией, выбором системы налогообложения и организацией учета. Очень доволен!"
              author="Алексей Иванов"
              position="Индивидуальный предприниматель"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 relative overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Готовы начать сотрудничество?
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl">
                  Оставьте заявку или позвоните нам, и мы предложим решение, идеально подходящее для вашего бизнеса
                </p>
              </div>
              <div>
                <Link href="/contact" className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-colors inline-block">
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

// Feature Card Component
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, delay: number }> = ({ 
  icon, title, description, delay 
}) => {
  return (
    <div 
      className="p-8 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-custom transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Statistic Card Component
const StatCard: React.FC<{ value: number, suffix: string, label: string, inView: boolean, delay: number }> = ({ 
  value, suffix, label, inView, delay 
}) => {
  return (
    <div 
      className="text-center p-8 rounded-xl bg-white shadow-custom"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-3">
        {inView ? (
          <CountUp end={value} duration={2.5} />
        ) : (
          0
        )}
        {suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard: React.FC<{ text: string, author: string, position: string }> = ({ 
  text, author, position 
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-shadow">
      <div className="flex items-center text-primary mb-6">
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      <p className="text-gray-600 mb-8">{text}</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Home; 