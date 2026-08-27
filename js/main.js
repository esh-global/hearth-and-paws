/* ── TRANSLATIONS ────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    nav_about: "About", nav_services: "Services", nav_reviews: "Reviews",
    nav_contact: "Contact", nav_book: "Book Now",
    hero_location: "Available Wherever My Travels Take Me (but, usually New York City)",
    hero_h1: "Your home, <em>cared for.</em><br>Your pets, <em>adored.</em>",
    hero_lead: "Professional house, pet sitting & dog walking with the warmth, reliability, and attention to detail that lets you travel without a second thought.",
    hero_btn1: "Request a Booking", hero_btn2: "See Services",
    pill_1: "Home-Trusted", pill_2: "Pet-First Care", pill_3: "Daily Updates", pill_4: "Background Checked",
    about_tag: "About Erika", about_h2: "Hi, I'm Erika.",
    about_p1: "I'm a New York City (born and raised) professional with a decade of experience managing high-stakes client relationships and complex operations. But this isn't just limited to the office! During a 5 year stint in Spain, I taught English privately and at a high school in Vallecas, Madrid, and obtained an MBA! My love for animals found me pet sitting for clients in Spain, Arizona, Taiwan, Miami, and my home-base, NY.",
    about_p2: "I bring the same standard of care, precision, and genuine investment to every home I sit for and every fur baby I care for.",
    about_p3: "I treat your home as if it were mine and your pets as if they were family. Daily photo and video updates, strict routine adherence, and round-the-clock availability — every time.",
    about_li1: "Background-checked, references available upon request",
    about_li2: "Daily photo & video updates via your preferred app",
    about_li3: "Strict adherence to feeding schedules & house rules",
    about_li4: "Plant care, mail collection & security checks included",
    about_li5: "Multilingual: English, Spanish, Italian, Mandarin & elementary German",
    divider: "Introducing our Chief of Staff",
    k_tag: "Chief of Staff", k_h2: "Meet Khaleesi.",
    k_intro: "14 years young. Shih-Tzu Poodle. Cancer survivor. Certified road warrior.",
    k_p1: "Khaleesi is the heart behind Hearth & Paws. A sun-loving, scent-led adventurer who has survived cancer with the grace of a queen, she has kept her nose out the car window through every road trip, and has never once taken a walk she didn't personally curate.",
    k_p2: "She is proof that animals deserve patience, intention, and a whole lot of love. Every pet I care for, I bring Khaleesi's standard with me.",
    k_b1: "Chief Scent Officer", k_b2: "Sun Bon-Vivant", k_b3: "Road Warrior", k_b4: "Cancer Survivor", k_b5: "Mind of Her Own",
    gallery_tag: "Pets I've Cared For", gallery_h3: "A few familiar faces.", coming_soon: "Coming Soon",
    svc_tag: "What I Offer", svc_h2: "Services & Pricing*",
    svc_lead: "All overnight services include daily photo/video updates, plant care, mail collection, and 24/7 availability. Based in NYC — and available wherever my travels take me. Reach out to check availability for your location; I may be where you need me, worldwide!<br><br>*Please inquire directly if your dog is over 50 lbs for any of the services below.",
    svc1_h: "Overnight House Sitting", svc1_p: "I stay in your home overnight, maintaining your full routine — feeding, walks, playtime, and security checks.", svc1_price: "From $75", svc1_unit: "/ night",
    svc2_h: "Extended Stay", svc2_p: "6+ night stays with full home management — pet care, plant watering, mail, and daily check-ins with you.", svc2_price: "From $65", svc2_unit: "/ night",
    svc3_h: "Drop-In Visit", svc3_p: "30–60 minute visits for feeding, a walk, or a home check. Pricing based on location.", svc3_price: "From $30", svc3_unit: "/ visit",
    svc4_h: "Dog Walking", svc4_p: "30 or 60-minute walks with a post-walk report card and photo update sent straight to you.", svc4_price: "From $25", svc4_unit: "/ walk",
    svc5_h: "Home Watch", svc5_p: "Regular home checks, mail collection, plant watering, and security walkthroughs. No pets required.", svc5_price: "From $40", svc5_unit: "/ visit",
    svc6_h: "Custom Package", svc6_p: "Unique needs? Let's build something around your schedule, pets, and home.", svc6_price: "Custom Pricing", svc6_unit: "",
    btn_book_this: "Book This", btn_get_touch: "Get in Touch", badge_popular: "Most Popular",
    rev_tag: "Client Reviews", rev_h2: "What Clients Say", rev_lead: "All reviews are submitted by verified clients and approved before appearing here.",
    rev_invite: "Had a great experience? I'd genuinely love to hear from you.", rev_btn: "Leave a Review",
    lr_tag: "Share Your Experience", lr_h2: "Leave a Review", lr_lead: "Submitted reviews are held for approval before appearing publicly.",
    lr_name: "Your Name *", lr_svc: "Service Used *", lr_select: "Select a service", lr_overall: "Overall Rating *", lr_areas: "Rate each area",
    lr_r1: "Home Cleanliness", lr_r2: "Communication & Updates", lr_r3: "Adherence to House Rules",
    lr_r4: "Pet & Feeding Care", lr_r5: "Punctuality & Reliability", lr_r6: "Safety & Security",
    lr_r7: "Plant Care (if applicable)", lr_r8: "Stayed for Agreed Time", lr_r9: "No Unauthorized Guests", lr_r10: "Would Recommend",
    lr_review: "Your Review *", lr_pets: "Pet Name(s)", lr_optional: "optional",
    lr_submit: "Submit Review", lr_note: "Reviews are approved before appearing publicly. Thank you!",
    lr_success_h: "Thank you!", lr_success_p: "Your review will appear once approved. I truly appreciate it.",
    con_tag: "Get in Touch", con_h2: "Have a question first?",
    con_p: "I'm always happy to chat before you book — about your pets, your home, your routines, or anything else. Reach out anytime.",
    con_name: "Your Name *", con_email: "Email *", con_msg: "Message *", con_send: "Send Message",
    con_success_h: "Message sent!", con_success_p: "I'll reply within a few hours.",
    book_tag: "Book a Service", book_h2: "Request a Booking", book_lead: "Fill out the form and I'll get back to you within 24 hours. No payment collected here.",
    book_name: "Full Name *", book_email: "Email Address *", book_phone: "Phone Number",
    book_loc: "Location / Neighborhood *", book_svc: "Service Requested *", book_pets: "Number of Pets",
    book_start: "Start Date *", book_end: "End Date *", book_details: "Pet Details",
    book_details_hint: "breed, age, special needs", book_special: "Special Instructions or Questions",
    book_cb1: "I'd like a meet & greet before confirming", book_cb2: "I have plants that need watering", book_cb3: "I need mail & package collection",
    book_ref: "How did you hear about Hearth & Paws?",
    book_submit: "Send Booking Request", book_note: "I'll be in touch within 24 hours. Can't wait to meet your home — and your pets.",
    book_success_h: "Booking request received!", book_success_p: "I'll reach out within 24 hours to confirm your dates.",
    footer_sub: "Trusted house & pet sitting · Available wherever I am",
    footer_copy: "© 2026 Hearth & Paws · Rico's Closet LLC · All rights reserved",
    footer_k: "Made with love — and Khaleesi's approval",
  },

  es: {
    nav_about: "Sobre Mí", nav_services: "Servicios", nav_reviews: "Reseñas",
    nav_contact: "Contacto", nav_book: "Reservar",
    hero_location: "Disponible Dondequiera que Mis Viajes me Lleven (pero, usualmente en Nueva York)",
    hero_h1: "Tu hogar, <em>en buenas manos.</em><br>Tus mascotas, <em>adoradas.</em>",
    hero_lead: "Cuidado profesional de casas, mascotas y paseos de perros con la calidez, confiabilidad y atención al detalle que te permite viajar sin preocupaciones.",
    hero_btn1: "Solicitar una Reserva", hero_btn2: "Ver Servicios",
    pill_1: "Hogar de Confianza", pill_2: "Mascotas Primero", pill_3: "Actualizaciones Diarias", pill_4: "Verificación de Antecedentes",
    about_tag: "Sobre Erika", about_h2: "Hola, soy Erika.",
    about_p1: "Soy una profesional nacida y criada en Nueva York, con una década de experiencia gestionando relaciones con clientes importantes y operaciones complejas. ¡Pero esto no se limita solo a la oficina! Durante una estancia de 5 años en España, enseñé inglés de forma privada y en un instituto en Vallecas, Madrid, ¡y obtuve un MBA! Mi amor por los animales me llevó a cuidar mascotas para clientes en España, Arizona, Taiwán, Miami y mi base, Nueva York.",
    about_p2: "Aporto el mismo estándar de cuidado, precisión e inversión genuina a cada hogar que cuido y a cada pequeño peludo que mimo.",
    about_p3: "Trato tu hogar como si fuera el mío y a tus mascotas como si fueran mi familia. Actualizaciones diarias con fotos y videos, seguimiento estricto de rutinas y disponibilidad las 24 horas.",
    about_li1: "Verificación de antecedentes, referencias disponibles bajo solicitud",
    about_li2: "Actualizaciones diarias con fotos y videos por tu app preferida",
    about_li3: "Cumplimiento estricto de horarios de alimentación y reglas del hogar",
    about_li4: "Cuidado de plantas, recolección de correo y revisiones de seguridad incluidas",
    about_li5: "Multilingüe: inglés, español, italiano, mandarín y alemán básico",
    divider: "Presentando a nuestra Jefa de Personal",
    k_tag: "Jefa de Personal", k_h2: "Conoce a Khaleesi.",
    k_intro: "14 años de joven. Shih-Tzu Poodle. Sobreviviente de cáncer. Guerrera de carretera.",
    k_p1: "Khaleesi es el corazón de Hearth & Paws. Una aventurera amante del sol que ha sobrevivido al cáncer con la gracia de una reina, ha mantenido su nariz fuera de la ventana del coche en cada viaje y nunca ha tomado un paseo que no haya curado personalmente.",
    k_p2: "Ella es prueba de que los animales merecen paciencia, intención y mucho amor. Con cada mascota que cuido, llevo el estándar de Khaleesi conmigo.",
    k_b1: "Oficial Olfativa Jefa", k_b2: "Bon-Vivant Solar", k_b3: "Guerrera de Carretera", k_b4: "Sobreviviente de Cáncer", k_b5: "Con Mente Propia",
    gallery_tag: "Mascotas que He Cuidado", gallery_h3: "Algunas caras conocidas.", coming_soon: "Próximamente",
    svc_tag: "Lo que Ofrezco", svc_h2: "Servicios y Precios*",
    svc_lead: "Todos los servicios nocturnos incluyen actualizaciones diarias de fotos/videos, cuidado de plantas, recolección de correo y disponibilidad 24/7. Con base en NYC — y disponible dondequiera que mis viajes me lleven. ¡Contáctame para verificar disponibilidad en tu ubicación; puede que ya esté donde me necesitas, en cualquier parte del mundo!<br><br>*Por favor consulta directamente si tu perro pesa más de 50 libras para cualquiera de los servicios.",
    svc1_h: "Cuidado Nocturno en Casa", svc1_p: "Me quedo en tu hogar durante la noche, manteniendo tu rutina completa — alimentación, paseos, juego y revisiones de seguridad.", svc1_price: "Desde $75", svc1_unit: "/ noche",
    svc2_h: "Estadía Extendida", svc2_p: "Estadías de 6+ noches con gestión completa del hogar — cuidado de mascotas, riego de plantas, correo y actualizaciones diarias.", svc2_price: "Desde $65", svc2_unit: "/ noche",
    svc3_h: "Visita Rápida", svc3_p: "Visitas de 30 a 60 minutos para alimentación, un paseo o revisión del hogar. Precio según ubicación.", svc3_price: "Desde $30", svc3_unit: "/ visita",
    svc4_h: "Paseo de Perros", svc4_p: "Paseos de 30 o 60 minutos con informe post-paseo y actualización fotográfica enviada directamente a ti.", svc4_price: "Desde $25", svc4_unit: "/ paseo",
    svc5_h: "Vigilancia del Hogar", svc5_p: "Revisiones regulares del hogar, recolección de correo, riego de plantas y recorridos de seguridad. No se requieren mascotas.", svc5_price: "Desde $40", svc5_unit: "/ visita",
    svc6_h: "Paquete Personalizado", svc6_p: "¿Necesidades únicas? Construyamos algo alrededor de tu horario, mascotas y hogar.", svc6_price: "Precio Personalizado", svc6_unit: "",
    btn_book_this: "Reservar", btn_get_touch: "Contáctame", badge_popular: "Más Popular",
    rev_tag: "Reseñas de Clientes", rev_h2: "Lo que Dicen los Clientes", rev_lead: "Todas las reseñas son enviadas por clientes verificados y aprobadas antes de aparecer aquí.",
    rev_invite: "¿Tuviste una gran experiencia? Me encantaría escucharte.", rev_btn: "Dejar una Reseña",
    lr_tag: "Comparte tu Experiencia", lr_h2: "Dejar una Reseña", lr_lead: "Las reseñas enviadas se retienen para aprobación antes de aparecer públicamente.",
    lr_name: "Tu Nombre *", lr_svc: "Servicio Utilizado *", lr_select: "Selecciona un servicio", lr_overall: "Calificación General *", lr_areas: "Califica cada área",
    lr_r1: "Limpieza del Hogar", lr_r2: "Comunicación y Actualizaciones", lr_r3: "Cumplimiento de Reglas",
    lr_r4: "Cuidado de Mascotas", lr_r5: "Puntualidad y Confiabilidad", lr_r6: "Seguridad",
    lr_r7: "Cuidado de Plantas", lr_r8: "Permaneció el Tiempo Acordado", lr_r9: "Sin Invitados No Autorizados", lr_r10: "Lo Recomendaría",
    lr_review: "Tu Reseña *", lr_pets: "Nombre(s) de Mascota(s)", lr_optional: "opcional",
    lr_submit: "Enviar Reseña", lr_note: "Las reseñas son aprobadas antes de aparecer públicamente. ¡Gracias!",
    lr_success_h: "¡Gracias!", lr_success_p: "Tu reseña aparecerá una vez aprobada. Lo aprecio mucho.",
    con_tag: "Contáctame", con_h2: "¿Tienes una pregunta primero?",
    con_p: "Siempre estoy feliz de charlar antes de reservar — sobre tus mascotas, tu hogar, tus rutinas o cualquier otra cosa. Contáctame en cualquier momento.",
    con_name: "Tu Nombre *", con_email: "Correo Electrónico *", con_msg: "Mensaje *", con_send: "Enviar Mensaje",
    con_success_h: "¡Mensaje enviado!", con_success_p: "Responderé en pocas horas.",
    book_tag: "Reservar un Servicio", book_h2: "Solicitar una Reserva", book_lead: "Completa el formulario y me pondré en contacto en 24 horas. No se cobra ningún pago aquí.",
    book_name: "Nombre Completo *", book_email: "Correo Electrónico *", book_phone: "Número de Teléfono",
    book_loc: "Ubicación / Barrio *", book_svc: "Servicio Solicitado *", book_pets: "Número de Mascotas",
    book_start: "Fecha de Inicio *", book_end: "Fecha de Fin *", book_details: "Detalles de Mascotas",
    book_details_hint: "raza, edad, necesidades especiales", book_special: "Instrucciones Especiales o Preguntas",
    book_cb1: "Me gustaría un encuentro previo antes de confirmar", book_cb2: "Tengo plantas que necesitan riego", book_cb3: "Necesito recolección de correo y paquetes",
    book_ref: "¿Cómo te enteraste de Hearth & Paws?",
    book_submit: "Enviar Solicitud de Reserva", book_note: "Me pondré en contacto en 24 horas. ¡No puedo esperar para conocer tu hogar y tus mascotas!",
    book_success_h: "¡Solicitud de reserva recibida!", book_success_p: "Me pondré en contacto en 24 horas para confirmar tus fechas.",
    footer_sub: "Cuidado profesional de casas y mascotas · Disponible donde sea que esté",
    footer_copy: "© 2026 Hearth & Paws · Rico's Closet LLC · Todos los derechos reservados",
    footer_k: "Hecho con amor — y la aprobación de Khaleesi",
  },

  zh: {
    nav_about: "关于我", nav_services: "服务", nav_reviews: "评价",
    nav_contact: "联系", nav_book: "立即预约",
    hero_location: "无论我走到哪里，都能为您服务（但通常在纽约市）",
    hero_h1: "您的家，<em>精心守护。</em><br>您的宠物，<em>深深爱护。</em>",
    hero_lead: "专业的房屋看护、宠物照看与遛狗服务，以温暖、可靠和细致入微的态度，让您安心出行，无后顾之忧。",
    hero_btn1: "申请预约", hero_btn2: "查看服务",
    pill_1: "值得信赖", pill_2: "宠物优先", pill_3: "每日更新", pill_4: "背景调查已通过",
    about_tag: "关于 Erika", about_h2: "您好，我是 Erika。",
    about_p1: "我是一位土生土长的纽约专业人士，拥有十年管理重要客户关系和复杂运营的经验。但这不仅限于办公室！在西班牙生活的5年间，我曾在马德里巴列卡斯的一所高中私下教授英语，并获得了MBA学位！对动物的热爱让我在西班牙、亚利桑那州、台湾、迈阿密以及我的大本营纽约为客户照看宠物。",
    about_p2: "我将同样的细心、精准和真诚投入到每一个我照看的家庭和每一只毛孩子身上。",
    about_p3: "我像对待自己的家一样对待您的家，像对待家人一样对待您的宠物。每日照片和视频更新，严格遵守日常作息，全天候随时待命。",
    about_li1: "已通过背景调查，可应要求提供参考",
    about_li2: "通过您偏好的应用每日发送照片和视频更新",
    about_li3: "严格遵守喂食时间表和家规",
    about_li4: "包含植物护理、邮件收取和安全检查",
    about_li5: "多语言服务：英语、西班牙语、意大利语、普通话及初级德语",
    divider: "介绍我们的首席参谋长",
    k_tag: "首席参谋长", k_h2: "认识 Khaleesi。",
    k_intro: "芳龄14岁。西施贵宾犬。癌症康复者。认证公路勇士。",
    k_p1: "Khaleesi 是 Hearth & Paws 的灵魂所在。她是一位热爱阳光、以嗅觉引路的冒险家，以女王般的优雅战胜了癌症，每次公路旅行都坚持把鼻子伸出车窗，从未走过一次不是她亲自策划的散步。",
    k_p2: "她证明了动物值得被耐心、用心和满满的爱对待。我照看的每一只宠物，都秉持着 Khaleesi 的标准。",
    k_b1: "首席嗅觉官", k_b2: "阳光享乐主义者", k_b3: "公路勇士", k_b4: "癌症康复者", k_b5: "独立自主",
    gallery_tag: "我照看过的宠物", gallery_h3: "几张熟悉的面孔。", coming_soon: "即将更新",
    svc_tag: "我的服务", svc_h2: "服务与价格*",
    svc_lead: "所有夜间服务均包含每日照片/视频更新、植物护理、邮件收取和全天候服务。总部位于纽约市——无论我走到哪里都能为您服务。请联系我确认您所在地区的服务可用性；我可能就在您需要的地方，全球范围内！<br><br>*如果您的狗超过50磅，请直接咨询以下任何服务。",
    svc1_h: "夜间房屋看护", svc1_p: "我在您家过夜，维持您的完整日常作息——喂食、遛狗、玩耍和安全检查。", svc1_price: "起价 $75", svc1_unit: "/ 晚",
    svc2_h: "长期入住", svc2_p: "6晚以上的全面家庭管理——宠物护理、植物浇水、邮件收取和每日向您汇报。", svc2_price: "起价 $65", svc2_unit: "/ 晚",
    svc3_h: "上门探访", svc3_p: "30至60分钟的上门喂食、遛狗或家庭检查。价格根据位置而定。", svc3_price: "起价 $30", svc3_unit: "/ 次",
    svc4_h: "遛狗服务", svc4_p: "30或60分钟的遛狗服务，遛完后发送报告卡和照片更新给您。", svc4_price: "起价 $25", svc4_unit: "/ 次",
    svc5_h: "房屋巡查", svc5_p: "定期房屋检查、邮件收取、植物浇水和安全巡查。无需宠物。", svc5_price: "起价 $40", svc5_unit: "/ 次",
    svc6_h: "定制套餐", svc6_p: "有特殊需求？让我们根据您的时间安排、宠物和家庭定制方案。", svc6_price: "定制价格", svc6_unit: "",
    btn_book_this: "立即预约", btn_get_touch: "联系我", badge_popular: "最受欢迎",
    rev_tag: "客户评价", rev_h2: "客户怎么说", rev_lead: "所有评价均由经过验证的客户提交，经审核后才会在此显示。",
    rev_invite: "有过美好体验？我真诚地希望听到您的声音。", rev_btn: "留下评价",
    lr_tag: "分享您的体验", lr_h2: "留下评价", lr_lead: "提交的评价将在审核通过后公开显示。",
    lr_name: "您的姓名 *", lr_svc: "使用的服务 *", lr_select: "请选择服务", lr_overall: "总体评分 *", lr_areas: "为每个方面评分",
    lr_r1: "家居清洁", lr_r2: "沟通与更新", lr_r3: "遵守家规",
    lr_r4: "宠物与喂食护理", lr_r5: "准时与可靠性", lr_r6: "安全保障",
    lr_r7: "植物护理（如适用）", lr_r8: "按时完成约定", lr_r9: "无未授权访客", lr_r10: "是否推荐",
    lr_review: "您的评价 *", lr_pets: "宠物名字", lr_optional: "可选",
    lr_submit: "提交评价", lr_note: "评价经审核后才会公开显示。谢谢！",
    lr_success_h: "谢谢您！", lr_success_p: "您的评价审核通过后将显示在网站上。我真心感谢您的反馈。",
    con_tag: "联系我们", con_h2: "有问题想先咨询？",
    con_p: "在预约之前，我很乐意与您聊聊——关于您的宠物、您的家、您的日常安排或任何其他问题。随时联系我。",
    con_name: "您的姓名 *", con_email: "电子邮件 *", con_msg: "留言 *", con_send: "发送消息",
    con_success_h: "消息已发送！", con_success_p: "我会在几小时内回复。",
    book_tag: "预约服务", book_h2: "申请预约", book_lead: "填写表格，我将在24小时内回复您确认可用时间。此处不收取任何费用。",
    book_name: "全名 *", book_email: "电子邮件 *", book_phone: "电话号码",
    book_loc: "位置 / 街区 *", book_svc: "所需服务 *", book_pets: "宠物数量",
    book_start: "开始日期 *", book_end: "结束日期 *", book_details: "宠物详情",
    book_details_hint: "品种、年龄、特殊需求", book_special: "特别说明或问题",
    book_cb1: "我希望在确认前安排一次见面", book_cb2: "我有需要浇水的植物", book_cb3: "我需要收取邮件和包裹",
    book_ref: "您如何得知 Hearth & Paws？",
    book_submit: "发送预约申请", book_note: "我将在24小时内与您联系。迫不及待想认识您的家和您的宠物！",
    book_success_h: "预约申请已收到！", book_success_p: "我将在24小时内联系您确认日期。",
    footer_sub: "专业房屋与宠物看护 · 无论我身在何处",
    footer_copy: "© 2026 Hearth & Paws · Rico's Closet LLC · 版权所有",
    footer_k: "用爱制作 — 并获得 Khaleesi 的认可",
  },

  it: {
    nav_about: "Chi Sono", nav_services: "Servizi", nav_reviews: "Recensioni",
    nav_contact: "Contatti", nav_book: "Prenota",
    hero_location: "Disponibile Ovunque i Miei Viaggi mi Portino (ma, di solito a New York)",
    hero_h1: "La tua casa, <em>in buone mani.</em><br>I tuoi animali, <em>adorati.</em>",
    hero_lead: "Servizio professionale di house sitting, pet sitting e passeggiate con cani, con il calore, l'affidabilità e l'attenzione ai dettagli che ti permette di viaggiare senza pensieri.",
    hero_btn1: "Richiedi una Prenotazione", hero_btn2: "Vedi Servizi",
    pill_1: "Casa Fidata", pill_2: "Animali al Primo Posto", pill_3: "Aggiornamenti Giornalieri", pill_4: "Controlli sui Precedenti",
    about_tag: "Chi è Erika", about_h2: "Ciao, sono Erika.",
    about_p1: "Sono una professionista nata e cresciuta a New York, con un decennio di esperienza nella gestione di relazioni con clienti importanti e operazioni complesse. Ma non è tutto qui! Durante un soggiorno di 5 anni in Spagna, ho insegnato inglese privatamente e in un liceo a Vallecas, Madrid, e ho conseguito un MBA! Il mio amore per gli animali mi ha portata a fare pet sitting per clienti in Spagna, Arizona, Taiwan, Miami e la mia base, New York.",
    about_p2: "Porto lo stesso livello di cura, precisione e investimento genuino in ogni casa che sorveglio e in ogni piccolo peloso di cui mi occupo.",
    about_p3: "Tratto la tua casa come se fosse la mia e i tuoi animali come se fossero la mia famiglia. Aggiornamenti giornalieri con foto e video, rispetto rigoroso delle routine e disponibilità 24 ore su 24.",
    about_li1: "Controlli sui precedenti effettuati, referenze disponibili su richiesta",
    about_li2: "Aggiornamenti giornalieri con foto e video tramite la tua app preferita",
    about_li3: "Rispetto rigoroso degli orari di alimentazione e delle regole della casa",
    about_li4: "Cura delle piante, raccolta della posta e controlli di sicurezza inclusi",
    about_li5: "Multilingue: inglese, spagnolo, italiano, mandarino e tedesco elementare",
    divider: "Presentiamo il nostro Capo di Stato Maggiore",
    k_tag: "Capo di Stato Maggiore", k_h2: "Ecco Khaleesi.",
    k_intro: "14 anni giovane. Shih-Tzu Barboncino. Sopravvissuta al cancro. Guerriera della strada.",
    k_p1: "Khaleesi è il cuore di Hearth & Paws. Un'avventuriera amante del sole che ha sconfitto il cancro con la grazia di una regina, ha tenuto il naso fuori dal finestrino in ogni viaggio e non ha mai fatto una passeggiata che non avesse personalmente pianificato.",
    k_p2: "Lei è la prova che gli animali meritano pazienza, intenzione e tanto amore. Con ogni animale di cui mi prendo cura, porto con me lo standard di Khaleesi.",
    k_b1: "Ufficiale Capo degli Odori", k_b2: "Bon-Vivant Solare", k_b3: "Guerriera della Strada", k_b4: "Sopravvissuta al Cancro", k_b5: "Testa Propria",
    gallery_tag: "Animali di cui mi sono Occupata", gallery_h3: "Alcune facce familiari.", coming_soon: "Prossimamente",
    svc_tag: "Cosa Offro", svc_h2: "Servizi e Prezzi*",
    svc_lead: "Tutti i servizi notturni includono aggiornamenti giornalieri di foto/video, cura delle piante, raccolta della posta e disponibilità 24/7. Con base a NYC — e disponibile ovunque i miei viaggi mi portino. Contattami per verificare la disponibilità nella tua zona; potrei già essere dove hai bisogno di me, in tutto il mondo!<br><br>*Si prega di chiedere direttamente se il tuo cane pesa più di 50 libbre per qualsiasi servizio.",
    svc1_h: "House Sitting Notturno", svc1_p: "Rimango nella tua casa durante la notte, mantenendo la tua routine completa — alimentazione, passeggiate, gioco e controlli di sicurezza.", svc1_price: "Da $75", svc1_unit: "/ notte",
    svc2_h: "Soggiorno Prolungato", svc2_p: "Soggiorni di 6+ notti con gestione completa della casa — cura degli animali, innaffiatura delle piante, posta e aggiornamenti giornalieri.", svc2_price: "Da $65", svc2_unit: "/ notte",
    svc3_h: "Visita Rapida", svc3_p: "Visite di 30-60 minuti per alimentazione, una passeggiata o un controllo della casa. Prezzo in base alla posizione.", svc3_price: "Da $30", svc3_unit: "/ visita",
    svc4_h: "Passeggiata con il Cane", svc4_p: "Passeggiate di 30 o 60 minuti con una scheda di resoconto post-passeggiata e aggiornamento fotografico inviato direttamente a te.", svc4_price: "Da $25", svc4_unit: "/ passeggiata",
    svc5_h: "Sorveglianza Casa", svc5_p: "Controlli regolari della casa, raccolta della posta, innaffiatura delle piante e ispezioni di sicurezza. Non sono necessari animali.", svc5_price: "Da $40", svc5_unit: "/ visita",
    svc6_h: "Pacchetto Personalizzato", svc6_p: "Esigenze particolari? Costruiamo qualcosa attorno al tuo programma, ai tuoi animali e alla tua casa.", svc6_price: "Prezzo Personalizzato", svc6_unit: "",
    btn_book_this: "Prenota", btn_get_touch: "Contattami", badge_popular: "Più Popolare",
    rev_tag: "Recensioni dei Clienti", rev_h2: "Cosa Dicono i Clienti", rev_lead: "Tutte le recensioni sono inviate da clienti verificati e approvate prima di apparire qui.",
    rev_invite: "Hai avuto una bella esperienza? Mi farebbe davvero piacere sentirlo.", rev_btn: "Lascia una Recensione",
    lr_tag: "Condividi la Tua Esperienza", lr_h2: "Lascia una Recensione", lr_lead: "Le recensioni inviate vengono trattenute per l'approvazione prima di apparire pubblicamente.",
    lr_name: "Il Tuo Nome *", lr_svc: "Servizio Utilizzato *", lr_select: "Seleziona un servizio", lr_overall: "Valutazione Complessiva *", lr_areas: "Valuta ogni area",
    lr_r1: "Pulizia della Casa", lr_r2: "Comunicazione e Aggiornamenti", lr_r3: "Rispetto delle Regole",
    lr_r4: "Cura degli Animali", lr_r5: "Puntualità e Affidabilità", lr_r6: "Sicurezza",
    lr_r7: "Cura delle Piante (se applicabile)", lr_r8: "Rispettato il Tempo Concordato", lr_r9: "Nessun Ospite Non Autorizzato", lr_r10: "Consiglieresti",
    lr_review: "La Tua Recensione *", lr_pets: "Nome(i) dell'Animale", lr_optional: "opzionale",
    lr_submit: "Invia Recensione", lr_note: "Le recensioni vengono approvate prima di apparire pubblicamente. Grazie!",
    lr_success_h: "Grazie!", lr_success_p: "La tua recensione apparirà una volta approvata. Lo apprezzo davvero.",
    con_tag: "Contattaci", con_h2: "Hai una domanda prima?",
    con_p: "Sono sempre felice di chiacchierare prima di prenotare — dei tuoi animali, della tua casa, delle tue routine o qualsiasi altra cosa. Contattami in qualsiasi momento.",
    con_name: "Il Tuo Nome *", con_email: "Email *", con_msg: "Messaggio *", con_send: "Invia Messaggio",
    con_success_h: "Messaggio inviato!", con_success_p: "Risponderò entro poche ore.",
    book_tag: "Prenota un Servizio", book_h2: "Richiedi una Prenotazione", book_lead: "Compila il modulo e ti risponderò entro 24 ore. Nessun pagamento richiesto qui.",
    book_name: "Nome Completo *", book_email: "Indirizzo Email *", book_phone: "Numero di Telefono",
    book_loc: "Posizione / Quartiere *", book_svc: "Servizio Richiesto *", book_pets: "Numero di Animali",
    book_start: "Data di Inizio *", book_end: "Data di Fine *", book_details: "Dettagli Animali",
    book_details_hint: "razza, età, esigenze speciali", book_special: "Istruzioni Speciali o Domande",
    book_cb1: "Vorrei un incontro conoscitivo prima di confermare", book_cb2: "Ho delle piante che necessitano di irrigazione", book_cb3: "Ho bisogno della raccolta di posta e pacchi",
    book_ref: "Come hai saputo di Hearth & Paws?",
    book_submit: "Invia Richiesta di Prenotazione", book_note: "Ti contatterò entro 24 ore. Non vedo l'ora di conoscere la tua casa e i tuoi animali!",
    book_success_h: "Richiesta di prenotazione ricevuta!", book_success_p: "Ti contatterò entro 24 ore per confermare le date.",
    footer_sub: "House sitting e pet sitting di fiducia · Disponibile ovunque mi trovi",
    footer_copy: "© 2026 Hearth & Paws · Rico's Closet LLC · Tutti i diritti riservati",
    footer_k: "Fatto con amore — e con l'approvazione di Khaleesi",
  }
};

/* ── APPLY TRANSLATIONS ──────────────────────────────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  const set = (id, val, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = val;
    else el.textContent = val;
  };

  // NAV
  set('t-nav-about', t.nav_about); set('t-nav-services', t.nav_services);
  set('t-nav-reviews', t.nav_reviews); set('t-nav-contact', t.nav_contact);
  set('t-nav-book', t.nav_book);
  set('t-drawer-about', t.nav_about); set('t-drawer-services', t.nav_services);
  set('t-drawer-reviews', t.nav_reviews); set('t-drawer-contact', t.nav_contact);
  set('t-drawer-book', t.nav_book);

  // HERO
  set('t-hero-location', t.hero_location);
  set('t-hero-h1', t.hero_h1, true);
  set('t-hero-lead', t.hero_lead);
  set('t-hero-btn1', t.hero_btn1); set('t-hero-btn2', t.hero_btn2);
  set('t-pill-1', t.pill_1); set('t-pill-2', t.pill_2);
  set('t-pill-3', t.pill_3); set('t-pill-4', t.pill_4);

  // ABOUT
  set('t-about-tag', t.about_tag); set('t-about-h2', t.about_h2);
  set('t-about-p1', t.about_p1); set('t-about-p2', t.about_p2);
  set('t-about-p3', t.about_p3);
  set('t-about-li1', t.about_li1); set('t-about-li2', t.about_li2);
  set('t-about-li3', t.about_li3); set('t-about-li4', t.about_li4);
  set('t-about-li5', t.about_li5);
  set('t-divider', t.divider);

  // KHALEESI
  set('t-k-tag', t.k_tag); set('t-k-h2', t.k_h2);
  set('t-k-intro', t.k_intro); set('t-k-p1', t.k_p1); set('t-k-p2', t.k_p2);
  set('t-k-b1', t.k_b1); set('t-k-b2', t.k_b2); set('t-k-b3', t.k_b3);
  set('t-k-b4', t.k_b4); set('t-k-b5', t.k_b5);

  // GALLERY
  set('t-gallery-tag', t.gallery_tag); set('t-gallery-h3', t.gallery_h3);
  set('t-coming-soon', t.coming_soon);
  document.querySelectorAll('.t-coming-soon-dup').forEach(el => el.textContent = t.coming_soon);

  // SERVICES
  set('t-svc-tag', t.svc_tag); set('t-svc-h2', t.svc_h2);
  set('t-svc-lead', t.svc_lead, true);
  for (let i = 1; i <= 6; i++) {
    set(`t-svc${i}-h`, t[`svc${i}_h`]);
    set(`t-svc${i}-p`, t[`svc${i}_p`]);
    set(`t-svc${i}-price`, t[`svc${i}_price`]);
    set(`t-svc${i}-unit`, t[`svc${i}_unit`]);
  }
  document.querySelectorAll('.t-btn-book').forEach(el => el.textContent = t.btn_book_this);
  set('t-btn-get-touch', t.btn_get_touch);
  set('t-badge-popular', t.badge_popular);

  // REVIEWS
  set('t-rev-tag', t.rev_tag); set('t-rev-h2', t.rev_h2);
  set('t-rev-lead', t.rev_lead); set('t-rev-invite', t.rev_invite);
  set('t-rev-btn', t.rev_btn);

  // LEAVE REVIEW
  set('t-lr-tag', t.lr_tag); set('t-lr-h2', t.lr_h2); set('t-lr-lead', t.lr_lead);
  set('t-lr-name', t.lr_name); set('t-lr-svc', t.lr_svc);
  set('t-lr-select', t.lr_select); set('t-lr-overall', t.lr_overall);
  set('t-lr-areas', t.lr_areas);
  for (let i = 1; i <= 10; i++) set(`t-lr-r${i}`, t[`lr_r${i}`]);
  set('t-lr-review', t.lr_review); set('t-lr-pets', t.lr_pets);
  document.querySelectorAll('.t-lr-optional').forEach(el => el.textContent = t.lr_optional);
  set('t-lr-submit', t.lr_submit); set('t-lr-note', t.lr_note);
  set('t-lr-success-h', t.lr_success_h); set('t-lr-success-p', t.lr_success_p);

  // CONTACT
  set('t-con-tag', t.con_tag); set('t-con-h2', t.con_h2); set('t-con-p', t.con_p);
  set('t-con-name', t.con_name); set('t-con-email', t.con_email);
  set('t-con-msg', t.con_msg); set('t-con-send', t.con_send);
  set('t-con-success-h', t.con_success_h); set('t-con-success-p', t.con_success_p);

  // BOOK
  set('t-book-tag', t.book_tag); set('t-book-h2', t.book_h2); set('t-book-lead', t.book_lead);
  set('t-book-name', t.book_name); set('t-book-email', t.book_email);
  set('t-book-phone', t.book_phone); set('t-book-loc', t.book_loc);
  set('t-book-svc', t.book_svc); set('t-book-pets', t.book_pets);
  set('t-book-start', t.book_start); set('t-book-end', t.book_end);
  set('t-book-details', t.book_details); set('t-book-details-hint', t.book_details_hint);
  set('t-book-special', t.book_special);
  set('t-book-cb1', t.book_cb1); set('t-book-cb2', t.book_cb2); set('t-book-cb3', t.book_cb3);
  set('t-book-ref', t.book_ref); set('t-book-submit', t.book_submit);
  set('t-book-note', t.book_note);
  set('t-book-success-h', t.book_success_h); set('t-book-success-p', t.book_success_p);

  // FOOTER
  set('t-footer-sub', t.footer_sub);
  set('t-footer-copy', t.footer_copy);
  set('t-footer-k', t.footer_k);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('hp-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
}

/* ── LANG SWITCHER INIT ──────────────────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  const saved = localStorage.getItem('hp-lang') || 'en';
  applyLang(saved);
}

/* ── NAV SCROLL ──────────────────────────────────────────── */
const navWrap = document.getElementById('navWrap');
window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── MOBILE DRAWER ───────────────────────────────────────── */
const hamburger     = document.getElementById('hamburger');
const drawer        = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose   = document.getElementById('drawerClose');

function openDrawer()  { drawer.classList.add('open'); drawerOverlay.classList.add('show'); hamburger.classList.add('open'); }
function closeDrawer() { drawer.classList.remove('open'); drawerOverlay.classList.remove('show'); hamburger.classList.remove('open'); }
hamburger.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
drawerClose.addEventListener('click', closeDrawer);

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ── STAR RATINGS ────────────────────────────────────────── */
document.querySelectorAll('.star-row').forEach(widget => {
  const stars = [...widget.querySelectorAll('span')];
  const field = widget.dataset.field;
  const input = field ? document.querySelector(`input[name="${field}"]`) : null;
  let current = 0;
  stars.forEach((star, i) => {
    star.addEventListener('mouseenter', () => stars.forEach((s, j) => s.classList.toggle('hover', j <= i)));
    star.addEventListener('mouseleave', () => stars.forEach((s, j) => { s.classList.remove('hover'); s.classList.toggle('lit', j < current); }));
    star.addEventListener('click', () => { current = i + 1; if (input) input.value = current; stars.forEach((s, j) => { s.classList.toggle('lit', j < current); s.classList.remove('hover'); }); });
  });
});

/* ── LOAD REVIEWS ────────────────────────────────────────── */
async function loadReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  let reviews = [];
  try { const res = await fetch('reviews.json'); if (res.ok) reviews = await res.json(); } catch (_) {}
  if (!reviews.length) {
    reviews = [
      { reviewer_name: 'Sarah M.', service_used: 'Overnight House Sitting', pet_names: 'Biscuit & Mango', overall_rating: 5, review_text: 'Erika was absolutely wonderful with our two dogs. Daily photos, followed every instruction, and we came home to a spotless house. We will definitely be booking again.' },
      { reviewer_name: 'James T.', service_used: 'Extended Stay (5+ nights)', pet_names: 'Luna', overall_rating: 5, review_text: 'I was nervous about leaving my cat for two weeks but Erika sent videos every single day. My plants were thriving and the apartment was immaculate.' },
      { reviewer_name: 'Priya K.', service_used: 'Drop-In Visit', pet_names: 'Archie', overall_rating: 5, review_text: 'Punctual, communicative, and genuinely caring. Our dog has separation anxiety and Erika handled it with so much patience. Felt completely at ease the whole trip.' },
    ];
  }
  grid.innerHTML = reviews.map(r => `<div class="review-card reveal"><div class="r-stars">${'★'.repeat(r.overall_rating)}${'☆'.repeat(5 - r.overall_rating)}</div><p class="r-text">"${r.review_text}"</p><div class="r-author">${r.reviewer_name}</div><div class="r-service">${r.service_used}${r.pet_names ? ' · ' + r.pet_names : ''}</div></div>`).join('');
  grid.querySelectorAll('.review-card').forEach(card => revealObserver.observe(card));
}
loadReviews();

/* ── FORM HANDLING ───────────────────────────────────────── */
function handleForm(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = '...'; }
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() });
      form.style.display = 'none';
      success.style.display = 'block';
    } catch { alert('Something went wrong. Please email erikashnyc@proton.me directly.'); if (btn) { btn.disabled = false; } }
  });
}
handleForm('bookingForm', 'bookingSuccess');
handleForm('reviewForm',  'reviewSuccess');
handleForm('contactForm', 'contactSuccess');

/* ── ACTIVE NAV ──────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[data-section]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => { link.style.color = link.dataset.section === entry.target.id ? 'var(--peach)' : ''; });
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

/* ── INIT ────────────────────────────────────────────────── */
initLangSwitcher();
