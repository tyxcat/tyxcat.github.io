---
layout: page
title: MoXaRt
description: Audio-Visual Object-Guided Sound Interaction for XR
img: assets/img/publication_preview/moxart.jpg
importance: 1
category: research
related_publications: true
---

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/moxart.jpg" title="MoXaRt System" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**MoXaRt** is a real-time XR system that uses audio-visual cues to separate entangled sound sources and enable fine-grained sound interaction. Accepted to **CHI 2026**, Barcelona, Spain.

---

## Overview

MoXaRt's core is a **cascaded architecture** that performs:

1. **Coarse audio-only separation** — initial separation of mixed audio sources
2. **Visual detection of sources** — identifying sound-producing objects (e.g., faces, instruments) in the scene
3. **Visually-guided refinement** — using the visual anchors to isolate individual sources with high precision

The system separates complex mixes of up to **5 concurrent sources** (e.g., 2 voices + 3 instruments) with approximately **~2 second processing latency**, making it suitable for real-time XR interaction.

---

## Results

We validated MoXaRt through a technical evaluation on a new dataset of 30 one-minute recordings featuring concurrent speech and music, and a 22-participant user study.

| Metric | Result |
|---|---|
| **Speech intelligibility** | 36.2% increase in listening comprehension (p < 0.01) |
| **Cognitive load** | Significantly reduced (p < 0.001) |
| **Concurrent sources** | Up to 5 (e.g., 2 voices + 3 instruments) |
| **Processing latency** | ~2 seconds |

---

## Citation

{% cite xu2026moxart %}
