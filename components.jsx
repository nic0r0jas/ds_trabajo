/* global React */
const { useState, useEffect, useRef } = React;

function Icon({ name, size = 22, stroke = 1.5, color, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, 'stroke-width': stroke }, nameAttr: 'data-lucide' });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', color, ...style }} />;
}

function Logo({ neg, size = 26 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 9 }}>
      <img src={'../../assets/entel-logo-horizontal-' + (neg ? 'blanco' : 'color') + '.svg'}
        alt="Entel" style={{ height: size, width: 'auto', alignSelf: 'center' }} />
      <span className="emp" style={{ fontSize: 14, fontWeight: 600, color: neg ? 'rgba(255,255,255,.7)' : 'var(--gris-600)' }}>Empresas</span>
    </span>
  );
}

function Button({ variant = 'primary', children, icon, onClick, block }) {
  return (
    <button className={'btn btn-' + variant + (block ? ' btn-block' : '')} onClick={onClick}>
      {children}{icon && <Icon name={icon} size={18} stroke={2} />}
    </button>
  );
}

function Header({ active, onNav, onContact }) {
  const items = ['Soluciones', 'Conectividad', 'Cloud', 'Casos'];
  return (
    <header className="hdr"><div className="wrap hdr-in">
      <Logo />
      <nav>{items.map((it) => <a key={it} className={active === it ? 'active' : ''} onClick={() => onNav && onNav()}>{it}</a>)}</nav>
      <Button variant="primary" onClick={onContact}>Habla con un experto</Button>
    </div></header>
  );
}

function Hero({ onContact, onSol }) {
  return (
    <section className="hero">
      <img className="paren" src="../../assets/paren-blanco.svg" alt="" />
      <div className="wrap"><div className="hero-in">
        <div className="k">Entel Empresas</div>
        <h1>Que tu negocio sea protagonista</h1>
        <p>Conectividad, cloud y ciberseguridad de la mano de un partner que te acompaña en cada paso de tu transformación digital.</p>
        <div className="hero-actions">
          <Button variant="white" icon="arrow-right" onClick={onContact}>Cotiza tu solución</Button>
          <Button variant="outline" onClick={onSol}><span style={{ color: '#fff' }}>Ver soluciones</span></Button>
        </div>
      </div></div>
    </section>
  );
}

const STATS = [
  { n: '99,9%', l: 'Disponibilidad de red garantizada' },
  { n: '24/7', l: 'Soporte experto dedicado' },
  { n: '+30 mil', l: 'Empresas confían en Entel' },
];
function Stats() {
  return (
    <section className="stats"><div className="wrap stats-in">
      {STATS.map((s) => <div key={s.l} className="stat"><div className="n">{s.n}</div><div className="l">{s.l}</div></div>)}
    </div></section>
  );
}

const SOLS = [
  { ic: 'wifi', h: 'Conectividad', p: 'Internet dedicado, redes SD-WAN y planes móviles para todo tu equipo, con cobertura 5G donde la necesites.' },
  { ic: 'cloud', h: 'Cloud & Data Center', p: 'Infraestructura, nube híbrida y respaldo gestionado para escalar sin límites y con total continuidad.' },
  { ic: 'shield-check', h: 'Ciberseguridad', p: 'Protección perimetral, monitoreo 24/7 y respuesta ante incidentes para resguardar tu operación.' },
  { ic: 'phone-call', h: 'Colaboración', p: 'Telefonía IP, contact center y herramientas de trabajo que mantienen a tu empresa siempre conectada.' },
  { ic: 'bar-chart-3', h: 'IoT & Analítica', p: 'Sensores, conectividad masiva y tableros de datos para tomar mejores decisiones en tiempo real.' },
  { ic: 'sparkles', h: 'Transformación digital', p: 'Consultoría y proyectos a medida para llevar a tu negocio a la vanguardia de la innovación.' },
];
function SolCard({ s, onMore }) {
  return (
    <div className="sol" onClick={onMore}>
      <div className="ic"><Icon name={s.ic} size={26} stroke={2} /></div>
      <h3>{s.h}</h3>
      <p>{s.p}</p>
      <span className="more">Conocer más <Icon name="arrow-right" size={16} stroke={2} /></span>
    </div>
  );
}
function Solutions({ onMore }) {
  return (
    <section className="section" id="sol"><div className="wrap">
      <div className="shead">
        <div className="k">Soluciones</div>
        <h2>Todo lo que tu empresa necesita, en un solo partner</h2>
        <p>Diseñamos soluciones integrales y a medida para cada etapa de tu negocio.</p>
      </div>
      <div className="sol-grid">{SOLS.map((s) => <SolCard key={s.h} s={s} onMore={onMore} />)}</div>
    </div></section>
  );
}

function Logos() {
  const names = ['ACME', 'Andina', 'Cumbre', 'Nova', 'Patagon', 'Lumen'];
  return (
    <section className="section alt"><div className="wrap">
      <div className="shead"><p style={{ margin: 0, color: 'var(--gris-600)', fontFamily: 'var(--font-ui)', fontSize: 14 }}>Empresas que crecen con Entel</p></div>
      <div className="logos">{names.map((n) => <span key={n} className="l">{n}</span>)}</div>
    </div></section>
  );
}

function Contact({ onSubmit }) {
  return (
    <section className="section" id="contact"><div className="wrap">
      <div className="cta">
        <div className="left">
          <img className="paren" src="../../assets/paren-blanco.svg" alt="" />
          <h3>Hablemos de tu próximo paso</h3>
          <p>Un ejecutivo experto te contacta para diseñar la solución que tu empresa necesita.</p>
          <div className="tick"><Icon name="check" size={18} stroke={2.5} /> Asesoría personalizada, sin costo</div>
          <div className="tick"><Icon name="check" size={18} stroke={2.5} /> Respuesta en menos de 24 horas</div>
        </div>
        <form className="form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <h4>Cuéntanos de tu empresa</h4>
          <div className="fg"><label>Empresa</label><input defaultValue="Comercial Andina SpA" required /></div>
          <div className="fg"><label>Nombre</label><input placeholder="Tu nombre" required /></div>
          <div className="fg"><label>Correo corporativo</label><input type="email" placeholder="nombre@empresa.cl" required /></div>
          <div className="fg"><label>Solución de interés</label>
            <select defaultValue="Conectividad"><option>Conectividad</option><option>Cloud & Data Center</option><option>Ciberseguridad</option><option>Colaboración</option></select>
          </div>
          <Button variant="primary" block>Quiero que me contacten</Button>
        </form>
      </div>
    </div></section>
  );
}

function Footer() {
  const cols = [
    { h: 'Soluciones', l: ['Conectividad', 'Cloud', 'Ciberseguridad', 'IoT'] },
    { h: 'Empresa', l: ['Casos de éxito', 'Sostenibilidad', 'Trabaja con nosotros'] },
    { h: 'Soporte', l: ['Mesa de ayuda', 'Estado de servicios', 'Contacto'] },
  ];
  return (
    <footer className="ftr"><div className="wrap">
      <div className="ftr-cols">
        <div><Logo neg size={26} /><p className="tag">Tecnología que impulsa a las empresas de Chile. Con tu negocio en todas.</p></div>
        {cols.map((c) => <div key={c.h}><h5>{c.h}</h5>{c.l.map((x) => <a key={x}>{x}</a>)}</div>)}
      </div>
      <div className="ftr-bot"><span>© 2026 Entel Empresas · Recreación de marca para fines de diseño</span><span>Términos · Privacidad</span></div>
    </div></footer>
  );
}

function Toast({ msg, show }) {
  return <div className={'toast' + (show ? ' show' : '')}><Icon name="check-circle" size={20} stroke={2.5} />{msg}</div>;
}

Object.assign(window, { Icon, Logo, Button, Header, Hero, Stats, Solutions, Logos, Contact, Footer, Toast });
