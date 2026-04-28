// 產品經理 - 日常做什麼
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const ACTIVITIES = [
  '早上開會，講昨天的事',
  '下午開會，改早上的決定',
  '凌晨看老闆傳的「一個小需求」',
  '翻譯使用者的需求 → 工程師的語言',
  '把翻譯好的 spec 再翻譯一次',
];

export function SlidePmDaily() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //PM" chapter="PM BIO 01" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20 }}>
            PM BIO — A DAY IN THE LIFE
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
          <div style={{ fontSize: 30, color: 'var(--vhs-magenta)', marginTop: 10, marginBottom: 40, letterSpacing: 4 }}>
            DAILY / 24H ON-CALL
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

      <VhsFooter left="▶ DAILY LIFE" right="PM BIO  01 / 03" />
    </section>
  );
}
