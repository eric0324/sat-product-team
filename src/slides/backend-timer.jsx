// 後端工程師 — 計時頁 (主持人點擊觸發亂入)
import { useState, useEffect, useRef } from 'react';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const TOTAL_SEC = 180; // 3 分鐘

export function SlideBackendTimer() {
  const [remaining, setRemaining] = useState(TOTAL_SEC);
  const [running, setRunning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupKey, setPopupKey] = useState(0); // 重按讓動畫重播
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');
  const warn = remaining <= 30 && remaining > 0;

  const reset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setRemaining(TOTAL_SEC);
    setShowPopup(false);
  };

  const triggerPopup = () => {
    setShowPopup(true);
    setPopupKey((k) => k + 1);
  };

  return (
    <section
      className="slide"
      onClick={triggerPopup}
      style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
    >
      <VhsHud tape="NIGHTMARE //03" chapter="STAGE 3 LIVE" />
      <NoiseOverlay />

      <div style={{ textAlign: 'center', marginBottom: 20, zIndex: 10 }}>
        <div className="mono" style={{ fontSize: 28, color: '#ffd60a', letterSpacing: 6 }}>
          ── STAGE 3 ──
        </div>
        <h1 style={{ fontFamily: 'var(--font-tc)', fontWeight: 900, fontSize: 64, color: '#fff', margin: '14px 0', letterSpacing: 4 }}>
          STAGE 3: 後端 黏土拆分
        </h1>
        <div style={{ fontSize: 26, color: '#ccc', maxWidth: 1200, margin: '0 auto' }}>
          拆得越細，組裝越順。 每一塊都是前端等著接手的零件。
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
          <div className="mono yellow" style={{ fontSize: 32, letterSpacing: 6 }}>TIME REMAINING  ⏱</div>
          <div className={`timer-box ${warn ? 'warn' : ''}`}>
            {mm}:{ss}
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <button className="pixel-btn cyan" onClick={(e) => { e.stopPropagation(); setRunning(!running); }}>
              {running ? 'PAUSE' : (remaining === TOTAL_SEC ? 'START' : 'RESUME')}
            </button>
            <button className="pixel-btn magenta" onClick={(e) => { e.stopPropagation(); reset(); }}>RESET</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          key={popupKey}
          className="interrupt-popup"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            right: 60,
            bottom: 180,
            display: 'flex',
            alignItems: 'flex-end',
            gap: 16,
            zIndex: 50,
            cursor: 'default',
          }}
        >
          <div style={{
            background: '#fff',
            color: '#000',
            padding: '20px 28px',
            borderRadius: 16,
            fontSize: 26,
            fontFamily: 'var(--font-tc)',
            maxWidth: 420,
            position: 'relative',
            boxShadow: '6px 8px 0 rgba(0,0,0,0.5)',
            lineHeight: 1.5,
          }}>
            <div style={{ fontWeight: 900, color: 'var(--blood-red)', fontSize: 22, marginBottom: 6, letterSpacing: 1 }}>
              行銷組 J 同事
            </div>
            <div>「欸欸欸，熊的手要換<b style={{ background: '#000', color: '#fff', padding: '0 6px' }}>黑色</b>啦～」</div>
            <div style={{
              position: 'absolute', right: -18, bottom: 30,
              width: 0, height: 0,
              borderTop: '14px solid transparent',
              borderBottom: '14px solid transparent',
              borderLeft: '20px solid #fff',
            }} />
            <button
              onClick={(e) => { e.stopPropagation(); setShowPopup(false); }}
              style={{
                position: 'absolute', top: -14, right: -14,
                background: 'var(--blood-red)', color: '#fff',
                border: '2px solid #000', borderRadius: '50%',
                width: 32, height: 32, cursor: 'pointer',
                fontSize: 14, fontFamily: 'var(--font-pixel)',
                lineHeight: 1,
              }}
              aria-label="關閉"
            >×</button>
          </div>
          <div style={{ fontSize: 110, lineHeight: 1 }}>🧑‍💼</div>
        </div>
      )}

      <VhsFooter left="▶ STAGE 3 LIVE" right="NO MERCY" />
    </section>
  );
}
