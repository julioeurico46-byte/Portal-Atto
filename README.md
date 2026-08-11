[Home.dc.html](https://github.com/user-attachments/files/30945861/Home.dc.html)
# Portal-Atto<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/fonts.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/colors.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/typography.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/spacing.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/radius.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/elevation.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/motion.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/tokens/layout.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/base.css">
  <link rel="stylesheet" href="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/styles.css">
  <script src="_ds/portal-atto-design-system-21a1e5ed-18a8-429d-b39f-c9455d4fde4f/_ds_bundle.js"></script>
  <style>
    html { scroll-behavior: smooth; }
    body { margin: 0; overflow-x: hidden; background: var(--white); color: var(--text-primary); font: var(--type-body); -webkit-font-smoothing: antialiased; }
    a { color: var(--text-link); text-decoration: none; }
    a:hover { color: var(--text-link-hover); }
    .atto-inverse a { color: var(--atto-yellow); }
    .atto-inverse a:hover { color: var(--atto-yellow-tint); }
    img, video { display: block; max-width: 100%; }
    section[id] { scroll-margin-top: 88px; }
  </style>
</helmet>

<div id="topo" style="background: var(--white)">

  <header style="position: fixed; top: 0; left: 0; right: 0; z-index: 60; background: rgba(255,255,255,.86); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border-subtle)">
    <div style="max-width: 1280px; margin: 0 auto; padding: 10px clamp(16px, 4vw, 32px); min-height: 72px; display: flex; align-items: center; gap: clamp(14px, 3vw, 40px); flex-wrap: wrap">
      <a href="#topo" style="display: flex; align-items: center; flex: 0 0 auto">
        <img src="assets/brand/logo-lockup-black.png" alt="Portal Atto" style="height: 30px; width: auto">
      </a>
      <nav style="display: flex; gap: clamp(14px, 2.2vw, 28px); align-items: center; flex-wrap: wrap">
        <a href="#topo" style="font: var(--type-label); color: var(--ink-950)">Home</a>
        <a href="#atas" style="font: var(--type-label); color: var(--ink-600)" style-hover="color: var(--ink-950)">Atas de registro</a>
        <a href="#projetos" style="font: var(--type-label); color: var(--ink-600)" style-hover="color: var(--ink-950)">Projetos</a>
        <a href="#contato" style="font: var(--type-label); color: var(--ink-600)" style-hover="color: var(--ink-950)">Contato</a>
      </nav>
      <div style="margin-left: auto; display: flex; gap: 12px; align-items: center">
        <sc-if value="{{ ctaWhatsapp }}" hint-placeholder-val="{{ false }}">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="ghost" size="sm" icon-left="message-circle" href="#contato" hint-size="auto,36px">WhatsApp</x-import>
        </sc-if>
        <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="primary" size="sm" icon-right="arrow-right" href="#contato" hint-size="auto,36px">Solicitar projeto</x-import>
      </div>
    </div>
  </header>

  <section class="atto-inverse" style="position: relative; min-height: clamp(760px, 100vh, 1040px); display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; background: var(--ink-1000)">
    <div style="position: absolute; inset: 0; overflow: hidden">
      <div id="heroTrilho" style="{{ trilhoEstilo }}">

        <div style="position: relative; flex: 0 0 25%; width: 25%; height: 100%; overflow: hidden">
          <video data-src="assets/video/hero-sensorial.mp4" preload="none" poster="assets/img/sensorial-03.jpeg" muted="{{ true }}" loop="{{ true }}" playsinline="{{ true }}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover"></video>
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.62)"></div>
          <div style="position: absolute; inset: 0; display: flex; align-items: center">
            <div style="width: 100%; max-width: 1280px; margin: 0 auto; padding: clamp(96px, 12vh, 140px) clamp(20px, 4vw, 32px) clamp(168px, 20vh, 210px)">
              <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin: 0 0 24px">Ata de registro de preços · Adesão imediata</p>
              <h1 style="font: var(--type-display-xl); font-size: clamp(32px, 6vw, 76px); letter-spacing: var(--tracking-display); color: var(--white); margin: 0; max-width: 16ch; text-wrap: balance">{{ heroTitulo }}</h1>
              <p style="font: var(--type-body-lg); font-size: 19px; color: rgba(255,255,255,.78); margin: 28px 0 0; max-width: 56ch; text-wrap: pretty">Mobiliário, inclusão, playground, uniforme e tecnologia para a sua rede — tudo em ata homologada. Sua equipe adere, a Atto entrega.</p>
              <div style="display: flex; gap: 12px; margin-top: 40px; flex-wrap: wrap">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="primary" size="lg" icon-right="arrow-right" href="#contato" hint-size="auto,52px">Solicitar projeto</x-import>
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="inverse" size="lg" href="#atas" hint-size="auto,52px">Ver as atas</x-import>
              </div>
            </div>
          </div>
        </div>

        <div style="position: relative; flex: 0 0 25%; width: 25%; height: 100%; overflow: hidden">
          <video data-src="assets/video/playground.mp4" preload="none" poster="assets/img/playground-02.jpeg" muted="{{ true }}" loop="{{ true }}" playsinline="{{ true }}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover"></video>
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.62)"></div>
          <div style="position: absolute; inset: 0; display: flex; align-items: center">
            <div style="width: 100%; max-width: 1280px; margin: 0 auto; padding: clamp(96px, 12vh, 140px) clamp(20px, 4vw, 32px) clamp(168px, 20vh, 210px)">
              <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin: 0 0 24px">Ata 1694/2025 · Superfícies esportivas</p>
              <h2 style="font: var(--type-display-xl); font-size: clamp(32px, 6vw, 76px); letter-spacing: var(--tracking-display); color: var(--white); margin: 0; max-width: 16ch; text-wrap: balance">O chão que aguenta o recreio inteiro</h2>
              <p style="font: var(--type-body-lg); font-size: 19px; color: rgba(255,255,255,.78); margin: 28px 0 0; max-width: 56ch; text-wrap: pretty">Piso modular que absorve impacto de queda, drena chuva e não descola no sol. Instalado pela nossa equipe, com dez anos de garantia em contrato.</p>
              <div style="display: flex; gap: 12px; margin-top: 40px; flex-wrap: wrap">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="primary" size="lg" icon-right="arrow-right" href="#contato" hint-size="auto,52px">Solicitar projeto</x-import>
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="inverse" size="lg" href="#atas" hint-size="auto,52px">Ver a ata</x-import>
              </div>
            </div>
          </div>
        </div>

        <div style="position: relative; flex: 0 0 25%; width: 25%; height: 100%; overflow: hidden">
          <img src="assets/img/uniforme-04.jpeg" alt="Alunos com uniforme escolar entregue pela Atto" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover">
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.62)"></div>
          <div style="position: absolute; inset: 0; display: flex; align-items: center">
            <div style="width: 100%; max-width: 1280px; margin: 0 auto; padding: clamp(96px, 12vh, 140px) clamp(20px, 4vw, 32px) clamp(168px, 20vh, 210px)">
              <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin: 0 0 24px">Ata 001/2026 · Uniformes e kits</p>
              <h2 style="font: var(--type-display-xl); font-size: clamp(32px, 6vw, 76px); letter-spacing: var(--tracking-display); color: var(--white); margin: 0; max-width: 16ch; text-wrap: balance">Toda criança vestindo a mesma camisa</h2>
              <p style="font: var(--type-body-lg); font-size: 19px; color: rgba(255,255,255,.78); margin: 28px 0 0; max-width: 56ch; text-wrap: pretty">Uniforme, mochila e kit de material com a identidade do município. Grade fechada por escola e entrega antes do primeiro dia de aula.</p>
              <div style="display: flex; gap: 12px; margin-top: 40px; flex-wrap: wrap">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="primary" size="lg" icon-right="arrow-right" href="#contato" hint-size="auto,52px">Solicitar projeto</x-import>
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="inverse" size="lg" href="#atas" hint-size="auto,52px">Ver a ata</x-import>
              </div>
            </div>
          </div>
        </div>

        <div style="position: relative; flex: 0 0 25%; width: 25%; height: 100%; overflow: hidden">
          <video data-src="assets/video/tecnologia.mp4" preload="none" poster="assets/img/tecnologia-poster.jpeg" muted="{{ true }}" loop="{{ true }}" playsinline="{{ true }}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover"></video>
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.62)"></div>
          <div style="position: absolute; inset: 0; display: flex; align-items: center">
            <div style="width: 100%; max-width: 1280px; margin: 0 auto; padding: clamp(96px, 12vh, 140px) clamp(20px, 4vw, 32px) clamp(168px, 20vh, 210px)">
              <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin: 0 0 24px">Ata 009/2024 · Telas interativas</p>
              <h2 style="font: var(--type-display-xl); font-size: clamp(32px, 6vw, 76px); letter-spacing: var(--tracking-display); color: var(--white); margin: 0; max-width: 16ch; text-wrap: balance">Tecnologia que a professora usa no primeiro dia</h2>
              <p style="font: var(--type-body-lg); font-size: 19px; color: rgba(255,255,255,.78); margin: 28px 0 0; max-width: 56ch; text-wrap: pretty">Telas 4K com software de colaboração, instaladas na sala e com treinamento da equipe pedagógica incluído.</p>
              <div style="display: flex; gap: 12px; margin-top: 40px; flex-wrap: wrap">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="primary" size="lg" icon-right="arrow-right" href="#contato" hint-size="auto,52px">Solicitar projeto</x-import>
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="inverse" size="lg" href="#atas" hint-size="auto,52px">Ver a ata</x-import>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div style="position: relative; width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 32px) 36px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap">
      <div style="display: flex; align-items: center; gap: 10px">
        <button type="button" onClick="{{ irSlide0 }}" aria-label="Sala multissensorial" style="{{ ponto0 }}"></button>
        <button type="button" onClick="{{ irSlide1 }}" aria-label="Superfícies esportivas" style="{{ ponto1 }}"></button>
        <button type="button" onClick="{{ irSlide2 }}" aria-label="Uniformes e kits" style="{{ ponto2 }}"></button>
        <button type="button" onClick="{{ irSlide3 }}" aria-label="Telas interativas" style="{{ ponto3 }}"></button>
      </div>
      <div style="display: flex; align-items: center; gap: 10px">
        <button type="button" onClick="{{ anterior }}" aria-label="Banner anterior" style="display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 23px; border: 1px solid rgba(255,255,255,.32); background: rgba(0,0,0,.3); color: var(--white); cursor: pointer" style-hover="background: var(--white); color: var(--ink-1000)">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-left" size="18" hint-size="18px,18px"></x-import>
        </button>
        <button type="button" onClick="{{ proximo }}" aria-label="Próximo banner" style="display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 23px; border: 1px solid rgba(255,255,255,.32); background: rgba(0,0,0,.3); color: var(--white); cursor: pointer" style-hover="background: var(--white); color: var(--ink-1000)">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="18" hint-size="18px,18px"></x-import>
        </button>
      </div>
    </div>

    <div style="position: relative; background: var(--ink-1000)">
      <div style="max-width: 1280px; margin: 0 auto; padding: 22px clamp(20px, 4vw, 32px); display: flex; align-items: center; gap: clamp(24px, 5vw, 64px); flex-wrap: wrap">
        <div style="display: flex; align-items: center; gap: 10px">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="file-check" size="16" stroke-accent="{{ true }}" hint-size="16px,16px"></x-import>
          <span style="font: var(--type-label); color: var(--white)">Ata homologada</span>
          <span style="font: var(--type-body-sm); color: rgba(255,255,255,.5)">sem novo processo</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="clipboard-list" size="16" stroke-accent="{{ true }}" hint-size="16px,16px"></x-import>
          <span style="font: var(--type-label); color: var(--white)">Ficha técnica</span>
          <span style="font: var(--type-body-sm); color: rgba(255,255,255,.5)">pronta para a área técnica</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="badge-check" size="16" stroke-accent="{{ true }}" hint-size="16px,16px"></x-import>
          <span style="font: var(--type-label); color: var(--white)">Itens certificados</span>
          <span style="font: var(--type-body-sm); color: rgba(255,255,255,.5)">com documentação de adesão</span>
        </div>
      </div>
    </div>
  </section>

  <section id="atas" style="padding: clamp(64px, 9vw, 112px) 0; background: var(--white)">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 32px)">
      <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin: 0 0 16px">Atas de registro de preços</p>
      <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: clamp(28px, 4vw, 48px); flex-wrap: wrap">
        <h2 style="font: var(--type-display-md); font-size: clamp(26px, 4.2vw, 36px); letter-spacing: var(--tracking-heading); margin: 0; max-width: 18ch; text-wrap: balance">Compre por adesão, sem abrir licitação</h2>
        <p style="font: var(--type-body-lg); color: var(--text-secondary); margin: 0; max-width: 46ch; text-wrap: pretty">Cada ata abaixo é um processo já homologado. Sua equipe adere, recebe a documentação pronta e a Atto entrega, monta e treina.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 24px; margin-top: 56px">
        <a href="#contato" style="position: relative; display: flex; flex-direction: column; justify-content: flex-end; min-height: clamp(340px, 44vw, 460px); border-radius: 14px 14px 14px 28px; overflow: hidden; background: var(--ink-900); padding: 32px" style-hover="box-shadow: var(--shadow-md)">
          <img src="assets/img/playground-02.jpeg" alt="Playground e brinquedos educacionais entregues em escola municipal" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover">
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.5)"></div>
          <div style="position: relative">
            <span style="display: inline-flex; align-items: center; gap: 6px; font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin-bottom: 12px">Ata 10/2025 · Consórcio CODAP</span>
            <h3 style="font: var(--type-h2); font-size: 26px; color: var(--white); margin: 0 0 8px">Brinquedos e equipamentos educacionais</h3>
            <p style="font: var(--type-body-sm); color: rgba(255,255,255,.74); margin: 0 0 16px; max-width: 34ch">Playground, pátio e sala de recursos. Mais de 300 itens registrados, do alfabeto ilustrado ao conjunto de instrumentos musicais.</p>
            <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--white)">Ver a ata
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
            </span>
          </div>
        </a>
        <a href="#contato" style="position: relative; display: flex; flex-direction: column; justify-content: flex-end; min-height: clamp(340px, 44vw, 460px); border-radius: 14px; overflow: hidden; background: var(--ink-900); padding: 32px" style-hover="box-shadow: var(--shadow-md)">
          <img src="assets/img/sensorial-01.jpeg" alt="Conjunto de espumas para psicomotricidade em sala sensorial" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover">
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.5)"></div>
          <div style="position: relative">
            <span style="display: inline-flex; align-items: center; gap: 6px; font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin-bottom: 12px">Ata CODAP · vigente até 15/04/2026</span>
            <h3 style="font: var(--type-h2); font-size: 26px; color: var(--white); margin: 0 0 8px">Espumado e psicomotricidade</h3>
            <p style="font: var(--type-body-sm); color: rgba(255,255,255,.74); margin: 0 0 16px; max-width: 34ch">Conjuntos Emoção e Imaginação, Pequenos Passos e Praticar, em espuma D23 revestida em bagum 0,40 mm.</p>
            <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--white)">Ver a ata
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
            </span>
          </div>
        </a>
        <a href="#contato" style="position: relative; display: flex; flex-direction: column; justify-content: flex-end; min-height: clamp(340px, 44vw, 460px); border-radius: 14px; overflow: hidden; background: var(--ink-900); padding: 32px" style-hover="box-shadow: var(--shadow-md)">
          <img src="assets/img/uniforme-02.jpeg" alt="Uniforme escolar completo entregue ao município" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover">
          <div style="position: absolute; inset: 0; background: rgba(0,0,0,.5)"></div>
          <div style="position: relative">
            <span style="display: inline-flex; align-items: center; gap: 6px; font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin-bottom: 12px">Lote 14 · Itens 105 a 114</span>
            <h3 style="font: var(--type-h2); font-size: 26px; color: var(--white); margin: 0 0 8px">Uniformes escolares</h3>
            <p style="font: var(--type-body-sm); color: rgba(255,255,255,.74); margin: 0 0 16px; max-width: 34ch">Do uniforme completo à meia antiderrapante, com grade fechada por escola e a identidade do município.</p>
            <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--white)">Ver a ata
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
            </span>
          </div>
        </a>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 24px; margin-top: 24px">
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="armchair" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Itens 52 a 77</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Mobiliário escolar</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Conjunto aluno em MDP e ABS, coletivos, refeitório, armários e carteiras com prancheta.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="laptop" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Catálogo de tecnologia</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Notebooks e tablets</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Equipamento para a rede e para o estudante, com garantia e suporte durante a vigência.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="monitor-play" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 009/2024</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Telas interativas</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Telas Ultra HD 4K com inteligência artificial e software de colaboração.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="backpack" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Inclusão · NeuroEdu</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Mochila inclusiva</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Kit para estudantes neurodivergentes: autorregulação, concentração, comunicação e conforto sensorial.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="puzzle" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Modelos P, M, G e GG</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Sala multissensorial</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Ambiente sensorial completo, do projeto à implantação, com formação da equipe.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="shield-check" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Segurança pública</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Aplicativo Cidade Segura</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Apps Cidadão, Morador e Atendente, com Pânico Maria da Penha, pânico escolar e câmeras públicas.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="book-open" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 001/2026</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Material escolar · kit aluno</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Kit completo: cada criança da rede começa o ano com o mesmo material.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="pencil-ruler" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 002/2026</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Materiais escolares · rede completa</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Ata titular: do avental ao compasso, com entrega programada por escola.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="heart-handshake" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 006/2026</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Bullying e cyberbullying</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Kit Compasso da educação infantil ao fundamental: prevenção estruturada.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="brain" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 8651/2025</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Educação socioemocional</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Programa do 1º ao 5º ano com material do professor, do estudante e da família.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="handshake" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 010/2024</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Cultura de paz</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Coleção paradidática que ensina convivência, empatia e resolução de conflitos.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="grid-2x2" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 1694/2025</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Superfícies esportivas</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Piso modular esportivo de alto impacto, com dez anos de garantia.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="trophy" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 043/2025</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Movimento e educação física</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">Kit pedagógico-esportivo completo para o ensino fundamental.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
        <a href="#contato" style="display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 28px; box-shadow: var(--shadow-xs)" style-hover="background: var(--ink-25); box-shadow: var(--shadow-md)">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 10px; background: var(--ink-950); color: var(--white); margin-bottom: 20px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="shirt" size="22" hint-size="22px,22px"></x-import>
          </span>
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin-bottom: 10px">Ata 015/2024</span>
          <h3 style="font: var(--type-h3); margin: 0 0 8px">Uniformes profissionais</h3>
          <p style="font: var(--type-body-sm); color: var(--text-secondary); margin: 0 0 20px">14 lotes: da guarda municipal à saúde, da limpeza às obras.</p>
          <span style="display: inline-flex; align-items: center; gap: 8px; font: var(--type-label); color: var(--ink-950); margin-top: auto">Ver a ata
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="15" hint-size="15px,15px"></x-import>
          </span>
        </a>
      </div>
    </div>
  </section>

  <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 430px), 1fr)); align-items: stretch; background: var(--white); border-top: 1px solid var(--border-subtle)">
    <div style="position: relative; min-height: clamp(300px, 45vw, 600px); background: var(--ink-100)">
      <img src="assets/img/sensorial-02.jpeg" alt="Sala multissensorial implantada em escola municipal" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover">
    </div>
    <div style="display: flex; flex-direction: column; justify-content: center; padding: clamp(56px, 8vw, 104px) clamp(20px, 5vw, 80px); max-width: 660px">
      <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin: 0 0 18px">Inclusão · Sala multissensorial</p>
      <h2 style="font: var(--type-display-md); font-size: clamp(26px, 4.2vw, 36px); letter-spacing: var(--tracking-heading); margin: 0; max-width: 16ch; text-wrap: balance">A sala da bagunça vira sala sensorial</h2>
      <p style="font: var(--type-body-lg); color: var(--text-secondary); margin: 24px 0 0; max-width: 46ch; text-wrap: pretty">Aquele depósito no fim do corredor vira o ambiente onde a criança com autismo consegue se regular e voltar para a aula.</p>
      <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 32px">
        <div style="display: flex; gap: 12px; align-items: center">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="18" hint-size="18px,18px"></x-import>
          <span style="font: var(--type-body); color: var(--text-secondary)">Quatro tamanhos: P, M, G e GG</span>
        </div>
        <div style="display: flex; gap: 12px; align-items: center">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="18" hint-size="18px,18px"></x-import>
          <span style="font: var(--type-body); color: var(--text-secondary)">Projeto 3D da sala antes da compra</span>
        </div>
        <div style="display: flex; gap: 12px; align-items: center">
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="18" hint-size="18px,18px"></x-import>
          <span style="font: var(--type-body); color: var(--text-secondary)">Instalação e formação da equipe incluídas</span>
        </div>
      </div>
      <div style="margin-top: 40px; display: flex">
        <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="secondary" size="lg" icon-right="arrow-right" href="#contato" hint-size="auto,52px">Ver a sala multissensorial</x-import>
      </div>
    </div>
  </section>

  <section id="projetos" class="atto-inverse" style="padding: clamp(64px, 9vw, 112px) 0; background: var(--ink-1000)">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 32px)">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: clamp(48px, 6vw, 80px); align-items: center">
        <div>
          <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--atto-yellow); margin: 0 0 16px">Projetos entregues</p>
          <h2 style="font: var(--type-display-md); font-size: clamp(26px, 4.2vw, 36px); letter-spacing: var(--tracking-heading); color: var(--white); margin: 0; text-wrap: balance">Sala de bagunça vira sala sensorial</h2>
          <p style="font: var(--type-body-lg); color: rgba(255,255,255,.72); margin: 24px 0 0; max-width: 48ch; text-wrap: pretty">A mesma escola recebe mobiliário novo, uniforme para os alunos e playground com piso certificado. Um projeto por vez, com prazo e responsável definidos.</p>
          <blockquote style="margin: 36px 0 0; padding-left: 20px; border-left: 3px solid var(--atto-yellow); font: var(--type-h3); font-size: 21px; color: var(--white); line-height: 1.45; max-width: 44ch">Grandes projetos nascem de boas ideias, mas só se tornam realidade quando temos parceiros em quem confiar.</blockquote>
          <div style="margin-top: 36px">
            <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="inverse" size="md" icon-right="arrow-right" href="#contato" hint-size="auto,44px">Ver projetos</x-import>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
          <img src="assets/img/sensorial-03.jpeg" alt="Sala sensorial montada" style="width: 100%; height: clamp(150px, 22vw, 240px); object-fit: cover; border-radius: 14px">
          <img src="assets/img/playground-01.jpeg" alt="Playground com piso modular" style="width: 100%; height: clamp(150px, 22vw, 240px); object-fit: cover; border-radius: 14px 28px 14px 14px">
          <img src="assets/img/uniforme-03.jpeg" alt="Kit escolar do município" style="width: 100%; height: clamp(150px, 22vw, 240px); object-fit: cover; border-radius: 14px">
          <img src="assets/img/sensorial-04.jpeg" alt="Recursos sensoriais" style="width: 100%; height: clamp(150px, 22vw, 240px); object-fit: cover; border-radius: 14px">
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--atto-yellow); padding: 80px 0">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 32px); display: flex; align-items: center; justify-content: space-between; gap: clamp(32px, 5vw, 64px); flex-wrap: wrap">
      <div>
        <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: rgba(0,0,0,.58); margin: 0 0 16px">Adesão a ata de registro de preços</p>
        <h2 style="font: var(--type-display-md); font-size: clamp(26px, 4.2vw, 36px); letter-spacing: var(--tracking-heading); color: var(--ink-1000); margin: 0; max-width: 20ch; text-wrap: balance">Sua equipe adere. A gente entrega, monta e treina.</h2>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
        <p style="font: var(--type-body-lg); color: rgba(0,0,0,.72); margin: 0; max-width: 34ch; text-wrap: pretty">Sem abrir novo processo licitatório e sem custo para montar o projeto.</p>
        <a href="#contato" style="display: inline-flex; align-items: center; gap: 10px; height: 48px; padding: 0 22px; border-radius: 12px; background: var(--ink-1000); color: var(--white); font: var(--weight-semibold) 16px/1 var(--font-sans); border: 1px solid var(--ink-1000)" style-hover="background: var(--ink-900); color: var(--white)">Solicitar projeto
          <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="arrow-right" size="18" hint-size="18px,18px"></x-import>
        </a>
      </div>
    </div>
  </section>

  <section id="contato" style="padding: clamp(64px, 9vw, 112px) 0; background: var(--white)">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 32px)">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr)); gap: clamp(48px, 6vw, 80px); align-items: start">
        <div style="position: sticky; top: 112px">
          <p style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: var(--ink-500); margin: 0 0 16px">Solicitar projeto</p>
          <h2 style="font: var(--type-display-md); font-size: clamp(26px, 4.2vw, 36px); letter-spacing: var(--tracking-heading); margin: 0; max-width: 15ch; text-wrap: balance">Conte a realidade do município</h2>
          <p style="font: var(--type-body-lg); color: var(--text-secondary); margin: 24px 0 0; max-width: 44ch; text-wrap: pretty">A equipe analisa a demanda, indica a ata compatível e devolve o projeto com valores, prazo e documentação de adesão.</p>
          <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 36px">
            <div style="display: flex; gap: 12px; align-items: flex-start">
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="18" hint-size="18px,18px"></x-import>
              <span style="font: var(--type-body); color: var(--text-secondary)">Resposta com a ata compatível e a minuta de adesão</span>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start">
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="18" hint-size="18px,18px"></x-import>
              <span style="font: var(--type-body); color: var(--text-secondary)">Ficha técnica e certificações para a área técnica</span>
            </div>
            <div style="display: flex; gap: 12px; align-items: flex-start">
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="18" hint-size="18px,18px"></x-import>
              <span style="font: var(--type-body); color: var(--text-secondary)">Sem compromisso e sem custo de projeto</span>
            </div>
          </div>
        </div>

        <div style="background: var(--white); border: 1px solid var(--border-default); border-radius: 14px 14px 14px 28px; padding: clamp(24px, 4vw, 40px); box-shadow: var(--shadow-xs)">
          <sc-if value="{{ enviado }}" hint-placeholder-val="{{ false }}">
            <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px 0">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 28px; background: var(--atto-yellow); color: var(--ink-1000)">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Icon" name="check" size="26" hint-size="26px,26px"></x-import>
              </span>
              <h3 style="font: var(--type-h2); margin: 0">Solicitação enviada</h3>
              <p style="font: var(--type-body); color: var(--text-secondary); margin: 0">A equipe responde em até um dia útil com a ata compatível e o próximo passo.</p>
            </div>
          </sc-if>
          <sc-if value="{{ formAberto }}" hint-placeholder-val="{{ true }}">
            <form onSubmit="{{ enviar }}" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr)); gap: 20px">
              <div style="grid-column: span 2">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Input" label="Nome" placeholder="Como devemos chamar você" required="{{ true }}" hint-size="100%,72px"></x-import>
              </div>
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Input" label="E-mail institucional" type="email" placeholder="nome@prefeitura.gov.br" required="{{ true }}" hint-size="100%,72px"></x-import>
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Input" label="Telefone" placeholder="(00) 00000-0000" required="{{ true }}" hint-size="100%,72px"></x-import>
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Input" label="Município" placeholder="Cidade e estado" required="{{ true }}" hint-size="100%,72px"></x-import>
              <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Input" label="Cargo" placeholder="Prefeito, secretário, gestor" hint-size="100%,72px"></x-import>
              <div style="grid-column: span 2">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Select" label="Tipo de projeto" options="{{ tiposProjeto }}" placeholder="Escolha a frente principal" required="{{ true }}" hint-size="100%,72px"></x-import>
              </div>
              <div style="grid-column: span 2">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Input" label="Descreva a demanda" multiline="{{ true }}" rows="{{ 4 }}" placeholder="Número de escolas, alunos atendidos, prazo desejado" hint="Quanto mais concreto, mais rápida a resposta." hint-size="100%,140px"></x-import>
              </div>
              <div style="grid-column: span 2; margin-top: 4px">
                <x-import component-from-global-scope="PortalAttoDesignSystem_21a1e5.Button" variant="primary" size="lg" type="submit" full-width="{{ true }}" icon-right="arrow-right" hint-size="100%,52px">Enviar solicitação</x-import>
              </div>
            </form>
          </sc-if>
        </div>
      </div>
    </div>
  </section>

  <footer class="atto-inverse" style="background: var(--ink-1000); padding: 72px 0 40px">
    <div style="max-width: 1280px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 32px)">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 185px), 1fr)); gap: clamp(32px, 4vw, 48px)">
        <div>
          <img src="assets/brand/logo-lockup-reversed.png" alt="Portal Atto" style="height: 32px; width: auto; margin-bottom: 20px">
          <p style="font: var(--type-body-sm); color: rgba(255,255,255,.6); margin: 0; max-width: 34ch">Projetos completos para a gestão pública, homologados em ata de registro de preços.</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: rgba(255,255,255,.4)">Atas de registro</span>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Mobiliário escolar</a>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Inclusão</a>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Playground</a>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Tecnologia</a>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: rgba(255,255,255,.4)">Atas</span>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Todas as atas</a>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Fichas técnicas</a>
          <a href="#atas" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Certificações</a>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px">
          <span style="font: var(--type-overline); letter-spacing: var(--tracking-overline); text-transform: uppercase; color: rgba(255,255,255,.4)">Contato</span>
          <a href="#contato" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Solicitar projeto</a>
          <a href="#contato" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">WhatsApp</a>
          <a href="#contato" style="font: var(--type-body-sm); color: rgba(255,255,255,.72)">Quem somos</a>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; gap: 24px; margin-top: 56px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); flex-wrap: wrap">
        <span style="font: var(--type-caption); color: rgba(255,255,255,.4)">© 2026 Portal Atto. Todos os direitos reservados.</span>
        <span style="font: var(--type-caption); color: rgba(255,255,255,.4)">Adesão a ata de registro de preços</span>
      </div>
    </div>
  </footer>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;heroTitulo&quot;:{&quot;editor&quot;:&quot;text&quot;,&quot;default&quot;:&quot;Deixe seu legado falar mais alto&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;section&quot;:&quot;Banner&quot;},&quot;autoplayBanner&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:true,&quot;tsType&quot;:&quot;boolean&quot;,&quot;section&quot;:&quot;Banner&quot;},&quot;ctaWhatsapp&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false,&quot;tsType&quot;:&quot;boolean&quot;,&quot;section&quot;:&quot;Banner&quot;}}">
class Component extends DCLogic {
  state = { enviado: false, slide: 0 };
  
  componentDidMount() {
    this.iniciarTimer();
    this.sincronizarVideos();
    this.retry = setTimeout(() => this.sincronizarVideos(), 600);
  }
  componentWillUnmount() { clearInterval(this.timer); clearTimeout(this.retry); }

  iniciarTimer() {
    clearInterval(this.timer);
    if (this.props.autoplayBanner === false) return;
    this.timer = setInterval(() => this.setState(
      s => ({ slide: (s.slide + 1) % 4 }),
      () => this.sincronizarVideos()
    ), 7000);
  }

  sincronizarVideos() {
    const raiz = document.getElementById("heroTrilho");
    if (!raiz) return;
    Array.from(raiz.children).forEach((painel, i) => {
      const v = painel.querySelector("video");
      if (!v) return;
      if (i === this.state.slide) {
        if (!v.getAttribute("src") && v.dataset.src) { v.src = v.dataset.src; v.load(); }
        const p = v.play(); if (p && p.catch) p.catch(() => {});
      } else if (v.getAttribute("src")) { v.pause(); v.currentTime = 0; }
    });
  }

  irPara(i) {
    this.setState({ slide: (i + 4) % 4 }, () => this.sincronizarVideos());
    this.iniciarTimer();
  }

  ponto(i) {
    const ativo = this.state.slide === i;
    return {
      width: ativo ? 40 : 12, height: 12, padding: 0, borderRadius: 6, border: "none", cursor: "pointer",
      background: ativo ? "var(--atto-yellow)" : "rgba(255,255,255,.38)",
      transition: "width 260ms var(--ease-standard), background 120ms var(--ease-standard)"
    };
  }

  renderVals() {
    return {
      trilhoEstilo: {
        display: "flex", width: "400%", height: "100%",
        transform: "translateX(-" + this.state.slide * 25 + "%)",
        transition: "transform 620ms var(--ease-standard)"
      },
      ponto0: this.ponto(0), ponto1: this.ponto(1), ponto2: this.ponto(2), ponto3: this.ponto(3),
      irSlide0: () => this.irPara(0), irSlide1: () => this.irPara(1),
      irSlide2: () => this.irPara(2), irSlide3: () => this.irPara(3),
      anterior: () => this.irPara(this.state.slide - 1),
      proximo: () => this.irPara(this.state.slide + 1),
      heroTitulo: this.props.heroTitulo ?? "Deixe seu legado falar mais alto",
      mostrarAtas: this.props.mostrarAtas ?? true,
      ctaWhatsapp: this.props.ctaWhatsapp ?? false,
      enviado: this.state.enviado,
      formAberto: !this.state.enviado,
      tiposProjeto: [
        "Mobiliário escolar",
        "Inclusão e sala sensorial",
        "Playground e superfícies esportivas",
        "Tecnologia educacional",
        "Uniformes e kits escolares",
        "Laboratórios",
        "Saúde",
        "Segurança pública",
        "Material pedagógico",
        "Mais de uma frente"
      ],
      enviar: (e) => { e.preventDefault(); this.setState({ enviado: true }); }
    };
  }
}
</script>
</body>
</html>
