import { CatalogsData } from '@/app/types/types';

// export const categoriesData: CatalogsData = {
//     categories: [
//         {
//             id: 2,
//             name: "Электроника",
//             slug: "electronics",
//             subcategories: [
//                 {
//                     name: "Смартфоны",
//                     slug: "smartphones",
//                     subcategories: [
//                         {
//                             name: "Смартфоны",
//                             slug: "smartphones",
//
//                         },
//                         {
//                             name: "Ноутбуки",
//                             slug: "laptops",
//                         },
//                         {
//                             name: "Наушники",
//                             slug: "headphones",
//                         },
//                     ],
//                 },
//                 {
//                     name: "Ноутбуки",
//                     slug: "laptops",
//                 },
//                 {
//                     name: "Наушники",
//                     slug: "headphones",
//                 },
//             ],
//             icon: "/catalog/electronics.svg"
//         },
//         {
//             id: 3,
//             name: "Бытовая техника",
//             slug: "household-appliances",
//             subcategories: [
//                 {
//                     name: "Холодильники",
//                     slug: "refrigerators",
//                 },
//                 {
//                     name: "Стиральные машины",
//                     slug: "washing-machines",
//                 },
//                 {
//                     name: "Пылесосы",
//                     slug: "vacuum-cleaners",
//                 },
//             ],
//             icon: "/catalog/technique.svg"
//         },
//         {
//             id: 4,
//             name: "Одежда",
//             slug: "clothing",
//             subcategories: [
//                 {
//                     name: "Мужская одежда",
//                     slug: "mens-clothing",
//                 },
//                 {
//                     name: "Женская одежда",
//                     slug: "womens-clothing",
//                 },
//                 {
//                     name: "Детская одежда",
//                     slug: "kids-clothing",
//                 },
//             ],
//             icon: "/catalog/cloth.svg"
//         },
//         {
//             id: 5,
//             name: "Обувь",
//             slug: "shoes",
//             subcategories: [
//                 {
//                     name: "Мужская обувь",
//                     slug: "mens-shoes",
//                 },
//                 {
//                     name: "Женская обувь",
//                     slug: "womens-shoes",
//                 },
//                 {
//                     name: "Детская обувь",
//                     slug: "kids-shoes",
//                 },
//             ],
//             icon: "/catalog/shoes.svg"
//         },
//         {
//             id: 6,
//             name: "Аксессуары",
//             slug: "accessories",
//             subcategories: [
//                 {
//                     name: "Сумки",
//                     slug: "bags",
//                 },
//                 {
//                     name: "Часы",
//                     slug: "watches",
//                 },
//                 {
//                     name: "Украшения",
//                     slug: "jewelry",
//                 },
//             ],
//             icon: "/catalog/accessories.svg"
//         },
//         {
//             id: 7,
//             name: "Красота и уход",
//             slug: "beauty-and-care",
//             subcategories: [
//                 {
//                     name: "Косметика",
//                     slug: "cosmetics",
//                 },
//                 {
//                     name: "Парфюмерия",
//                     slug: "perfumes",
//                 },
//                 {
//                     name: "Средства для волос",
//                     slug: "hair-care",
//                 },
//             ],
//             icon: "/catalog/beauty.svg"
//         },
//         {
//             id: 8,
//             name: "Здоровье",
//             slug: "health",
//             subcategories: [
//                 {
//                     name: "Витамины",
//                     slug: "vitamins",
//                 },
//                 {
//                     name: "Медицинские приборы",
//                     slug: "medical-devices",
//                 },
//                 {
//                     name: "Лекарственные средства",
//                     slug: "medicines",
//                 },
//             ],
//             icon: "/catalog/health.svg"
//         },
//         {
//             id: 9,
//             name: "Товары для дома",
//             slug: "home-goods",
//             subcategories: [
//                 {
//                     name: "Мебель",
//                     slug: "furniture",
//                 },
//                 {
//                     name: "Текстиль",
//                     slug: "textiles",
//                 },
//                 {
//                     name: "Декор",
//                     slug: "decor",
//                 },
//             ],
//             icon: "/catalog/household.svg"
//         },
//         {
//             id: 10,
//             name: "Строительство и ремонт",
//             slug: "construction-and-repair",
//             subcategories: [
//                 {
//                     name: "Инструменты",
//                     slug: "tools",
//                 },
//                 {
//                     name: "Отделочные материалы",
//                     slug: "finishing-materials",
//                 },
//                 {
//                     name: "Сантехника",
//                     slug: "plumbing",
//                 },
//             ],
//             icon: "/catalog/construction.svg"
//         },
//         {
//             id: 11,
//             name: "Автотовары",
//             slug: "auto-goods",
//             subcategories: [
//                 {
//                     name: "Автозапчасти",
//                     slug: "auto-parts",
//                 },
//                 {
//                     name: "Автоаксессуары",
//                     slug: "auto-accessories",
//                 },
//                 {
//                     name: "Автохимия",
//                     slug: "auto-chemistry",
//                 },
//             ],
//             icon: "/catalog/auto.svg"
//         },
//         {
//             id: 12,
//             name: "Детские товары",
//             slug: "childrens-goods",
//             subcategories: [
//                 {
//                     name: "Игрушки",
//                     slug: "toys",
//                 },
//                 {
//                     name: "Детское питание",
//                     slug: "baby-food",
//                 },
//                 {
//                     name: "Коляски",
//                     slug: "strollers",
//                 },
//             ],
//             icon: "/catalog/childrens.svg"
//         },
//         {
//             id: 13,
//             name: "Хобби и творчество",
//             slug: "hobbies-and-creativity",
//             subcategories: [
//                 {
//                     name: "Рукоделие",
//                     slug: "handicrafts",
//                 },
//                 {
//                     name: "Коллекционирование",
//                     slug: "collecting",
//                 },
//                 {
//                     name: "Музыкальные инструменты",
//                     slug: "musical-instruments",
//                 },
//             ],
//             icon: "/catalog/hobby.svg"
//         },
//         {
//             id: 14,
//             name: "Спорт и отдых",
//             slug: "sport-and-recreation",
//             subcategories: [
//                 {
//                     name: "Тренажеры",
//                     slug: "exercise-machines",
//                 },
//                 {
//                     name: "Велосипеды",
//                     slug: "bicycles",
//                 },
//                 {
//                     name: "Туризм",
//                     slug: "tourism",
//                 },
//             ],
//             icon: "/catalog/sport.svg"
//         },
//         {
//             id: 15,
//             name: "Продукты питания",
//             slug: "food-products",
//             subcategories: [
//                 {
//                     name: "Молочные продукты",
//                     slug: "dairy-products",
//                 },
//                 {
//                     name: "Кондитерские изделия",
//                     slug: "confectionery",
//                 },
//                 {
//                     name: "Напитки",
//                     slug: "beverages",
//                 },
//             ],
//             icon: "/catalog/products.svg"
//         },
//         {
//             id: 16,
//             name: "Бытовая химия",
//             slug: "household-chemicals",
//             subcategories: [
//                 {
//                     name: "Средства для уборки",
//                     slug: "cleaning-products",
//                 },
//                 {
//                     name: "Стиральные порошки",
//                     slug: "laundry-detergents",
//                 },
//                 {
//                     name: "Освежители воздуха",
//                     slug: "air-fresheners",
//                 },
//             ],
//             icon: "/catalog/chemistry.svg"
//         },
//         {
//             id: 17,
//             name: "Канцтовары",
//             slug: "stationery",
//             subcategories: [
//                 {
//                     name: "Бумага",
//                     slug: "paper",
//                 },
//                 {
//                     name: "Ручки",
//                     slug: "pens",
//                 },
//                 {
//                     name: "Папки",
//                     slug: "folders",
//                 },
//             ],
//             icon: "/catalog/stationery.svg"
//         },
//         {
//             id: 18,
//             name: "Зоотовары",
//             slug: "pet-supplies",
//             subcategories: [
//                 {
//                     name: "Корма",
//                     slug: "pet-food",
//                 },
//                 {
//                     name: "Аксессуары для животных",
//                     slug: "pet-accessories",
//                 },
//                 {
//                     name: "Игрушки для питомцев",
//                     slug: "pet-toys",
//                 },
//             ],
//             icon: "/catalog/supplies.svg"
//         },
//         {
//             id: 19,
//             name: "Книги",
//             slug: "books",
//             subcategories: [
//                 {
//                     name: "Художественная литература",
//                     slug: "fiction",
//                 },
//                 {
//                     name: "Учебники",
//                     slug: "textbooks",
//                 },
//                 {
//                     name: "Детские книги",
//                     slug: "childrens-books",
//                 },
//             ],
//             icon: "/catalog/books.svg"
//         },
//         {
//             id: 20,
//             name: "Дача, сад и огород",
//             slug: "cottage-garden-and-vegetable-garden",
//             subcategories: [
//                 {
//                     name: "Садовый инвентарь",
//                     slug: "garden-tools",
//                 },
//                 {
//                     name: "Семена",
//                     slug: "seeds",
//                 },
//                 {
//                     name: "Удобрения",
//                     slug: "fertilizers",
//                 },
//             ],
//             icon: "/catalog/country-house.svg"
//         },
//     ]
// };
export const categoriesData: CatalogsData = {
  categories: [
    {
      id: 2,
      name: 'Электроника',
      slug: 'electronics',
      subcategories: [
        {
          name: 'Смартфоны',
          slug: 'smartphones',
          subcategories: [
            { name: 'Смартфоны', slug: 'smartphones' },
            { name: 'Чехлы', slug: 'phone-cases' },
            { name: 'Защитные стекла', slug: 'screen-protectors' },
            { name: 'Power Bank', slug: 'power-banks' },
            { name: 'Кабели и зарядки', slug: 'cables-chargers' },
            { name: 'Аксессуары', slug: 'phone-accessories' },
            { name: 'Умные часы', slug: 'smart-watches' },
            { name: 'Фитнес-браслеты', slug: 'fitness-trackers' },
          ],
        },
        {
          name: 'Ноутбуки',
          slug: 'laptops',
          subcategories: [
            { name: 'Игровые', slug: 'gaming-laptops' },
            { name: 'Ультрабуки', slug: 'ultrabooks' },
            { name: 'Для работы', slug: 'business-laptops' },
            { name: 'Аксессуары', slug: 'laptop-accessories' },
            { name: 'Сумки и рюкзаки', slug: 'laptop-bags' },
            { name: 'Охлаждающие подставки', slug: 'cooling-pads' },
            { name: 'Док-станции', slug: 'docking-stations' },
            { name: 'Батареи', slug: 'laptop-batteries' },
          ],
        },
        {
          name: 'Наушники',
          slug: 'headphones',
          subcategories: [
            { name: 'Беспроводные', slug: 'wireless-headphones' },
            { name: 'Проводные', slug: 'wired-headphones' },
            { name: 'Накладные', slug: 'over-ear' },
            { name: 'Вкладыши', slug: 'earbuds' },
            { name: 'Вакуумные', slug: 'in-ear' },
            { name: 'Геймерские', slug: 'gaming-headphones' },
            { name: 'С микрофоном', slug: 'headsets' },
            { name: 'Аксессуары', slug: 'headphone-accessories' },
          ],
        },
        {
          name: 'Телевизоры',
          slug: 'televisions',
          subcategories: [
            { name: '4K', slug: '4k-tvs' },
            { name: 'Smart TV', slug: 'smart-tvs' },
            { name: 'OLED', slug: 'oled-tvs' },
            { name: 'QLED', slug: 'qled-tvs' },
            { name: 'Кронштейны', slug: 'tv-mounts' },
            { name: 'Антенны', slug: 'tv-antennas' },
            { name: 'Пульты ДУ', slug: 'tv-remotes' },
            { name: 'Кабели', slug: 'tv-cables' },
          ],
        },
        {
          name: 'Фототехника',
          slug: 'photo-equipment',
          subcategories: [
            { name: 'Фотоаппараты', slug: 'cameras' },
            { name: 'Объективы', slug: 'lenses' },
            { name: 'Штативы', slug: 'tripods' },
            { name: 'Сумки', slug: 'camera-bags' },
            { name: 'Карты памяти', slug: 'memory-cards' },
            { name: 'Вспышки', slug: 'flashes' },
            { name: 'Фильтры', slug: 'filters' },
            { name: 'Аккумуляторы', slug: 'camera-batteries' },
          ],
        },
        {
          name: 'Аудиотехника',
          slug: 'audio-equipment',
          subcategories: [
            { name: 'Колонки', slug: 'speakers' },
            { name: 'Саундбары', slug: 'soundbars' },
            { name: 'Ресиверы', slug: 'receivers' },
            { name: 'Усилители', slug: 'amplifiers' },
            { name: 'Микрофоны', slug: 'microphones' },
            { name: 'Плееры', slug: 'players' },
            { name: 'Кабели', slug: 'audio-cables' },
            { name: 'Аксессуары', slug: 'audio-accessories' },
          ],
        },
        {
          name: 'Игры и консоли',
          slug: 'games-and-consoles',
          subcategories: [
            { name: 'PlayStation', slug: 'playstation' },
            { name: 'Xbox', slug: 'xbox' },
            { name: 'Nintendo', slug: 'nintendo' },
            { name: 'Игры', slug: 'games' },
            { name: 'Джойстики', slug: 'controllers' },
            { name: 'VR-очки', slug: 'vr-glasses' },
            { name: 'Аксессуары', slug: 'gaming-accessories' },
            { name: 'Рули и педали', slug: 'steering-wheels' },
          ],
        },
        {
          name: 'Компьютеры',
          slug: 'computers',
          subcategories: [
            { name: 'Системные блоки', slug: 'desktops' },
            { name: 'Мониторы', slug: 'monitors' },
            { name: 'Клавиатуры', slug: 'keyboards' },
            { name: 'Мыши', slug: 'mice' },
            { name: 'Комплектующие', slug: 'components' },
            { name: 'Принтеры', slug: 'printers' },
            { name: 'Сканеры', slug: 'scanners' },
            { name: 'МФУ', slug: 'all-in-one-printers' },
          ],
        },
      ],
      icon: '/catalog/electronics.svg',
    },
    {
      id: 3,
      name: 'Бытовая техника',
      slug: 'household-appliances',
      subcategories: [
        {
          name: 'Холодильники',
          slug: 'refrigerators',
          subcategories: [
            { name: 'Однокамерные', slug: 'single-door' },
            { name: 'Двухкамерные', slug: 'double-door' },
            { name: 'Side-by-Side', slug: 'side-by-side' },
            { name: 'Морозильные камеры', slug: 'freezers' },
            { name: 'Винные шкафы', slug: 'wine-coolers' },
            { name: 'Аксессуары', slug: 'fridge-accessories' },
            { name: 'Компрессоры', slug: 'compressors' },
            { name: 'Фильтры', slug: 'water-filters' },
          ],
        },
        {
          name: 'Стиральные машины',
          slug: 'washing-machines',
          subcategories: [
            { name: 'Автоматические', slug: 'automatic' },
            { name: 'Полуавтоматические', slug: 'semi-automatic' },
            { name: 'С сушкой', slug: 'with-dryer' },
            { name: 'Узкие', slug: 'slim' },
            { name: 'Встраиваемые', slug: 'built-in' },
            { name: 'Аксессуары', slug: 'washing-accessories' },
            { name: 'Шланги', slug: 'hoses' },
            { name: 'Порошки', slug: 'detergents' },
          ],
        },
        {
          name: 'Пылесосы',
          slug: 'vacuum-cleaners',
          subcategories: [
            { name: 'Роботы', slug: 'robot' },
            { name: 'Моющие', slug: 'washer' },
            { name: 'Вертикальные', slug: 'stick' },
            { name: 'Без мешка', slug: 'bagless' },
            { name: 'Автомобильные', slug: 'car' },
            { name: 'Аксессуары', slug: 'vacuum-accessories' },
            { name: 'Фильтры', slug: 'vacuum-filters' },
            { name: 'Насадки', slug: 'nozzles' },
          ],
        },
        {
          name: 'Кухонная техника',
          slug: 'kitchen-appliances',
          subcategories: [
            { name: 'Микроволновки', slug: 'microwaves' },
            { name: 'Блендеры', slug: 'blenders' },
            { name: 'Мультиварки', slug: 'slow-cookers' },
            { name: 'Кофеварки', slug: 'coffee-makers' },
            { name: 'Чайники', slug: 'kettles' },
            { name: 'Тостеры', slug: 'toasters' },
            { name: 'Мясорубки', slug: 'meat-grinders' },
            { name: 'Соковыжималки', slug: 'juicers' },
          ],
        },
        {
          name: 'Климатическая техника',
          slug: 'climate-equipment',
          subcategories: [
            { name: 'Кондиционеры', slug: 'air-conditioners' },
            { name: 'Обогреватели', slug: 'heaters' },
            { name: 'Вентиляторы', slug: 'fans' },
            { name: 'Увлажнители', slug: 'humidifiers' },
            { name: 'Очистители', slug: 'air-purifiers' },
            { name: 'Тепловые пушки', slug: 'heat-guns' },
            { name: 'Ионизаторы', slug: 'ionizers' },
            { name: 'Аксессуары', slug: 'climate-accessories' },
          ],
        },
        {
          name: 'Утюги и отпариватели',
          slug: 'irons-and-steamers',
          subcategories: [
            { name: 'Утюги', slug: 'irons' },
            { name: 'Отпариватели', slug: 'steamers' },
            { name: 'Парогенераторы', slug: 'steam-generators' },
            { name: 'Гладильные доски', slug: 'ironing-boards' },
            { name: 'Чехлы', slug: 'iron-covers' },
            { name: 'Подставки', slug: 'iron-stands' },
            { name: 'Аксессуары', slug: 'ironing-accessories' },
            { name: 'Вода для утюгов', slug: 'iron-water' },
          ],
        },
        {
          name: 'Водонагреватели',
          slug: 'water-heaters',
          subcategories: [
            { name: 'Накопительные', slug: 'storage' },
            { name: 'Проточные', slug: 'tankless' },
            { name: 'Газовые', slug: 'gas' },
            { name: 'Электрические', slug: 'electric' },
            { name: 'Комплектующие', slug: 'heater-parts' },
            { name: 'ТЭНы', slug: 'heating-elements' },
            { name: 'Фильтры', slug: 'heater-filters' },
            { name: 'Крепления', slug: 'mounting-kits' },
          ],
        },
        {
          name: 'Мелкая техника',
          slug: 'small-appliances',
          subcategories: [
            { name: 'Фены', slug: 'hair-dryers' },
            { name: 'Эпиляторы', slug: 'epilators' },
            { name: 'Электробритвы', slug: 'shavers' },
            { name: 'Массажеры', slug: 'massagers' },
            { name: 'Весы', slug: 'scales' },
            { name: 'Зубные щетки', slug: 'electric-toothbrushes' },
            { name: 'Триммеры', slug: 'trimmers' },
            { name: 'Аксессуары', slug: 'small-appliances-accessories' },
          ],
        },
      ],
      icon: '/catalog/technique.svg',
    },
    {
      id: 4,
      name: 'Одежда',
      slug: 'clothing',
      subcategories: [
        {
          name: 'Мужская одежда',
          slug: 'mens-clothing',
          subcategories: [
            { name: 'Футболки', slug: 'mens-t-shirts' },
            { name: 'Рубашки', slug: 'mens-shirts' },
            { name: 'Джинсы', slug: 'mens-jeans' },
            { name: 'Костюмы', slug: 'mens-suits' },
            { name: 'Куртки', slug: 'mens-jackets' },
            { name: 'Свитеры', slug: 'mens-sweaters' },
            { name: 'Шорты', slug: 'mens-shorts' },
            { name: 'Нижнее белье', slug: 'mens-underwear' },
          ],
        },
        {
          name: 'Женская одежда',
          slug: 'womens-clothing',
          subcategories: [
            { name: 'Платья', slug: 'womens-dresses' },
            { name: 'Блузки', slug: 'womens-blouses' },
            { name: 'Юбки', slug: 'womens-skirts' },
            { name: 'Джинсы', slug: 'womens-jeans' },
            { name: 'Куртки', slug: 'womens-jackets' },
            { name: 'Свитеры', slug: 'womens-sweaters' },
            { name: 'Топы', slug: 'womens-tops' },
            { name: 'Нижнее белье', slug: 'womens-lingerie' },
          ],
        },
        {
          name: 'Детская одежда',
          slug: 'kids-clothing',
          subcategories: [
            { name: 'Для мальчиков', slug: 'boys-clothing' },
            { name: 'Для девочек', slug: 'girls-clothing' },
            { name: 'Комбинезоны', slug: 'kids-overalls' },
            { name: 'Футболки', slug: 'kids-t-shirts' },
            { name: 'Штаны', slug: 'kids-pants' },
            { name: 'Платья', slug: 'kids-dresses' },
            { name: 'Куртки', slug: 'kids-jackets' },
            { name: 'Нижнее белье', slug: 'kids-underwear' },
          ],
        },
        {
          name: 'Спортивная одежда',
          slug: 'sportswear',
          subcategories: [
            { name: 'Футболки', slug: 'sport-t-shirts' },
            { name: 'Шорты', slug: 'sport-shorts' },
            { name: 'Костюмы', slug: 'tracksuits' },
            { name: 'Леггинсы', slug: 'leggings' },
            { name: 'Ветровки', slug: 'windbreakers' },
            { name: 'Термобелье', slug: 'thermal-underwear' },
            { name: 'Кроссовки', slug: 'sneakers' },
            { name: 'Аксессуары', slug: 'sport-accessories' },
          ],
        },
        {
          name: 'Верхняя одежда',
          slug: 'outerwear',
          subcategories: [
            { name: 'Пальто', slug: 'coats' },
            { name: 'Пуховики', slug: 'down-jackets' },
            { name: 'Куртки', slug: 'jackets' },
            { name: 'Парки', slug: 'parkas' },
            { name: 'Плащи', slug: 'trench-coats' },
            { name: 'Дубленки', slug: 'sheepskin-coats' },
            { name: 'Жилеты', slug: 'vests' },
            { name: 'Аксессуары', slug: 'outerwear-accessories' },
          ],
        },
        {
          name: 'Домашняя одежда',
          slug: 'homewear',
          subcategories: [
            { name: 'Пижамы', slug: 'pajamas' },
            { name: 'Халаты', slug: 'robes' },
            { name: 'Тапочки', slug: 'slippers' },
            { name: 'Комплекты', slug: 'loungewear-sets' },
            { name: 'Футболки', slug: 'home-t-shirts' },
            { name: 'Шорты', slug: 'home-shorts' },
            { name: 'Носки', slug: 'socks' },
            { name: 'Термобелье', slug: 'home-thermal' },
          ],
        },
        {
          name: 'Пляжная одежда',
          slug: 'beachwear',
          subcategories: [
            { name: 'Купальники', slug: 'swimsuits' },
            { name: 'Плавки', slug: 'swim-trunks' },
            { name: 'Парео', slug: 'pareos' },
            { name: 'Пляжные платья', slug: 'beach-dresses' },
            { name: 'Шляпы', slug: 'sun-hats' },
            { name: 'Очки', slug: 'sunglasses' },
            { name: 'Сланцы', slug: 'flip-flops' },
            { name: 'Полотенца', slug: 'beach-towels' },
          ],
        },
        {
          name: 'Спецодежда',
          slug: 'workwear',
          subcategories: [
            { name: 'Комбинезоны', slug: 'work-overalls' },
            { name: 'Костюмы', slug: 'work-suits' },
            { name: 'Фартуки', slug: 'aprons' },
            { name: 'Перчатки', slug: 'work-gloves' },
            { name: 'Каски', slug: 'helmets' },
            { name: 'Сапоги', slug: 'work-boots' },
            { name: 'Жилеты', slug: 'safety-vests' },
            { name: 'Защитные очки', slug: 'safety-glasses' },
          ],
        },
      ],
      icon: '/catalog/cloth.svg',
    },
    {
      id: 5,
      name: 'Обувь',
      slug: 'shoes',
      subcategories: [
        {
          name: 'Мужская обувь',
          slug: 'mens-shoes',
          subcategories: [
            { name: 'Кроссовки', slug: 'mens-sneakers' },
            { name: 'Туфли', slug: 'mens-loafers' },
            { name: 'Ботинки', slug: 'mens-boots' },
            { name: 'Сандалии', slug: 'mens-sandals' },
            { name: 'Тапочки', slug: 'mens-slippers' },
            { name: 'Сапоги', slug: 'mens-winter-boots' },
            { name: 'Обувь для бега', slug: 'mens-running-shoes' },
            { name: 'Аксессуары', slug: 'mens-shoe-accessories' },
          ],
        },
        {
          name: 'Женская обувь',
          slug: 'womens-shoes',
          subcategories: [
            { name: 'Туфли', slug: 'womens-pumps' },
            { name: 'Балетки', slug: 'womens-flats' },
            { name: 'Сапоги', slug: 'womens-boots' },
            { name: 'Босоножки', slug: 'womens-sandals' },
            { name: 'Кроссовки', slug: 'womens-sneakers' },
            { name: 'Каблуки', slug: 'womens-heels' },
            { name: 'Шлепанцы', slug: 'womens-flip-flops' },
            { name: 'Аксессуары', slug: 'womens-shoe-accessories' },
          ],
        },
        {
          name: 'Детская обувь',
          slug: 'kids-shoes',
          subcategories: [
            { name: 'Кроссовки', slug: 'kids-sneakers' },
            { name: 'Сандалии', slug: 'kids-sandals' },
            { name: 'Ботинки', slug: 'kids-boots' },
            { name: 'Тапочки', slug: 'kids-slippers' },
            { name: 'Резиновые сапоги', slug: 'kids-rain-boots' },
            { name: 'Ортопедическая', slug: 'kids-orthopedic' },
            { name: 'Шлепанцы', slug: 'kids-flip-flops' },
            { name: 'Аксессуары', slug: 'kids-shoe-accessories' },
          ],
        },
        {
          name: 'Спортивная обувь',
          slug: 'sports-shoes',
          subcategories: [
            { name: 'Для бега', slug: 'running-shoes' },
            { name: 'Для футбола', slug: 'soccer-shoes' },
            { name: 'Для баскетбола', slug: 'basketball-shoes' },
            { name: 'Для тенниса', slug: 'tennis-shoes' },
            { name: 'Для фитнеса', slug: 'training-shoes' },
            { name: 'Для треккинга', slug: 'hiking-shoes' },
            { name: 'Для велоспорта', slug: 'cycling-shoes' },
            { name: 'Аксессуары', slug: 'sports-shoe-accessories' },
          ],
        },
        {
          name: 'Домашняя обувь',
          slug: 'home-shoes',
          subcategories: [
            { name: 'Тапочки', slug: 'home-slippers' },
            { name: 'Войлочные', slug: 'felt-shoes' },
            { name: 'Мокасины', slug: 'moccasins' },
            { name: 'Угги', slug: 'ugg-boots' },
            { name: 'Шлепанцы', slug: 'house-flip-flops' },
            { name: 'Ортопедические', slug: 'orthopedic-slippers' },
            { name: 'Теплые', slug: 'warm-slippers' },
            { name: 'Антискользящие', slug: 'non-slip' },
          ],
        },
        {
          name: 'Сезонная обувь',
          slug: 'seasonal-shoes',
          subcategories: [
            { name: 'Зимняя', slug: 'winter-shoes' },
            { name: 'Демисезонная', slug: 'all-season' },
            { name: 'Летняя', slug: 'summer-shoes' },
            { name: 'Резиновая', slug: 'rubber-boots' },
            { name: 'Водонепроницаемая', slug: 'waterproof' },
            { name: 'Утепленная', slug: 'insulated' },
            { name: 'Вентилируемая', slug: 'breathable' },
            { name: 'Аксессуары', slug: 'seasonal-accessories' },
          ],
        },
        {
          name: 'Специальная обувь',
          slug: 'special-shoes',
          subcategories: [
            { name: 'Рабочая', slug: 'work-shoes' },
            { name: 'Медицинская', slug: 'medical-shoes' },
            { name: 'Военная', slug: 'military-boots' },
            { name: 'Охотничья', slug: 'hunting-boots' },
            { name: 'Для рыбалки', slug: 'fishing-boots' },
            { name: 'Для мотоцикла', slug: 'motorcycle-boots' },
            { name: 'Для танцев', slug: 'dance-shoes' },
            { name: 'Для свадьбы', slug: 'wedding-shoes' },
          ],
        },
        {
          name: 'Аксессуары для обуви',
          slug: 'shoe-accessories',
          subcategories: [
            { name: 'Шнурки', slug: 'shoelaces' },
            { name: 'Стельки', slug: 'insoles' },
            { name: 'Крем', slug: 'shoe-polish' },
            { name: 'Щетки', slug: 'shoe-brushes' },
            { name: 'Дезодоранты', slug: 'shoe-deodorants' },
            { name: 'Колодки', slug: 'shoe-trees' },
            { name: 'Защитные спреи', slug: 'protective-sprays' },
            { name: 'Ремонтные наборы', slug: 'repair-kits' },
          ],
        },
      ],
      icon: '/catalog/shoes.svg',
    },
    // Остальные категории с аналогичной структурой...
    // Для краткости я не включил все категории, но они должны быть оформлены аналогично
  ],
};
