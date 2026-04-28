// 設計師 — 計時頁
import { SlideTimerBase } from './_base.jsx';

export function SlideDesignerTimer() {
  return (
    <SlideTimerBase
      chapterNum={2}
      chapterTitle="STAGE 2: 設計師 線上作戰"
      hint="螢幕共享 / 邊畫邊哭。 沒有人類的手繪比得過錯誤的 spec。"
      accentColor="#00ffea"
      hideTimer
    />
  );
}
