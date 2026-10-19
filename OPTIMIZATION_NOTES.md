# 全站优化交付记录

开发分支：`codex/homepage-refresh`。演示发布分支：`main`。

演示地址：https://lxingwei81-ux.github.io/rao-research-group-site/

## P0

- 首页采用纯文字介绍，研究方向使用简短列表；已移除原概念主视觉。
- 三个科研图转换 WebP、统一画布，等比例保留标注；目前页面不显示这些拼贴图，素材可用于后续核准的展示。
- 官方 SVG 校徽、正式教师肖像已接入。
- 新闻补充至 4 条；无已发布新闻时首页隐藏该区块。
- 新增 2026 Nature Electronics 论文，使用出版社正式标题和 DOI；原列表未包含此文，并非直接把某条 2016 记录改成 2026。
- 2025 Science Advances 卷号 1 修正为 11(4)。
- 2021 在线发表的全聚合物电子学论文按正式 2022 卷期显示；稳定 ID 保留，避免破坏历史引用。
- /dr-rao/ 跳转 /people/#pi；/join-us/ 跳转 /positions/。静态 GitHub Pages 构建使用 Astro 生成的 HTML 跳转页，不声称服务器级 HTTP 301。
- People 按人员类别展示；无数据的类别不显示。

## P1

- 首页简介保留招聘页面入口；岗位从 YAML 获取。
- 精选论文和完整列表均显示全名作者，饶老师姓名加粗；论文标题链接到出版社，保留已有公开 PDF 链接。
- 页脚添加办公室、地址、电话、教师主页和 ORCID。
- 招聘页增加岗位邮件入口、统一主题格式、HKPFS 官方指引、申请准备建议。
- Pages CMS 增加分享图、作者主页、PDF 和图片说明字段。
- DOI、URL、本地资产、重复 ID、研究方向论文引用在每次构建前校验。

## P2

- 研究方向关联代表作保留并加入 2026 新文献。
- 论文页精选区、按年锚点、关键词/方向/年份组合筛选及无结果提示。
- Open Graph / Twitter 分享图、机构和作者 sameAs 结构化数据。
- 可复现浏览器回归脚本，覆盖桌面/手机、菜单、筛选、链接、锚点与跳转。
- legacy 保留：旧站还有会议和审稿服务等内容未逐项确认迁移，尚不满足删除前提。

## 仍需内容补充

- 每篇论文独立配图：组件/CMS 已支持，但没有把重复的研究图冒充论文配图。
- Google Scholar：没有取得可核实的个人主页 ID，字段留空；收到正确链接即可接入。
- 首页不使用主视觉图片；如需添加真实实验照片，仍需提供对应素材。
- 未将 Visiting Student 写成已公布招聘岗位；仅提供访问研究咨询入口。

## 来源

核查日期：2026-10-15。

- 入职月份、学历年份、电话和办公室：CityUHK 教师页 https://www.cityu.edu.hk/chem/people/academic-staff/zhoulrao
- 导师姓名：仓库 legacy/About me.html；保留仓库已有信息，未新增推测。
- 2026 论文：https://www.nature.com/articles/s41928-025-01540-w （2026-01-07 在线发表；9, 180–188）
- 2025 论文：https://pmc.ncbi.nlm.nih.gov/articles/PMC11759005/ （11(4), eadt7210）
- 2024 论文：https://pure.psu.edu/en/publications/ultrathin-rubbery-bio-optoelectronic-stimulators-for-untethered-c/
- 2023 Matter：https://www.sciencedirect.com/science/article/pii/S2590238523000498
- 2022 Nature Electronics：https://www.nature.com/articles/s41928-022-00874-z
- 2021 Nature Electronics：https://www.nature.com/articles/s41928-021-00600-1
- 全聚合物论文及 ORCID：https://onlinelibrary.wiley.com/doi/pdf/10.1002/adfm.202111232 （2021-12-15 在线，2022 正式卷期）
- 公开作者稿 PDF：https://par.nsf.gov/servlets/purl/10391551
- HKPFS：https://www.cityu.edu.hk/en/pg/hong-kong-phd-fellowship-scheme/about-the-scheme

入职新闻只公开显示月份；内部日期的 1 日仅供排序，不表示实际入职日。早于创组的论文新闻明确表述为饶教授参与的合作研究，不声称由新课题组独立完成。

## 2026-10-19 展示调整

- 首页 Research 用 2026 Nature Electronics 论文 Fig. 5c 的一张器件实物照片，右侧保留三个研究方向；详见 IMAGE_CHECKLIST.md。
- 首页、研究、招聘、新闻改为 we / our lab 口吻；教授个人简介改为 I。
- Publications 移除单独的 DOI 入口和贡献标记说明，作者上标及可点击的论文标题保留。
- 全部 28 篇作者核对来源见 PUBLICATION_SOURCES.md。
