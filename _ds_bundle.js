/* @ds-bundle: {"format":3,"namespace":"TrabajoDesignSystem_ce5170","components":[],"sourceHashes":{"ui_kits/app/app.jsx":"fd29c1110d88","ui_kits/app/ios-frame.jsx":"be3343be4b51","ui_kits/app/screens.jsx":"c913bf17edfd","ui_kits/empresas_web/app.jsx":"88fce49edf51","ui_kits/empresas_web/components.jsx":"5b1ceab61e98","ui_kits/personas_web/app.jsx":"6a05010aa977","ui_kits/personas_web/components.jsx":"72edc99ede51"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TrabajoDesignSystem_ce5170 = window.TrabajoDesignSystem_ce5170 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/app.jsx
try { (() => {
/* global React, IOSDevice, Login, Home, Recarga, Success, TabBar */
const {
  useState
} = React;
function App() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState('home');
  const [amt, setAmt] = useState('$5.000');
  const [done, setDone] = useState(false);
  let screen;
  if (done) {
    screen = /*#__PURE__*/React.createElement(Success, {
      amt: amt,
      onDone: () => {
        setDone(false);
        setTab('home');
      }
    });
  } else if (tab === 'recarga') {
    screen = /*#__PURE__*/React.createElement(Recarga, {
      onPay: a => {
        setAmt(a);
        setDone(true);
      }
    });
  } else if (tab === 'home') {
    screen = /*#__PURE__*/React.createElement(Home, {
      onQuick: t => setTab(t)
    });
  } else {
    screen = /*#__PURE__*/React.createElement("div", {
      className: "mi-scroll"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-screen"
    }, tab === 'beneficios' ? 'Beneficios' : 'Ayuda'), /*#__PURE__*/React.createElement("p", {
      className: "muted"
    }, tab === 'beneficios' ? 'Tus EntelDays y descuentos exclusivos aparecen aquí.' : 'Centro de ayuda, estado de red y contacto.')));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0f',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, null, authed ? /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, screen, !done && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    onTab: t => setTab(t)
  })) : /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement(Login, {
    onLogin: () => setAuthed(true)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;
function MIcon({
  name,
  size = 22,
  stroke = 1.6,
  color,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}

/* ---------- Login ---------- */
function Login({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "login"
  }, /*#__PURE__*/React.createElement("img", {
    className: "paren",
    src: "../../assets/paren-blanco.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "lg",
    src: "../../assets/entel-logo-horizontal-blanco.svg",
    alt: "Entel"
  }), /*#__PURE__*/React.createElement("h1", null, "Hola,", /*#__PURE__*/React.createElement("br", null), "ingresa a Mi Entel"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "RUT"), /*#__PURE__*/React.createElement("input", {
    placeholder: "12.345.678-9",
    defaultValue: "18.402.551-7"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fld"
  }, /*#__PURE__*/React.createElement("label", null, "Clave"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    defaultValue: "123456"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-full",
    onClick: onLogin
  }, "Ingresar"), /*#__PURE__*/React.createElement("a", {
    className: "forgot"
  }, "\xBFOlvidaste tu clave?")));
}

/* ---------- Home ---------- */
const QUICK = [{
  ic: 'plus',
  t: 'Recargar',
  tab: 'recarga'
}, {
  ic: 'credit-card',
  t: 'Pagar'
}, {
  ic: 'sliders-horizontal',
  t: 'Mi plan'
}, {
  ic: 'gift',
  t: 'Beneficios'
}];
function Home({
  onQuick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mi-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "greet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hi"
  }, /*#__PURE__*/React.createElement("span", null, "Hola,"), "Camila Rojas"), /*#__PURE__*/React.createElement("button", {
    className: "bell"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "bell",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "d"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "consumo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "paren",
    src: "../../assets/paren-blanco.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "plan"
  }, "Entel Power + \xB7 L\xEDnea \xB7\xB7\xB7 4471"), /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "32,5 ", /*#__PURE__*/React.createElement("small", null, "de 50 GB")), /*#__PURE__*/React.createElement("div", {
    className: "of"
  }, "disponibles este mes"), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: '65%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "days"
  }, "Se renueva en 12 d\xEDas")), /*#__PURE__*/React.createElement("div", {
    className: "quick"
  }, QUICK.map(q => /*#__PURE__*/React.createElement("button", {
    key: q.t,
    className: "qa",
    onClick: () => q.tab && onQuick(q.tab)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: q.ic,
    size: 24,
    stroke: 2
  })), /*#__PURE__*/React.createElement("span", null, q.t)))), /*#__PURE__*/React.createElement("div", {
    className: "sec-t"
  }, "Mis productos"), /*#__PURE__*/React.createElement("div", {
    className: "prod"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "smartphone",
    size: 22,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "L\xEDnea m\xF3vil"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Entel Power + \xB7 al d\xEDa")), /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "chevron-right",
    size: 20,
    stroke: 2
  }))), /*#__PURE__*/React.createElement("div", {
    className: "prod"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "wifi",
    size: 22,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Internet hogar"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Fibra 600 Mbps \xB7 al d\xEDa")), /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "chevron-right",
    size: 20,
    stroke: 2
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }));
}

/* ---------- Recarga ---------- */
const AMOUNTS = ['$3.000', '$5.000', '$8.000', '$10.000', '$15.000', '$20.000'];
function Recarga({
  onPay
}) {
  const [amt, setAmt] = useState('$5.000');
  const [method, setMethod] = useState('debito');
  return /*#__PURE__*/React.createElement("div", {
    className: "mi-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-screen"
  }, "Recargar"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "L\xEDnea Entel Power + \xB7 \xB7\xB7\xB7 4471"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 10
    }
  }, "Elige un monto"), /*#__PURE__*/React.createElement("div", {
    className: "amt-grid"
  }, AMOUNTS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: 'amt' + (amt === a ? ' on' : ''),
    onClick: () => setAmt(a)
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      margin: '4px 0 10px'
    }
  }, "Medio de pago"), /*#__PURE__*/React.createElement("button", {
    className: 'method' + (method === 'debito' ? ' on' : ''),
    onClick: () => setMethod('debito')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "credit-card",
    size: 22,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Tarjeta de d\xE9bito"), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Visa \xB7\xB7\xB7 2043")), /*#__PURE__*/React.createElement("span", {
    className: "rad"
  })), /*#__PURE__*/React.createElement("button", {
    className: 'method' + (method === 'credito' ? ' on' : ''),
    onClick: () => setMethod('credito')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "wallet",
    size: 22,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Tarjeta de cr\xE9dito"), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Mastercard \xB7\xB7\xB7 8810")), /*#__PURE__*/React.createElement("span", {
    className: "rad"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-full",
    style: {
      marginTop: 18
    },
    onClick: () => onPay(amt)
  }, "Recargar ", amt)));
}

/* ---------- Success ---------- */
function Success({
  amt,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "circle"
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: "check",
    size: 40,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("h2", null, "\xA1Recarga lista!"), /*#__PURE__*/React.createElement("p", null, "Abonamos ", amt, " a tu l\xEDnea Entel Power +. Te enviamos el comprobante."), /*#__PURE__*/React.createElement("button", {
    className: "btn-full",
    style: {
      maxWidth: 240
    },
    onClick: onDone
  }, "Volver al inicio"));
}

/* ---------- Tab bar ---------- */
const TABS = [{
  id: 'home',
  ic: 'house',
  t: 'Inicio'
}, {
  id: 'recarga',
  ic: 'plus-circle',
  t: 'Recarga'
}, {
  id: 'beneficios',
  ic: 'gift',
  t: 'Beneficios'
}, {
  id: 'ayuda',
  ic: 'help-circle',
  t: 'Ayuda'
}];
function TabBar({
  tab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: 'tab' + (tab === t.id ? ' on' : ''),
    onClick: () => onTab(t.id)
  }, /*#__PURE__*/React.createElement(MIcon, {
    name: t.ic,
    size: 24,
    stroke: tab === t.id ? 2.2 : 1.8
  }), /*#__PURE__*/React.createElement("span", null, t.t))));
}
Object.assign(window, {
  MIcon,
  Login,
  Home,
  Recarga,
  Success,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empresas_web/app.jsx
try { (() => {
/* global React, Header, Hero, Stats, Solutions, Logos, Contact, Footer, Toast */
const {
  useState,
  useRef
} = React;
function App() {
  const [toast, setToast] = useState({
    msg: '',
    show: false
  });
  const tRef = useRef(null);
  function ping(msg) {
    setToast({
      msg,
      show: true
    });
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast(t => ({
      ...t,
      show: false
    })), 2400);
  }
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 60,
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    active: "Soluciones",
    onNav: () => scrollTo('sol'),
    onContact: () => scrollTo('contact')
  }), /*#__PURE__*/React.createElement(Hero, {
    onContact: () => scrollTo('contact'),
    onSol: () => scrollTo('sol')
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Solutions, {
    onMore: () => scrollTo('contact')
  }), /*#__PURE__*/React.createElement(Logos, null), /*#__PURE__*/React.createElement(Contact, {
    onSubmit: () => ping('¡Listo! Un ejecutivo te contactará pronto')
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    show: toast.show
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empresas_web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/empresas_web/components.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;
function Icon({
  name,
  size = 22,
  stroke = 1.5,
  color,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}
function Logo({
  neg,
  size = 26
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/entel-logo-horizontal-' + (neg ? 'blanco' : 'color') + '.svg',
    alt: "Entel",
    style: {
      height: size,
      width: 'auto',
      alignSelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "emp",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: neg ? 'rgba(255,255,255,.7)' : 'var(--gris-600)'
    }
  }, "Empresas"));
}
function Button({
  variant = 'primary',
  children,
  icon,
  onClick,
  block
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: 'btn btn-' + variant + (block ? ' btn-block' : ''),
    onClick: onClick
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    stroke: 2
  }));
}
function Header({
  active,
  onNav,
  onContact
}) {
  const items = ['Soluciones', 'Conectividad', 'Cloud', 'Casos'];
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hdr-in"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", null, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    className: active === it ? 'active' : '',
    onClick: () => onNav && onNav()
  }, it))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onContact
  }, "Habla con un experto")));
}
function Hero({
  onContact,
  onSol
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "paren",
    src: "../../assets/paren-blanco.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Entel Empresas"), /*#__PURE__*/React.createElement("h1", null, "Que tu negocio sea protagonista"), /*#__PURE__*/React.createElement("p", null, "Conectividad, cloud y ciberseguridad de la mano de un partner que te acompa\xF1a en cada paso de tu transformaci\xF3n digital."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    icon: "arrow-right",
    onClick: onContact
  }, "Cotiza tu soluci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onSol
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "Ver soluciones"))))));
}
const STATS = [{
  n: '99,9%',
  l: 'Disponibilidad de red garantizada'
}, {
  n: '24/7',
  l: 'Soporte experto dedicado'
}, {
  n: '+30 mil',
  l: 'Empresas confían en Entel'
}];
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stats-in"
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, s.l)))));
}
const SOLS = [{
  ic: 'wifi',
  h: 'Conectividad',
  p: 'Internet dedicado, redes SD-WAN y planes móviles para todo tu equipo, con cobertura 5G donde la necesites.'
}, {
  ic: 'cloud',
  h: 'Cloud & Data Center',
  p: 'Infraestructura, nube híbrida y respaldo gestionado para escalar sin límites y con total continuidad.'
}, {
  ic: 'shield-check',
  h: 'Ciberseguridad',
  p: 'Protección perimetral, monitoreo 24/7 y respuesta ante incidentes para resguardar tu operación.'
}, {
  ic: 'phone-call',
  h: 'Colaboración',
  p: 'Telefonía IP, contact center y herramientas de trabajo que mantienen a tu empresa siempre conectada.'
}, {
  ic: 'bar-chart-3',
  h: 'IoT & Analítica',
  p: 'Sensores, conectividad masiva y tableros de datos para tomar mejores decisiones en tiempo real.'
}, {
  ic: 'sparkles',
  h: 'Transformación digital',
  p: 'Consultoría y proyectos a medida para llevar a tu negocio a la vanguardia de la innovación.'
}];
function SolCard({
  s,
  onMore
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sol",
    onClick: onMore
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 26,
    stroke: 2
  })), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Conocer m\xE1s ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    stroke: 2
  })));
}
function Solutions({
  onMore
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "sol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Soluciones"), /*#__PURE__*/React.createElement("h2", null, "Todo lo que tu empresa necesita, en un solo partner"), /*#__PURE__*/React.createElement("p", null, "Dise\xF1amos soluciones integrales y a medida para cada etapa de tu negocio.")), /*#__PURE__*/React.createElement("div", {
    className: "sol-grid"
  }, SOLS.map(s => /*#__PURE__*/React.createElement(SolCard, {
    key: s.h,
    s: s,
    onMore: onMore
  })))));
}
function Logos() {
  const names = ['ACME', 'Andina', 'Cumbre', 'Nova', 'Patagon', 'Lumen'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shead"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--gris-600)',
      fontFamily: 'var(--font-ui)',
      fontSize: 14
    }
  }, "Empresas que crecen con Entel")), /*#__PURE__*/React.createElement("div", {
    className: "logos"
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "l"
  }, n)))));
}
function Contact({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("img", {
    className: "paren",
    src: "../../assets/paren-blanco.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", null, "Hablemos de tu pr\xF3ximo paso"), /*#__PURE__*/React.createElement("p", null, "Un ejecutivo experto te contacta para dise\xF1ar la soluci\xF3n que tu empresa necesita."), /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    stroke: 2.5
  }), " Asesor\xEDa personalizada, sin costo"), /*#__PURE__*/React.createElement("div", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    stroke: 2.5
  }), " Respuesta en menos de 24 horas")), /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Cu\xE9ntanos de tu empresa"), /*#__PURE__*/React.createElement("div", {
    className: "fg"
  }, /*#__PURE__*/React.createElement("label", null, "Empresa"), /*#__PURE__*/React.createElement("input", {
    defaultValue: "Comercial Andina SpA",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg"
  }, /*#__PURE__*/React.createElement("label", null, "Nombre"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Tu nombre",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg"
  }, /*#__PURE__*/React.createElement("label", null, "Correo corporativo"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "nombre@empresa.cl",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "fg"
  }, /*#__PURE__*/React.createElement("label", null, "Soluci\xF3n de inter\xE9s"), /*#__PURE__*/React.createElement("select", {
    defaultValue: "Conectividad"
  }, /*#__PURE__*/React.createElement("option", null, "Conectividad"), /*#__PURE__*/React.createElement("option", null, "Cloud & Data Center"), /*#__PURE__*/React.createElement("option", null, "Ciberseguridad"), /*#__PURE__*/React.createElement("option", null, "Colaboraci\xF3n"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true
  }, "Quiero que me contacten")))));
}
function Footer() {
  const cols = [{
    h: 'Soluciones',
    l: ['Conectividad', 'Cloud', 'Ciberseguridad', 'IoT']
  }, {
    h: 'Empresa',
    l: ['Casos de éxito', 'Sostenibilidad', 'Trabaja con nosotros']
  }, {
    h: 'Soporte',
    l: ['Mesa de ayuda', 'Estado de servicios', 'Contacto']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    neg: true,
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    className: "tag"
  }, "Tecnolog\xEDa que impulsa a las empresas de Chile. Con tu negocio en todas.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h5", null, c.h), c.l.map(x => /*#__PURE__*/React.createElement("a", {
    key: x
  }, x))))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-bot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Entel Empresas \xB7 Recreaci\xF3n de marca para fines de dise\xF1o"), /*#__PURE__*/React.createElement("span", null, "T\xE9rminos \xB7 Privacidad"))));
}
function Toast({
  msg,
  show
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'toast' + (show ? ' show' : '')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20,
    stroke: 2.5
  }), msg);
}
Object.assign(window, {
  Icon,
  Logo,
  Button,
  Header,
  Hero,
  Stats,
  Solutions,
  Logos,
  Contact,
  Footer,
  Toast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/empresas_web/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personas_web/app.jsx
try { (() => {
/* global React, Header, Hero, PlansSection, DevicesSection, Banner, Footer, Toast */
const {
  useState,
  useRef
} = React;
function App() {
  const [cart, setCart] = useState(0);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState({
    msg: '',
    show: false
  });
  const tRef = useRef(null);
  function ping(msg) {
    setCart(c => c + 1);
    setToast({
      msg,
      show: true
    });
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast(t => ({
      ...t,
      show: false
    })), 2200);
  }
  function selectPlan(p) {
    setSelected(p.name);
    ping('Plan ' + p.name + ' agregado');
  }
  function addDevice(d) {
    ping(d.name + ' agregado al carro');
  }
  function scrollPlans() {
    const el = document.getElementById('planes');
    if (el) window.scrollTo({
      top: el.offsetTop - 60,
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, {
    cart: cart,
    active: "Personas",
    onNav: scrollPlans
  }), /*#__PURE__*/React.createElement(Hero, {
    onPrimary: scrollPlans
  }), /*#__PURE__*/React.createElement(PlansSection, {
    selected: selected,
    onSelect: selectPlan
  }), /*#__PURE__*/React.createElement(DevicesSection, {
    onAdd: addDevice
  }), /*#__PURE__*/React.createElement(Banner, {
    onCta: () => ping('Te llevamos a Empresas')
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    show: toast.show
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personas_web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personas_web/components.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ---------- Icon (Lucide) ---------- */
function Icon({
  name,
  size = 22,
  color,
  stroke = 1.5,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}

/* ---------- Logo ---------- */
function Logo({
  neg,
  size = 28
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: '../../assets/entel-logo-horizontal-' + (neg ? 'blanco' : 'color') + '.svg',
    alt: "Entel",
    style: {
      height: size,
      display: 'block',
      width: 'auto'
    }
  });
}

/* ---------- Button ---------- */
function Button({
  variant = 'primary',
  children,
  icon,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: 'btn btn-' + variant,
    onClick: onClick
  }, children, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    stroke: 2
  }));
}

/* ---------- Header ---------- */
function Header({
  cart,
  active,
  onNav
}) {
  const items = ['Personas', 'Empresas', 'Equipos', 'Ayuda'];
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hdr-in"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", null, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    className: active === it ? 'active' : '',
    onClick: () => onNav && onNav(it)
  }, it))), /*#__PURE__*/React.createElement("div", {
    className: "hdr-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn cart-dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 20
  }), cart > 0 && /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, cart)))));
}

/* ---------- Hero ---------- */
function Hero({
  onPrimary
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "paren",
    src: "../../assets/paren-blanco.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "off"
  }, "EntelDays \xB7 hasta 33% dcto"), /*#__PURE__*/React.createElement("h1", null, "Cobertura donde la necesites"), /*#__PURE__*/React.createElement("p", null, "Planes que se adaptan a cada momento, con 5G en estado puro y gigas para compartir con los tuyos."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    icon: "arrow-right",
    onClick: onPrimary
  }, "Ver planes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onPrimary
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "Conoce el 5G"))))));
}

/* ---------- Plans ---------- */
const PLANS = [{
  name: 'Entel Ágil',
  gb: '15',
  price: '$8.990',
  tag: null,
  feats: ['Redes sociales ilimitadas', 'Velocidad 4G/5G', 'Sin permanencia']
}, {
  name: 'Entel Power +',
  gb: '50',
  price: '$13.990',
  tag: 'Más vendido',
  feats: ['Gigas libres + RRSS', '5G donde la necesites', 'Roaming Latam incluido']
}, {
  name: 'Entel Full',
  gb: '100',
  price: '$19.990',
  tag: null,
  feats: ['Gigas libres + RRSS', '5G prioritario', 'Prime Video de cortesía']
}];
function PlanCard({
  plan,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'plan' + (selected ? ' sel' : '')
  }, plan.tag && /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, plan.tag), /*#__PURE__*/React.createElement("h3", null, plan.name), /*#__PURE__*/React.createElement("div", {
    className: "gb"
  }, plan.gb, /*#__PURE__*/React.createElement("small", null, " GB")), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, plan.price), /*#__PURE__*/React.createElement("div", {
    className: "per"
  }, "por mes"), /*#__PURE__*/React.createElement("ul", null, plan.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: 2.5
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: selected ? 'primary' : 'secondary',
    onClick: () => onSelect(plan)
  }, selected ? 'Agregado' : 'Contratar'));
}
function PlansSection({
  selected,
  onSelect
}) {
  const [filter, setFilter] = useState('Todos');
  const filters = ['Todos', 'Portabilidad', 'Línea nueva', 'Prepago'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "planes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Planes m\xF3viles"), /*#__PURE__*/React.createElement("h2", null, "Elige el plan que va contigo"), /*#__PURE__*/React.createElement("p", null, "Sin letra chica. C\xE1mbiate cuando quieras y paga solo por lo que necesitas.")), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: 'chip' + (filter === f ? ' on' : ''),
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "plan-grid"
  }, PLANS.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.name,
    plan: p,
    selected: selected === p.name,
    onSelect: onSelect
  })))));
}

/* ---------- Devices ---------- */
const DEVICES = [{
  name: 'iPhone 15',
  price: '$12.490',
  cuota: '24 cuotas sin interés',
  off: '33% dcto'
}, {
  name: 'Galaxy S24',
  price: '$10.990',
  cuota: '24 cuotas sin interés',
  off: null
}, {
  name: 'Xiaomi 14',
  price: '$7.990',
  cuota: '18 cuotas sin interés',
  off: '20% dcto'
}, {
  name: 'Pixel 8',
  price: '$9.490',
  cuota: '24 cuotas sin interés',
  off: null
}];
function DeviceCard({
  d,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "dev",
    onClick: () => onAdd(d)
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 64,
    stroke: 1
  })), d.off && /*#__PURE__*/React.createElement("span", {
    className: "off"
  }, d.off), /*#__PURE__*/React.createElement("h4", null, d.name), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, d.price), /*#__PURE__*/React.createElement("div", {
    className: "cuota"
  }, d.cuota));
}
function DevicesSection({
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section alt",
    id: "equipos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Equipos"), /*#__PURE__*/React.createElement("h2", null, "Ll\xE9vate el \xFAltimo smartphone"), /*#__PURE__*/React.createElement("p", null, "Con cuotas sin inter\xE9s y la mejor red para acompa\xF1arlo.")), /*#__PURE__*/React.createElement("div", {
    className: "dev-grid"
  }, DEVICES.map(d => /*#__PURE__*/React.createElement(DeviceCard, {
    key: d.name,
    d: d,
    onAdd: onAdd
  })))));
}

/* ---------- Banner ---------- */
function Banner({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "paren",
    src: "../../assets/paren-blanco.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "banner-txt"
  }, /*#__PURE__*/React.createElement("h3", null, "Que tu negocio sea protagonista"), /*#__PURE__*/React.createElement("p", null, "Soluciones de conectividad pensadas para empresas que quieren crecer.")), /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    icon: "arrow-right",
    onClick: onCta
  }, "Conoce Empresas")))));
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [{
    h: 'Personas',
    l: ['Planes móviles', 'Internet hogar', 'Equipos', 'Recarga']
  }, {
    h: 'Empresas',
    l: ['Planes empresa', 'Soluciones', 'Ciberseguridad']
  }, {
    h: 'Ayuda',
    l: ['Centro de ayuda', 'Sucursales', 'Estado de red', 'Contacto']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    neg: true,
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    className: "tag"
  }, "Acercamos las infinitas posibilidades de la tecnolog\xEDa. Contigo en todas.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h5", null, c.h), c.l.map(x => /*#__PURE__*/React.createElement("a", {
    key: x
  }, x))))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-bot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Entel \xB7 Recreaci\xF3n de marca para fines de dise\xF1o"), /*#__PURE__*/React.createElement("span", null, "T\xE9rminos \xB7 Privacidad"))));
}

/* ---------- Toast ---------- */
function Toast({
  msg,
  show
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'toast' + (show ? ' show' : '')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 20,
    stroke: 2.5
  }), msg);
}
Object.assign(window, {
  Icon,
  Logo,
  Button,
  Header,
  Hero,
  PlansSection,
  DevicesSection,
  Banner,
  Footer,
  Toast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personas_web/components.jsx", error: String((e && e.message) || e) }); }

})();
