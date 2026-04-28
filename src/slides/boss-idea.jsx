// 老闆的大膽想法：睜眼 + 點擊播音樂 + Slack 訊息風格
import { useEffect, useRef } from 'react';
import { VhsHud, NoiseOverlay, VhsFooter } from '../components.jsx';

const BGM = './music/stephen.mp3';

export function SlideBossIdea() {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);

  // 離開此頁 → 暫停音樂（不自動播放，需點擊）
  useEffect(() => {
    const stage = document.querySelector('deck-stage');
    if (!stage) return;
    const handle = (e) => {
      const a = audioRef.current;
      if (!a) return;
      const active = e.detail?.slide === sectionRef.current;
      if (!active) a.pause();
    };
    stage.addEventListener('slidechange', handle);
    return () => stage.removeEventListener('slidechange', handle);
  }, []);

  const playBgm = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play().catch(() => {});
  };

  return (
    <section
      ref={sectionRef}
      className="slide"
      onClick={playBgm}
      style={{ background: '#000', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      {/* 睜眼：整個 Slack 畫面由細縫張成全螢幕 */}
      <div className="eye-reveal" style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--vhs-dark)',
        padding: '140px 80px 120px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <VhsHud tape="DREAM //02" chapter="#direct-message" />
        <NoiseOverlay />

        <div style={{ textAlign: 'center', marginBottom: 50, zIndex: 10 }}>
          <h2 className="glitch chromatic" data-text="老闆傳來的訊息" style={{
            fontFamily: 'var(--font-pixel)', fontSize: 52, color: '#fff', letterSpacing: 3, margin: 0
          }}>
            老闆傳來的訊息
          </h2>
        </div>

        <div style={{ maxWidth: 1500, margin: '0 auto', width: '100%', zIndex: 10 }}>
          <div className="slack-msg" style={{ display: 'flex', gap: 22 }}>
            <div className="avatar" style={{ overflow: 'hidden', padding: 0 }}>
              <img
                src="./images/stephen.jpg"
                alt="Stephen"
                onError={(e) => { e.target.replaceWith(Object.assign(document.createTextNode('S'), {})); }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div>
                <span className="name" style={{ fontSize: 28 }}>Stephen</span>
                <span className="time" style={{ fontSize: 22 }}>今天 04:17 AM</span>
                <span className="time" style={{ color: 'var(--blood-red)', fontSize: 22, marginLeft: 6 }}>(凌晨？)</span>
              </div>
              <div style={{ fontSize: 30, lineHeight: 1.8, color: '#e8e8e8', marginTop: 14 }}>
                我有個大膽的想法，我看別家也有做熊娃娃，
                <br/>
                我最近也想跟某某老師開一個公司做熊娃娃來賣，
                <br/>
                你覺得怎麼樣？
                <br/><br/>
                你幫我研究一下，看能不能下禮拜給我，
                <br/>
                我再拿去和老師提案 👍
              </div>

              {/* 假反應 */}
              <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                <div style={{ background: '#2c3036', border: '1px solid #4a90e2', borderRadius: 14, padding: '4px 10px', fontSize: 18, color: '#cfe1f5', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>👀</span><span style={{ fontWeight: 600 }}>1</span>
                </div>
                <div style={{ background: '#2c3036', border: '1px solid #ff6b6b', borderRadius: 14, padding: '4px 10px', fontSize: 18, color: '#ffc8c8', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>💀</span><span style={{ fontWeight: 600 }}>1</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: 24, color: '#888', marginTop: 40, textAlign: 'center', fontStyle: 'italic' }}>
            ※ 以上為真實事件改編，但熊娃娃純屬虛構
          </div>
        </div>

        <VhsFooter left="▶ DM FROM BOSS" right="UNREAD: 1" />
      </div>

      <audio ref={audioRef} src={BGM} preload="auto" />
    </section>
  );
}
