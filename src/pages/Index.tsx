import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary-foreground">Перетяжка Мебели</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-primary-foreground hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-primary-foreground hover:text-accent transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('process')} className="text-primary-foreground hover:text-accent transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('prices')} className="text-primary-foreground hover:text-accent transition-colors">Цены</button>
            <button onClick={() => scrollToSection('reviews')} className="text-primary-foreground hover:text-accent transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-primary-foreground hover:text-accent transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('order')} className="bg-accent hover:bg-accent/90">
            Заказать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center text-primary-foreground">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональная перетяжка мебели в Новороссийске
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Возвращаем вашей мебели первозданный вид. Качественно. Быстро. Надёжно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('order')} className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Sofa" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Перетяжка мягкой мебели</h3>
                <p className="text-muted-foreground text-center">
                  Диваны, кресла, стулья. Замена обивки, наполнителя, ремонт каркаса.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Armchair" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Реставрация антикварной мебели</h3>
                <p className="text-muted-foreground text-center">
                  Бережное восстановление старинных предметов с сохранением стиля.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Package" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Ремонт механизмов</h3>
                <p className="text-muted-foreground text-center">
                  Замена пружинных блоков, механизмов трансформации, фурнитуры.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">лет опыта</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1500+</div>
              <p className="text-muted-foreground">выполненных заказов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">гарантия качества</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3-7</div>
              <p className="text-muted-foreground">дней срок работы</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/2f19b110-02c7-4183-b197-f3005f13ed35/files/44393223-496c-4c29-a382-c2b213130971.jpg" 
                alt="Перетяжка дивана"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Перетяжка классического дивана</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/2f19b110-02c7-4183-b197-f3005f13ed35/files/c6a1b810-e00f-4c0a-925a-9d09ce3e4934.jpg" 
                alt="Реставрация кресла"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Реставрация винтажного кресла</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://cdn.poehali.dev/projects/2f19b110-02c7-4183-b197-f3005f13ed35/files/f05ce0ea-85d9-4218-85af-e2594998773a.jpg" 
                alt="Выбор тканей"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Широкий выбор тканей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { icon: 'Phone', title: 'Заявка', desc: 'Оставляете заявку на сайте или звоните нам' },
              { icon: 'Calendar', title: 'Консультация', desc: 'Выезд мастера для оценки объёма работ и выбора материалов' },
              { icon: 'Truck', title: 'Транспортировка', desc: 'Бесплатный вывоз мебели в мастерскую' },
              { icon: 'Hammer', title: 'Работа', desc: 'Профессиональная перетяжка с контролем качества' },
              { icon: 'CheckCircle', title: 'Доставка', desc: 'Доставка готовой мебели и гарантия на работу' }
            ].map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={step.icon as any} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{index + 1}. {step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Цены на услуги</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Кресло</h3>
                <div className="text-3xl font-bold text-accent mb-6">от 8 000 ₽</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Замена обивки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Ремонт каркаса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Замена поролона</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent border-2">
              <CardContent className="pt-6">
                <div className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Популярно
                </div>
                <h3 className="text-2xl font-bold mb-4">Диван 2-местный</h3>
                <div className="text-3xl font-bold text-accent mb-6">от 15 000 ₽</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Полная перетяжка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Ремонт механизма</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Замена наполнителя</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Гарантия 12 месяцев</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Диван угловой</h3>
                <div className="text-3xl font-bold text-accent mb-6">от 25 000 ₽</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Полная перетяжка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Ремонт конструкции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Замена всех материалов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span>Бесплатная доставка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Точная стоимость рассчитывается после осмотра мебели мастером
          </p>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Елена Петрова',
                text: 'Отличная работа! Старый диван преобразился до неузнаваемости. Мастера работают аккуратно, сроки соблюдены. Рекомендую!',
                rating: 5
              },
              {
                name: 'Сергей Иванов',
                text: 'Делали перетяжку антикварного кресла. Результат превзошёл ожидания. Профессиональный подход и внимание к деталям.',
                rating: 5
              },
              {
                name: 'Марина Соколова',
                text: 'Быстро, качественно, по приемлемой цене. Помогли с выбором ткани. Очень довольны работой, спасибо!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Оставить заявку</h2>
          <p className="text-center mb-8 opacity-90 text-lg">
            Заполните форму, и мы свяжемся с вами в течение 15 минут
          </p>
          <Card className="bg-white">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (900) 123-45-67"
                    className="text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Описание заказа</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите, какую мебель нужно перетянуть и какие работы требуются"
                    rows={4}
                    className="text-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <a href="tel:+79001234567" className="text-accent hover:underline text-lg">
                +7 (900) 123-45-67
              </a>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                г. Новороссийск,<br />ул. Примерная, 123
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
              <p className="text-muted-foreground">
                Пн-Пт: 9:00 - 19:00<br />Сб-Вс: 10:00 - 17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Перетяжка мебели в Новороссийске</p>
          <p className="text-sm opacity-75">Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
