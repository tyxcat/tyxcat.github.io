---
layout: page
title: "MoXaRt: Audio-Visual Object-Guided Sound Interaction for XR"
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

<p style="font-size: 1.15rem; margin-top: 1.5rem; line-height: 1.7;">
Imagine sitting in a noisy café where a guitarist, a cellist, and two people are all talking at once. What if your XR headset could let you <strong>tap on the guitarist</strong> to hear only their melody — or <strong>mute a conversation</strong> you're not part of? That's <strong>MoXaRt</strong>.
</p>

<div style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 2rem;">
  <p style="margin: 0 0 0.5rem 0;">
    📄 <strong>Paper:</strong> <a href="https://arxiv.org/abs/2603.10465">arXiv:2603.10465</a> · Accepted to <strong>CHI 2026</strong>
  </p>
  <p style="margin: 0 0 0.5rem 0;">
    🎤 <strong>Talk:</strong> <a href="https://programs.sigchi.org/chi/2026/program/content/222533">Fri, Apr 17 at 9:00 AM</a>
  </p>
  <p style="margin: 0;">
    📍 Barcelona International Convention Centre, P1 — Room 128
  </p>
</div>

---

## 🎯 The Problem

In real-world XR environments, sound sources are **entangled** — voices overlap with music, instruments bleed into each other. Existing spatial audio techniques can filter by _direction_, but they can't separate two sources coming from the same location.

MoXaRt solves this by combining **what you see** with **what you hear** — using visual detection of sound-producing objects (faces, instruments) to guide precise audio separation.

---

## 🏗️ How It Works

MoXaRt uses a **cascaded architecture** with three stages:

<div style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">

**1. Coarse Audio-Only Separation**
Initial blind separation of the mixed audio into approximate source streams.

**2. Visual Source Detection**
Real-time detection of sound-producing objects in the scene — faces, instruments, speakers — using the XR headset's cameras.

**3. Visually-Guided Refinement**
The visual anchors guide a second-stage model that isolates individual sources with high precision, resolving ambiguities the audio-only stage can't handle.

</div>

---

## 🎬 Demos

See MoXaRt in action — real-time source separation controlled through visual object selection.

### Instrument Separation

A live performance with multiple instruments playing simultaneously. MoXaRt identifies each instrument visually and separates their audio streams in real time.

<div class="row justify-content-center mb-4">
  <div class="col-sm-11 mt-2">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <iframe src="https://www.youtube.com/embed/iVhkXxMlegY" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
    </div>
  </div>
</div>

### Speech vs. Music Separation

A scenario with overlapping speech and background music — MoXaRt cleanly separates the two, letting you focus on either the conversation or the performance.

<div class="row justify-content-center mb-4">
  <div class="col-sm-11 mt-2">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <iframe src="https://www.youtube.com/embed/APLg_aWt6Eg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
    </div>
  </div>
</div>

### Multi-Speaker Separation

Multiple people speaking at once. By visually selecting a specific person, MoXaRt isolates their voice from the crowd.

<div class="row justify-content-center mb-4">
  <div class="col-sm-11 mt-2">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <iframe src="https://www.youtube.com/embed/vhHL6NrK39Q" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
    </div>
  </div>
</div>

---

## 📊 Results

We validated MoXaRt through a technical evaluation on a new dataset of 30 one-minute recordings featuring concurrent speech and music, and a **22-participant user study**.

| Metric                     | Result                                               |
| -------------------------- | ---------------------------------------------------- |
| **Speech intelligibility** | 36.2% increase in listening comprehension (p < 0.01) |
| **Cognitive load**         | Significantly reduced (p < 0.001)                    |
| **Concurrent sources**     | Up to 5 (e.g., 2 voices + 3 instruments)             |
| **Processing latency**     | ~2 seconds                                           |

<div style="margin-bottom: 3rem;"></div>

<div style="display:none;">
{% cite xu2026moxart %}
</div>
