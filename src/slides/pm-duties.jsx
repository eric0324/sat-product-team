// 產品經理 - 要做什麼 / 產出
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const DELIVERABLES = [
  { icon: '📋', title: 'PRD / Spec 文件', desc: '寫給設計、工程、行銷、老闆看的同一份文件' },
  { icon: '🗺️', title: 'Roadmap 路徑圖', desc: '預估什麼時候做什麼，預估永遠準不了' },
  { icon: '📊', title: '優先順序', desc: '決定先做 A 還是先做 B，結果通常是先做 C' },
  { icon: '🎯', title: '驗收標準', desc: '定義「做完了」是什麼意思（老闆仍有最終解釋權）' },
];

export function SlidePmDuties() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //PM" chapter="PM BIO 02" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20, background: 'var(--warn-yellow)' }}>
            PM BIO — DELIVERABLES
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

      <VhsFooter left="▶ DELIVERABLES" right="PM BIO  02 / 03" />
    </section>
  );
}
