// BOSS 對答案頁：逐格揭露部位 & 2 個陷阱
import { useState } from 'react';
import { ChaosBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, TrackingGlitch, VhsFooter } from '../components.jsx';

export function SlideBossReveal() {
  const [reveal, setReveal] = useState({
    ears: false, tail: false, face: false, arms: false, legs: false, body: false,
    trap1: false, trap2: false,
  });
  const [showAll, setShowAll] = useState(false);

  const flipAll = () => {
    const v = !showAll;
    setShowAll(v);
    setReveal({ ears: v, tail: v, face: v, arms: v, legs: v, body: v, trap1: v, trap2: v });
  };

  const parts = [
    { key: 'ears', label: '耳朵', answer: '🟡 黃色（最終版）', pts: '+1' },
    { key: 'face', label: '臉', answer: '⚫ 五彩斑斕的黑', pts: '+1' },
    { key: 'arms', label: '四肢（手）', answer: '⚪ 白色（左手可拿東西）', pts: '+1' },
    { key: 'legs', label: '四肢（腳）', answer: '⚪ 白色', pts: '+1' },
    { key: 'tail', label: '尾巴', answer: '🌀 捲的', pts: '+1' },
    { key: 'body', label: '身體', answer: '❓ 未指定（不加分也不扣）', pts: '0' },
  ];

  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 60px 120px' }}>
      <VhsHud tape="RELEASE //v1.0" chapter="v1.0 RELEASE" />
      <NoiseOverlay />
      <TrackingGlitch />

      <div style={{ textAlign: 'center', marginBottom: 30, zIndex: 10 }}>
        <div className="tape-label" style={{ background: 'var(--blood-red)', color: '#fff', fontSize: 22 }}>
          v1.0
        </div>
        <h1 className="glitch chromatic" data-text="RELEASE" style={{
          fontFamily: 'var(--font-pixel)', fontSize: 78, color: '#fff',
          margin: '20px 0 10px', letterSpacing: 3
        }}>
          RELEASE
        </h1>
        <div style={{ fontSize: 28, color: 'var(--warn-yellow)' }}>
          ⚠ 警告：本關藏有 <span style={{ color: 'var(--blood-red)', fontWeight: 900 }}>2 個陷阱</span>，踩中倒扣 2 分
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px 1fr', gap: 30, zIndex: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {parts.slice(0, 3).map((p) => (
            <div key={p.key}
                 onClick={() => setReveal(r => ({ ...r, [p.key]: !r[p.key] }))}
                 style={{
                   border: `3px solid ${p.trap ? 'var(--blood-red)' : 'var(--crt-cyan)'}`,
                   padding: '14px 18px',
                   cursor: 'pointer',
                   background: reveal[p.key] ? (p.trap ? 'rgba(255,59,59,0.15)' : 'rgba(0,255,234,0.08)') : 'transparent',
                   transition: 'all 0.2s'
                 }}>
              <div className="mono" style={{ fontSize: 20, color: '#888', letterSpacing: 2 }}>
                PART {p.key.toUpperCase()}
              </div>
              <div style={{ fontSize: 28, color: '#fff', fontWeight: 700, margin: '4px 0' }}>
                {p.label}
              </div>
              <div style={{ fontSize: 24, color: reveal[p.key] ? (p.trap ? 'var(--blood-red)' : 'var(--crt-cyan)') : '#333', fontFamily: 'var(--font-mono)' }}>
                {reveal[p.key] ? p.answer : '████████████████'}
              </div>
              <div className="mono" style={{ fontSize: 22, color: p.trap ? 'var(--blood-red)' : 'var(--warn-yellow)', marginTop: 4 }}>
                {reveal[p.key] ? p.pts : '  '}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div className="pixel-border" style={{ padding: 20 }}>
            <ChaosBear
              size={300}
              earLeft={showAll ? '#ffd60a' : '#222'}
              earRight={showAll ? '#ffd60a' : '#222'}
              head={showAll ? '#000' : '#222'}
              body={showAll ? '#fff' : '#222'}
            />
          </div>
          <button className="pixel-btn cyan" onClick={flipAll} style={{ fontSize: 16 }}>
            {showAll ? 'HIDE ALL' : 'REVEAL ALL'}
          </button>
          <div className="mono" style={{ fontSize: 22, color: '#888', textAlign: 'center', maxWidth: 320, marginTop: 10 }}>
            ↑ 點擊每格<br/>揭露答案
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {parts.slice(3).map((p) => (
            <div key={p.key}
                 onClick={() => setReveal(r => ({ ...r, [p.key]: !r[p.key] }))}
                 style={{
                   border: `3px solid ${p.trap ? 'var(--blood-red)' : 'var(--crt-cyan)'}`,
                   padding: '14px 18px',
                   cursor: 'pointer',
                   background: reveal[p.key] ? (p.trap ? 'rgba(255,59,59,0.15)' : 'rgba(0,255,234,0.08)') : 'transparent',
                   transition: 'all 0.2s'
                 }}>
              <div className="mono" style={{ fontSize: 20, color: '#888', letterSpacing: 2 }}>
                PART {p.key.toUpperCase()}
              </div>
              <div style={{ fontSize: 28, color: '#fff', fontWeight: 700, margin: '4px 0' }}>
                {p.label}
              </div>
              <div style={{ fontSize: 24, color: reveal[p.key] ? (p.trap ? 'var(--blood-red)' : 'var(--crt-cyan)') : '#333', fontFamily: 'var(--font-mono)' }}>
                {reveal[p.key] ? p.answer : '████████████████'}
              </div>
              <div className="mono" style={{ fontSize: 22, color: p.trap ? 'var(--blood-red)' : 'var(--warn-yellow)', marginTop: 4 }}>
                {reveal[p.key] ? p.pts : '  '}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, zIndex: 10 }}>
        <div onClick={() => setReveal(r => ({ ...r, trap1: !r.trap1 }))}
             style={{ border: '3px dashed var(--blood-red)', padding: 14, cursor: 'pointer', background: reveal.trap1 ? 'rgba(255,59,59,0.15)' : 'transparent' }}>
          <div className="mono red" style={{ fontSize: 20, letterSpacing: 3 }}>⚠ TRAP #1</div>
          <div style={{ fontSize: 22, color: '#fff', marginTop: 4 }}>
            {reveal.trap1 ? '行銷組 J 同事：「熊的手要換黑色」— 善意的建議 ≠ 已核准的需求　−2' : '████████████████████████'}
          </div>
        </div>
        <div onClick={() => setReveal(r => ({ ...r, trap2: !r.trap2 }))}
             style={{ border: '3px dashed var(--blood-red)', padding: 14, cursor: 'pointer', background: reveal.trap2 ? 'rgba(255,59,59,0.15)' : 'transparent' }}>
          <div className="mono red" style={{ fontSize: 20, letterSpacing: 3 }}>⚠ TRAP #2</div>
          <div style={{ fontSize: 22, color: '#fff', marginTop: 4 }}>
            {reveal.trap2 ? '課程組 A 同事：「熊頭上要長一隻角」—「一下下就好」從來沒有一下下就好過　−2' : '████████████████████████'}
          </div>
        </div>
      </div>

      <VhsFooter left="▶ SHIP IT" right="SCORING: +1 / -2" />
    </section>
  );
}
