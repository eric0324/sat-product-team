// 後端工程師 - 要做什麼 / 產出
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const DELIVERABLES = [
  { icon: '🔌', title: 'API / Service', desc: '前端、app、第三方都從這裡要資料，壞了大家一起完蛋' },
  { icon: '🗄️', title: 'Database Schema', desc: '幫資料蓋房子，蓋錯了以後改超痛' },
  { icon: '🔐', title: '權限 / 安全', desc: '確保不該看到的人看不到，該看到的人看得到' },
  { icon: '🔗', title: '系統整合 / 自動化', desc: '接金流、物流、CRM、通知⋯幫工具串起來，讓流程自動跑' },
];

export function SlideBackendDuties() {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape="INTRO //BE" chapter="BACKEND BIO 02" />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, zIndex: 10 }}>
        <div>
          <div className="tape-label" style={{ fontSize: 22, marginBottom: 20, background: 'var(--warn-yellow)' }}>
            BACKEND BIO — DELIVERABLES
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

      <VhsFooter left="▶ DELIVERABLES" right="BACKEND BIO  02 / 03" />
    </section>
  );
}
