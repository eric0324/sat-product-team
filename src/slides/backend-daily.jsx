// 後端工程師 - 日常做什麼
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const ACTIVITIES = [
  '看 log（全是紅字）',
  '改 bug',
  '寫 API',
  '被前端問：「API 又壞了？」',
  '被 PM 問：「為什麼還沒做完」',
  '跑 SQL 查資料給非技術同事',
  '被監控系統叫醒',
];

export function SlideBackendDaily() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //BE" chapter="BACKEND BIO 01" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20 }}>
            BACKEND BIO — A DAY IN THE LIFE
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
          <div style={{ fontSize: 30, color: 'var(--warn-yellow)', marginTop: 10, marginBottom: 40, letterSpacing: 4 }}>
            DAILY / ON-CALL / 4AM PAGER
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
          <PixelBear state="panic" size={280} />
          <div className="tape-label" style={{ fontSize: 16 }}>
            STATUS: FIREFIGHTING
          </div>
        </div>
      </div>

      <VhsFooter left="▶ DAILY LIFE" right="BACKEND BIO  01 / 03" />
    </section>
  );
}
