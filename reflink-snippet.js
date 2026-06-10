/**
 * TRAVELSTATUS · Универсальный реф-сниппет
 * Вставить перед </body> на каждой SEO-странице
 * Заменяет все ссылки /vip на реальные реф-ссылки
 * Добавляет плавающую кнопку + CTA-блок в конец страницы
 */
(function() {

  var LINKS = {
    free: 'https://free.traveladvantage.com/Status',
    join: 'https://join.traveladvantage.com/Status'
  };

  var LANG = (navigator.language || 'en').split('-')[0].toLowerCase();

  var COPY = {
    ru: {
      fab:     'Проверить цену бесплатно',
      title:   'Проверьте реальную оптовую цену',
      sub:     'Гостевой доступ — бесплатно, без регистрации. Сравните с Booking прямо сейчас.',
      btnFree: 'Получить гостевой доступ →',
      btnJoin: 'Подключиться за $199/год'
    },
    kz: {
      fab:     'Бағаны тегін тексеру',
      title:   'Нақты оптовалық бағаны тексеріңіз',
      sub:     'Қонақ рұқсаты — тегін, тіркеусіз. Booking-мен қазір салыстырыңыз.',
      btnFree: 'Қонақ рұқсатын алу →',
      btnJoin: 'Жылына $199-ға қосылу'
    },
    de: {
      fab:     'Preis kostenlos prüfen',
      title:   'Echten Großhandelspreis prüfen',
      sub:     'Gastzugang — kostenlos, ohne Registrierung. Jetzt mit Booking vergleichen.',
      btnFree: 'Gastzugang erhalten →',
      btnJoin: 'Mitglied werden ab $199/Jahr'
    },
    es: {
      fab:     'Verificar precio gratis',
      title:   'Verifica el precio mayorista real',
      sub:     'Acceso de invitado — gratis, sin registro. Compara con Booking ahora.',
      btnFree: 'Obtener acceso de invitado →',
      btnJoin: 'Unirse por $199/año'
    },
    fr: {
      fab:     'Vérifier le prix gratuitement',
      title:   'Vérifiez le vrai prix de gros',
      sub:     'Accès invité — gratuit, sans inscription. Comparez avec Booking maintenant.',
      btnFree: 'Obtenir un accès invité →',
      btnJoin: 'Rejoindre pour 199$/an'
    },
    it: {
      fab:     'Verifica prezzo gratis',
      title:   'Verifica il vero prezzo all\'ingrosso',
      sub:     'Accesso ospite — gratuito, senza registrazione. Confronta con Booking adesso.',
      btnFree: 'Ottenere accesso ospite →',
      btnJoin: 'Iscriversi per $199/anno'
    },
    pt: {
      fab:     'Verificar preço grátis',
      title:   'Verifique o preço atacadista real',
      sub:     'Acesso de convidado — grátis, sem registro. Compare com Booking agora.',
      btnFree: 'Obter acesso de convidado →',
      btnJoin: 'Aderir por $199/ano'
    },
    ro: {
      fab:     'Verificați prețul gratuit',
      title:   'Verificați prețul angro real',
      sub:     'Acces invitat — gratuit, fără înregistrare. Comparați cu Booking acum.',
      btnFree: 'Obțineți acces de oaspete →',
      btnJoin: 'Alăturați-vă pentru $199/an'
    },
    ko: {
      fab:     '무료로 가격 확인',
      title:   '실제 도매 가격 확인',
      sub:     '게스트 액세스 — 무료, 등록 불필요. 지금 Booking과 비교하세요.',
      btnFree: '게스트 액세스 받기 →',
      btnJoin: '연간 $199로 가입'
    },
    et: {
      fab:     'Kontrolli hinda tasuta',
      title:   'Kontrolli tegelikku hulgihinda',
      sub:     'Külalisjuurdepääs — tasuta, registreerimiseta. Võrdle Bookinguga kohe.',
      btnFree: 'Hangi külalisjuurdepääs →',
      btnJoin: 'Liitu $199/aastas'
    }
  };

  var c = COPY[LANG] || COPY['en'] || {
    fab:     'Check price for free',
    title:   'Check the real wholesale price',
    sub:     'Guest access — free, no registration. Compare with Booking right now.',
    btnFree: 'Get guest access →',
    btnJoin: 'Join for $199/year'
  };

  /* ── 1. Заменить все ссылки /vip на реальные реф-ссылки ── */
  document.querySelectorAll('a[href="/vip"], a[href="./vip"], a[href="../vip"]').forEach(function(a) {
    a.href = LINKS.join;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* ── 2. CTA-блок перед footer ── */
  var ctaHTML = '<div id="ts-cta-block" style="'
    + 'background:#0a0a0a;border-top:1px solid rgba(201,168,76,0.2);'
    + 'padding:56px 20px;text-align:center;font-family:\'Montserrat\',sans-serif;'
    + 'margin-top:60px;">'
    + '<p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;'
    + 'color:#8B6F35;margin-bottom:16px;">Travel Advantage · Albert Stohl</p>'
    + '<h2 style="font-family:\'Georgia\',serif;font-size:clamp(22px,4vw,38px);'
    + 'font-weight:300;color:#FAF6EE;margin-bottom:14px;line-height:1.2;">'
    + c.title + '</h2>'
    + '<p style="font-size:13px;color:#9A9080;max-width:520px;margin:0 auto 32px;line-height:1.8;">'
    + c.sub + '</p>'
    + '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">'
    + '<a href="' + LINKS.free + '" target="_blank" rel="noopener" '
    + 'style="display:inline-block;padding:16px 40px;border:1px solid #C9A84C;'
    + 'color:#C9A84C;text-decoration:none;font-size:11px;letter-spacing:2px;'
    + 'text-transform:uppercase;font-family:\'Montserrat\',sans-serif;'
    + 'transition:all 0.3s;"'
    + ' onmouseover="this.style.background=\'#C9A84C\';this.style.color=\'#080808\'"'
    + ' onmouseout="this.style.background=\'transparent\';this.style.color=\'#C9A84C\'">'
    + c.btnFree + '</a>'
    + '<a href="' + LINKS.join + '" target="_blank" rel="noopener" '
    + 'style="display:inline-block;padding:16px 40px;background:#C9A84C;'
    + 'color:#080808;text-decoration:none;font-size:11px;letter-spacing:2px;'
    + 'text-transform:uppercase;font-family:\'Montserrat\',sans-serif;font-weight:600;">'
    + c.btnJoin + '</a>'
    + '</div></div>';

  var footer = document.querySelector('footer');
  if (footer) {
    footer.insertAdjacentHTML('beforebegin', ctaHTML);
  } else {
    document.body.insertAdjacentHTML('beforeend', ctaHTML);
  }

  /* ── 3. Плавающая кнопка (FAB) ── */
  var fabHTML = '<a id="ts-fab" href="' + LINKS.free + '" target="_blank" rel="noopener" '
    + 'style="position:fixed;bottom:24px;right:24px;z-index:9999;'
    + 'background:#C9A84C;color:#080808;text-decoration:none;'
    + 'padding:14px 24px;font-size:11px;letter-spacing:2px;'
    + 'text-transform:uppercase;font-family:\'Montserrat\',sans-serif;font-weight:600;'
    + 'box-shadow:0 4px 20px rgba(201,168,76,0.35);'
    + 'border-radius:2px;white-space:nowrap;'
    + 'transition:transform 0.2s,box-shadow 0.2s;"'
    + ' onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 8px 28px rgba(201,168,76,0.5)\'"'
    + ' onmouseout="this.style.transform=\'none\';this.style.boxShadow=\'0 4px 20px rgba(201,168,76,0.35)\'">'
    + c.fab + '</a>';

  document.body.insertAdjacentHTML('beforeend', fabHTML);

  /* ── 4. Скрыть FAB при скролле вниз, показать при скролле вверх ── */
  var lastY = 0;
  var fab = document.getElementById('ts-fab');
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    if (y > lastY && y > 300) {
      fab.style.transform = 'translateY(80px)';
      fab.style.opacity = '0';
    } else {
      fab.style.transform = 'none';
      fab.style.opacity = '1';
    }
    lastY = y;
  });

})();
