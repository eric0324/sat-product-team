// 設計師 - 日常做什麼
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const ACTIVITIES = [
  '看 PM 丟的 spec，看三次才看懂',
  '畫 wireframe',
  '畫 UI 稿',
  '做 prototype',
  '跟工程師爭 spacing 8px vs 10px',
  '建立與維護設計系統',
];

export function SlideDesignerDaily() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //DES" chapter="DESIGNER BIO 01" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20 }}>
            DESIGNER BIO — A DAY IN THE LIFE
          </div>
          <h1 style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 80,
            color: '#fff',
            margin: 0,
            letterSpacing: 3,
          }}>
            日常做什麼
          </h1>
          <div style={{ fontSize: 30, color: 'var(--crt-cyan)', marginTop: 10, marginBottom: 40, letterSpacing: 4 }}>
            DAILY / CMD+Z × 1000
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {ACTIVITIES.map((a, i) => (
              <div key={i} style={{
                border: '2px solid var(--crt-cyan-dim)',
                padding: '14px 18px',
                background: 'rgba(0,255,234,0.05)',
                fontSize: 22, color: '#ddd',
                display: 'flex', gap: 12, alignItems: 'center'
              }}>
                <span className="mono yellow" style={{ fontSize: 22 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <PixelBear state="crying" size={280} />
          <div className="tape-label" style={{ fontSize: 16 }}>
            STATUS: TIRED
          </div>
        </div>
      </div>

      <VhsFooter left="▶ DAILY LIFE" right="DESIGNER BIO  01 / 03" />
    </section>
  );
}
