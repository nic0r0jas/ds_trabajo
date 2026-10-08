/* global React, IOSDevice, Login, Home, Recarga, Success, TabBar */
const { useState } = React;

function App() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState('home');
  const [amt, setAmt] = useState('$5.000');
  const [done, setDone] = useState(false);

  let screen;
  if (done) {
    screen = <Success amt={amt} onDone={() => { setDone(false); setTab('home'); }} />;
  } else if (tab === 'recarga') {
    screen = <Recarga onPay={(a) => { setAmt(a); setDone(true); }} />;
  } else if (tab === 'home') {
    screen = <Home onQuick={(t) => setTab(t)} />;
  } else {
    screen = (
      <div className="mi-scroll">
        <div className="pad">
          <div className="h-screen">{tab === 'beneficios' ? 'Beneficios' : 'Ayuda'}</div>
          <p className="muted">{tab === 'beneficios' ? 'Tus EntelDays y descuentos exclusivos aparecen aquí.' : 'Centro de ayuda, estado de red y contacto.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0f', padding: 24 }}>
      <IOSDevice>
        {authed ? (
          <div className="mi">
            {screen}
            {!done && <TabBar tab={tab} onTab={(t) => setTab(t)} />}
          </div>
        ) : (
          <div className="mi"><Login onLogin={() => setAuthed(true)} /></div>
        )}
      </IOSDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
