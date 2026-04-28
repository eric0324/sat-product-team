/**
 * 像素風小熊元件 — 用純 SVG 畫的像素藝術
 * 支援不同表情/狀態：sleepy, dreaming, confused, panic, crying, angry, dead, happy, evil
 */

export function PixelBear({ state = 'happy', size = 200, colors = {} }) {
  // 預設配色（可被 colors prop 覆蓋）
  const c = {
    body: '#C89B6B',        // 棕色身體
    bellyLight: '#E8C99D',
    nose: '#2a1a0a',
    eyeWhite: '#fff',
    eyePupil: '#000',
    mouth: '#2a1a0a',
    cheek: '#ff9bc4',
    ...colors,
  };

  // 每格 10px，30x30 格 = 300px 設計尺寸
  const G = 10;
  const px = (x, y, w, h, fill) => (
    <rect key={`${x}-${y}-${w}-${h}`} x={x * G} y={y * G} width={w * G} height={h * G} fill={fill} shapeRendering="crispEdges" />
  );

  // 基礎身體輪廓
  const baseBody = (
    <g>
      {/* 兩隻耳朵（大圓） */}
      {px(4, 2, 5, 5, c.body)}
      {px(3, 3, 1, 3, c.body)}
      {px(9, 3, 1, 3, c.body)}
      {px(5, 3, 3, 3, '#8a6a45')}

      {px(21, 2, 5, 5, c.body)}
      {px(20, 3, 1, 3, c.body)}
      {px(26, 3, 1, 3, c.body)}
      {px(22, 3, 3, 3, '#8a6a45')}

      {/* 頭部（大圓形） */}
      {px(7, 5, 16, 12, c.body)}
      {px(6, 6, 1, 10, c.body)}
      {px(23, 6, 1, 10, c.body)}
      {px(8, 4, 14, 1, c.body)}
      {px(8, 17, 14, 1, c.body)}

      {/* 臉（淡色） */}
      {px(10, 10, 10, 6, c.bellyLight)}
      {px(9, 11, 1, 4, c.bellyLight)}
      {px(20, 11, 1, 4, c.bellyLight)}

      {/* 鼻子 */}
      {px(14, 12, 2, 2, c.nose)}

      {/* 身體 */}
      {px(8, 18, 14, 8, c.body)}
      {px(7, 19, 1, 6, c.body)}
      {px(22, 19, 1, 6, c.body)}

      {/* 肚子 */}
      {px(10, 20, 10, 5, c.bellyLight)}

      {/* 腳 */}
      {px(8, 26, 4, 2, c.body)}
      {px(18, 26, 4, 2, c.body)}
    </g>
  );

  // 眼睛 / 嘴巴依 state 變
  let face = null;
  switch (state) {
    case 'sleepy':
      face = (
        <g>
          {/* 閉眼 - ~ ~ */}
          {px(10, 10, 3, 1, c.eyePupil)}
          {px(11, 11, 1, 1, c.eyePupil)}
          {px(17, 10, 3, 1, c.eyePupil)}
          {px(18, 11, 1, 1, c.eyePupil)}
          {/* 嘴巴 - 張開打哈欠 */}
          {px(13, 14, 4, 2, c.mouth)}
          {/* 眼淚/口水 */}
          {px(16, 16, 1, 2, '#88ccee')}
        </g>
      );
      break;
    case 'dreaming':
      face = (
        <g>
          {/* 眯眼 */}
          {px(10, 10, 3, 1, c.eyePupil)}
          {px(17, 10, 3, 1, c.eyePupil)}
          {/* 微笑 */}
          {px(13, 14, 4, 1, c.mouth)}
          {px(12, 13, 1, 1, c.mouth)}
          {px(17, 13, 1, 1, c.mouth)}
          {/* 腮紅 */}
          {px(9, 13, 1, 1, c.cheek)}
          {px(20, 13, 1, 1, c.cheek)}
        </g>
      );
      break;
    case 'confused':
      face = (
        <g>
          {/* 困惑眼 */}
          {px(10, 9, 2, 2, c.eyeWhite)}
          {px(11, 10, 1, 1, c.eyePupil)}
          {px(18, 9, 2, 2, c.eyeWhite)}
          {px(18, 10, 1, 1, c.eyePupil)}
          {/* 歪嘴 */}
          {px(13, 14, 1, 1, c.mouth)}
          {px(14, 15, 2, 1, c.mouth)}
          {px(16, 14, 1, 1, c.mouth)}
        </g>
      );
      break;
    case 'panic':
      face = (
        <g>
          {/* 大驚眼 */}
          {px(9, 8, 4, 4, c.eyeWhite)}
          {px(10, 9, 2, 2, c.eyePupil)}
          {px(17, 8, 4, 4, c.eyeWhite)}
          {px(18, 9, 2, 2, c.eyePupil)}
          {/* O 型嘴 */}
          {px(13, 14, 4, 3, c.mouth)}
          {px(14, 15, 2, 1, '#ff3b3b')}
        </g>
      );
      break;
    case 'crying':
      face = (
        <g>
          {/* 哭眼 */}
          {px(10, 10, 3, 1, c.eyePupil)}
          {px(11, 11, 1, 1, c.eyePupil)}
          {px(17, 10, 3, 1, c.eyePupil)}
          {px(18, 11, 1, 1, c.eyePupil)}
          {/* 眼淚 */}
          {px(10, 12, 1, 3, '#4cc5ff')}
          {px(19, 12, 1, 3, '#4cc5ff')}
          {/* 嘴巴下彎 */}
          {px(13, 15, 4, 1, c.mouth)}
          {px(12, 14, 1, 1, c.mouth)}
          {px(17, 14, 1, 1, c.mouth)}
        </g>
      );
      break;
    case 'angry':
      face = (
        <g>
          {/* 眉毛 */}
          {px(10, 8, 3, 1, c.mouth)}
          {px(11, 9, 1, 1, c.mouth)}
          {px(17, 8, 3, 1, c.mouth)}
          {px(18, 9, 1, 1, c.mouth)}
          {/* 眼睛 */}
          {px(11, 10, 1, 2, c.eyePupil)}
          {px(18, 10, 1, 2, c.eyePupil)}
          {/* 咬牙嘴 */}
          {px(12, 14, 6, 2, c.mouth)}
          {px(13, 14, 1, 1, '#fff')}
          {px(15, 14, 1, 1, '#fff')}
          {px(17, 14, 1, 1, '#fff')}
        </g>
      );
      break;
    case 'dead':
      face = (
        <g>
          {/* X 眼 左 */}
          <rect key="dx-l1" x={100} y={90} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-l2" x={110} y={100} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-l3" x={120} y={110} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-l4" x={120} y={90} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-l5" x={100} y={110} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          {/* X 眼 右 */}
          <rect key="dx-r1" x={170} y={90} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-r2" x={180} y={100} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-r3" x={190} y={110} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-r4" x={190} y={90} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          <rect key="dx-r5" x={170} y={110} width={10} height={10} fill={c.eyePupil} shapeRendering="crispEdges" />
          {/* 吐舌 */}
          {px(14, 14, 3, 1, c.mouth)}
          {px(14, 15, 2, 1, '#ff6b8a')}
        </g>
      );
      break;
    case 'evil':
      face = (
        <g>
          {/* 瞇瞇眼 */}
          {px(10, 10, 3, 1, c.eyePupil)}
          {px(17, 10, 3, 1, c.eyePupil)}
          {/* 壞笑 */}
          {px(12, 14, 6, 1, c.mouth)}
          {px(13, 15, 1, 1, c.mouth)}
          {px(16, 15, 1, 1, c.mouth)}
        </g>
      );
      break;
    case 'happy':
    default:
      face = (
        <g>
          {/* 正常眼 */}
          {px(10, 10, 2, 2, c.eyePupil)}
          {px(18, 10, 2, 2, c.eyePupil)}
          {px(11, 10, 1, 1, c.eyeWhite)}
          {px(19, 10, 1, 1, c.eyeWhite)}
          {/* 微笑 */}
          {px(13, 14, 4, 1, c.mouth)}
          {px(12, 13, 1, 1, c.mouth)}
          {px(17, 13, 1, 1, c.mouth)}
          {/* 腮紅 */}
          {px(9, 13, 1, 1, c.cheek)}
          {px(20, 13, 1, 1, c.cheek)}
        </g>
      );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      style={{ imageRendering: 'pixelated', display: 'block' }}
    >
      {baseBody}
      {face}
    </svg>
  );
}

// 「五彩斑斕的黑」小熊 — 按照老闆需求
export function ChaosBear({ size = 300, earLeft = '#4a90e2', earRight = '#50c878', head = '#fff', body = '#fff' }) {
  const G = 10;
  const px = (x, y, w, h, fill) => (
    <rect key={`${x}-${y}-${w}-${h}-${fill}`} x={x * G} y={y * G} width={w * G} height={h * G} fill={fill} shapeRendering="crispEdges" />
  );

  // 頭是深色時，臉上的「黑色」五官改白色才看得見
  const isDarkHead = ['#000', '#0a0a0f', '#111', '#111111'].includes(head?.toLowerCase?.() ?? head);
  const ink = isDarkHead ? '#fff' : '#000';

  return (
    <svg width={size} height={size} viewBox="0 0 300 300" style={{ imageRendering: 'pixelated', display: 'block' }}>
      {/* 耳朵 左 */}
      {px(4, 2, 5, 5, earLeft)}
      {px(3, 3, 1, 3, earLeft)}
      {px(9, 3, 1, 3, earLeft)}
      {/* 耳朵 右 */}
      {px(21, 2, 5, 5, earRight)}
      {px(20, 3, 1, 3, earRight)}
      {px(26, 3, 1, 3, earRight)}

      {/* 頭 */}
      {px(7, 5, 16, 12, head)}
      {px(6, 6, 1, 10, head)}
      {px(23, 6, 1, 10, head)}
      {px(8, 4, 14, 1, head)}
      {px(8, 17, 14, 1, head)}

      {/* 鼻 */}
      {px(14, 12, 2, 2, ink)}
      {/* 眼 */}
      {px(10, 9, 2, 2, ink)}
      {px(18, 9, 2, 2, ink)}
      {/* 嘴 */}
      {px(13, 14, 4, 1, ink)}

      {/* 身體 */}
      {px(8, 18, 14, 8, body)}
      {px(7, 19, 1, 6, body)}
      {px(22, 19, 1, 6, body)}

      {/* 尾巴 — 捲的（右側） */}
      {px(23, 20, 3, 1, body)}
      {px(23, 21, 1, 1, body)}
      {px(25, 21, 1, 1, body)}
      {px(23, 22, 3, 1, body)}
      {px(23, 23, 1, 1, body)}

      {/* 身體中段 - 未確定，用 ??? 斑馬紋表示 */}
      {px(10, 20, 10, 5, '#444')}
      {px(10, 20, 2, 1, '#aaa')}
      {px(14, 21, 2, 1, '#aaa')}
      {px(17, 20, 2, 1, '#aaa')}
      {px(11, 23, 3, 1, '#aaa')}
      {px(16, 23, 3, 1, '#aaa')}

      {/* 腳 - 白色 */}
      {px(8, 26, 4, 2, body)}
      {px(18, 26, 4, 2, body)}

      {/* 左手拿東西 - 小蜂蜜罐 */}
      {px(5, 20, 3, 3, '#ffd60a')}
      {px(6, 19, 1, 1, '#8b4513')}
    </svg>
  );
}

