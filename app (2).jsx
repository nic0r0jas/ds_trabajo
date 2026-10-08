/* global React, Header, Hero, Stats, Solutions, Logos, Contact, Footer, Toast */
const { useState, useRef } = React;

function App() {
  const [toast, setToast] = useState({ msg: '', show: false });
  const tRef = useRef(null);
  function ping(msg) {
    setToast({ msg, show: true });
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2400);
  }
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  }
  return (
    <div>
      <Header active="Soluciones" onNav={() => scrollTo('sol')} onContact={() => scrollTo('contact')} />
      <Hero onContact={() => scrollTo('contact')} onSol={() => scrollTo('sol')} />
      <Stats />
      <Solutions onMore={() => scrollTo('contact')} />
      <Logos />
      <Contact onSubmit={() => ping('¡Listo! Un ejecutivo te contactará pronto')} />
      <Footer />
      <Toast msg={toast.msg} show={toast.show} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
