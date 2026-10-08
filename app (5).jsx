/* global React, Header, Hero, PlansSection, DevicesSection, Banner, Footer, Toast */
const { useState, useRef } = React;

function App() {
  const [cart, setCart] = useState(0);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState({ msg: '', show: false });
  const tRef = useRef(null);

  function ping(msg) {
    setCart((c) => c + 1);
    setToast({ msg, show: true });
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2200);
  }
  function selectPlan(p) {
    setSelected(p.name);
    ping('Plan ' + p.name + ' agregado');
  }
  function addDevice(d) { ping(d.name + ' agregado al carro'); }
  function scrollPlans() {
    const el = document.getElementById('planes');
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  }

  return (
    <div className="site">
      <Header cart={cart} active="Personas" onNav={scrollPlans} />
      <Hero onPrimary={scrollPlans} />
      <PlansSection selected={selected} onSelect={selectPlan} />
      <DevicesSection onAdd={addDevice} />
      <Banner onCta={() => ping('Te llevamos a Empresas')} />
      <Footer />
      <Toast msg={toast.msg} show={toast.show} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
