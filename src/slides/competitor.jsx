// 開場：背景圖 + 壓上影片畫面 + 最上層眼睛闔上動畫 + 打字機字句
import { useState, useEffect, useRef } from 'react';

const BG_IMAGE = './images/competitor-bg.jpg';
const SCREEN_VIDEO = './videos/start.mov';

const LINE1 = '怎麼有點睏...';
const LINE2 = '這裡是...';

const TYPE_DELAY_MS = 7600;   // 眼睛闔完後才開始打字（5s 延遲 + 2.4s 動畫 + 小緩衝）
const CHAR_MS = 220;
const PAUSE_BETWEEN_LINES_MS = 1100;

export function SlideCompetitor() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoOk, setVideoOk] = useState(false);

  const [typedLine1, setTypedLine1] = useState('');
  const [typedLine2, setTypedLine2] = useState('');
  const [typing, setTyping] = useState(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const stage = document.querySelector('deck-stage');
    if (!stage) return;

    let fadeTimer = null;
    let fadeInterval = null;
    const clearFade = () => {
      clearTimeout(fadeTimer);
      clearInterval(fadeInterval);
      fadeTimer = null;
      fadeInterval = null;
    };
    const startFade = (v, durationMs) => {
      const stepMs = 50;
      const steps = durationMs / stepMs;
      const drop = v.volume / steps;
      fadeInterval = setInterval(() => {
        if (v.volume > drop) v.volume = Math.max(0, v.volume - drop);
        else { v.volume = 0; clearInterval(fadeInterval); fadeInterval = null; }
      }, stepMs);
    };

    const clearTypewriter = () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
    const pushTimer = (fn, delay) => {
      timersRef.current.push(setTimeout(fn, delay));
    };
    const startTypewriter = () => {
      clearTypewriter();
      setTyping(true);
      setTypedLine1('');
      setTypedLine2('');
      // Line 1
      for (let i = 1; i <= LINE1.length; i++) {
        pushTimer(() => setTypedLine1(LINE1.slice(0, i)), i * CHAR_MS);
      }
      // Line 2（line1 打完 + 停頓）
      const line2Start = LINE1.length * CHAR_MS + PAUSE_BETWEEN_LINES_MS;
      for (let i = 1; i <= LINE2.length; i++) {
        pushTimer(() => setTypedLine2(LINE2.slice(0, i)), line2Start + i * CHAR_MS);
      }
    };

    const activate = (v) => {
      v.volume = 1;
      v.currentTime = 0;
      v.play().catch(() => {});
      clearFade();
      clearTypewriter();
      setTyping(false);
      setTypedLine1('');
      setTypedLine2('');
      fadeTimer = setTimeout(() => startFade(v, 2400), 5000);
      pushTimer(() => startTypewriter(), TYPE_DELAY_MS);
    };
    const deactivate = (v) => {
      clearFade();
      clearTypewriter();
      v.pause();
      v.volume = 1;
      setTyping(false);
      setTypedLine1('');
      setTypedLine2('');
    };

    const handle = (e) => {
      const v = videoRef.current;
      if (!v) return;
      const active = e.detail?.slide === sectionRef.current;
      if (active) activate(v); else deactivate(v);
    };
    stage.addEventListener('slidechange', handle);

    const v = videoRef.current;
    if (v && sectionRef.current?.hasAttribute('data-deck-active')) activate(v);
    else if (v) deactivate(v);

    return () => {
      stage.removeEventListener('slidechange', handle);
      clearFade();
      clearTypewriter();
    };
  }, []);

  const line1Done = typedLine1.length === LINE1.length;
  const line2Done = typedLine2.length === LINE2.length;

  return (
    <section ref={sectionRef} className="slide" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div
        className="eye-close"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#f5f2ea',
          zIndex: 1,
        }}
      >
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1280, height: 720,
          background: '#000',
          border: '18px solid #6a6a6a',
          boxShadow: '0 40px 80px rgba(0,0,0,0.7)',
          overflow: 'hidden',
        }}>
          <video
            ref={videoRef}
            src={SCREEN_VIDEO}
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoOk(true)}
            onError={() => setVideoOk(false)}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: videoOk ? 'block' : 'none',
            }}
          />
          {!videoOk && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 18,
              background: 'repeating-linear-gradient(45deg, #1a1a1a 0 20px, #0a0a0a 20px 40px)',
            }}>
              <div style={{ fontSize: 48, color: 'var(--warn-yellow)', fontFamily: 'var(--font-mono)', letterSpacing: 4 }}>
                ▶ 影片待放入
              </div>
              <div style={{ fontSize: 22, color: '#888', fontFamily: 'var(--font-mono)' }}>
                videos/start.mov
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 打字機字句：眼睛闔上後在黑幕中央逐字出現 */}
      {typing && (
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          textAlign: 'center',
          color: '#fff',
          fontFamily: 'var(--font-tc)',
          letterSpacing: 6,
          lineHeight: 1.6,
          whiteSpace: 'nowrap',
        }}>
          <div style={{ fontSize: 72 }}>
            {typedLine1}
            {!line1Done && <span className="typewriter-cursor">▍</span>}
          </div>
          <div style={{ fontSize: 72, marginTop: 18, minHeight: 80 }}>
            {typedLine2}
            {line1Done && !line2Done && <span className="typewriter-cursor">▍</span>}
            {line2Done && <span className="typewriter-cursor">▍</span>}
          </div>
        </div>
      )}
    </section>
  );
}
