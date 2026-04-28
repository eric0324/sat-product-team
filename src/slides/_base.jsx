/**
 * 共用 slide 原型：關卡規則頁 + 關卡計時頁
 */
import { PixelBear } from '../bear.jsx';
import { VhsHud, NoiseOverlay, VhsFooter, CountdownTimer } from '../components.jsx';

export function SlideRulesBase({ chapterNum, chapterTitle, subtitle, people, duration, flow, musicCue, props, bearState = 'panic', accentColor = 'var(--vhs-magenta)' }) {
  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px' }}>
      <VhsHud tape={`NIGHTMARE //${String(chapterNum).padStart(2,'0')}`} chapter={`STAGE ${chapterNum} RULES`} />
      <NoiseOverlay />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 60, height: '100%', alignItems: 'start' }}>
        <div style={{ zIndex: 10 }}>
          <div className="tape-label" style={{ fontSize: 24, letterSpacing: 4, marginBottom: 20 }}>
            NIGHTMARE #{chapterNum}
          </div>
          <h1 className="glitch chromatic" data-text={chapterTitle} style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 74,
            color: '#fff',
            margin: '10px 0 20px',
            lineHeight: 1.2,
            letterSpacing: 2
          }}>
            {chapterTitle}
          </h1>
          <div style={{ fontSize: 32, color: accentColor, marginBottom: 40, lineHeight: 1.4 }}>
            {subtitle}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: musicCue ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)', gap: 16, marginBottom: 30 }}>
            <div style={{ border: `2px solid ${accentColor}`, padding: '12px 16px' }}>
              <div className="mono" style={{ fontSize: 18, color: '#888', letterSpacing: 2 }}>PLAYERS</div>
              <div style={{ fontSize: 34, color: '#fff', fontFamily: 'var(--font-mono)' }}>{people}</div>
            </div>
            <div style={{ border: `2px solid ${accentColor}`, padding: '12px 16px' }}>
              <div className="mono" style={{ fontSize: 18, color: '#888', letterSpacing: 2 }}>DURATION</div>
              <div style={{ fontSize: 34, color: '#fff', fontFamily: 'var(--font-mono)' }}>{duration}</div>
            </div>
            {musicCue && (
              <div style={{ border: `2px solid ${accentColor}`, padding: '12px 16px' }}>
                <div className="mono" style={{ fontSize: 18, color: '#888', letterSpacing: 2 }}>MUSIC</div>
                <div style={{ fontSize: 22, color: '#fff', fontFamily: 'var(--font-mono)' }}>{musicCue}</div>
              </div>
            )}
          </div>

          {props && (
            <div style={{ marginBottom: 24 }}>
              <div className="mono yellow" style={{ fontSize: 22, letterSpacing: 3, marginBottom: 10 }}>▸ 道具 PROPS</div>
              <div style={{ fontSize: 22, color: '#ddd', lineHeight: 1.6 }}>
                {props}
              </div>
            </div>
          )}

          <div>
            <div className="mono yellow" style={{ fontSize: 22, letterSpacing: 3, marginBottom: 10 }}>▸ 流程 FLOW</div>
            <ol style={{ fontSize: 24, color: '#fff', lineHeight: 1.6, paddingLeft: 30, margin: 0 }}>
              {flow.map((step, i) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  {typeof step === 'string' ? step : (
                    <>
                      {step.text}
                      {step.sub && (
                        <ul style={{ fontSize: 20, color: '#aaa', marginTop: 6 }}>
                          {step.sub.map((s, j) => <li key={j}>{s}</li>)}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 10 }}>
          <PixelBear state={bearState} size={280} />
          <div className="tape-label" style={{ fontSize: 18, background: accentColor, color: '#000' }}>
            CH. {chapterNum} / 05
          </div>
          <div style={{ textAlign: 'center', fontSize: 22, color: '#888', fontFamily: 'var(--font-mono)', marginTop: 20, lineHeight: 1.5 }}>
            準備好了嗎？<br/>
            下一頁 → 計時開始
          </div>
        </div>
      </div>

      <VhsFooter left={`▶ STAGE ${chapterNum} RULES`} right="PRESS → TO START" />
    </section>
  );
}

export function SlideTimerBase({ chapterNum, chapterTitle, hint, accentColor = 'var(--vhs-magenta)', seconds = 600, hideTimer = false }) {
  const titleBlock = (
    <div style={{ textAlign: 'center', zIndex: 10 }}>
      <div className="mono" style={{ fontSize: 28, color: accentColor, letterSpacing: 6 }}>
        ── STAGE {chapterNum} ──
      </div>
      <h1 style={{
        margin: '14px 0',
        fontFamily: 'var(--font-tc)',
        fontWeight: 900,
        fontSize: 64,
        color: '#fff',
        letterSpacing: 4,
      }}>
        {chapterTitle}
      </h1>
      <div style={{ fontSize: 26, color: '#ccc', maxWidth: 1200, margin: '0 auto' }}>
        {hint}
      </div>
    </div>
  );

  return (
    <section className="slide" style={{ background: 'var(--vhs-black)', padding: '140px 80px 120px', display: 'flex', flexDirection: 'column' }}>
      <VhsHud tape={`NIGHTMARE //${String(chapterNum).padStart(2,'0')}`} chapter={`STAGE ${chapterNum} LIVE`} />
      <NoiseOverlay />

      {hideTimer ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          {titleBlock}
        </div>
      ) : (
        <>
          <div style={{ marginBottom: 20 }}>{titleBlock}</div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <CountdownTimer seconds={seconds} label="TIME REMAINING  ⏱" />
          </div>
        </>
      )}

      <VhsFooter left={`▶ STAGE ${chapterNum} LIVE`} right="NO MERCY" />
    </section>
  );
}

