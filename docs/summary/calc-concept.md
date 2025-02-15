# 计算题相关概念及公式
## 成本进度计算题相关概念和公式
### SPI、CPI、EV、AC、PV、ETC、EAC、VAC等概念
- `EV（Earned Value）`：即挣值，也被称作已完成工作预算成本
- `AC（Actual Cost）`：是实际成本，即实际完成工作所花费的成本
- `PV（Planned Value）`：代表计划价值，又称计划工作预算成本
- `BAC（Budget At Completion）`：项目完工预算，指完成项目所有工作的总预算
- `CV（Cost Variance）`：成本偏差，通过公式 CV = EV - AC 计算。当 CV > 0 ，表示 EV 大于 AC，成本节约
- `SV（Schedule Variance）`：进度偏差，根据公式 SV = EV - PV 计算。SV > 0 时，EV 大于 PV，项目进度提前
- `SPI（Schedule Performance Index）`：进度绩效指数，是项目管理中用于衡量项目进度效率的关键指标。SPI<1：实际工作量小于计划工作量（滞后），大于1（进度超前）
SPI = EV / PV 例：SPI为80.00%时表示进度为正常进度的80%（滞后）
- `CPI（Cost Performance Index）`：成本绩效指数，是项目管理中用于衡量成本效率的关键指标。CPI＞1：挣值大于实际成本，即实际成本低于预算，成本控制良好（有结余），CPI<1：实际成本超预算。
CPI = EV / AC 例：CPI为1.05时 项目100元的成本创造了105元的价值
- `ETC`：完工尚需估算，完成剩余工作还需要的成本估算
- `EAC`：完工估算，完成整个项目预计需要的总成本

### 计算公式
- CV = EV - AC    >0 节省
- SV = EV - PV    >0 提前
- CPI = EV / AC   >1 节省
- SPI = EV / PC   >1 提前
- 典型：出现偏差后，还照原计划
  - ETC = (BAC - EV) / CPI
  - EAC = AC + ETC = AC + (BAC - EV) / CPI
- 非典型：出现偏差后，纠错\改善
  - ETC = BAC - EV
  - EAC = AC + ETC = AC + BAC - EV

## 总时差、标准时差

## 六标时