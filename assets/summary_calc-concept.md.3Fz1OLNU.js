import{_ as i}from"./chunks/index.pnXue4Lq.js";import{_ as e,c as d,o,j as a,G as t,an as n,a as r}from"./chunks/framework.Cb4hFlIq.js";import{a as c}from"./chunks/theme.Dt1skBph.js";const T=JSON.parse('{"title":"一些不太好记的概念和公式","description":"","frontmatter":{},"headers":[],"relativePath":"summary/calc-concept.md","filePath":"summary/calc-concept.md","lastUpdated":1755655463000}'),h={name:"summary/calc-concept.md"},g={class:"details custom-block"};function u(C,s,b,m,A,V){const l=i,p=c;return o(),d("div",null,[s[2]||(s[2]=a("h1",{id:"一些不太好记的概念和公式",tabindex:"-1"},[r("一些不太好记的概念和公式 "),a("a",{class:"header-anchor",href:"#一些不太好记的概念和公式","aria-label":'Permalink to "一些不太好记的概念和公式"'},"​")],-1)),t(l,{readTime:"13",words:"4k"}),s[3]||(s[3]=n(`<div class="info custom-block"><p class="custom-block-title">✨</p><p>收集和计算题有关的一些概念和公式</p></div><h2 id="挣值分析" tabindex="-1">挣值分析 <a class="header-anchor" href="#挣值分析" aria-label="Permalink to &quot;挣值分析&quot;">​</a></h2><h3 id="ev、ac、pv、etc、eac、vac等概念" tabindex="-1">EV、AC、PV、ETC、EAC、VAC等概念 <a class="header-anchor" href="#ev、ac、pv、etc、eac、vac等概念" aria-label="Permalink to &quot;EV、AC、PV、ETC、EAC、VAC等概念&quot;">​</a></h3><ul><li><code>EV（Earned Value）</code>：即挣值，也被称作已完成工作预算成本</li><li><code>AC（Actual Cost）</code>：是实际成本，即实际完成工作所花费的成本</li><li><code>PV（Planned Value）</code>：代表计划价值，又称计划工作预算成本</li><li><code>BAC（Budget At Completion）</code>：项目完工预算，指完成项目所有工作的总预算</li><li><code>CV（Cost Variance）</code>：成本偏差，通过公式 CV = EV - AC 计算。当 CV &gt; 0 ，表示 EV 大于 AC，成本节约</li><li><code>SV（Schedule Variance）</code>：进度偏差，根据公式 SV = EV - PV 计算。SV &gt; 0 时，EV 大于 PV，项目进度提前</li><li><code>SPI（Schedule Performance Index）</code>：进度绩效指数，是项目管理中用于衡量项目进度效率的关键指标。SPI&lt;1：实际工作量小于计划工作量（滞后），大于1（进度超前） SPI = EV / PV 例：SPI为80.00%时表示进度为正常进度的80%（滞后）</li><li><code>CPI（Cost Performance Index）</code>：成本绩效指数，是项目管理中用于衡量成本效率的关键指标。CPI＞1：挣值大于实际成本，即实际成本低于预算，成本控制良好（有结余），CPI&lt;1：实际成本超预算。 CPI = EV / AC 例：CPI为1.05时 项目100元的成本创造了105元的价值</li><li><code>ETC</code>：完工尚需估算，完成剩余工作还需要的成本估算</li><li><code>EAC</code>：完工估算，完成整个项目预计需要的总成本</li></ul><h3 id="计算公式" tabindex="-1">计算公式 <a class="header-anchor" href="#计算公式" aria-label="Permalink to &quot;计算公式&quot;">​</a></h3><ul><li>CV = EV - AC &gt;0 节省</li><li>SV = EV - PV &gt;0 提前</li><li>CPI = EV / AC &gt;1 节省</li><li>SPI = EV / PC &gt;1 提前</li><li>典型：出现偏差后，还照原计划 <ul><li>ETC = (BAC - EV) / CPI</li><li>EAC = AC + ETC = AC + (BAC - EV) / CPI</li></ul></li><li>非典型：出现偏差后，纠错/改善 <ul><li>ETC = BAC - EV</li><li>EAC = AC + ETC = AC + BAC - EV</li></ul></li></ul><details class="details custom-block"><summary>⚡️非典型偏差记忆协助</summary><p>因为前期出现了偏差然后又改善了，前面的偏差属于偶然原因或事件，所以称为非典型。计算ETC的时候不用除以CPI。</p></details><details class="details custom-block"><summary>⚡️进度和成本偏差记忆协助</summary><p>计划花费10元，10天买10个苹果。</p><p>9天的时候买了8个苹果，花费了7元。 EV = 8；PV = 9；AC = 7；</p><p>由此可直接推测：成本节省，进度滞后。</p><p>CPI = EV / AC = 8 / 7 &gt; 1 成本节省； SPI = EV / PV = 8 / 9 &lt; 1 进度滞后。</p></details><details class="details custom-block"><summary>⚡️进度成本偏差时可采取措施</summary><p><code>进度滞后，成本节约</code>时可采取的措施（<code>赶快两高两减</code>）</p><ol><li><code>赶</code>工，投入更多的资源或增加工作时间，以缩短关键活动的工期（成本会增加）</li><li><code>快</code>速跟进，并行施工，以缩短关键路径的长度</li><li>使用<code>高</code>素质的资源或经验更丰富的人员</li><li><code>减</code>少活动范围或降低活动要求（甲方同意的前提）</li><li>改进方法或技术，以提<code>高</code>生产效率</li><li>加强质量管理，及时发现问题，<code>减</code>少返工，从而缩短工期</li></ol><p><code>进度滞后，成本超支</code>时： 上面六条去除第一个赶工</p><p><code>进度超前、成本超支</code>：</p><ol><li>抽出部分人员</li><li>适当降低工作效率</li><li>适当安排休假</li></ol></details><h3 id="ai生成的帮助理解图表" tabindex="-1">AI生成的帮助理解图表 <a class="header-anchor" href="#ai生成的帮助理解图表" aria-label="Permalink to &quot;AI生成的帮助理解图表&quot;">​</a></h3><details class="details custom-block"><summary>✨点击展开</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- ✅ deepseek-r1 --&gt;</span></span>
<span class="line"><span>──────────────────────────────────────</span></span>
<span class="line"><span>[基础数据]</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ PV（计划价值）：计划完成工作的预算价值</span></span>
<span class="line"><span>  ├─ EV（挣值）：实际完成工作的预算价值</span></span>
<span class="line"><span>  ├─ AC（实际成本）：实际发生的成本</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ╰─▶ [绩效指标] </span></span>
<span class="line"><span>       │</span></span>
<span class="line"><span>       ├─ 进度分析</span></span>
<span class="line"><span>       │   ├─ SV（进度偏差）= EV - PV</span></span>
<span class="line"><span>       │   │   ├─ &gt;0：进度超前</span></span>
<span class="line"><span>       │   │   ╰─ &lt;0：进度落后</span></span>
<span class="line"><span>       │   ╰─ SPI（进度绩效指数）= EV/PV</span></span>
<span class="line"><span>       │       ├─ &gt;1：进度超前</span></span>
<span class="line"><span>       │       ╰─ &lt;1：进度落后</span></span>
<span class="line"><span>       │</span></span>
<span class="line"><span>       ╰─ 成本分析</span></span>
<span class="line"><span>           ├─ CV（成本偏差）= EV - AC</span></span>
<span class="line"><span>           │   ├─ &gt;0：成本节省</span></span>
<span class="line"><span>           │   ╰─ &lt;0：成本超支</span></span>
<span class="line"><span>           ╰─ CPI（成本绩效指数）= EV/AC</span></span>
<span class="line"><span>               ├─ &gt;1：成本节省</span></span>
<span class="line"><span>               ╰─ &lt;1：成本超支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[预测指标]</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ BAC（完工预算）：项目总预算</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ ETC（完工尚需估算）= </span></span>
<span class="line"><span>  │   ├─ (BAC - EV)/CPI → 典型绩效延续</span></span>
<span class="line"><span>  │   ╰─ 重新估算 → 特殊场景</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├─ EAC（完工估算）= AC + ETC</span></span>
<span class="line"><span>  │   ╰─ 或 = BAC/CPI → 典型公式</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ╰─ VAC（完工偏差）= BAC - EAC</span></span>
<span class="line"><span>      ├─ &gt;0：预计结余</span></span>
<span class="line"><span>      ╰─ &lt;0：预计超支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- ✅ qwen2.5-max 生成 --&gt;</span></span>
<span class="line"><span>──────────────────────────────────────</span></span>
<span class="line"><span>+-----------------------------+</span></span>
<span class="line"><span>|          项目状态           |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   |      实际成本 (AC)    |  |</span></span>
<span class="line"><span>|   | 已花费的实际金额 ($) |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 计划价值 (PV)         |  |</span></span>
<span class="line"><span>|   | 按计划应完成的预算 ($) |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 挪用价值 (EV)         |  |</span></span>
<span class="line"><span>|   | 实际完成工作的预算 ($) |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>+-----------------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          ↓ 计算指标</span></span>
<span class="line"><span>+-----------------------------+</span></span>
<span class="line"><span>|       绩效指标             |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 进度绩效指数 (SPI)    |  |</span></span>
<span class="line"><span>|   | SPI = EV / PV         |  |</span></span>
<span class="line"><span>|   | &gt;1: 超前, &lt;1: 落后    |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 成本绩效指数 (CPI)    |  |</span></span>
<span class="line"><span>|   | CPI = EV / AC         |  |</span></span>
<span class="line"><span>|   | &gt;1: 节省, &lt;1: 超支    |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 进度偏差 (SV)         |  |</span></span>
<span class="line"><span>|   | SV = EV - PV          |  |</span></span>
<span class="line"><span>|   | &gt;0: 超前, &lt;0: 落后    |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 成本偏差 (CV)         |  |</span></span>
<span class="line"><span>|   | CV = EV - AC          |  |</span></span>
<span class="line"><span>|   | &gt;0: 节省, &lt;0: 超支    |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>+-----------------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          ↓ 预测未来</span></span>
<span class="line"><span>+-----------------------------+</span></span>
<span class="line"><span>|       预测指标             |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 完工尚需估算 (ETC)    |  |</span></span>
<span class="line"><span>|   | ETC = (BAC - EV) / CPI | |</span></span>
<span class="line"><span>|   | 或重新估算剩余工作    |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 完工估算 (EAC)        |  |</span></span>
<span class="line"><span>|   | EAC = AC + ETC        |  |</span></span>
<span class="line"><span>|   | 或其他公式变体        |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|                             |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>|   | 完工偏差 (VAC)        |  |</span></span>
<span class="line"><span>|   | VAC = BAC - EAC       |  |</span></span>
<span class="line"><span>|   | &gt;0: 节省, &lt;0: 超支    |  |</span></span>
<span class="line"><span>|   +----------------------+  |</span></span>
<span class="line"><span>+-----------------------------+</span></span></code></pre></div></details><h2 id="总时差、自由时差" tabindex="-1">总时差、自由时差 <a class="header-anchor" href="#总时差、自由时差" aria-label="Permalink to &quot;总时差、自由时差&quot;">​</a></h2><ul><li>总时差：指一项工作在不影响总工期的前提下所具有的机动时间 <ul><li>总时差 = LS - ES = LF - EF</li></ul></li><li>指一项工作在不影响后续工作的情况下所拥有的机动时间 <ul><li>自由时差 = min(紧后工作的ES - 此活动的EF)</li></ul></li></ul>`,13)),a("details",g,[s[0]||(s[0]=a("summary",null,"示例题",-1)),t(p,{width:"380",src:"/assets/shibiaotu.jpg"}),s[1]||(s[1]=n("<ol><li>指出该项目的关键路径、工期？</li><li>本例给出的进度计划图叫什么图？还有哪几种图可以表示进度计划？</li><li>请计算任务A、D和F的总时差和自由时差？</li><li>若任务C拖延一周，对项目的进度有无影响？为什么？</li></ol><p>答：</p><ol><li>关键路径为<code>BDEG</code>，工期为<code>24周</code>。（不带波浪线的路径为关键路径）</li><li>时标图或<code>双代号时标网络图</code>。<code>单代号网络图</code>、<code>横道图</code>、<code>甘特图</code>。</li><li>A的总时差为3，自由时差是2；D总时差为0，自由时差0；F总时差为7，自由时差为7。（以x为起始点到终点G的波浪线的长度为总时差；以x为起始点到紧后工作的波浪线长度为自由时差）</li><li>对进度无影响。因为：对项目的进度有无影响即，对总工期有无影响（求总时差），C到工作结束的波浪线长度为1，所以总时差为1，拖延一周不影响总工期。</li></ol>",3))]),s[4]||(s[4]=n('<h2 id="六标时" tabindex="-1">六标时 <a class="header-anchor" href="#六标时" aria-label="Permalink to &quot;六标时&quot;">​</a></h2><p><a href="/book/progress#关键路径法">总浮动时间(总时差)</a> = LF - EF = LS - ES</p><p><a href="/book/progress#关键路径法">自由浮动时间(自由时差)</a> = min(紧后活动的ES) - EF</p><table tabindex="0"><thead><tr><th>ES</th><th>DU</th><th>EF</th></tr></thead><tbody><tr><td></td><td>ID</td><td></td></tr><tr><td>LS</td><td></td><td>LF</td></tr></tbody></table><h2 id="三点估算" tabindex="-1">三点估算 <a class="header-anchor" href="#三点估算" aria-label="Permalink to &quot;三点估算&quot;">​</a></h2><p>三点估算中常用的两种概率分布：<code>三角分布</code>和<code>贝塔分布</code></p><ul><li><code>期望值</code>: 通过计算得到，最期望的值 T1</li><li><code>悲观值</code>: 题目给出，最糟糕情况 T2</li><li><code>乐观值</code>: 题目给出，最好的情况 T3</li><li><code>最可能值</code>: 题目给出，一般的情况 T4 不同的地方，符号可能不一样。</li></ul><p>标准差 = <code>(悲观 - 乐观) / 6</code> 或 <code>(大 - 小) /6</code> 必须为正值</p><h3 id="三角分布" tabindex="-1">三角分布 <a class="header-anchor" href="#三角分布" aria-label="Permalink to &quot;三角分布&quot;">​</a></h3><p>适用于初步估算、数据不足或风险分布未知时，需要快速估算且对精准度要求不高。期望值：<code>T1 = (T2 + T3 + T4) / 3</code></p><h3 id="贝塔分布-pert" tabindex="-1">贝塔分布（PERT） <a class="header-anchor" href="#贝塔分布-pert" aria-label="Permalink to &quot;贝塔分布（PERT）&quot;">​</a></h3><p>能更精确的反应最可能值。期望值：<code>T1 = (T2 + T3 + 4 * T4) / 6</code></p><h2 id="项目经济评价" tabindex="-1">项目经济评价 <a class="header-anchor" href="#项目经济评价" aria-label="Permalink to &quot;项目经济评价&quot;">​</a></h2><h3 id="静态投资回收期法" tabindex="-1">静态投资回收期法 <a class="header-anchor" href="#静态投资回收期法" aria-label="Permalink to &quot;静态投资回收期法&quot;">​</a></h3><p>P = (累计净现金流量开始出现正值或零的年份 - 1) + (上年累计净现金流量的绝对值 / 当年净现金流量)</p><details class="details custom-block"><summary>示例题</summary><p><strong>题目：</strong> 某IT公司计划投资开发一个项目管理系统，初始投资为100万元。预计该系统投入使用后，每年可为公司节省运营成本并带来收益如下：</p><table tabindex="0"><thead><tr><th>年份</th><th>第1年</th><th>第2年</th><th>第3年</th><th>第4年</th><th>第5年</th></tr></thead><tbody><tr><td>净现金流量(万元)</td><td>20</td><td>30</td><td>35</td><td>40</td><td>45</td></tr></tbody></table><p>请计算该项目的静态投资回收期。</p><p><strong>解答：</strong></p><p><strong>步骤1：</strong> 列出各年累计净现金流量表</p><table tabindex="0"><thead><tr><th>年份</th><th>净现金流量(万元)</th><th>累计净现金流量(万元)</th></tr></thead><tbody><tr><td>第0年</td><td>-100</td><td>-100</td></tr><tr><td>第1年</td><td>20</td><td>-80</td></tr><tr><td>第2年</td><td>30</td><td>-50</td></tr><tr><td>第3年</td><td>35</td><td>-15</td></tr><tr><td>第4年</td><td>40</td><td>25</td></tr><tr><td>第5年</td><td>45</td><td>70</td></tr></tbody></table><p><strong>步骤2：</strong> 找到累计净现金流量开始出现正值的年份 从表中可以看出，<em><strong>第4年累计净现金流量首次出现正值(25万元)</strong></em>。</p><p><strong>步骤3：</strong> 应用静态投资回收期公式 P = (累计净现金流量开始出现正值或零的年份 - 1) + (上年累计净现金流量的绝对值 / 当年净现金流量)</p><p>P = (4 - 1) + (|-15| / 40)</p><p>P = 3 + (15 / 40)</p><p>P = 3 + 0.375</p><p>P = 3.375年</p><p><strong>答案：</strong> 该项目管理系统的静态投资回收期为3.375年，即3年4.5个月。</p><p><strong>解释：</strong> 这意味着公司需要3年4.5个月的时间才能通过该项目管理系统产生的净现金流量收回初始投资的100万元。在项目决策中，如果公司设定的投资回收期标准是4年以内，那么这个项目是可以接受的。</p></details><h2 id="运输问题" tabindex="-1">运输问题 <a class="header-anchor" href="#运输问题" aria-label="Permalink to &quot;运输问题&quot;">​</a></h2><p>把某种产品从若干个产地调运到若干个销地（多对多），求运输费用最低的方案</p><h3 id="伏格尔法" tabindex="-1">伏格尔法 <a class="header-anchor" href="#伏格尔法" aria-label="Permalink to &quot;伏格尔法&quot;">​</a></h3><ol><li>算出各行列中最小元素和次小无素的差额</li><li>对行差和列差进行对比，找出最大差额。以与最大差额值同行（或同列）的最小运价为准，倾其所在行的产量，最大限度地满足所在列的需求：一旦需求（或库存）被彻底满足（或库存调光）则随即划去该列（或行）的所有运价信息。（注意产量和销量的变化）</li><li>对未划去的行列重复以上步骤，直到得到一个初始解。</li></ol><details class="details custom-block"><summary>示例题</summary><p><strong>题目：</strong> 某软件公司有3个开发中心（A、B、C），需要向2个客户地点（甲、乙）交付软件产品。各开发中心的产能、各客户的需求量以及运输成本如下表所示，求最低运输成本的分配方案。</p><p><strong>运输成本表：</strong></p><table tabindex="0"><thead><tr><th></th><th>甲地</th><th>乙地</th><th>产能</th></tr></thead><tbody><tr><td>A中心</td><td>3</td><td>1</td><td>7</td></tr><tr><td>B中心</td><td>4</td><td>5</td><td>9</td></tr><tr><td>C中心</td><td>6</td><td>2</td><td>18</td></tr><tr><td>需求</td><td>5</td><td>29</td><td>34</td></tr></tbody></table><p><strong>解答过程：</strong></p><p><strong>第一轮计算：</strong></p><ol><li><p><strong>计算行差和列差：</strong></p><ul><li>A行：次小值3 - 最小值1 = 2</li><li>B行：次小值5 - 最小值4 = 1</li><li>C行：次小值6 - 最小值2 = 4</li><li>甲列：次小值4 - 最小值3 = 1</li><li>乙列：次小值2 - 最小值1 = 1</li></ul></li><li><p><strong>找最大差额：</strong> C行差额4最大</p></li><li><p><strong>分配：</strong> C行最小运价是2（C→乙），C中心产能18，乙地需求29</p><ul><li>分配：C→乙 = 18（C中心产能用完）</li><li>更新需求：乙地剩余需求 = 29-18 = 11</li><li>划去C行</li></ul></li></ol><p><strong>第二轮计算：</strong></p><p>剩余表格：</p><table tabindex="0"><thead><tr><th></th><th>甲地</th><th>乙地</th><th>产能</th></tr></thead><tbody><tr><td>A中心</td><td>3</td><td>1</td><td>7</td></tr><tr><td>B中心</td><td>4</td><td>5</td><td>9</td></tr><tr><td>需求</td><td>5</td><td>11</td><td>16</td></tr></tbody></table><ol><li><p><strong>计算行差和列差：</strong></p><ul><li>A行：3 - 1 = 2</li><li>B行：5 - 4 = 1</li><li>甲列：4 - 3 = 1</li><li>乙列：5 - 1 = 4</li></ul></li><li><p><strong>找最大差额：</strong> 乙列差额4最大</p></li><li><p><strong>分配：</strong> 乙列最小运价是1（A→乙），A中心产能7，乙地需求11</p><ul><li>分配：A→乙 = 7（A中心产能用完）</li><li>更新需求：乙地剩余需求 = 11-7 = 4</li><li>划去A行</li></ul></li></ol><p><strong>第三轮计算：</strong></p><p>剩余表格：</p><table tabindex="0"><thead><tr><th></th><th>甲地</th><th>乙地</th><th>产能</th></tr></thead><tbody><tr><td>B中心</td><td>4</td><td>5</td><td>9</td></tr><tr><td>需求</td><td>5</td><td>4</td><td>9</td></tr></tbody></table><p>只剩B中心，直接分配：</p><ul><li>B→甲 = 5</li><li>B→乙 = 4</li></ul><p><strong>最终分配方案：</strong></p><ul><li>A中心 → 乙地：7单位</li><li>B中心 → 甲地：5单位</li><li>B中心 → 乙地：4单位</li><li>C中心 → 乙地：18单位</li></ul><p><strong>总运输成本：</strong> 7×1 + 5×4 + 4×5 + 18×2 = 7 + 20 + 20 + 36 = <strong>83</strong></p><p><strong>验证：</strong> 产能总计：7+9+18=34，需求总计：5+29=34 ✓</p></details><h2 id="指派问题" tabindex="-1">指派问题 <a class="header-anchor" href="#指派问题" aria-label="Permalink to &quot;指派问题&quot;">​</a></h2><p>有n项任务，恰好有n个人可以分别完成其中任何一项，应指派哪个人完成哪项任务（一对一），才能使效率最高</p><h3 id="匈牙利法" tabindex="-1">匈牙利法 <a class="header-anchor" href="#匈牙利法" aria-label="Permalink to &quot;匈牙利法&quot;">​</a></h3><ol><li>首先找出每行的最小值，然后该行每个数值都减去这个数，得到一个矩阵。</li><li>在上面的矩阵中，再找出每列的最小值，然后该列每个数值都减去这个数，又可以得到一个矩阵。</li><li>在第2步所得的矩阵中，0即为可以安排的对应工作。</li></ol><details class="details custom-block"><summary>示例题</summary><p><strong>题目：</strong> 某软件公司有3名程序员（A、B、C）和3个开发任务（甲、乙、丙），每个程序员完成各项任务所需的时间（小时）如下表所示。请用匈牙利法求出使总完成时间最短的分配方案。</p><p><strong>效率矩阵（完成时间）：</strong></p><table tabindex="0"><thead><tr><th></th><th>甲任务</th><th>乙任务</th><th>丙任务</th></tr></thead><tbody><tr><td>A程序员</td><td>9</td><td>2</td><td>7</td></tr><tr><td>B程序员</td><td>6</td><td>4</td><td>3</td></tr><tr><td>C程序员</td><td>5</td><td>8</td><td>1</td></tr></tbody></table><p><strong>解答过程：</strong></p><p><strong>步骤1：行变换（每行减去该行最小值）</strong></p><ul><li>A行最小值：2，减去2后：[7, 0, 5]</li><li>B行最小值：3，减去3后：[3, 1, 0]</li><li>C行最小值：1，减去1后：[4, 7, 0]</li></ul><p>得到矩阵1：</p><table tabindex="0"><thead><tr><th></th><th>甲任务</th><th>乙任务</th><th>丙任务</th></tr></thead><tbody><tr><td>A程序员</td><td>7</td><td>0</td><td>5</td></tr><tr><td>B程序员</td><td>3</td><td>1</td><td>0</td></tr><tr><td>C程序员</td><td>4</td><td>7</td><td>0</td></tr></tbody></table><p><strong>步骤2：列变换（每列减去该列最小值）</strong></p><ul><li>甲列最小值：3，减去3后：[4, 0, 1]</li><li>乙列最小值：0，减去0后：[0, 1, 7]</li><li>丙列最小值：0，减去0后：[5, 0, 0]</li></ul><p><strong>得到最终矩阵：</strong></p><table tabindex="0"><thead><tr><th></th><th>甲任务</th><th>乙任务</th><th>丙任务</th></tr></thead><tbody><tr><td>A程序员</td><td>4</td><td>0</td><td>5</td></tr><tr><td>B程序员</td><td>0</td><td>1</td><td>0</td></tr><tr><td>C程序员</td><td>1</td><td>7</td><td>0</td></tr></tbody></table><p><strong>步骤3：寻找最优分配</strong> 从矩阵中的0元素寻找分配方案：</p><ul><li>A程序员 → 乙任务（矩阵中A行乙列为0）</li><li>B程序员 → 甲任务（矩阵中B行甲列为0）</li><li>C程序员 → 丙任务（矩阵中C行丙列为0）</li></ul><p><strong>最终分配方案：</strong></p><ul><li>A程序员完成乙任务：2小时</li><li>B程序员完成甲任务：6小时</li><li>C程序员完成丙任务：1小时</li></ul><p><strong>总完成时间：</strong> 2 + 6 + 1 = <strong>9小时</strong></p><p><strong>验证：</strong> 这是所有可能分配方案中总时间最短的方案。</p></details><h2 id="博弈论" tabindex="-1">博弈论 <a class="header-anchor" href="#博弈论" aria-label="Permalink to &quot;博弈论&quot;">​</a></h2><ol><li>找出A中各行的最小值</li><li>找出对A中各列的最大值</li><li>同时被1和2选中的元素即为对策的最优值，对应的策略分别为局中人的最优纯策略</li></ol><details class="details custom-block"><summary>示例题</summary><p><strong>题目：</strong> 两家互联网公司A和B在考虑产品定价策略。公司A可以选择高价或低价策略，公司B也可以选择高价或低价策略。下表显示了在不同策略组合下公司A的收益（单位：万元）。请用博弈论方法找出公司A的最优策略。</p><p><strong>收益矩阵（公司A的收益）：</strong></p><table tabindex="0"><thead><tr><th></th><th>B选择高价</th><th>B选择低价</th></tr></thead><tbody><tr><td>A选择高价</td><td>8</td><td>2</td></tr><tr><td>A选择低价</td><td>6</td><td>4</td></tr></tbody></table><p><strong>解答过程：</strong></p><p><strong>步骤1：找出A中各行的最小值</strong></p><ul><li>A选择高价行：min(8, 2) = <strong>2</strong></li><li>A选择低价行：min(6, 4) = <strong>4</strong></li></ul><p>各行最小值中的最大值：max(2, 4) = <strong>4</strong></p><p><strong>步骤2：找出A中各列的最大值</strong></p><ul><li>B选择高价列：max(8, 6) = <strong>8</strong></li><li>B选择低价列：max(2, 4) = <strong>4</strong></li></ul><p>各列最大值中的最小值：min(8, 4) = <strong>4</strong></p><p><strong>步骤3：寻找鞍点</strong> 同时被步骤1和步骤2选中的元素：<strong>4</strong></p><ul><li>位置：A选择低价，B选择低价</li><li>行最小值 = 列最大值 = 4，存在鞍点</li></ul><p><strong>最优策略：</strong></p><ul><li><strong>公司A的最优策略：选择低价</strong></li><li><strong>公司B的最优策略：选择低价</strong></li><li><strong>博弈的均衡收益：4万元</strong></li></ul><p><strong>解释：</strong> 在这个博弈中，无论对方选择什么策略，公司A选择低价策略都能保证至少获得4万元的收益，这是A公司的最优纯策略。同样，B公司选择低价也是其最优策略，因为这样可以最小化A公司的收益。</p></details>',29))])}const B=e(h,[["render",u]]);export{T as __pageData,B as default};
