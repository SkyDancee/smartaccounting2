import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiClock, 
  FiDollarSign, 
  FiShield, 
  FiUsers,
  FiFileText,
  FiPhone
} from 'react-icons/fi';

const VedenieBuhgalterskiyUchet: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Новое ведение бухгалтерского учета - SMART ACCOUNT AND CO</title>
        <meta 
          name="description" 
          content="Профессиональные услуги по ведению бухгалтерского учета для вашего бизнеса. Оптимизация налогов и финансовых процессов от опытных специалистов SMART ACCOUNT AND CO" 
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-primary to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center text-blue-100 mb-6">
            <Link href="/services" className="hover:text-white transition-colors flex items-center">
              <span className="mr-2">&#8592;</span>
              <span>Все услуги</span>
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
              Новое ведение бухгалтерского учета
            </h1>
            <p className="text-xl mb-8 text-blue-100" data-aos="fade-up" data-aos-delay="100">
              Комплексное сопровождение бизнеса с гарантией качества и ответственности за результат
            </p>
            <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="200">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
              >
                Получить консультацию
                <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/calculator" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3" data-aos="fade-up">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Профессиональное ведение бухгалтерского учета</h2>
                <p>
                  ООО "SMART ACCOUNT AND CO" предлагает услуги полного ведения бухгалтерского учета для вашего бизнеса. 
                  Мы берем на себя все заботы по подготовке и сдаче отчетности, расчету налогов и взаимодействию 
                  с контролирующими органами, что позволяет вам сосредоточиться на развитии бизнеса.
                </p>
                <p>
                  Наши специалисты помогут привести в порядок бухгалтерскую документацию и обеспечат соблюдение всех 
                  законодательных требований, минимизируя налоговые риски и оптимизируя налоговую нагрузку.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-800">Что включает наша услуга:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Формирование и сдача бухгалтерской и налоговой отчетности</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Ведение всех регистров бухгалтерского учета</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Расчет налогов и взносов</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Взаимодействие с налоговыми органами и внебюджетными фондами</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Формирование первичной документации</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Оптимизация налогообложения</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Сверка расчетов с контрагентами</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span>Подготовка и сдача электронной отчетности</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="100">
              <div className="sticky top-24">
                <div className="bg-white p-8 rounded-2xl shadow-custom mb-8">
                  <h3 className="text-xl font-semibold mb-6">Почему выбирают нас?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Профессиональная команда специалистов</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Индивидуальный подход к каждому клиенту</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Доступные цены и гибкие условия оплаты</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Строгое соблюдение сроков</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span>Конфиденциальность информации</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                  <h3 className="text-xl font-semibold mb-4">Нужна консультация?</h3>
                  <p className="text-gray-600 mb-6">
                    Свяжитесь с нами для получения подробной информации об услуге "Новое ведение бухгалтерского учета"
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center w-full justify-center"
                  >
                    <FiPhone className="mr-2" />
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Преимущества бухгалтерии на аутсорсинге</h2>
            <p className="text-gray-600 text-lg">
              Доверив ведение бухгалтерского учета профессионалам, вы получаете ряд существенных преимуществ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <FiDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экономия средств</h3>
              <p className="text-gray-600">
                Существенная экономия по сравнению с содержанием штатного бухгалтера: не нужно платить зарплату, налоги с ФОТ, организовывать рабочее место
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <FiUsers />
              </div>
              <h3 className="text-xl font-semibold mb-4">Профессионализм</h3>
              <p className="text-gray-600">
                Работу выполняют опытные специалисты, которые постоянно следят за изменениями в законодательстве и повышают свою квалификацию
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <FiClock />
              </div>
              <h3 className="text-xl font-semibold mb-4">Своевременность</h3>
              <p className="text-gray-600">
                Гарантия своевременной сдачи всех отчетов и уплаты налогов, исключающая штрафы и пени за несвоевременную сдачу отчетности
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <FiShield />
              </div>
              <h3 className="text-xl font-semibold mb-4">Конфиденциальность</h3>
              <p className="text-gray-600">
                Полная конфиденциальность всей финансовой информации, защищенная договором о неразглашении коммерческой тайны
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <FiFileText />
              </div>
              <h3 className="text-xl font-semibold mb-4">Комплексный подход</h3>
              <p className="text-gray-600">
                Полный спектр услуг: от ведения учета до представительства в налоговых органах, консультации по всем вопросам бухгалтерии
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <FiDollarSign />
              </div>
              <h3 className="text-xl font-semibold mb-4">Оптимизация налогов</h3>
              <p className="text-gray-600">
                Законные способы минимизации налоговой нагрузки, подбор оптимальной системы налогообложения для вашего бизнеса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Как мы работаем</h2>
            <p className="text-gray-600 text-lg">
              Мы выстроили прозрачный и эффективный процесс оказания услуг по ведению бухгалтерского учета
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10 h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Первичная консультация</h3>
                <p className="text-gray-600">
                  Знакомство с вашим бизнесом, анализ текущего состояния бухгалтерии, определение потребностей
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-primary/20 z-0"></div>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10 h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Подготовка предложения</h3>
                <p className="text-gray-600">
                  Разработка индивидуального предложения с учетом особенностей вашего бизнеса и объема работ
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-primary/20 z-0"></div>
            </div>

            <div className="relative" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white p-8 rounded-xl shadow-custom relative z-10 h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Заключение договора</h3>
                <p className="text-gray-600">
                  Подписание договора с четким описанием услуг, сроков исполнения и условий сотрудничества
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-primary/20 z-0"></div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white p-8 rounded-xl shadow-custom h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4">Регулярное ведение учета</h3>
                <p className="text-gray-600">
                  Систематическая работа над вашей бухгалтерией, своевременная сдача отчетности, регулярные консультации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <p className="text-gray-600 text-lg">
              Ответы на популярные вопросы об услуге ведения бухгалтерского учета
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-3">Какова стоимость услуг по ведению бухгалтерского учета?</h3>
              <p className="text-gray-600">
                Стоимость услуг определяется индивидуально и зависит от системы налогообложения, объема документооборота, 
                количества сотрудников и других факторов. Для получения точного расчета свяжитесь с нами или воспользуйтесь 
                калькулятором на нашем сайте.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-3">Как передавать документы на обработку?</h3>
              <p className="text-gray-600">
                Вы можете передавать документы удобным для вас способом: лично, через курьера, в электронном виде 
                или с помощью облачных сервисов. Мы также можем организовать регулярный вывоз документов из вашего офиса.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold mb-3">Как часто можно получать консультации?</h3>
              <p className="text-gray-600">
                Вы можете обращаться за консультациями в любое рабочее время. В зависимости от выбранного тарифа, 
                в стоимость обслуживания может быть включено определенное количество часов консультаций, 
                сверх которого услуги оплачиваются дополнительно.
              </p>
            </div>
            
            <div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-semibold mb-3">Кто будет вести наш бухгалтерский учет?</h3>
              <p className="text-gray-600">
                За каждым клиентом закрепляется персональный бухгалтер с профильным образованием и опытом работы от 5 лет. 
                При необходимости к работе подключаются специалисты узкого профиля (налоговые консультанты, юристы).
              </p>
            </div>
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
                  Готовы доверить нам свою бухгалтерию?
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl">
                  Свяжитесь с нами, чтобы обсудить детали сотрудничества. Мы предложим оптимальное решение для вашего бизнеса.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Получить консультацию
                </Link>
                <Link 
                  href="/calculator" 
                  className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Рассчитать стоимость
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default VedenieBuhgalterskiyUchet; 