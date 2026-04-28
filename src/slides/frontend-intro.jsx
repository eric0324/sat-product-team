// 前端工程師介紹
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

export function SlideFrontendIntro() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <VhsHud tape="INTRO //FE" chapter="MEET THE FRONTEND" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'center', zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 30 }}>
            PLAYER CLASS #04
          </div>

          <h1 className="glitch chromatic" data-text="前端工程師" style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 120,
            color: '#fff',
            margin: 0,
            letterSpacing: 4,
            lineHeight: 1
          }}>
            前端工程師
          </h1>

          <div style={{ fontSize: 42, color: '#8a2be2', marginTop: 20, fontWeight: 700, letterSpacing: 4 }}>
            FRONTEND ENGINEER
          </div>

          <div style={{ fontSize: 36, color: 'var(--warn-yellow)', marginTop: 50, lineHeight: 1.4 }}>
            「設計師的夢想，工程師的惡夢。」
          </div>

          <div style={{ fontSize: 26, color: '#ccc', marginTop: 30, lineHeight: 1.7 }}>
            把設計稿變成能點擊的畫面，<br/>
            兼容各種瀏覽器、裝置、與你意想不到的使用者行為。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <PixelBear state="panic" size={320} />
          <div className="tape-label" style={{ fontSize: 18 }}>
            LEVEL 04 NPC
          </div>
        </div>
      </div>

      <VhsFooter left="▶ MEET THE FRONTEND" right="NEXT: FRONTEND BIO" />
    </section>
  );
}
