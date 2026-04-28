// 後端工程師介紹
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

export function SlideBackendIntro() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <VhsHud tape="INTRO //BE" chapter="MEET THE BACKEND" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'center', zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 30 }}>
            PLAYER CLASS #03
          </div>

          <h1 className="glitch chromatic" data-text="後端工程師" style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 120,
            color: '#fff',
            margin: 0,
            letterSpacing: 4,
            lineHeight: 1
          }}>
            後端工程師
          </h1>

          <div style={{ fontSize: 42, color: 'var(--warn-yellow)', marginTop: 20, fontWeight: 700, letterSpacing: 4 }}>
            BACKEND ENGINEER
          </div>

          <div style={{ fontSize: 36, color: 'var(--crt-cyan)', marginTop: 50, lineHeight: 1.4 }}>
            「使用者看不到，但出事都是我的鍋。」
          </div>

          <div style={{ fontSize: 26, color: '#ccc', marginTop: 30, lineHeight: 1.7 }}>
            在黑盒子裡搬資料、處理邏輯。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <PixelBear state="angry" size={320} />
          <div className="tape-label" style={{ fontSize: 18 }}>
            LEVEL 03 NPC
          </div>
        </div>
      </div>

      <VhsFooter left="▶ MEET THE BACKEND" right="NEXT: BACKEND BIO" />
    </section>
  );
}
