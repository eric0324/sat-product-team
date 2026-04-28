// 夢境開場：產品組的惡夢
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

export function SlideDreamOpen() {
  return (
    <section className="slide dream-bg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <VhsHud tape="DREAM //01" chapter="DREAM BEGIN" />
      <NoiseOverlay />

      <div style={{ position: 'absolute', top: 200, left: 280, fontSize: 60, opacity: 0.4, animation: 'float 6s infinite' }}>☁</div>
      <div style={{ position: 'absolute', top: 240, right: 250, fontSize: 80, opacity: 0.3, animation: 'float 8s infinite' }}>☁</div>
      <div style={{ position: 'absolute', bottom: 200, left: 150, fontSize: 50, opacity: 0.5, animation: 'float 7s infinite' }}>✦</div>

      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: 1400 }}>
        <div className="mono yellow" style={{ fontSize: 36, letterSpacing: 8, marginBottom: 30 }}>
          ── 夢境 EPISODE 01 ──
        </div>

        <h1 className="chromatic" style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 120,
          lineHeight: 1.3,
          color: '#fff',
          margin: 0,
          letterSpacing: 4
        }}>
          <span style={{ color: 'var(--dream-pink)' }}>產品組的惡夢</span>
        </h1>

        <div style={{ fontSize: 28, color: '#aaa', marginTop: 50, fontStyle: 'italic' }}>
          ※ 此為夢境，如有雷同純屬必然
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 80, marginTop: 60 }}>
          <PixelBear state="dreaming" size={180} />
          <div style={{ fontSize: 100, alignSelf: 'center', color: 'var(--vhs-magenta)' }}>×</div>
          <PixelBear state="happy" size={180} colors={{ body: '#f5d6a0', bellyLight: '#fff0d0' }}/>
        </div>
      </div>

      <VhsFooter left="▶ DREAM" right="0:00:05 / 0:60:00" />
    </section>
  );
}
