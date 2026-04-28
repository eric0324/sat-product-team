import ReactDOM from 'react-dom/client';
import pangu from 'pangu';
import './deck-stage.js';

import { SlideCompetitor } from './slides/competitor.jsx';
import { SlideBossIdea } from './slides/boss-idea.jsx';
import { SlideDreamOpen } from './slides/dream-open.jsx';
import { SlidePmIntro } from './slides/pm-intro.jsx';
import { SlidePmDaily } from './slides/pm-daily.jsx';
import { SlidePmDuties } from './slides/pm-duties.jsx';
import { SlidePmRules } from './slides/pm-rules.jsx';
import { SlidePmTimer } from './slides/pm-timer.jsx';
import { SlideDesignerIntro } from './slides/designer-intro.jsx';
import { SlideDesignerDaily } from './slides/designer-daily.jsx';
import { SlideDesignerDuties } from './slides/designer-duties.jsx';
import { SlideDesignerRules } from './slides/designer-rules.jsx';
import { SlideDesignerTimer } from './slides/designer-timer.jsx';
import { SlideBackendIntro } from './slides/backend-intro.jsx';
import { SlideBackendDaily } from './slides/backend-daily.jsx';
import { SlideBackendDuties } from './slides/backend-duties.jsx';
import { SlideBackendRules } from './slides/backend-rules.jsx';
import { SlideBackendTimer } from './slides/backend-timer.jsx';
import { SlideFrontendIntro } from './slides/frontend-intro.jsx';
import { SlideFrontendDaily } from './slides/frontend-daily.jsx';
import { SlideFrontendDuties } from './slides/frontend-duties.jsx';
import { SlideFrontendRules } from './slides/frontend-rules.jsx';
import { SlideFrontendTimer } from './slides/frontend-timer.jsx';
import { SlideBossReveal } from './slides/boss-reveal.jsx';
import { SlideBlack } from './slides/black.jsx';
import { SlideWakeUpVideo } from './slides/wake-up-video.jsx';

function App() {
  return (
    <>
      <SlideBlack />
      <SlideCompetitor />
      <SlideBossIdea />
      <SlideDreamOpen />
      <SlidePmIntro />
      <SlidePmDaily />
      <SlidePmDuties />
      <SlidePmRules />
      <SlidePmTimer />
      <SlideDesignerIntro />
      <SlideDesignerDaily />
      <SlideDesignerDuties />
      <SlideDesignerRules />
      <SlideDesignerTimer />
      <SlideBackendIntro />
      <SlideBackendDaily />
      <SlideBackendDuties />
      <SlideBackendRules />
      <SlideBackendTimer />
      <SlideFrontendIntro />
      <SlideFrontendDaily />
      <SlideFrontendDuties />
      <SlideFrontendRules />
      <SlideFrontendTimer />
      <SlideBossReveal />
      <SlideBlack />
      <SlideWakeUpVideo />
    </>
  );
}

const stageEl = document.querySelector('deck-stage');
const mountRoot = document.getElementById('mount-root');
if (mountRoot) mountRoot.remove();

const reactRoot = ReactDOM.createRoot(stageEl);
reactRoot.render(<App />);

// 盤古之白：中英/中數字之間自動補空格
// 等初次 render 完再補，並在換頁時對新 active slide 再補一次
requestAnimationFrame(() => {
  pangu.spacingPage();
});
stageEl.addEventListener('slidechange', (e) => {
  if (e.detail?.slide) pangu.spacingNode(e.detail.slide);
});
