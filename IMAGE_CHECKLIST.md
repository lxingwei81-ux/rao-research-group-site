# 图片状态（2026-10-19）

## 已接入

- 首页 Research 仅展示一张近期代表作图片：Lu、Rao、Shim 等，Nature Electronics 2026，Fig. 5c 的曲面神经形态成像器实物照片。图片下方不显示说明文字，点击图片可打开出版社原图；三个研究方向保留文字介绍。
- 2026 图使用出版社完整 Fig. 5 PNG，页面通过 CSS 展示面板 c，保留器件标签、截面示意和 1 mm 标尺，不修改源图像素。
- 文件：`public/images/research/paper-neuromorphic-imager-2026-fig5.png`（1766 × 1487）。来源：https://www.nature.com/articles/s41928-025-01540-w/figures/5 。出版方为 Springer Nature；该图不标注为 CC 许可。
- 原来的 2025、2020、2018 三张论文图保留为已有素材，首页不再显示。
- 旧的三个研究方向 WebP 拼贴图仍保留在 `public/images/research/`，但页面不再引用。
- 正式肖像：`public/images/people/people-zhoulyu-rao.webp`，1200×1200，来自城大教师主页。
- 官方横版校徽：`public/images/institution/cityuhk-logo.svg`，来自城大官方模板。原有带第三方水印的 PNG 已不再被页面引用。
- 社交分享图：`public/images/social-preview.png`，1200×630，纯文字版式。

## 待补充

Selected publications 中各篇论文的独立封面或 graphical abstract 尚未提供。研究方向缩略图不能作为各篇论文的独立图示，因此出版物的 `cover_image` 仍未启用，页面会正常展示文字卡片。

建议提供每篇独立配图（优先至少 6 张），900×1200 或保留原始宽高比，附来源和图注。上传后在 Pages CMS 的 Publications → cover_image / image_alt 中绑定即可，组件已支持图文卡片。不要为凑齐数量将方向图误标为论文封面。

团队合照、新研究方向配图仍可按需要补充。

## 官方来源

- Bioelectronics：Ershad、Rao 等，*Science Advances* 2025，Fig. 1，CC BY-NC 4.0。https://doi.org/10.1126/sciadv.adt7210
- Rubbery & Soft Electronics：Guan、Rao 等，*Science Advances* 2020，Fig. 5，CC BY-NC 4.0。https://doi.org/10.1126/sciadv.abb3656
- Curvy & Neuromorphic Electronics：Sim、Rao 等，*npj Flexible Electronics* 2018，Fig. 4，CC BY 4.0。https://doi.org/10.1038/s41528-017-0015-8
- 上述三张历史论文图来自出版物的开放获取版本，存放在 `public/images/research/paper-*.jpg`，当前未在首页展示。

- 教师页：https://www.cityu.edu.hk/chem/people/academic-staff/zhoulrao
- 肖像：https://www.cityu.edu.hk/chem/-/media/project/cityuhk/academic/chem/people/zhoulyu-photos.png?rev=e6892e9966db4b0c9334b394a2497de0&hash=4C6E4F0BF27F69F4E612CD22B6C63709
- 校徽：https://template.cityu.edu.hk/template/logo/CityU/CityU_Horizontal_Logo_CMYK.svg

其他期刊图片的转载授权，仍须按各篇论文的出版许可核对。

## Homepage department logo — 2026-10-19

- `public/images/institution/cityu-chemistry.png`: original PNG supplied by the user, 711 × 159. Used in the homepage affiliation panel without cropping or distortion. The header retains the existing university logo. Editable as `department_logo` in Site settings.
