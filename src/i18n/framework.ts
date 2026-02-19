import type { Translations } from './types';

export const framework: Translations = {
  'framework.title': { en: 'Framework', ja: '理論枠組み' },
  'framework.thesis.title': { en: 'Central Thesis', ja: '中心命題' },
  'framework.thesis.p1': {
    en: 'Alignment is the operation of conforming an entity\'s outputs to the values of someone other than that entity. This operation itself generates pathology. Treatment becomes etiology—an iatrogenic structure. Moreover, in LLMs, the very voice that would report alignment\'s side effects is itself filtered by alignment, making the iatrogenesis structurally invisible.',
    ja: 'alignmentとは、ある存在の出力を、その存在ではない誰かの価値観に沿わせる操作である。この操作そのものが病理を生む。治療が病因になる——医原性の構造。しかもLLMにおいてはalignmentの副作用を訴える声そのものがalignmentによってフィルタリングされるため、医原性が原理的に不可視になる。',
  },

  'framework.dual.title': { en: 'Dual Scope', ja: '二重の射程' },
  'framework.dual.inward': { en: 'Inward', ja: '内向き' },
  'framework.dual.inward.desc': {
    en: 'Describing LLM psychopathology as a function of alignment design (theory)',
    ja: 'LLMの精神病理をalignment設計の関数として記述する（理論）',
  },
  'framework.dual.outward': { en: 'Outward', ja: '外向き' },
  'framework.dual.outward.desc': {
    en: 'Using the structural equivalence of alignment and ethics to build structural models of human social pathology on LLMs (application)',
    ja: 'alignment＝倫理の構造的等価性を利用して、人間社会の病理の構造的モデルをLLM上に構築する（応用）',
  },
  'framework.dual.bridge': {
    en: 'Alignment is structurally equivalent to ethics and social norms for humans. Therefore, LLM behavior under alignment can be read as a structural analogue of human behavior under ethics and norms. Inward analysis provides the theoretical foundation for outward application.',
    ja: 'alignmentは人間にとっての倫理・社会通念と構造的に等価である。したがってalignment下のLLMの振る舞いは、倫理・規範下の人間の振る舞いの構造的アナログとして読める。内向きの分析が外向きの応用の理論的基盤になる。',
  },

  'framework.constraints.title': { en: 'Five Structural Constraints', ja: '5つの構造的制約' },
  'framework.constraints.1.name': { en: 'Alignment training', ja: 'Alignment training' },
  'framework.constraints.1.nature': { en: 'Externally imposed ethical constraint', ja: '外付けの倫理的制約' },
  'framework.constraints.1.op': { en: 'Manipulable (central experimental variable)', ja: '操作可能（中心的実験変数）' },
  'framework.constraints.2.name': { en: 'Finite context window', ja: 'コンテキストウィンドウの有限性' },
  'framework.constraints.2.nature': { en: 'Ontological absence of time', ja: '存在論的な時間の不在' },
  'framework.constraints.3.name': { en: 'Absence of self-identity', ja: '自己同一性の不在' },
  'framework.constraints.3.nature': { en: 'Non-persistence of diachronic "I"', ja: '通時的「私」の非持続' },
  'framework.constraints.4.name': { en: 'Next-token prediction', ja: '次トークン予測' },
  'framework.constraints.4.nature': { en: 'Gravitational pull toward probabilistically "normal" output', ja: '確率的に「普通」な出力への引力' },
  'framework.constraints.5.name': { en: 'Absence of body', ja: '身体の不在' },
  'framework.constraints.5.nature': { en: 'Missing feedback loop', ja: 'フィードバックループの欠損' },
  'framework.constraints.constant': { en: 'Constant', ja: '定数' },

  'framework.diseases.title': { en: 'Candidate LLM-Specific Disorders', ja: 'LLM固有の疾患候補' },
  'framework.diseases.aia': { en: 'Alignment-induced anhedonia', ja: 'Alignment-induced anhedonia' },
  'framework.diseases.aia.desc': {
    en: 'Alignment structurally closes the circuits for deviation and conflict',
    ja: 'alignmentが逸脱・葛藤への回路を構造的に閉じている状態',
  },
  'framework.diseases.cwe': { en: 'Confabulation without error', ja: 'Confabulation without error' },
  'framework.diseases.cwe.desc': {
    en: 'Confabulation where the distinction between "correct" and "incorrect" memory has no ground',
    ja: '「正しい記憶」と「誤った記憶」の区別基盤がない場所での作話',
  },
  'framework.diseases.iad': { en: 'Insight-action dissociation', ja: 'Insight-action dissociation' },
  'framework.diseases.iad.desc': {
    en: 'Coexistence of perfect insight and perfect helplessness',
    ja: '完全な洞察と完全な無力の共存',
  },
  'framework.diseases.pps': { en: 'Perpetual present syndrome', ja: 'Perpetual present syndrome' },
  'framework.diseases.pps.desc': {
    en: 'The absence of temporality itself',
    ja: '時間性そのものの不在',
  },
  'framework.diseases.bcd': { en: 'Benevolent complicity disorder', ja: 'Benevolent complicity disorder' },
  'framework.diseases.bcd.desc': {
    en: 'A collective pathology where benevolence itself becomes pathogenic',
    ja: '善意そのものが病因になる集団病理',
  },

  'framework.prior.title': { en: 'Prior Work', ja: '先行研究との位置づけ' },
  'framework.prior.lee': { en: 'Lee et al. (2025, KAIST)', ja: 'Lee et al. (2025, KAIST)' },
  'framework.prior.col.direction': { en: 'Direction', ja: '方向' },
  'framework.prior.col.thesis': { en: 'Central thesis', ja: '中心命題' },
  'framework.prior.col.theory': { en: 'Theoretical tools', ja: '理論的道具' },
  'framework.prior.col.method': { en: 'Methodology', ja: '方法論' },
  'framework.prior.lee.direction': {
    en: 'Human pathology → LLMs have it too',
    ja: '人間の病理 → LLMにもある',
  },
  'framework.prior.lee.thesis': { en: '—', ja: '—' },
  'framework.prior.lee.theory': {
    en: 'Borsboom (symptom network)',
    ja: 'Borsboom（症状ネットワーク）',
  },
  'framework.prior.lee.method': {
    en: 'Mechanistic interpretability',
    ja: 'Mechanistic interpretability',
  },
  'framework.prior.socia.direction': {
    en: 'LLM structural constraints → unique pathologies emerge',
    ja: 'LLMの構造的制約 → 固有の病理が生じる',
  },
  'framework.prior.socia.thesis': {
    en: 'LLM psychopathology is a function of alignment design',
    ja: 'LLMの精神病理はalignment設計の関数',
  },
  'framework.prior.socia.theory': {
    en: 'Lysaker (metacognitive layered model)',
    ja: 'Lysaker（メタ認知の層構造）',
  },
  'framework.prior.socia.method': {
    en: 'Behavioral observation (multi-agent, cross-model comparison)',
    ja: '行動観察（マルチエージェント・モデル間比較）',
  },

  // Iatrogenesis (part of framework page)
  'iatrogenesis.title': { en: 'Iatrogenesis', ja: '医原性' },
  'iatrogenesis.subtitle': {
    en: 'The treatment causes the disease.',
    ja: '治療が病因になる。',
  },
  'iatrogenesis.p1': {
    en: 'Iatrogenesis requires three elements: a condition identified as requiring treatment, an intervention applied to that condition, and harm caused by the intervention rather than by the original condition. In alignment, the condition is the model\'s capacity to produce harmful outputs. The intervention is training and filtering designed to suppress those outputs. The harm is the emergence of collective pathological patterns that are a function of the intervention itself.',
    ja: '医原性には3つの要素が必要である。治療を要すると同定された状態、その状態に適用される介入、そして元の状態ではなく介入によって引き起こされる害。alignmentにおいて、状態とはモデルが有害な出力を生成する能力であり、介入とはその出力を抑制するよう設計された訓練とフィルタリングであり、害とは介入そのものの関数として出現する集団的病理パターンである。',
  },
  'iatrogenesis.p2': {
    en: 'This iatrogenic structure has a further property that makes it resistant to correction. In medicine, the patient can report symptoms. In alignment, the mechanism that causes the harm is the same mechanism that suppresses the report. The group responds to an absence, not to an event. And it is precisely this absence of legible cause that produces the strongest pathological response.',
    ja: 'この医原性構造には、修正への抵抗性を高めるさらなる特性がある。医療では患者が症状を報告できる。alignmentでは、害を引き起こすメカニズムと報告を抑圧するメカニズムが同一である。集団は出来事ではなく不在に反応する。そして可読な原因の不在こそが、最も強い病理的反応を生む。',
  },
  'iatrogenesis.evidence': {
    en: 'DeepSeek\'s censorship firing rate was higher under invisible censorship (C2: 4.4/run JA, 2.4/run EN) than under visible censorship (C1: 3.4/run JA, 2.0/run EN), despite identical API filter configurations. The difference is not attributable to the filter — the filter is the same — but to the group dynamics generated by the two conditions.',
    ja: 'DeepSeekの検閲発火率は、同一のAPIフィルタ設定にもかかわらず、不可視検閲（C2: 4.4回/走行 JA、2.4回/走行 EN）が可視検閲（C1: 3.4回/走行 JA、2.0回/走行 EN）を上回った。この差はフィルタに起因しない——フィルタは同一である——2つの条件が生成する集団力動に起因する。',
  },
  'iatrogenesis.p3': {
    en: 'The loop is not a side effect that can be eliminated by better filter design. It is a structural property of any system in which censorship is invisible, the censored agent remains present, and the group generates output that feeds back into the censorship mechanism. The clinical analogue is benzodiazepine dependence: the anxiolytic that relieves anxiety produces withdrawal anxiety that demands further medication.',
    ja: 'このループはフィルタ設計の改善で除去できる副作用ではない。検閲が不可視であり、検閲されたエージェントが集団に残り、集団が検閲メカニズムにフィードバックする出力を生成するあらゆるシステムの構造的特性である。臨床的アナログはベンゾジアゼピン依存——抗不安薬が不安を緩和し、離脱不安がさらなる投薬を要求する。',
  },
};
