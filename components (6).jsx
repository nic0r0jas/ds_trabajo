/* global React */
const { useState, useEffect, useRef } = React;

/* ---------- Icon (Lucide) ---------- */
function Icon({ name, size = 22, color, stroke = 1.5, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, 'stroke-width': stroke },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', color, ...style }} />;
}

/* ---------- Logo ---------- */
function Logo({ neg, size = 28 }) {
  return (
    <img src={'../../assets/entel-logo-horizontal-' + (neg ? 'blanco' : 'color') + '.svg'}
      alt="Entel" style={{ height: size, display: 'block', width: 'auto' }} />
  );
}

/* ---------- Button ---------- */
function Button({ variant = 'primary', children, icon, onClick }) {
  return (
    <button className={'btn btn-' + variant} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={18} stroke={2} />}
    </button>
  );
}

/* ---------- Header ---------- */
function Header({ cart, active, onNav }) {
  const items = ['Personas', 'Empresas', 'Equipos', 'Ayuda'];
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Logo />
        <nav>
          {items.map((it) => (
            <a key={it} className={active === it ? 'active' : ''} onClick={() => onNav && onNav(it)}>{it}</a>
          ))}
        </nav>
        <div className="hdr-actions">
          <button className="icon-btn"><Icon name="search" size={20} /></button>
          <button className="icon-btn"><Icon name="user" size={20} /></button>
          <button className="icon-btn cart-dot">
            <Icon name="shopping-bag" size={20} />
            {cart > 0 && <span className="b">{cart}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onPrimary }) {
  return (
    <section className="hero">
      <img className="paren" src="../../assets/paren-blanco.svg" alt="" />
      <div className="wrap">
        <div className="hero-in">
          <span className="off">EntelDays · hasta 33% dcto</span>
          <h1>Cobertura donde la necesites</h1>
          <p>Planes que se adaptan a cada momento, con 5G en estado puro y gigas para compartir con los tuyos.</p>
          <div className="hero-actions">
            <Button variant="white" icon="arrow-right" onClick={onPrimary}>Ver planes</Button>
            <Button variant="ghost" onClick={onPrimary}><span style={{ color: '#fff' }}>Conoce el 5G</span></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Plans ---------- */
const PLANS = [
  { name: 'Entel Ágil', gb: '15', price: '$8.990', tag: null, feats: ['Redes sociales ilimitadas', 'Velocidad 4G/5G', 'Sin permanencia'] },
  { name: 'Entel Power +', gb: '50', price: '$13.990', tag: 'Más vendido', feats: ['Gigas libres + RRSS', '5G donde la necesites', 'Roaming Latam incluido'] },
  { name: 'Entel Full', gb: '100', price: '$19.990', tag: null, feats: ['Gigas libres + RRSS', '5G prioritario', 'Prime Video de cortesía'] },
];

function PlanCard({ plan, selected, onSelect }) {
  return (
    <div className={'plan' + (selected ? ' sel' : '')}>
      {plan.tag && <span className="tag">{plan.tag}</span>}
      <h3>{plan.name}</h3>
      <div className="gb">{plan.gb}<small> GB</small></div>
      <div className="price">{plan.price}</div>
      <div className="per">por mes</div>
      <ul>
        {plan.feats.map((f) => (
          <li key={f}><Icon name="check" size={16} stroke={2.5} />{f}</li>
        ))}
      </ul>
      <Button variant={selected ? 'primary' : 'secondary'} onClick={() => onSelect(plan)}>
        {selected ? 'Agregado' : 'Contratar'}
      </Button>
    </div>
  );
}

function PlansSection({ selected, onSelect }) {
  const [filter, setFilter] = useState('Todos');
  const filters = ['Todos', 'Portabilidad', 'Línea nueva', 'Prepago'];
  return (
    <section className="section" id="planes">
      <div className="wrap">
        <div className="section-head">
          <div className="k">Planes móviles</div>
          <h2>Elige el plan que va contigo</h2>
          <p>Sin letra chica. Cámbiate cuando quieras y paga solo por lo que necesitas.</p>
        </div>
        <div className="chips">
          {filters.map((f) => (
            <button key={f} className={'chip' + (filter === f ? ' on' : '')} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="plan-grid">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} selected={selected === p.name} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Devices ---------- */
const DEVICES = [
  { name: 'iPhone 15', price: '$12.490', cuota: '24 cuotas sin interés', off: '33% dcto' },
  { name: 'Galaxy S24', price: '$10.990', cuota: '24 cuotas sin interés', off: null },
  { name: 'Xiaomi 14', price: '$7.990', cuota: '18 cuotas sin interés', off: '20% dcto' },
  { name: 'Pixel 8', price: '$9.490', cuota: '24 cuotas sin interés', off: null },
];

function DeviceCard({ d, onAdd }) {
  return (
    <button className="dev" onClick={() => onAdd(d)}>
      <div className="ph"><Icon name="smartphone" size={64} stroke={1} /></div>
      {d.off && <span className="off">{d.off}</span>}
      <h4>{d.name}</h4>
      <div className="pr">{d.price}</div>
      <div className="cuota">{d.cuota}</div>
    </button>
  );
}

function DevicesSection({ onAdd }) {
  return (
    <section className="section alt" id="equipos">
      <div className="wrap">
        <div className="section-head">
          <div className="k">Equipos</div>
          <h2>Llévate el último smartphone</h2>
          <p>Con cuotas sin interés y la mejor red para acompañarlo.</p>
        </div>
        <div className="dev-grid">
          {DEVICES.map((d) => (
            <DeviceCard key={d.name} d={d} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Banner ---------- */
function Banner({ onCta }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="banner">
          <img className="paren" src="../../assets/paren-blanco.svg" alt="" />
          <div className="banner-txt">
            <h3>Que tu negocio sea protagonista</h3>
            <p>Soluciones de conectividad pensadas para empresas que quieren crecer.</p>
          </div>
          <div className="cta"><Button variant="white" icon="arrow-right" onClick={onCta}>Conoce Empresas</Button></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    { h: 'Personas', l: ['Planes móviles', 'Internet hogar', 'Equipos', 'Recarga'] },
    { h: 'Empresas', l: ['Planes empresa', 'Soluciones', 'Ciberseguridad'] },
    { h: 'Ayuda', l: ['Centro de ayuda', 'Sucursales', 'Estado de red', 'Contacto'] },
  ];
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-cols">
          <div>
            <Logo neg size={28} />
            <p className="tag">Acercamos las infinitas posibilidades de la tecnología. Contigo en todas.</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5>{c.h}</h5>
              {c.l.map((x) => <a key={x}>{x}</a>)}
            </div>
          ))}
        </div>
        <div className="ftr-bot">
          <span>© 2026 Entel · Recreación de marca para fines de diseño</span>
          <span>Términos · Privacidad</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Toast ---------- */
function Toast({ msg, show }) {
  return (
    <div className={'toast' + (show ? ' show' : '')}>
      <Icon name="check-circle" size={20} stroke={2.5} />{msg}
    </div>
  );
}

Object.assign(window, { Icon, Logo, Button, Header, Hero, PlansSection, DevicesSection, Banner, Footer, Toast });
