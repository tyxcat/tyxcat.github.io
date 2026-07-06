---
layout: page
title: "SAMOSA: Enhancing XR Auditory Realism via Multimodal Scene-Aware Acoustic Rendering"
img: assets/img/publication_preview/samosa-2.png
importance: 2
category: research
related_publications: true
---

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <img src="/assets/img/publication_preview/samosa-2.png" alt="SAMOSA System" class="img-fluid rounded z-depth-1" style="width: 100%;">
  </div>
</div>

<p style="font-size: 1.15rem; margin-top: 1.5rem; line-height: 1.7;">
What if sounds in your XR headset actually <strong>matched the room you're in</strong> — reverberating off the right walls, absorbing into the right surfaces? <strong>SAMOSA</strong> makes virtual audio feel real by understanding your physical environment in real time.
</p>

<div style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 2rem;">
  <p style="margin: 0 0 0.5rem 0;">
    📄 <strong>Paper:</strong> <a href="https://doi.org/10.1145/3746059.3747730">doi:10.1145/3746059.3747730</a> · Published at <strong>UIST 2025</strong>
  </p>
  <p style="margin: 0 0 0.5rem 0;">
    🎤 <strong>Talk:</strong> <a href="https://programs.sigchi.org/uist/2025/program/content/206860">Mon, Sep 29 | 11:24 AM – 11:36 AM</a>
  </p>
  <p style="margin: 0;">
    📍 Paradise Hotel Busan, Sydney Room — Busan, Republic of Korea
  </p>
</div>

---

## 🎯 The Problem

In XR, realistic sound is crucial for immersion — but existing spatial audio systems use **static, one-size-fits-all acoustics**. A cathedral and a closet get the same reverb. This mismatch between what you _see_ and what you _hear_ breaks the illusion.

SAMOSA fixes this by building a **real-time understanding of your physical space** — its geometry, materials, and acoustic character — and using that to synthesize audio that sounds like it truly belongs there.

---

## 🏗️ How It Works

SAMOSA fuses three real-time sensing streams into a rich **multimodal scene representation**:

<div style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">

**1. Room Geometry Estimation**
Real-time 3D understanding of room shape and dimensions from device sensors.

**2. Surface Material Detection**
Visual identification of surfaces (concrete, wood, glass, carpet) that determine how sound reflects and absorbs.

**3. Semantic Acoustic Context**
LLM-driven interpretation of the scene's acoustic character — understanding that a "library" sounds different from a "gym" even at similar sizes.

</div>

These three streams feed into an efficient **acoustic calibration engine** that synthesizes a realistic Room Impulse Response (RIR) — the acoustic fingerprint of your space — in real time.

---

## 🎬 Demo

<div class="row justify-content-center mb-4">
  <div class="col-sm-11 mt-2">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <iframe src="https://www.youtube.com/embed/A5a_nTcEbRc" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
    </div>
  </div>
</div>

---

## 📊 Results

We validated SAMOSA through technical evaluation using acoustic metrics for RIR synthesis across various room configurations and sound types, alongside an **expert evaluation (N=12)**.

| Aspect                  | Finding                                                   |
| ----------------------- | --------------------------------------------------------- |
| **Room configurations** | Validated across diverse geometries and surface materials |
| **Sound types**         | Tested with speech, music, and environmental audio        |
| **Expert evaluation**   | 12 audio professionals confirmed enhanced realism         |
| **On-device**           | Runs in real time on XR hardware                          |

<div style="margin-bottom: 3rem;"></div>

<div style="display:none;">
{% cite xu2025samosa %}
</div>
