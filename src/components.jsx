/* 計分板、計時器、關卡頁共用元件 */
import { useState, useEffect, useRef } from 'react';

// 6 組團隊名稱（90s 惡夢主題）
export const TEAMS = [
  { id: 1, name: '鬼壓床組', color: '#ff2d95', icon: '👻' },
  { id: 2, name: '連續加班組', color: '#00ffea', icon: '💻' },
  { id: 3, name: '被追殺組', color: '#ffd60a', icon: '🏃' },
  { id: 4, name: '考試沒念組', color: '#8a2be2', icon: '📚' },
  { id: 5, name: '墜樓組', color: '#50c878', icon: '🌀' },
  { id: 6, name: '牙齒掉光組', color: '#ff6b00', icon: '🦷' },
];

// =========================================================
// 倒數計時器 - 可按按鈕啟動
// =========================================================
export function CountdownTimer({ seconds = 600, label = 'TIME REMAINING' }) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
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
    setRemaining(seconds);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30 }}>
      <div className="mono yellow" style={{ fontSize: 32, letterSpacing: 6 }}>{label}</div>
      <div className={`timer-box ${warn ? 'warn' : ''}`}>
        {mm}:{ss}
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <button className="pixel-btn cyan" onClick={() => setRunning(!running)}>
          {running ? 'PAUSE' : (remaining === seconds ? 'START' : 'RESUME')}
        </button>
        <button className="pixel-btn magenta" onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

// =========================================================
// 計分板 - 6 組即時加減分
// =========================================================
export function ScoreBoard({ compact = false }) {
  const [scores, setScores] = useState(() => {
    try {
      const saved = localStorage.getItem('bear-deck-scores');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return TEAMS.map((t) => ({ ...t, score: 0 }));
  });

  useEffect(() => {
    try { localStorage.setItem('bear-deck-scores', JSON.stringify(scores)); } catch (e) {}
  }, [scores]);

  const adjust = (id, delta) => {
    setScores((prev) => prev.map((t) => t.id === id ? { ...t, score: t.score + delta } : t));
  };

  const reset = () => {
    if (confirm('確定要重置所有分數嗎？')) {
      setScores(TEAMS.map((t) => ({ ...t, score: 0 })));
    }
  };

  const sorted = [...scores].sort((a, b) => b.score - a.score);

  if (compact) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, width: '100%' }}>
        {scores.map((t) => (
          <div key={t.id} className="score-card" style={{ borderColor: t.color, padding: 14 }}>
            <div style={{ fontSize: 18, color: t.color, letterSpacing: 2 }}>{t.icon} {t.name}</div>
            <div style={{ fontSize: 42, color: '#fff', marginTop: 8, textShadow: `0 0 10px ${t.color}` }}>
              {t.score}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {scores.map((t, idx) => {
          const rank = sorted.findIndex((s) => s.id === t.id) + 1;
          return (
            <div key={t.id} className="score-card" style={{ borderColor: t.color }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ fontSize: 18, color: t.color, letterSpacing: 2 }}>
                  {t.icon} {t.name}
                </div>
                <div className="mono" style={{
                  fontSize: 24,
                  color: rank === 1 ? '#ffd60a' : '#888',
                  background: rank === 1 ? 'rgba(255,214,10,0.15)' : 'transparent',
                  padding: '2px 10px',
                  border: `2px solid ${rank === 1 ? '#ffd60a' : '#444'}`
                }}>
                  #{rank}
                </div>
              </div>
              <div style={{
                fontFamily: 'VT323, monospace',
                fontSize: 100,
                color: '#fff',
                textAlign: 'center',
                lineHeight: 1,
                textShadow: `0 0 20px ${t.color}`,
                margin: '10px 0'
              }}>
                {t.score}
              </div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 14 }}>
                <button className="pixel-btn" style={{ fontSize: 12, padding: '10px 16px', background: '#ff3b3b', color: '#fff' }}
                  onClick={() => adjust(t.id, -5)}>-5</button>
                <button className="pixel-btn" style={{ fontSize: 12, padding: '10px 16px', background: '#888', color: '#fff' }}
                  onClick={() => adjust(t.id, -1)}>-1</button>
                <button className="pixel-btn" style={{ fontSize: 12, padding: '10px 16px', background: '#50c878', color: '#000' }}
                  onClick={() => adjust(t.id, 1)}>+1</button>
                <button className="pixel-btn" style={{ fontSize: 12, padding: '10px 16px', background: '#ffd60a', color: '#000' }}
                  onClick={() => adjust(t.id, 5)}>+5</button>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <button className="pixel-btn danger" style={{ fontSize: 14 }} onClick={reset}>RESET ALL SCORES</button>
      </div>
    </div>
  );
}

// =========================================================
// 通用 HUD / Footer
// =========================================================
export function VhsHud({ tape = 'TAPE 01', chapter = '' }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = String(time.getHours()).padStart(2, '0');
  const mm = String(time.getMinutes()).padStart(2, '0');
  const ss = String(time.getSeconds()).padStart(2, '0');

  return (
    <>
      <div className="vhs-hud">
        <div className="rec">REC</div>
        <div className="tape-code">{tape}</div>
        <div>{hh}:{mm}:{ss}</div>
      </div>
      {chapter && <div className="chapter-tag">{chapter}</div>}
    </>
  );
}

export function VhsFooter({ left = 'PLAY ▶', right = 'SP  LP  EP' }) {
  return (
    <div className="vhs-footer">
      <div>{left}</div>
      <div className="marquee" style={{ flex: 1, margin: '0 40px', opacity: 0.6 }}>
        <div className="marquee-inner">
          ◆ PRODUCT TEAM NIGHTMARE SERIES ◆ VOL.1 ◆ 2026 ◆ DO NOT OPEN IF SEAL IS BROKEN ◆
        </div>
      </div>
      <div>{right}</div>
    </div>
  );
}

export function TrackingGlitch() {
  return <div className="tracking-bar"></div>;
}

export function NoiseOverlay() {
  return <div className="noise"></div>;
}
