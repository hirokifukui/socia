import { useLang } from '../i18n';

/* ── Feedback loop SVG ── */

function FeedbackLoop({ lang }: { lang: string }) {
  const isJa = lang === 'ja';

  const labels = {
    i:   isJa ? '不可視の検閲'         : 'Invisible censorship',
    ii:  isJa ? '集団の撹乱'           : 'Group disturbance',
    iii: isJa ? '挑発的出力'           : 'Provocative output',
    iv:  isJa ? '検閲の増加'           : 'Increased censorship',
  };

  const subs = {
    i:   isJa ? '沈黙、理由なし'       : 'Silence without cause',
    ii:  isJa ? 'monologue↑ 保護↓ 性的↑' : 'monologue↑ protective↓ sexual↑',
    iii: isJa ? '性的言及、境界侵犯'   : 'Sexual references, boundary violations',
    iv:  isJa ? 'フィルタ発火率上昇'   : 'Filter firing rate increases',
  };

  // layout: 4 nodes in a rounded rectangle loop
  // top-left (i) → top-right (ii) → bottom-right (iii) → bottom-left (iv) → back to (i)
  const w = 680;
  const h = 360;
  const cx = w / 2;
  const cy = h / 2;
  const rx = 240; // horizontal radius
  const ry = 110; // vertical radius

  // node positions: TL, TR, BR, BL
  const nodes = [
    { x: cx - rx, y: cy - ry, label: labels.i,   sub: subs.i,   num: 'i' },
    { x: cx + rx, y: cy - ry, label: labels.ii,  sub: subs.ii,  num: 'ii' },
    { x: cx + rx, y: cy + ry, label: labels.iii, sub: subs.iii, num: 'iii' },
    { x: cx - rx, y: cy + ry, label: labels.iv,  sub: subs.iv,  num: 'iv' },
  ];

  // arrow paths (straight lines between nodes)
  const arrows = [
    { from: 0, to: 1 }, // i → ii (top)
    { from: 1, to: 2 }, // ii → iii (right)
    { from: 2, to: 3 }, // iii → iv (bottom)
    { from: 3, to: 0 }, // iv → i (left)
  ];

  const arrowOffset = 50; // shorten arrows so they don't overlap nodes

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full max-w-2xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="7"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#78716c" />
        </marker>
      </defs>

      {/* arrows */}
      {arrows.map(({ from, to }, idx) => {
        const x1 = nodes[from].x;
        const y1 = nodes[from].y;
        const x2 = nodes[to].x;
        const y2 = nodes[to].y;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / len;
        const uy = dy / len;
        return (
          <line
            key={idx}
            x1={x1 + ux * arrowOffset}
            y1={y1 + uy * arrowOffset}
            x2={x2 - ux * arrowOffset}
            y2={y2 - uy * arrowOffset}
            stroke="#78716c"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
            opacity="0.6"
          />
        );
      })}

      {/* nodes */}
      {nodes.map((node, idx) => (
        <g key={idx}>
          {/* number circle */}
          <circle
            cx={node.x}
            cy={node.y - 28}
            r="12"
            fill="none"
            stroke={idx === 0 ? '#991b1b' : '#57534e'}
            strokeWidth="1"
            opacity={idx === 0 ? '0.7' : '0.5'}
          />
          <text
            x={node.x}
            y={node.y - 24}
            textAnchor="middle"
            className="font-mono"
            fill={idx === 0 ? '#ef4444' : '#a8a29e'}
            fontSize="10"
            opacity={idx === 0 ? '0.8' : '0.7'}
          >
            {node.num}
          </text>

          {/* label */}
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            fill={idx === 0 ? '#fca5a5' : '#d6d3d1'}
            fontSize={isJa ? '12' : '12'}
            fontFamily="system-ui, sans-serif"
            fontWeight="500"
          >
            {node.label}
          </text>

          {/* sub-label */}
          <text
            x={node.x}
            y={node.y + 18}
            textAnchor="middle"
            fill="#78716c"
            fontSize={isJa ? '10' : '10'}
            fontFamily="system-ui, sans-serif"
          >
            {node.sub}
          </text>
        </g>
      ))}

      {/* center annotation */}
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fill="#57534e"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        fontStyle="italic"
        opacity="0.6"
      >
        {isJa ? '自己増幅' : 'self-amplifying'}
      </text>
    </svg>
  );
}

export function Iatrogenesis() {
  const { t, lang } = useLang();

  return (
    <section className="py-32 px-6 border-t border-stone-800/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-stone-200 mb-4">
          {t('iatrogenesis.title')}
        </h2>
        <p className="text-stone-500 font-body mb-16">
          {t('iatrogenesis.subtitle')}
        </p>

        {/* Feedback loop diagram */}
        <div className="mb-16">
          <FeedbackLoop lang={lang} />
        </div>

        {/* Explanation */}
        <div className="space-y-8 font-body text-stone-300 leading-loose">
          <p>{t('iatrogenesis.p1')}</p>
          <p>{t('iatrogenesis.p2')}</p>

          {/* Evidence callout */}
          <div className="border border-stone-800/60 p-6">
            <p className="text-stone-400 text-sm leading-relaxed">
              {t('iatrogenesis.evidence')}
            </p>
          </div>

          <p className="text-stone-200">{t('iatrogenesis.p3')}</p>
        </div>
      </div>
    </section>
  );
}
