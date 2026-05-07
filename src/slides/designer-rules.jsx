// 設計師 線上作戰 — 規則頁
import { SlideRulesBase } from './_base.jsx';

export function SlideDesignerRules() {
  return (
    <SlideRulesBase
      chapterNum={2}
      chapterTitle="設計師 線上作戰"
      subtitle="拿到 spec，然後呢？"
      people="2 人 / 組"
      duration="2 分鐘"
      bearState="crying"
      accentColor="#00ffea"
      flow={[
        '派出小組的設計師（不重複）',
        '設計師拿到剛剛傳來的 spec',
        '繳交熊娃娃設計稿'
      ]}
    />
  );
}
