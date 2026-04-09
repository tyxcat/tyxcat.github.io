---
layout: page
title: "GazeAnywhere: Gaze Target Estimation Anywhere with Concepts"
img: assets/img/publication_preview/gazeanywhere.png
importance: 3
category: research
related_publications: true
---

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/gazeanywhere.png" title="GazeAnywhere" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<p style="font-size: 1.15rem; margin-top: 1.5rem; line-height: 1.7;">
What if you could ask an AI <strong>"where is the boy in the red shirt looking?"</strong> and get an instant answer from any image? <strong>GazeAnywhere</strong> is the first foundation model that understands gaze through natural language.
</p>

<div style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 2rem;">
  <p style="margin: 0 0 0.5rem 0;">
    📄 <strong>Paper:</strong> Accepted to <strong>CVPR 2026</strong>
  </p>
  <p style="margin: 0;">
    💻 <strong>Code:</strong> <a href="https://github.com/IrohXu/GazeAnywhere">github.com/IrohXu/GazeAnywhere</a>
  </p>
</div>

---

## 🎯 The Problem

Estimating where people are looking in real-world images is notoriously tough. Current methods rely on **brittle, multi-stage pipelines** that require rigid inputs like head bounding boxes and human pose. Detection errors cascade through the pipeline, and there's no way to use natural language to specify *who* you want to analyze.

---

## 💡 Key Idea: Promptable Gaze Target Estimation

We define a new task — **Promptable Gaze Target Estimation (PGE)** — that replaces fragile pipelines with a single, flexible model:

<div style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">

**Flexible Prompting**
Use natural language ("the boy in the red shirt") or visual prompts (a specific coordinate) to identify who you want to analyze.

**End-to-End Integration**
PGE merges subject localization with gaze estimation in a single pass — no cascading errors.

**Foundation Model Architecture**
GazeAnywhere uses a multi-layer transformer to simultaneously solve subject localization, in/out-of-frame presence, and gaze target heatmap estimation.

</div>

---

## ⚡ Why GazeAnywhere?

- 🔬 **SAM 3-style** gaze target estimation foundation model
- 💬 The first **text and visual concept-driven** gaze estimation model
- 📋 Defines the **Promptable Gaze Target Estimation (PGE)** task
- 🤖 Includes **AnyGaze Agent** — connecting GazeAnywhere to Gemini APIs

---

## 👥 Team

A collaboration between [UIUC Rehg Lab](https://rehg.org/) and [Google AR](https://arvr.google.com/).

<div style="margin-bottom: 3rem;"></div>

<div style="display:none;">
{% cite cao2026gazeanywhere %}
</div>
