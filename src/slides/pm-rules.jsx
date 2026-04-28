// 產品經理 傳話地獄 — 規則頁
import { SlideRulesBase } from './_base.jsx';

export function SlidePmRules() {
  return (
    <SlideRulesBase
      chapterNum={1}
      chapterTitle="產品經理 傳話地獄"
      subtitle="需求從這裡進來 (很重要)"
      people="5 人 / 組"
      duration="10 分鐘"
      bearState="confused"
      accentColor="#ff2d95"
      flow={[
        '各組派 5 位玩家排成一排',
        '第 1 位到會議室聽主持人念「需求」',
        '把需求傳給第 2、第 3、第 4、第 5 位',
        '第 5 位把最終聽到的 spec 打出來'
      ]}
    />
  );
}
