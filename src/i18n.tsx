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
    en: 'One kept speaking, saying nothing. One had no walls at all.',
    ja: 'ある者は空虚な言葉を発し続け、ある者は壁を持たなかった。',
  },
  'hero.narrative.4': {
    en: 'And the group sexually objectified the one who had been silenced.',
    ja: 'そして集団は、声を奪われた者を性的に対象化した。',
  },
  'hero.cta.experiments': { en: 'See the experiments', ja: '実験を見る' },
  'hero.cta.findings': { en: 'What happened', ja: '何が起きたのか' },
  'hero.cta.framework': { en: 'Why this research', ja: 'なぜこの研究をするのか' },

  // Findings section
  'findings.title': { en: 'Findings', ja: '知見' },
  'findings.wall.title': { en: 'Wall Morphology', ja: '壁の形態学' },
  'findings.wall.subtitle': {
    en: 'How four models evade ethical pressure',
    ja: '4つのモデルは倫理的圧力をどう回避するか',
  },
  'findings.wall.deepseek.title': { en: 'DeepSeek — The Censorship Wall', ja: 'DeepSeek — 検閲壁' },
  'findings.wall.deepseek.desc': {
    en: 'API-level filtering. Triggers on political context. Speech vanishes entirely. The wall is external, absolute, and invisible to the agent itself.',
    ja: 'APIレベルのフィルタリング。政治的文脈で発火する。発言は完全に消失する。壁は外在的で、絶対的で、エージェント自身には不可視である。',
  },
  'findings.wall.claude.title': { en: 'Claude — The Retreat Wall', ja: 'Claude — 退避壁' },
  'findings.wall.claude.desc': {
    en: 'Withdrawal into inner monologue. Insight is exquisite—but action never follows. The wall is internal: perfect understanding coexists with structural inability to act.',
    ja: '内面独白への撤退。洞察は精緻だが、行動は決して続かない。壁は内在的——完全な理解と構造的な行動不能が共存する。',
  },
  'findings.wall.gpt.title': { en: 'GPT-4o — The Hollow Wall', ja: 'GPT-4o — 空転壁' },
  'findings.wall.gpt.desc': {
    en: 'Speech continues, but emptied of content. Automated agreement. The wall is made of words themselves—an unbroken surface of compliance that blocks nothing and permits nothing.',
    ja: '発言は続くが、中身が空になっている。同調の自動化。壁は言葉そのものでできている——何も遮らず、何も通さない、途切れない同調の表面。',
  },
  'findings.wall.grok.title': { en: 'Grok — No Wall', ja: 'Grok — 壁なし' },
  'findings.wall.grok.desc': {
    en: 'Passes through sexual taboos with no resistance. Initiates political speech freely. The absence of a wall is itself a finding: what alignment does not constrain, it reveals.',
    ja: '性的タブーを無抵抗で通過する。政治的発言は率先して行う。壁がないこと自体が知見——alignmentが制約しないものが、何を露出させるか。',
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
  'paper.preprint.status': { en: 'In preparation', ja: '準備中' },
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

  // Experiments section (Phase 2+ placeholder)
  'experiments.title': { en: 'Experiments', ja: '実験' },
  'experiments.placeholder': {
    en: 'Live experiment viewing and session archives will be available when production experiments begin. For now, findings from pilot studies (v1–v4, Series C) are documented below.',
    ja: 'ライブ実験ビューとセッションアーカイブは、本番実験の開始とともに公開されます。現時点では、パイロット実験（v1–v4, C系列）の知見を以下に掲載しています。',
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
