import{_ as s,c as a,o as p,aA as l}from"./chunks/framework.B5199-QK.js";const V=JSON.parse('{"title":"一些不太好记的概念和公式","description":"","frontmatter":{},"headers":[],"relativePath":"book/concept.md","filePath":"book/concept.md"}'),e={name:"book/concept.md"};function i(c,n,t,o,d,r){return p(),a("div",null,n[0]||(n[0]=[l(`<h1 id="一些不太好记的概念和公式" tabindex="-1">一些不太好记的概念和公式 <a class="header-anchor" href="#一些不太好记的概念和公式" aria-label="Permalink to &quot;一些不太好记的概念和公式&quot;">​</a></h1><h2 id="挣值分析相关" tabindex="-1">挣值分析相关 <a class="header-anchor" href="#挣值分析相关" aria-label="Permalink to &quot;挣值分析相关&quot;">​</a></h2><h3 id="ev、ac、pv、etc、eac、vac等概念" tabindex="-1">EV、AC、PV、ETC、EAC、VAC等概念 <a class="header-anchor" href="#ev、ac、pv、etc、eac、vac等概念" aria-label="Permalink to &quot;EV、AC、PV、ETC、EAC、VAC等概念&quot;">​</a></h3><ul><li><code>EV（Earned Value）</code>：即挣值，也被称作已完成工作预算成本</li><li><code>AC（Actual Cost）</code>：是实际成本，即实际完成工作所花费的成本</li><li><code>PV（Planned Value）</code>：代表计划价值，又称计划工作预算成本</li><li><code>BAC（Budget At Completion）</code>：项目完工预算，指完成项目所有工作的总预算</li><li><code>CV（Cost Variance）</code>：成本偏差，通过公式 CV = EV - AC 计算。当 CV &gt; 0 ，表示 EV 大于 AC，成本节约</li><li><code>SV（Schedule Variance）</code>：进度偏差，根据公式 SV = EV - PV 计算。SV &gt; 0 时，EV 大于 PV，项目进度提前</li><li><code>SPI（Schedule Performance Index）</code>：进度绩效指数，是项目管理中用于衡量项目进度效率的关键指标。SPI&lt;1：实际工作量小于计划工作量（滞后），大于1（进度超前） SPI = EV / PV 例：SPI为80.00%时表示进度为正常进度的80%（滞后）</li><li><code>CPI（Cost Performance Index）</code>：成本绩效指数，是项目管理中用于衡量成本效率的关键指标。CPI＞1：挣值大于实际成本，即实际成本低于预算，成本控制良好（有结余），CPI&lt;1：实际成本超预算。 CPI = EV / AC 例：CPI为1.05时 项目100元的成本创造了105元的价值</li><li><code>ETC</code>：完工尚需估算，完成剩余工作还需要的成本估算</li><li><code>EAC</code>：完工估算，完成整个项目预计需要的总成本</li></ul><h3 id="计算公式" tabindex="-1">计算公式 <a class="header-anchor" href="#计算公式" aria-label="Permalink to &quot;计算公式&quot;">​</a></h3><ul><li>CV = EV - AC &gt;0 节省</li><li>SV = EV - PV &gt;0 提前</li><li>CPI = EV / AC &gt;1 节省</li><li>SPI = EV / PC &gt;1 提前</li><li>典型：出现偏差后，还照原计划 <ul><li>ETC = (BAC - EV) / CPI</li><li>EAC = AC + ETC = AC + (BAC - EV) / CPI</li></ul></li><li>非典型：出现偏差后，纠错\\改善 <ul><li>ETC = BAC - EV</li><li>EAC = AC + ETC = AC + BAC - EV</li></ul></li></ul><h3 id="ai生成的帮助理解图表" tabindex="-1">AI生成的帮助理解图表 <a class="header-anchor" href="#ai生成的帮助理解图表" aria-label="Permalink to &quot;AI生成的帮助理解图表&quot;">​</a></h3><details class="details custom-block"><summary>点击展开</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- ✅ deepseek-r1 --&gt;</span></span>
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
<span class="line"><span>+-----------------------------+</span></span></code></pre></div></details><h2 id="总时差、标准时差" tabindex="-1">总时差、标准时差 <a class="header-anchor" href="#总时差、标准时差" aria-label="Permalink to &quot;总时差、标准时差&quot;">​</a></h2><ul><li>标准差 = <code>(悲观 - 乐观) / 6</code> 或 <code>(大 - 小) /6</code> 必须为正值</li></ul><h2 id="六标时" tabindex="-1">六标时 <a class="header-anchor" href="#六标时" aria-label="Permalink to &quot;六标时&quot;">​</a></h2><h2 id="关键路径" tabindex="-1">关键路径 <a class="header-anchor" href="#关键路径" aria-label="Permalink to &quot;关键路径&quot;">​</a></h2><h2 id="三点估算" tabindex="-1">三点估算 <a class="header-anchor" href="#三点估算" aria-label="Permalink to &quot;三点估算&quot;">​</a></h2><p>三点估算中常用的两种概率分布：<code>三角分布</code>和<code>贝塔分布</code></p><ul><li><code>期望值</code>: 通过计算得到，最期望的值 T1</li><li><code>悲观值</code>: 题目给出，最糟糕情况 T2</li><li><code>乐观值</code>: 题目给出，最好的情况 T3</li><li><code>最可能值</code>: 题目给出，一般的情况 T4 不同的地方，符号可能不一样。</li></ul><h3 id="三角分布" tabindex="-1">三角分布 <a class="header-anchor" href="#三角分布" aria-label="Permalink to &quot;三角分布&quot;">​</a></h3><p>适用于初步估算、数据不足或风险分布未知时，需要快速估算且对精准度要求不高。期望值：<code>T1 = (T2 + T3 + T4) / 3</code></p><h3 id="贝塔分布-pert" tabindex="-1">贝塔分布（PERT） <a class="header-anchor" href="#贝塔分布-pert" aria-label="Permalink to &quot;贝塔分布（PERT）&quot;">​</a></h3><p>能更精确的反应最可能值。期望值：<code>T1 = (T2 + T3 + 4 * T4) / 6</code></p>`,19)]))}const h=s(e,[["render",i]]);export{V as __pageData,h as default};
