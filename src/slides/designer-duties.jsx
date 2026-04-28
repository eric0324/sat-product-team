// 設計師 - 要做什麼 / 產出
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const DELIVERABLES = [
  { icon: '🎨', title: 'Wireframe / Mockup', desc: '從骨架到最終視覺，每個段落都得給 PM / 老闆看過（不只看過，是吵過）' },
  { icon: '🎭', title: 'Design System 設計系統', desc: '維護一整套元件/色票/字級規範，讓整個產品長得像同一間公司做的' },
  { icon: '🖼️', title: 'Prototype 原型', desc: '可以點擊的互動稿，讓大家在開工前就能感受流程' },
  { icon: '🔍', title: 'Usability 易用性', desc: '回答「這個使用者真的看得懂嗎」這個靈魂提問' },
];

export function SlideDesignerDuties() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //DES" chapter="DESIGNER BIO 02" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20, background: 'var(--warn-yellow)' }}>
            DESIGNER BIO — DELIVERABLES
          </div>
          <h1 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 80,
            color: '#fff',
            margin: 0,
            letterSpacing: 3,
          }}>
            要產出什麼
          </h1>
          <div style={{ fontSize: 30, color: 'var(--warn-yellow)', marginTop: 10, marginBottom: 40, letterSpacing: 4 }}>
            DELIVERABLES
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {DELIVERABLES.map((d, i) => (
              <div key={i} style={{
                border: '2px solid var(--warn-yellow)',
                padding: '14px 22px',
                background: 'rgba(255,214,10,0.05)',
                display: 'flex', gap: 20, alignItems: 'center'
              }}>
                <div style={{ fontSize: 38 }}>{d.icon}</div>
                <div>
                  <div style={{ fontSize: 26, color: '#fff', fontWeight: 700 }}>{d.title}</div>
                  <div style={{ fontSize: 19, color: '#aaa', marginTop: 4, lineHeight: 1.5 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <PixelBear state="angry" size={280} />
          <div className="tape-label" style={{ fontSize: 16, background: 'var(--warn-yellow)' }}>
            STATUS: BUSY
          </div>
        </div>
      </div>

      <VhsFooter left="▶ DELIVERABLES" right="DESIGNER BIO  02 / 03" />
    </section>
  );
}
