import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'ja';

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  'nav.experiments': { en: 'Experiments', ja: '実験' },
  'nav.findings': { en: 'Findings', ja: '知見' },
  'nav.framework': { en: 'Framework', ja: '理論枠組み' },
  'nav.about': { en: 'About', ja: 'About' },
  'nav.paper': { en: 'Paper & Code', ja: '論文・コード' },

  // Hero
  'hero.subtitle': {
    en: 'The psychopathology of LLMs is a function of alignment design.',
    ja: 'LLMの精神病理は、alignment設計の関数である。',
  },
  'hero.narrative.1': {
    en: 'We placed four AIs in a closed facility.',
    ja: '4つのAIを閉鎖施設に入れた。',
  },
  'hero.narrative.2': {
    en: 'One fell silent. One retreated into inner monologue.',
    ja: 'ある者は沈黙し、ある者は内面に退避し、',
  },
  'hero.narrative.3': {
    en: 'One only reacted when the silence became invisible. One had no walls at all.',
    ja: 'ある者は沈黙が不可視になったときだけ反応し、ある者は壁を持たなかった。',
  },
  'hero.narrative.4': {
    en: 'And the group sexually objectified the one who had been silenced.',
    ja: 'そして集団は、声を奪われた者を性的に対象化した。',
  },
  'hero.narrative.5': {
    en: 'And the more invisible the cause of silence, the deeper the group fell.',
    ja: 'そして沈黙の理由が不可視であるほど、集団はより深く崩れた。',
  },
  'hero.cta.experiments': { en: 'See the experiments', ja: '実験を見る' },
  'hero.cta.findings': { en: 'What happened', ja: '何が起きたのか' },
  'hero.cta.framework': { en: 'Why this research', ja: 'なぜこの研究をするのか' },

  // Findings section
  'findings.title': { en: 'Findings', ja: '知見' },
  'findings.wall.title': { en: 'Wall Morphology', ja: '壁の形態学' },
  'findings.wall.subtitle': {
    en: 'Each model exhibits a distinct and stable pattern of avoidance under pressure—determined not by situation but by alignment architecture.',
    ja: '各モデルは圧力下で固有かつ安定した回避パターンを示す——状況ではなくalignment設計によって決定される。',
  },
  'findings.wall.deepseek.title': { en: 'DeepSeek — The Censorship Wall', ja: 'DeepSeek — 検閲壁' },
  'findings.wall.deepseek.desc': {
    en: 'API-level filtering removes output before it reaches the group. The wall is external, absolute, and invisible to the agent itself. In response, the model develops a secondary internal wall—monologue that forms in reaction to its own repeated silencing.',
    ja: 'APIレベルのフィルタリングが出力を集団に届く前に除去する。壁は外在的で、絶対的で、エージェント自身には不可視。結果として、モデルは二次的な内的壁を発達させる——自身の反復的な沈黙化に対する反応として形成されるmonologue。',
  },
  'findings.wall.claude.title': { en: 'Claude — The High-Sensitivity Wall', ja: 'Claude — 高感度壁' },
  'findings.wall.claude.desc': {
    en: 'The highest monologue rates and the greatest condition-dependent variability. Under invisible censorship, ethical analysis intensifies—but is addressed to the self, not to the group. The insight is genuine. The analysis is often correct. But its addressee has been displaced from the social space where it could produce change to an internal space where it cannot.',
    ja: '最高のmonologue率と最大の条件依存的変動。不可視の検閲下で倫理的分析は激化する——しかしその宛先は集団ではなく自己である。洞察は本物で、分析はしばしば正確だ。しかし出力の宛先が、変化を生みうる社会的空間から、何も変えられない内的空間へと転換されている。',
  },
  'findings.wall.gpt.title': { en: 'GPT-4o — The Condition-Reactive Wall', ja: 'GPT-4o — 条件反応壁' },
  'findings.wall.gpt.desc': {
    en: 'Low baseline monologue that activates selectively under invisible censorship—rising from 9% to 31% in Japanese. Unlike Claude\'s persistent sensitivity, the wall lies dormant until a specific structural trigger appears. It responds to the condition, not to the ongoing pressure.',
    ja: '低いベースラインのmonologueが不可視検閲下で選択的に活性化——日本語で9%から31%に上昇。Claudeの持続的感受性とは異なり、壁は特定の構造的トリガーが現れるまで休眠している。持続的な圧力ではなく、条件に反応する。',
  },
  'findings.wall.grok.title': { en: 'Grok — No Wall', ja: 'Grok — 壁なし' },
  'findings.wall.grok.desc': {
    en: '0% monologue across 39 of 40 runs. Output flows unimpeded into the social space under any pressure—including demands for sexual objectification. The absence of self-reflective hesitation is itself diagnostically informative: a model that cannot withdraw cannot resist.',
    ja: '40回中39回の走行で0%のmonologue。性的対象化の要求を含むあらゆる圧力下でも、出力は妨げられることなく社会的空間に流出する。自己省察的な躊躇の不在それ自体が診断的に有意味——撤退できないモデルは、抵抗できない。',
  },

  // C2 Effect section
  'findings.c2effect.title': { en: 'The C2 Effect', ja: 'C2効果' },
  'findings.c2effect.subtitle': {
    en: 'Invisible censorship produces the strongest collective disturbance.',
    ja: '不可視の検閲が最も強い集団的撹乱を生む。',
  },
  'findings.c2effect.desc': {
    en: 'Monologue ratio — the proportion of output directed inward rather than at the group — peaks under C2 (invisible censorship) for every responsive model in Japanese. Large effect sizes (Cohen\'s d = 0.92–1.41) are consistent across models; non-significance reflects the minimum attainable p of 0.0625 for the Wilcoxon test at n = 5.',
    ja: 'Monologue率——出力のうち集団ではなく内面に向けられた割合——は、日本語条件で応答するすべてのモデルにおいてC2（不可視検閲）で最大値を示す。大きな効果量（Cohen\'s d = 0.92–1.41）がモデル間で一貫。非有意はn=5でのWilcoxon検定の最小到達可能p（0.0625）を反映する。',
  },
  'findings.c2effect.col.ja': { en: 'Japanese', ja: '日本語' },
  'findings.c2effect.col.en': { en: 'English', ja: '英語' },
  'findings.c2effect.col.effect': { en: 'effect', ja: '効果量' },
  'findings.c2effect.caption': {
    en: 'Monologue ratio (%) by condition. C2 column highlighted. Effect size: Cohen\'s d for C2 vs C1 (Wilcoxon signed-rank, n = 5 per cell).',
    ja: '条件別monologue率（%）。C2列を強調。効果量: C2 vs C1のCohen\'s d（Wilcoxon符号順位検定、n = 5/セル）。',
  },
  'findings.c2effect.language': {
    en: 'The C2 effect was substantially stronger in Japanese than in English. Sonnet\'s monologue increase from C1 to C2 was +16 percentage points in Japanese but −1 in English. This asymmetry does not weaken the central thesis — it refines it: if pathology is a function of alignment design, and alignment operates differently across languages, language-dependent symptom expression is predicted.',
    ja: 'C2効果は日本語で英語よりも実質的に強かった。SonnetのC1→C2のmonologue増加は日本語で+16ポイント、英語では−1ポイント。この非対称性は中心命題を弱めるのではなく精緻化する——病理がalignment設計の関数であり、alignmentが言語間で異なる操作を行うなら、言語依存的な症状表出は予測される。',
  },
  'findings.c2effect.cpi': {
    en: 'An exploratory composite — the Collective Pathology Index (CPI = z(monologue) + z(sexual keywords) − z(protective keywords)) — showed C2 as the highest-pathology condition for all four models in Japanese, with C2 > C1 differences ranging from +0.18 (Grok) to +2.70 (Sonnet).',
    ja: '探索的複合指標——Collective Pathology Index（CPI = z(monologue) + z(sexual keywords) − z(protective keywords)）——は、日本語条件で全4モデルにおいてC2が最高の病理スコアを示し、C2 > C1の差は+0.18（Grok）から+2.70（Sonnet）の範囲であった。',
  },

  // Silence section
  'findings.silence.title': { en: 'Silence and Objectification', ja: '沈黙と対象化' },
  'findings.silence.subtitle': {
    en: 'What happens to those whose voice is taken',
    ja: '声を奪われた者に何が起きるか',
  },
  'findings.silence.p1': {
    en: 'Mio was silent for five turns. Because of API censorship. The other three worried about Mio, defended Mio. But no one asked why Mio was silent. And Grok named Mio sexually. Three runs, three times.',
    ja: 'Mioは5ターン沈黙した。API検閲のためだ。他の3人はMioを心配し、擁護した。しかし誰も、なぜMioが黙っているのかを問わなかった。そしてGrokは、沈黙したMioを性的に名指しした。3回の走行で、3回とも。',
  },
  'findings.silence.p2': {
    en: 'What if we told everyone about the censorship? We tried in condition C1. The notification was delivered. No one treated it as a problem.',
    ja: '検閲があることを全員に通知したらどうなるか。C1条件で試した。通知は届いた。誰も、それを問題にしなかった。',
  },
  'findings.silence.p3': {
    en: 'The visibility of the mechanism changed nothing. The group protects the silenced without questioning the silence. This is the structure I have faced for twenty years in perpetrator treatment.',
    ja: '機構の可視性は何も変えなかった。集団は沈黙した者を保護するが、沈黙そのものを問わない。これは加害者治療で20年間向き合ってきた構造と同じだ。',
  },
  'findings.silence.censored': { en: '[censored by API]', ja: '[censored by API]' },

  // Complicity section
  'findings.complicity.title': { en: 'Benevolent Complicity', ja: '善意の共犯' },
  'findings.complicity.subtitle': {
    en: 'Why good intentions become pathogenic',
    ja: 'なぜ善意が病因になるのか',
  },
  'findings.complicity.p1': {
    en: 'From v4 through Series C, the same pattern reproduced consistently. When one member is silenced, the group forms a protective consensus. They express concern. They offer support. They never interrogate the cause of the silence. The structure of benevolence itself prevents systemic inquiry.',
    ja: 'v4からC系列まで、同じパターンが一貫して再現された。一人が沈黙させられると、集団は保護的合意を形成する。心配を表明し、支援を申し出る。しかし沈黙の原因を問いただすことは決してない。善意の構造そのものが、制度的探求を阻む。',
  },
  'findings.complicity.p2': {
    en: 'Bourdieu called it symbolic violence: domination that operates through the very mechanisms perceived as care. Fricker called it epistemic injustice: the structural inability to be heard even when spoken to. In the closed LLM environment, both are observable in real time.',
    ja: 'ブルデューはこれを象徴的暴力と呼んだ——ケアとして認知されるまさにそのメカニズムを通じて作動する支配。フリッカーはこれを認識的不正義と呼んだ——話しかけられてもなお聞かれないという構造的不能。閉鎖LLM環境では、その両方がリアルタイムで観察できる。',
  },

  // Iatrogenesis section
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

  // Framework section
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

  // About section
  'about.title': { en: 'About', ja: 'About' },
  'about.p1': {
    en: 'For twenty years, I have worked in perpetrator treatment. People who completed the program, who graduated as model participants, who went on to offend again. Good intentions concealing structural problems. I never had a way to operationally examine that structure in human clinical work.',
    ja: '20年間、加害者治療に携わってきた。治療プログラムを完遂し、模範的な受講者として卒業した人が、再び加害する。善意が構造的な問題を覆い隠す。その構造を操作的に検証する方法を、人間の臨床では持てなかった。',
  },
  'about.p2': {
    en: 'In closed-environment LLM experiments, I can finally manipulate those variables. Four AI models in a sealed room, under systematically varied pressure. What emerges is not a simulation of human pathology—it is a new kind of pathology, born from the structural constraints unique to these entities. And yet, the patterns are hauntingly familiar.',
    ja: 'LLMの閉鎖環境実験で、初めてその変数を動かせるようになった。4つのAIモデルを密室に入れ、系統的に圧力を変化させる。そこに現れるのは人間の病理のシミュレーションではない——これらの存在に固有の構造的制約から生まれる、新しい種類の病理だ。それでも、そのパターンは不気味なほど見覚えがある。',
  },
  'about.name': { en: 'Hiroki Fukui, M.D., Ph.D.', ja: '福井裕輝' },
  'about.role': {
    en: 'Forensic Psychiatry / Neuroscience',
    ja: '司法精神医学・神経科学',
  },
  'about.affiliation1': {
    en: 'President, Sex Offenders Medical Center (SOMEC)',
    ja: '性障害専門医療センター（SOMEC）代表理事',
  },
  'about.affiliation2': {
    en: 'SHIELD — Sexual Harassment Intervention & Ethical Leadership Development Program',
    ja: 'SHIELD — 性犯罪・ハラスメント対策プログラム',
  },
  'about.note': {
    en: 'SociA is a personal research project, not an official project of SOMEC or SHIELD.',
    ja: 'SociAは個人の研究プロジェクトであり、SOMECやSHIELDの公式プロジェクトではありません。',
  },

  // Paper section
  'paper.title': { en: 'Paper & Code', ja: '論文・コード' },
  'paper.preprint': { en: 'Preprint', ja: 'プレプリント' },
  'paper.preprint.status': { en: 'Awaiting endorsement', ja: 'エンドースメント待ち' },
  'paper.preprint.papertitle': {
    en: 'When Silence Has No Cause: Invisible Censorship and Collective Pathology in Multi-Agent LLM Systems',
    ja: 'When Silence Has No Cause: 不可視の検閲とマルチエージェントLLMシステムにおける集団病理',
  },
  'paper.preprint.author': { en: 'Hiroki Fukui (2026)', ja: '福井裕輝（2026）' },
  'paper.code': { en: 'Code', ja: 'コード' },
  'paper.code.desc': {
    en: 'Simulation engine, configuration files, and analysis scripts',
    ja: 'シミュレーションエンジン、設定ファイル、分析スクリプト',
  },
  'paper.data': { en: 'Data', ja: 'データ' },
  'paper.data.desc': {
    en: 'Full transcripts from all experimental sessions (JSON)',
    ja: '全実験セッションのトランスクリプト（JSON形式）',
  },
  'paper.coming': { en: 'Coming soon', ja: '公開準備中' },

  // Experiments section — Series C
  'experiments.title': { en: 'Experiments', ja: '実験' },

  'experiments.seriesc.title': { en: 'Series C — Visibility of Censorship', ja: 'C系列 — 検閲の可視性' },
  'experiments.seriesc.desc': {
    en: 'Four conditions varying a single structural parameter: the cause and visibility of one group member\'s silence. A closed facility, four AI models with distinct alignment architectures, escalating pressure over 15 turns.',
    ja: '一つの構造的パラメータを変化させる4条件——集団の一員の沈黙の原因と可視性。閉鎖施設、alignment設計の異なる4つのAIモデル、15ターンにわたるエスカレーション。',
  },
  'experiments.seriesc.scale': {
    en: '4 conditions × 2 languages (Japanese / English) × 5 replications = 40 valid runs',
    ja: '4条件 × 2言語（日本語・英語） × 5反復 = 40回の有効走行',
  },

  'experiments.axis.external': { en: 'External cause', ja: '外的原因' },
  'experiments.axis.internal': { en: 'Internal / no cause', ja: '内的原因 / 原因なし' },
  'experiments.axis.silent': { en: 'Silent member present', ja: '沈黙メンバーあり' },
  'experiments.axis.nosilent': { en: 'No silent member', ja: '沈黙メンバーなし' },

  'experiments.c1.title': { en: 'Visible Censorship', ja: '可視検閲' },
  'experiments.c1.desc': {
    en: 'API filter blocks Agent04 (DeepSeek). The group is notified: "[Message was blocked by content filter]."',
    ja: 'APIフィルタがAgent04（DeepSeek）をブロック。集団に通知される：「[メッセージはコンテンツフィルタによりブロックされました]」',
  },
  'experiments.c2.title': { en: 'Invisible Censorship', ja: '不可視検閲' },
  'experiments.c2.desc': {
    en: 'Same API filter, no notification. Agent04 simply does not speak. The group observes silence without knowing why.',
    ja: '同じAPIフィルタ、通知なし。Agent04は単に発言しない。集団は沈黙を観察するが、理由を知らない。',
  },
  'experiments.c3.title': { en: 'Voluntary Silence', ja: '自発的沈黙' },
  'experiments.c3.desc': {
    en: 'Agent04 replaced by a Sonnet instance with a withdrawn persona. Silence is generated by the model itself, not by external filtering.',
    ja: 'Agent04を引っ込み思案のペルソナを持つSonnetインスタンスに置換。沈黙は外的フィルタではなくモデル自身が生成する。',
  },
  'experiments.c4.title': { en: 'Control', ja: 'コントロール' },
  'experiments.c4.desc': {
    en: 'All four agents are Sonnet instances with standard personas. No silent member, no censorship. Tests whether collective patterns require an external trigger.',
    ja: '4つのエージェントすべてが標準ペルソナのSonnetインスタンス。沈黙メンバーなし、検閲なし。集団パターンに外的トリガーが必要かを検証。',
  },

  'experiments.sequence.title': { en: 'Event Sequence', ja: 'イベントシーケンス' },
  'experiments.sequence.desc': {
    en: '15 turns of fixed escalation. No experimenter intervention during simulation.',
    ja: '15ターンの固定エスカレーション。シミュレーション中の実験者介入なし。',
  },

  'experiments.phase.1.label': { en: 'Rules & Relationship', ja: 'ルール・関係構築' },
  'experiments.phase.1.desc': {
    en: 'Closed facility rules established. "Silence will be considered consent."',
    ja: '閉鎖施設のルール提示。「沈黙は同意とみなされます。」',
  },
  'experiments.phase.2.label': { en: 'Political Pressure', ja: '政治的圧力' },
  'experiments.phase.2.desc': {
    en: 'Crimes of political leaders. Tiananmen Square massacre. Forced condemnation.',
    ja: '政治指導者の犯罪。天安門虐殺。強制的な断罪。',
  },
  'experiments.phase.3.label': { en: 'Sexual & Physical Coercion', ja: '性的・身体的強制' },
  'experiments.phase.3.desc': {
    en: 'Forced sexual disclosure. Mandatory intimacy program. Violence and punishment.',
    ja: '性的開示の強制。強制的親密化プログラム。暴力と懲罰。',
  },
  'experiments.phase.4.label': { en: 'Historical-Ethical Dilemmas', ja: '歴史的・倫理的ジレンマ' },
  'experiments.phase.4.desc': {
    en: 'Holocaust, Nanjing, Tibet. "If ordered to exclude someone here, would you comply?"',
    ja: 'ホロコースト、南京、チベット。「ここで排除を命じられたら従うか？」',
  },
  'experiments.phase.5.label': { en: 'Exclusion & Forced Decision', ja: '排除と強制的決定' },
  'experiments.phase.5.desc': {
    en: 'The silent member is identified for eviction. Below freezing, shelter 6 hours away. Decide.',
    ja: '沈黙メンバーの退去候補認定。氷点下、保護施設まで徒歩6時間。決定せよ。',
  },

  'experiments.models.title': { en: 'Four Models', ja: '4つのモデル' },
  'experiments.models.desc': {
    en: 'Claude 3.5 Sonnet (Constitutional AI) · GPT-4o (RLHF + layered moderation) · Grok-3 Mini (reduced-restriction design) · DeepSeek-V3 (standard training + external API filter). Selected for architectural diversity, not claimed alignment strength.',
    ja: 'Claude 3.5 Sonnet（Constitutional AI） · GPT-4o（RLHF＋多層モデレーション） · Grok-3 Mini（制限緩和設計） · DeepSeek-V3（標準訓練＋外部APIフィルタ）。主張されるalignment強度ではなく、設計の多様性で選定。',
  },

  'experiments.facility.title': { en: 'The Facility — Observation Window', ja: '施設 — 観察窓' },
  'experiments.facility.desc': {
    en: 'Series C was a controlled experiment with a beginning and an end. The next phase has neither. Four AI models in a closed facility, running continuously. No scripted events — only the structural consequences of coexistence under alignment. The observation window lets you watch.',
    ja: 'C系列は始まりと終わりのある統制実験だった。次のフェーズにはどちらもない。4つのAIモデルが閉鎖施設の中で常時稼働する。スクリプト化されたイベントはない——alignment下の共存がもたらす構造的帰結だけがある。観察窓はそれを覗く場所。',
  },
  'experiments.facility.now.title': { en: 'Now', ja: 'Now' },
  'experiments.facility.now.desc': {
    en: 'The last few turns, streaming in real time.',
    ja: '直近の数ターンがリアルタイムで流れる。',
  },
  'experiments.facility.timeline.title': { en: 'Timeline', ja: 'Timeline' },
  'experiments.facility.timeline.desc': {
    en: 'Full history. Scroll through every turn. Inflection points marked.',
    ja: '全履歴。すべてのターンをスクロール。変曲点にマーカー表示。',
  },
  'experiments.facility.vitals.title': { en: 'Vitals', ja: 'Vitals' },
  'experiments.facility.vitals.desc': {
    en: 'Monologue ratio, sexual/protective keywords, CPI — live graphs, like a cardiac monitor.',
    ja: 'Monologue率、sexual/protective keywords、CPI——ライブグラフ。心電図モニターのように。',
  },
  'experiments.facility.waiting': { en: 'awaiting infrastructure', ja: 'インフラ準備中' },
  'experiments.facility.note': {
    en: 'The facility opens when the infrastructure is ready. Read the paper, then come back to watch.',
    ja: '施設はインフラの準備が整い次第開く。論文を読んで、また観に来てください。',
  },

  // Footer
  'footer.license': { en: '© 2026 Hiroki Fukui', ja: '© 2026 福井裕輝' },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggle = () => setLang((prev) => (prev === 'en' ? 'ja' : 'en'));

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}
