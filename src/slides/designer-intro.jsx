// 設計師介紹
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

export function SlideDesignerIntro() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <VhsHud tape="INTRO //DES" chapter="MEET THE DESIGNER" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'center', zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 30 }}>
            PLAYER CLASS #02
          </div>

          <h1 className="glitch chromatic" data-text="設計師" style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 140,
            color: '#fff',
            margin: 0,
            letterSpacing: 4,
            lineHeight: 1
          }}>
            設計師
          </h1>

          <div style={{ fontSize: 42, color: 'var(--crt-cyan)', marginTop: 20, fontWeight: 700, letterSpacing: 4 }}>
            PRODUCT DESIGNER
          </div>

          <div style={{ fontSize: 36, color: 'var(--warn-yellow)', marginTop: 50, lineHeight: 1.4 }}>
            「把 PM 的 spec 變成能看的東西。」
          </div>

          <div style={{ fontSize: 26, color: '#ccc', marginTop: 30, lineHeight: 1.7 }}>
            接 PM 丟來的需求，畫成設計稿，<br/>
            然後看著它被老闆、工程師、行銷組、課程組、其他怪咖一路改到不像原本那張。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <PixelBear state="crying" size={320} />
          <div className="tape-label" style={{ fontSize: 18 }}>
            LEVEL 02 NPC
          </div>
        </div>
      </div>

      <VhsFooter left="▶ MEET THE DESIGNER" right="NEXT: DESIGNER BIO" />
    </section>
  );
}
