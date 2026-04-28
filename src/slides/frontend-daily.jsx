// 前端工程師 - 日常做什麼
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const ACTIVITIES = [
  '對齊 1px',
  '跟設計師吵 1px',
  '跟後端吵 API 格式',
  '寫 CSS',
  '改 CSS（RWD 版本）',
  '測 Safari / Chrome / Firefox / Arc？',
  '被使用者回報：「按鈕不能按」',
  'APP 被退審',
  '被一星抱怨',
];

export function SlideFrontendDaily() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //FE" chapter="FRONTEND BIO 01" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20 }}>
            FRONTEND BIO — A DAY IN THE LIFE
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
          <div style={{ fontSize: 30, color: '#8a2be2', marginTop: 10, marginBottom: 40, letterSpacing: 4 }}>
            DAILY / 1PX WARFARE
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
            STATUS: DEBUGGING
          </div>
        </div>
      </div>

      <VhsFooter left="▶ DAILY LIFE" right="FRONTEND BIO  01 / 03" />
    </section>
  );
}
