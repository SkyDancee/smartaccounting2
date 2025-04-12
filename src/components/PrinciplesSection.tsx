import React from 'react';
import { FiCheck, FiTarget, FiStar, FiShield, FiUsers, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

interface PrinciplesSectionProps {
  className?: string;
  id?: string;
}

const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({ className = '', id }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Наши принципы</h2>
          <p className="text-gray-600 text-lg">
            В основе работы ООО "SMART ACCOUNT AND CO" лежат ключевые принципы, которые обеспечивают высокое качество услуг и доверие клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PrincipleCard 
            icon={<FiTarget />}
            title="Точность и внимательность" 
            description="Мы тщательно проверяем каждый документ и отчет, чтобы исключить ошибки и неточности в вашей бухгалтерии"
            delay={100}
          />
          <PrincipleCard 
            icon={<FiShield />}
            title="Конфиденциальность" 
            description="Гарантируем полную конфиденциальность всех данных. Работаем по договору с NDA и соблюдаем требования закона о персональных данных"
            delay={200}
          />
          <PrincipleCard 
            icon={<FiStar />}
            title="Профессионализм" 
            description="Наши специалисты имеют профильное образование и регулярно повышают квалификацию, следят за изменениями законодательства"
            delay={300}
          />
          <PrincipleCard 
            icon={<FiUsers />}
            title="Клиентоориентированность" 
            description="Мы выстраиваем долгосрочные отношения с клиентами, основанные на понимании потребностей и особенностей каждого бизнеса"
            delay={400}
          />
          <PrincipleCard 
            icon={<FiBarChart2 />}
            title="Системный подход" 
            description="Создаем эффективные системы учета, оптимизируем бизнес-процессы и налоговые стратегии вашей компании"
            delay={500}
          />
          <PrincipleCard 
            icon={<FiCheck />}
            title="Прозрачность и честность" 
            description="Работаем на результат, предоставляем понятную отчетность и всегда придерживаемся прозрачных условий сотрудничества"
            delay={600}
          />
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-xl p-10 shadow-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-4">Доверьте нам свою бухгалтерию</h3>
              <p className="text-blue-100">
                Мы поможем вам сосредоточиться на развитии бизнеса, 
                пока наши специалисты обеспечивают безупречный учет и отчетность.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Principle Card Component
const PrincipleCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  delay: number 
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PrinciplesSection; 