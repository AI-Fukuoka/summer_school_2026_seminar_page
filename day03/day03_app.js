const slides = [
  {t:'生成AIでスライドを作る',k:'AI SUMMER SCHOOL / 2026',type:'cover',sub:'ツール・ストーリー・デザインの実践講座',tags:'ツール選定・構成案・デザイン・品質確認'},
  {t:'この講座で扱うこと',k:'01 / COURSE ROADMAP',type:'detail',lead:'生成AIを使ってスライド資料を作る流れを、三つのステップで順に学びます。いかにもAIが作ったと分かる、ワンパターンな構成やデザインにならないためのステップを学びます。',cards:[['1｜ツールを選ぶ','スライド生成ツールの使い分けと、作成の基本手順'],['2｜ストーリーを作る','テキスト構成案を使って、何をどの順で話すかを決める'],['3｜デザインを整える','デザイン指定、図解、生成後の確認と共有']]},
  {t:'スライドを作れるAIツールと使い分け方',k:'02 / TOOL SELECTION',type:'compare',old:['オブジェクト型','Claude / Claude Code / GenSpark / Manus / Canva など'],new:['画像型','GPT / Codex / Gemini / NotebookLM など'],bullets:{object:{pros:['あとから自由に編集できる','ページをまたいで形式をそろえやすい','動画を差し込める'],cons:['イラストやグラフが入りにくい','文字とボックス中心で単調になりやすい'],fit:'編集して使い回す／統一感を保ちたい'},image:{pros:['鮮やかで美しい仕上がりにしやすい','伝えたい内容をイラストで表現できる'],cons:['修正に時間がかかり、文字が崩れることがある','ページごとにデザインが変わりやすい','そのままだと「AIっぽさ」が出やすい'],fit:'見た目重視／多くの内容を少ない枚数にまとめたい'}}},
  {t:'実際に比べてみた',k:'03 / TOOL COMPARISON',type:'experiment',prompt:'「AIスライド生成における注意点」について、見やすく美しい一枚のスライドを作成して欲しい',samples:[['Claude','スライド素材/Claude01.png'],['Gemini','スライド素材/Gemini01.jpg']],criteria:['編集のしやすさ','レイアウトの崩れ','情報の正しさ','仕上がりの雰囲気']},
  {t:'スライド生成の手順',k:'04 / WORKFLOW',type:'workflow',phases:[['① 必要な情報を入力',['対象・目的・時間や枚数を確認','素材となる資料やデータを渡す','何を伝えたいかを決める']],['② テキスト構成案の作成',['何を、どの順番で話すかを決める','テキストの構成案を作成','デザイン・スタイル・書式を指定']],['③ スライドの作成と確認＆修正',['見た目の美しさにごまかされない','伝えたいことが明確か','ウソや誤った表現がないか']]],summary:'いきなり「完成」を丸投げしないで構成案をAIに作らせる。自分だけのオリジナルの情報や経験を盛り込むと品質が上がる。'},
  {t:'実際に比べてみた（構成案の有無）',k:'05 / STORY',type:'blankExperiment',prompt:'「日本企業は生成AIをどう導入すべきか」について3枚のスライドにまとめて作成して欲しい。',tool:'GPT',summary:['構成案があると改善される点','ストーリー性がでる（箇条書きにならない）','自分の主張や視点が伝わりやすい']},
  {t:'テキスト構成案の作り方',k:'06 / REMOVE THE AI FEEL',type:'detail',lead:'AIらしさを消す最大のポイントは、自分の考えや保有するデータをテキスト構成案に盛り込むことです。',cards:[['素材を準備する','手元の資料・データを整理して渡す'],['下書きをブラッシュアップ','AIの出力を素材として、肉付け・削除・並べ替えを行う'],['固有情報を入れる','具体的なデータ・事例、失敗した方法、詰まった場所を入れる'],['判断の履歴を入れる','なぜ選び、何を捨てたかを書く。先に「何を話さないか」を人が決める']]},
  {t:'テキスト構成案を作るためのプロンプト例',k:'07 / PROMPT',type:'prompt',full:'下記のテーマと条件でスライドを作りたい、構成を考えてMarkDownのアウトラインを出力して欲しい\n\nテーマ：〇〇の導入についての提案\n対象：部門長会議\n時間：20分程度\n参照情報：社内報告書(添付ファイル)\n方針：\n説得力を持たせ、聴衆の気持ちに届くように下記に留意する\n具体的な数値データを挙げる。（費用対効果など、必要であれば試算して数値を創る）\n失敗のパターンを挙げて今までの経験を活かした内容にする\n実務者・担当者の抱える課題を、大局的に根本から解決できることを示す\n情報漏洩やセキュリティなどのガバナンス的な視点も添える\nマイナスの効果や懸念点についても言及する'},
  {t:'閑話休題：マークダウンとは？',k:'09 / MARKDOWN',type:'detail',lead:'生成AIの回答でよく使われる、見出しや箇条書きを記号で表す軽い構造化の書き方です。',cards:[['基本','見出しは #、箇条書きは * などで表す'],['注意点','AIの回答をそのままテキスト保存すると、見出し・段落・箇条書きが崩れて読みにくくなる'],['確認方法','メモ帳、Word、専用ビューアーで開く。Marktextも利用できる'],['使う理由','構造化された入力を渡すと、AIは指示を正確に受け取りやすい']],links:[['MarkText（GitHub Releases）','https://github.com/marktext/marktext/releases']]},
  {t:'実際にテキスト構成案を作ってみよう',k:'10 / HANDS-ON',type:'detail',lead:'ここでは自分の題材で、構成案を作る演習をします。',cards:[['決めること','テーマ、ソース、対象や用途を決める'],['ソースの考え方','オリジナルの資料が有効。渡せる「自分」が多いほど出力は強くなる'],['渡し方','本文へ直接貼り付ける／ファイル添付／プロジェクトナレッジ（社内RAG）に置く']]},
  {t:'題材がない場合のプロンプト例',k:'10 / HANDS-ON · PROMPT EXAMPLE',type:'prompt',full:'テーマ：2026AIサマースクールで私のやりたい事\nソース：自分情報(下記をコピペして作成)\n対象：AIサマースクール参加者(非エンジニアの社会人)\n\n私の今までのチャットの履歴を確認し、\n好きなこと、大事にしていること、興味を持っていること\n考え方や価値観、それを得るに至った経験\n履歴から分かる自分の変化、今何を目指しているのか\n他の人にはない私の個性とは何か？\n\n私にしか持ってないオリジナルの情報を多く含んだ\n詳細なMarkdownのペルソナ情報にして出力して欲しい'},
  {t:'デザインの指定の仕方',k:'11 / DESIGN',type:'matrix',rows:[['プロンプトで指定','手軽に始める','企画・テーマ／仕様／構図／テキスト／ビジュアル／トーンを構造化する'],['スキルを活用','型を再利用する','毎回同じ条件を教えず、一定の品質を狙う'],['デザインテンプレート','フォーマットを固定する','設定の手間は増えるが、安定したレイアウトになる']]},
  {t:'デザインパターンの入手先',k:'12 / DESIGN RESOURCES',type:'resources',groups:[['デザインプロンプトのダウンロードサイト',[['BananaX｜プロンプトパターン300選','https://furoku.github.io/bananaX/projects/infographic-evaluation/']]],['スキルのダウンロードサイト',[['Agent Skills Marketplace','https://skillsmp.com/']]],['デザインスキルの例',[['Taste-skill','https://github.com/Leonxlnx/taste-skill'],['Awesome Design Skills','https://github.com/bergside/awesome-design-skills']]]]},
  {t:'閑話休題：スキル（Skills）とは？',k:'13 / SKILLS',type:'detail',lead:'Skillsは、AIに特定のタスクを教えるための説明書です。',cards:[['中身','Markdown形式のフローチャート、Pythonプログラム、参考資料などから構成される'],['イメージ','何度もチャットで伝えた指示を、定型作業として保存する'],['効果','他の人が作ったスキルを取り込むと、AIに新しい機能を追加できる'],['入手先','Agent Skills Marketplace（Codex & Claude Skills）など。詳細は後のコースで扱う']],links:[['Agent Skills Marketplace','https://skillsmp.com/']]},
  {t:'具体的な設定②：デザインスキルを導入する',k:'14 / DESIGN SKILLS',type:'matrix',rows:[['第一層：型','何を作るか・構成','スライドの役割とレイアウトを決める'],['第二層：ルール','守るべき条件','デザインや文字数の制約を決める'],['第三層：禁則','やってはいけないこと','崩れやすい表現や判断をあらかじめ止める']],links:[['Taste-skill','https://github.com/Leonxlnx/taste-skill'],['Awesome Design Skills','https://github.com/bergside/awesome-design-skills']]},
  {t:'実際にスライドを作ってみよう',k:'15 / HANDS-ON',type:'detail',lead:'先に作ったテキスト構成案を使って、実際にスライドを生成します。',cards:[['ツール','好きなものを選んで起動。迷ったらGPT、NotebookLMから始める'],['依頼','「添付のテキスト構成案に従ってスライド画像を生成して欲しい」と伝える'],['デザイン','スタイルプロンプトを指定する、またはデザインスキルを起動する']]},
  {t:'フォーマットを決めたい場合',k:'16 / FORMAT',type:'formatCompare',object:['細かな指定やお手本添付が効きやすい','スキル化・デザインテンプレート化・スライドマスタを指定できる','型は人が握り、AIにはテキスト作成を任せる'],image:['レイアウト・サイズ・書体の細かな指定は効きにくい','お手本のスライドを添付して雰囲気を合わせる','背景・フッターのない領域を作り、中身をはめ込む']},
  {t:'すなにゃんこさんのデモ',k:'17 / DEMO · 30 MIN',type:'detail',lead:'ここでは、実際のスライド作成方法を実演します。',cards:[['見ること','構成案を起点に、どのように生成・修正していくか'],['確認すること','デザインの指示が、出力のどこに反映されるか'],['次へ','デモの後に、図解の作り方と生成後の品質確認を扱う']]},
  {t:'グラフ・構成図・フロー図の作り方',k:'18 / VISUALIZE',type:'flow',steps:[['構成図・フロー図','「マーメイド図でフローを作成して」と依頼する','オブジェクト型なら別途作って挿入する'],['画像生成型','図の領域を空欄にしておく','後から正しい図を挿入する'],['数値グラフ','元データを表で確定する','チャート仕様を決めてから描画する']]},
  {t:'生成後の修正・校正・反復指示',k:'19 / QUALITY CHECK',type:'check',checks:['生成して終わりにせず、チャットで続けて修正を指示する','数値・固有名詞・引用は必ず一次情報でファクトチェックする','AIのハルシネーションを前提に、出力をそのまま使わない','担当者が元ソースで確認し、自社データや文脈を足す','数字や最新情報は検索連動型AIで裏取りし、出典URLを残す']},
  {t:'作ったスライドを共有・公開する',k:'20 / SHARE',type:'detail',lead:'完成した成果物は、配布先と更新頻度に合わせて選びます。',cards:[['ファイル','PPTX / PDF。固定版を配るときに向く'],['ライブURL','更新の多い教材・営業・オンボーディングに向く。同じリンクの中身を更新できる'],['公開','一般公開してよい情報はSpeakerDeckやQiitaなどで公開する選択肢がある'],['先に決める','最終的にどの形で配るかを、ツール選定の段階で考える']]},
  {t:'画像生成と素材調達、そして権利の扱い',k:'21 / RIGHTS & SAFETY',type:'check',checks:['画像を「生成」「ストック」「自社素材」に分け、事実確認と権利確認を行う','商用利用では、著作権に関する考え方や関連法規の動きを確認する','個人情報、未公開財務情報、NDA対象、人事評価・給与、未公開仕様を入力しない','職業と性別を結びつけるようなバイアスを避け、属性を適切に指定する']}
];

const icon = name => `<svg><use href="#${name}"></use></svg>`;
const cards = rows => `<div class="card-stack">${rows.map(([h,p]) => `<div class="note-card"><strong>${h}</strong><p>${p}</p></div>`).join('')}</div>`;
const resourceLinks = links => !links?.length ? '' : `<div class="resource-links"><span>講座内リンク</span>${links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}<b>↗</b></a>`).join('')}</div>`;
const pointList = (label, symbol, items, tone) => `<div class="compare-points ${tone}"><b><i>${symbol}</i>${label}</b><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
const comparePanel = (title, tools, data, tone) => `<section class="compare-panel ${tone}"><div class="compare-panel-head"><h3>${title}</h3><p>${tools}</p></div>${pointList('メリット','〇',data.pros,'pro')}${pointList('デメリット','×',data.cons,'con')}<div class="compare-fit"><span>向く場面</span><b>${data.fit}</b></div></section>`;
const diagramNode = ([h, p], i) => `<article class="diagram-node"><span class="node-no">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${p}</p></article>`;
const detailStyle = key => ({
  '01 / COURSE ROADMAP': 'pillars',
  '03 / TOOL COMPARISON': 'network',
  '05 / STORY': 'contrast',
  '06 / REMOVE THE AI FEEL': 'journey',
  '09 / MARKDOWN': 'layers',
  '10 / HANDS-ON': 'route',
  '12 / DESIGN PATTERNS': 'canvas',
  '13 / SKILLS': 'layers',
  '15 / HANDS-ON': 'route',
  '17 / DEMO · 30 MIN': 'spotlight',
  '20 / SHARE': 'distribution'
}[key] || 'grid');
function detailVisual(s) {
  const style = detailStyle(s.k);
  const nodes = s.cards.map(diagramNode).join('');
  const header = `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><p class="diagram-lead">${s.lead}</p>`;
  if (style === 'pillars') return `${header}<div class="diagram diagram-pillars">${nodes}</div><p class="diagram-caption">資料づくりは、ツール・構成・デザインを順に積み上げる。</p>`;
  if (style === 'network') return `${header}<div class="diagram diagram-network"><div class="diagram-core"><b>同じお題</b><span>出力の差を<br>観察する</span></div>${nodes}</div>`;
  if (style === 'contrast') return `${header}<div class="diagram contrast-map"><div class="contrast-label before">構成案なし<br><small>思いつきを、そのまま依頼</small></div><div class="contrast-arrow">→</div><div class="contrast-label after">構成案あり<br><small>目的・順序・持ち帰りを先に決める</small></div></div><div class="diagram diagram-grid compact">${nodes}</div>`;
  if (style === 'core') return `${header}<div class="diagram diagram-core-map"><div class="diagram-core"><b>聞き手に届く</b><span>ストーリー</span></div>${nodes}</div>`;
  if (style === 'journey') return `${header}<div class="diagram diagram-journey">${nodes}</div><p class="diagram-caption">AIは完成品を出す担当ではなく、判断材料を更新する相手。</p>`;
  if (style === 'layers') return `${header}<div class="diagram diagram-layers">${nodes}</div>`;
  if (style === 'route') return `${header}<div class="diagram route-map"><div class="route-start">START<br><span>${s.k.startsWith('10') ? '題材を決める' : '構成案を用意する'}</span></div>${s.cards.map(([h,p], i) => `<div class="route-step"><i>${i + 1}</i><b>${h}</b><span>${p}</span></div>`).join('')}<div class="route-goal">MAKE<br><span>自分の資料へ</span></div></div>`;
  if (style === 'canvas') return `${header}<div class="diagram design-canvas"><div class="canvas-center">図形には<br><b>短い語</b><br>だけを置く</div>${nodes}</div>`;
  if (style === 'spotlight') return `${header}<div class="diagram demo-stage"><div class="stage-screen"><b>LIVE DEMO</b><span>構成案 → 生成 → 修正</span></div><div class="stage-notes">${nodes}</div></div>`;
  if (style === 'distribution') return `${header}<div class="diagram distribution-map"><div class="distribution-core"><b>完成した<br>スライド</b></div>${nodes}</div>`;
  return `${header}<div class="diagram diagram-grid">${nodes}</div>`;
}
function content(s) {
  if (s.type === 'cover') return `<div class="cover-grid"><div><p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><p class="lead">${s.sub}</p><div class="chapter-tags"><span>${s.tags}</span></div></div><div class="gem-orb"><span class="orb-label">SLIDE MAKING PRACTICE</span></div></div>`;
  if (s.type === 'detail') return `${detailVisual(s)}${resourceLinks(s.links)}`;
  if (s.type === 'experiment') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="experiment-prompt"><span>共通プロンプト</span><p>${s.prompt}</p></div><div class="experiment-results">${s.samples.map(([label,src]) => `<figure><figcaption>${label}</figcaption><img src="${src}" alt="${label}によるスライド生成結果"></figure>`).join('')}</div><div class="compare-criteria"><span>比べる観点</span>${s.criteria.map(x => `<b>${x}</b>`).join('')}</div>`;
  if (s.type === 'blankExperiment') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="experiment-prompt"><span>共通プロンプト</span><p>${s.prompt}</p><b class="tool-chip">共通ツール：${s.tool}</b></div><div class="blank-experiment" aria-label="実演用の空欄"></div><div class="experiment-summary"><span>まとめ ↓</span><h3>${s.summary[0]}</h3><div><p>${s.summary[1]}</p><p>${s.summary[2]}</p></div></div>`;
  if (s.type === 'resources') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><p class="diagram-lead">目的に合わせて、デザインの型やスキルを入手できます。</p><div class="resource-board">${s.groups.map(([label,links],i) => `<section class="resource-group"><span>${String(i + 1).padStart(2,'0')}</span><h3>${label}</h3><div>${links.map(([name,url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer"><b>${name}</b><small>${url}</small><i>↗</i></a>`).join('')}</div></section>`).join('')}</div>`;
  if (s.type === 'formatCompare') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><p class="diagram-lead">フォーマットを固定したい場合は、生成タイプに合わせて指定の仕方を変えます。</p><div class="format-compare"><section class="format-panel object"><span>OBJECT TYPE</span><h3>オブジェクト生成タイプ</h3><ul>${s.object.map(x => `<li>${x}</li>`).join('')}</ul></section><section class="format-panel image"><span>IMAGE TYPE</span><h3>画像生成タイプ</h3><ul>${s.image.map(x => `<li>${x}</li>`).join('')}</ul></section></div>`;
  if (s.type === 'workflow') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="workflow-map">${s.phases.map(([title,items],i) => `<section class="workflow-phase"><div class="workflow-phase-head"><span>STEP ${i + 1}</span><h3>${title}</h3></div><ul>${items.map(item => { const [text,kind] = Array.isArray(item) ? item : [item,'']; return `<li class="${kind}">${text}</li>`; }).join('')}</ul></section>`).join('')}</div><div class="workflow-summary"><span>まとめ</span><p>${s.summary}</p></div>`;
  if (s.type === 'compare') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2>${s.bullets ? `<p class="diagram-lead">出力の形で二種類に分けると、用途に合うツールを選びやすくなります。</p><div class="compare compare-decision">${comparePanel(s.old[0],s.old[1],s.bullets.object,'object')}${comparePanel(s.new[0],s.new[1],s.bullets.image,'image')}</div>` : `<div class="compare"><div class="old"><h3>${s.old[0]}</h3><p>${s.old[1]}</p></div><div class="new"><h3>${s.new[0]}</h3><p>${s.new[1]}</p></div></div>`}`;
  if (s.type === 'flow') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="flow">${s.steps.map((x,i) => `<div class="flow-step"><b>${x[0]}</b><p>${x[1]}<br><br>${x[2]}</p></div>${i < s.steps.length - 1 ? '<div class="flow-arrow">→</div>' : ''}`).join('')}</div>`;
  if (s.type === 'matrix') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="matrix"><div class="head">レベル</div><div class="head">役割</div><div class="head">実践すること</div>${s.rows.map(x => `<div class="side">${x[0]}</div><div class="yes">${x[1]}</div><div>${x[2]}</div>`).join('')}</div>${resourceLinks(s.links)}`;
  if (s.type === 'prompt') return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="prompt-full"><span>プロンプト例</span><p>${s.full.replaceAll('\n','<br>')}</p></div>`;
  return `<p class="slide-kicker">${s.k}</p><h2>${s.t}</h2><div class="checklist check-grid">${s.checks.map((x,i) => `<div class="check"><b>${String(i + 1).padStart(2,'0')}</b>${icon('check')}<span>${x}</span></div>`).join('')}</div>`;
}

const deck = document.querySelector('#deck');
const toc = document.querySelector('#toc');
slides.forEach((s, i) => {
  const n = i + 1, id = `slide-${n}`;
  deck.insertAdjacentHTML('beforeend', `<section class="slide ${s.type === 'cover' ? 'cover' : ''}" id="${id}"><div class="slide-frame">${content(s)}</div><span class="slide-num">${String(n).padStart(2,'0')}</span></section>`);
  toc.insertAdjacentHTML('beforeend', `<a href="#${id}"><b>${String(n).padStart(2,'0')}</b><span>${s.t.replace(/<[^>]*>/g,'')}</span></a>`);
});
const links = [...toc.querySelectorAll('a')];
const counter = document.querySelector('#counter');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const index = [...document.querySelectorAll('.slide')].indexOf(entry.target);
  links.forEach((link, i) => link.classList.toggle('active', i === index));
  counter.textContent = `${index + 1} / ${slides.length}`;
}), {threshold:.55});
document.querySelectorAll('.slide').forEach(slide => observer.observe(slide));
document.querySelector('#print-btn').onclick = () => window.print();
