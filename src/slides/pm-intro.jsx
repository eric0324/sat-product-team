// 產品經理介紹
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

export function SlidePmIntro() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <VhsHud tape="INTRO //PM" chapter="MEET THE PM" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'center', zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 30 }}>
            PLAYER CLASS #01
          </div>

          <h1 className="glitch chromatic" data-text="產品經理" style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 140,
            color: '#fff',
            margin: 0,
            letterSpacing: 4,
            lineHeight: 1
          }}>
            產品經理
          </h1>

          <div style={{ fontSize: 42, color: 'var(--vhs-magenta)', marginTop: 20, fontWeight: 700, letterSpacing: 4 }}>
            PRODUCT MANAGER
          </div>

          <div style={{ fontSize: 36, color: 'var(--warn-yellow)', marginTop: 50, lineHeight: 1.4 }}>
            「需求從這裡進來。」
          </div>

          <div style={{ fontSize: 26, color: '#ccc', marginTop: 30, lineHeight: 1.7 }}>
            接收使用者的夢囈，翻譯成工程師聽得懂的 spec，<br/>
            然後看著它被設計、工程、行銷一路改到面目全非。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <PixelBear state="confused" size={320} />
          <div className="tape-label" style={{ fontSize: 18 }}>
            LEVEL 01 NPC
          </div>
        </div>
      </div>

      <VhsFooter left="▶ MEET THE PM" right="NEXT: STAGE 1 RULES" />
    </section>
  );
}
