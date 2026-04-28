// 前端工程師 組裝現場 — 規則頁
import { SlideRulesBase } from './_base.jsx';

export function SlideFrontendRules() {
  return (
    <SlideRulesBase
      chapterNum={4}
      chapterTitle="前端工程師 組裝現場"
      subtitle="把零件黏成一隻熊"
      people="4 人 / 組"
      duration="3 分鐘"
      bearState="panic"
      accentColor="#8a2be2"
      flow={[
        '拿著後端的材料按照設計稿組裝',
        '展示最終成品'
      ]}
    />
  );
}
