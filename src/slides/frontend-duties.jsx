// 前端工程師 - 要做什麼 / 產出
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const DELIVERABLES = [
  { icon: '🖥️', title: 'UI 使用者介面', desc: '把設計稿變成實際能用的畫面，包含所有互動、動畫、邊界狀況' },
  { icon: '⚡', title: '效能 / 互動', desc: '讓畫面開得快、點得順，不要讓使用者等到走掉' },
  { icon: '📱', title: 'RWD / 多裝置', desc: '手機、平板、桌面、超寬螢幕都要長得好看' },
  { icon: '🧩', title: '元件庫 / 共用邏輯', desc: '維護整個專案的 UI 元件，避免每個人自己刻按鈕' },
];

export function SlideFrontendDuties() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //FE" chapter="FRONTEND BIO 02" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20, background: 'var(--warn-yellow)' }}>
            FRONTEND BIO — DELIVERABLES
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

      <VhsFooter left="▶ DELIVERABLES" right="FRONTEND BIO  02 / 03" />
    </section>
  );
}
