// 後端工程師 黏土拆分 — 規則頁
import { SlideRulesBase } from './_base.jsx';

export function SlideBackendRules() {
  return (
    <SlideRulesBase
      chapterNum={3}
      chapterTitle="後端工程師 黏土拆分"
      subtitle="把整隻熊拆成零件"
      people="2 人 / 組"
      duration="3 分鐘"
      bearState="angry"
      accentColor="#ffd60a"
      flow={[
        '看著設計師的內容拿對應顏色黏土',
        '分部位拿：耳朵、五官、頭、手、腳、身體、尾巴'
      ]}
    />
  );
}
