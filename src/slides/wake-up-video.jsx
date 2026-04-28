// 結尾前：眼睛張開動畫 + 手機 Messenger 來電
import { useState, useEffect, useRef } from 'react';

const CALLER = 'Stephen';
const CALLER_AVATAR = './images/stephen.jpg';
const EYE_OPEN_DELAY_MS = 2800; // 眼睛動畫 0.4s delay + 2s 張開，留 0.4s 緩衝

export function SlideWakeUpVideo() {
  const sectionRef = useRef(null);
  const [showPhone, setShowPhone] = useState(false);
  const [phoneKey, setPhoneKey] = useState(0);

  // 監聽 slidechange：進到此頁後，等眼睛張開再跳手機；離開則重置
  useEffect(() => {
    const stage = document.querySelector('deck-stage');
    if (!stage) return;
    let timer;
    const handle = (e) => {
      const active = e.detail?.slide === sectionRef.current;
      clearTimeout(timer);
      if (active) {
        setShowPhone(false);
        timer = setTimeout(() => {
          setShowPhone(true);
          setPhoneKey((k) => k + 1);
        }, EYE_OPEN_DELAY_MS);
      } else {
        setShowPhone(false);
      }
    };
    stage.addEventListener('slidechange', handle);
    return () => {
      stage.removeEventListener('slidechange', handle);
      clearTimeout(timer);
    };
  }, []);

  const triggerPhone = () => {
    setShowPhone(true);
    setPhoneKey((k) => k + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="slide"
      onClick={triggerPhone}
      style={{ background: '#000', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      {/* 眼睛張開：黑色底 + 橢圓 clip 的「視野」層由細縫張成全螢幕 */}
      <div
        className="eye-reveal"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(./images/desktop.jpg), radial-gradient(ellipse at 50% 45%, #fff6d5 0%, #ffd0a0 35%, #b87d8a 70%, #3a2048 100%)',
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat',
          zIndex: 1,
        }}
      />

      {showPhone && (
        <div
          key={phoneKey}
          className="phone-popup"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            zIndex: 100,
            cursor: 'default',
          }}
        >
          <MessengerCall caller={CALLER} avatarSrc={CALLER_AVATAR} onHangup={() => setShowPhone(false)} />
        </div>
      )}
    </section>
  );
}

function MessengerCall({ caller, avatarSrc, onHangup }) {
  const [avatarOk, setAvatarOk] = useState(true);
  // Messenger 來電介面（iPhone 樣式外框）
  return (
    <div style={{
      width: 400,
      height: 820,
      background: '#0a0a0a',
      borderRadius: 56,
      padding: 14,
      boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 0 3px #222 inset',
      position: 'relative',
    }}>
      {/* 瀏海 */}
      <div style={{
        position: 'absolute',
        top: 22,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 130, height: 30,
        background: '#000',
        borderRadius: 22,
        zIndex: 10,
      }} />

      {/* 螢幕 */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 46,
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(160deg, #0084ff 0%, #44bec7 50%, #a0d479 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '90px 28px 48px',
        color: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", var(--font-tc), sans-serif',
      }}>
        {/* 頂部通知橫幅（常駐） */}
        <div
          style={{
            position: 'absolute',
            top: 58,
            left: 14,
            right: 14,
            background: 'rgba(40, 40, 40, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 18,
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
            zIndex: 30,
          }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: '#611f69',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            fontSize: 20,
          }}>
            💬
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.7, letterSpacing: 0.3 }}>
              <span style={{ fontWeight: 700 }}>SLACK</span>
              <span>現在</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2, color: '#fff' }}>
              網站好像進不去
            </div>
          </div>
        </div>

        {/* 頂部：Messenger 標記 */}
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: 13, opacity: 0.85, letterSpacing: 3, fontWeight: 600 }}>
            MESSENGER
          </div>
          <div style={{ fontSize: 16, opacity: 0.85, marginTop: 6, fontWeight: 400 }}>
            來電中⋯
          </div>
        </div>

        {/* 中間：頭像 + 名字 */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 150, height: 150,
            borderRadius: '50%',
            background: '#fff',
            color: '#0084ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 80,
            fontWeight: 900,
            margin: '0 auto 28px',
            animation: 'ring-pulse 1.4s ease-in-out infinite',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
            overflow: 'hidden',
          }}>
            {avatarSrc && avatarOk ? (
              <img
                src={avatarSrc}
                alt={caller}
                onError={() => setAvatarOk(false)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              caller[0]
            )}
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: 0.5 }}>
            {caller}
          </div>
          <div style={{ fontSize: 15, opacity: 0.85, marginTop: 6 }}>
            Messenger 語音通話
          </div>
        </div>

        {/* 下方：掛斷 / 接聽 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 12px' }}>
          <CallButton color="#ef4444" rotate tooltip="拒接" onClick={onHangup} />
          <CallButton color="#22c55e" tooltip="接聽" onClick={onHangup} />
        </div>
      </div>
    </div>
  );
}

function CallButton({ color, rotate, onClick }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      style={{
        width: 72, height: 72,
        borderRadius: '50%',
        background: color,
        border: 0,
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      }}
    >
      <svg
        viewBox="0 0 24 24" width="32" height="32"
        fill="currentColor"
        style={{ transform: rotate ? 'rotate(135deg)' : 'none' }}
        aria-hidden
      >
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    </button>
  );
}
