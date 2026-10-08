/* global React */
const { useState, useEffect, useRef } = React;

function MIcon({ name, size = 22, stroke = 1.6, color, style }) {
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

/* ---------- Login ---------- */
function Login({ onLogin }) {
  return (
    <div className="login">
      <img className="paren" src="../../assets/paren-blanco.svg" alt="" />
      <img className="lg" src="../../assets/entel-logo-horizontal-blanco.svg" alt="Entel" />
      <h1>Hola,<br />ingresa a Mi Entel</h1>
      <div className="card">
        <div className="fld">
          <label>RUT</label>
          <input placeholder="12.345.678-9" defaultValue="18.402.551-7" />
        </div>
        <div className="fld">
          <label>Clave</label>
          <input type="password" defaultValue="123456" />
        </div>
        <button className="btn-full" onClick={onLogin}>Ingresar</button>
        <a className="forgot">¿Olvidaste tu clave?</a>
      </div>
    </div>
  );
}

/* ---------- Home ---------- */
const QUICK = [
  { ic: 'plus', t: 'Recargar', tab: 'recarga' },
  { ic: 'credit-card', t: 'Pagar' },
  { ic: 'sliders-horizontal', t: 'Mi plan' },
  { ic: 'gift', t: 'Beneficios' },
];

function Home({ onQuick }) {
  return (
    <div className="mi-scroll">
      <div className="greet">
        <div className="hi"><span>Hola,</span>Camila Rojas</div>
        <button className="bell"><MIcon name="bell" size={20} /><span className="d" /></button>
      </div>

      <div className="consumo">
        <img className="paren" src="../../assets/paren-blanco.svg" alt="" />
        <div className="plan">Entel Power + · Línea ··· 4471</div>
        <div className="big">32,5 <small>de 50 GB</small></div>
        <div className="of">disponibles este mes</div>
        <div className="bar"><div className="fill" style={{ width: '65%' }} /></div>
        <div className="days">Se renueva en 12 días</div>
      </div>

      <div className="quick">
        {QUICK.map((q) => (
          <button key={q.t} className="qa" onClick={() => q.tab && onQuick(q.tab)}>
            <span className="ic"><MIcon name={q.ic} size={24} stroke={2} /></span>
            <span>{q.t}</span>
          </button>
        ))}
      </div>

      <div className="sec-t">Mis productos</div>
      <div className="prod">
        <span className="ic"><MIcon name="smartphone" size={22} stroke={2} /></span>
        <div><div className="nm">Línea móvil</div><div className="sub">Entel Power + · al día</div></div>
        <span className="chev"><MIcon name="chevron-right" size={20} stroke={2} /></span>
      </div>
      <div className="prod">
        <span className="ic"><MIcon name="wifi" size={22} stroke={2} /></span>
        <div><div className="nm">Internet hogar</div><div className="sub">Fibra 600 Mbps · al día</div></div>
        <span className="chev"><MIcon name="chevron-right" size={20} stroke={2} /></span>
      </div>
      <div style={{ height: 12 }} />
    </div>
  );
}

/* ---------- Recarga ---------- */
const AMOUNTS = ['$3.000', '$5.000', '$8.000', '$10.000', '$15.000', '$20.000'];
function Recarga({ onPay }) {
  const [amt, setAmt] = useState('$5.000');
  const [method, setMethod] = useState('debito');
  return (
    <div className="mi-scroll">
      <div className="pad">
        <div className="h-screen">Recargar</div>
        <p className="muted">Línea Entel Power + · ··· 4471</p>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, marginBottom: 10 }}>Elige un monto</div>
        <div className="amt-grid">
          {AMOUNTS.map((a) => (
            <button key={a} className={'amt' + (amt === a ? ' on' : '')} onClick={() => setAmt(a)}>{a}</button>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, margin: '4px 0 10px' }}>Medio de pago</div>
        <button className={'method' + (method === 'debito' ? ' on' : '')} onClick={() => setMethod('debito')}>
          <span className="ic"><MIcon name="credit-card" size={22} stroke={2} /></span>
          <div><div className="t">Tarjeta de débito</div><div className="s">Visa ··· 2043</div></div>
          <span className="rad" />
        </button>
        <button className={'method' + (method === 'credito' ? ' on' : '')} onClick={() => setMethod('credito')}>
          <span className="ic"><MIcon name="wallet" size={22} stroke={2} /></span>
          <div><div className="t">Tarjeta de crédito</div><div className="s">Mastercard ··· 8810</div></div>
          <span className="rad" />
        </button>
        <button className="btn-full" style={{ marginTop: 18 }} onClick={() => onPay(amt)}>Recargar {amt}</button>
      </div>
    </div>
  );
}

/* ---------- Success ---------- */
function Success({ amt, onDone }) {
  return (
    <div className="success">
      <div className="circle"><MIcon name="check" size={40} stroke={2.5} /></div>
      <h2>¡Recarga lista!</h2>
      <p>Abonamos {amt} a tu línea Entel Power +. Te enviamos el comprobante.</p>
      <button className="btn-full" style={{ maxWidth: 240 }} onClick={onDone}>Volver al inicio</button>
    </div>
  );
}

/* ---------- Tab bar ---------- */
const TABS = [
  { id: 'home', ic: 'house', t: 'Inicio' },
  { id: 'recarga', ic: 'plus-circle', t: 'Recarga' },
  { id: 'beneficios', ic: 'gift', t: 'Beneficios' },
  { id: 'ayuda', ic: 'help-circle', t: 'Ayuda' },
];
function TabBar({ tab, onTab }) {
  return (
    <div className="tabs">
      {TABS.map((t) => (
        <button key={t.id} className={'tab' + (tab === t.id ? ' on' : '')} onClick={() => onTab(t.id)}>
          <MIcon name={t.ic} size={24} stroke={tab === t.id ? 2.2 : 1.8} />
          <span>{t.t}</span>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { MIcon, Login, Home, Recarga, Success, TabBar });
