/* ============================================================
   Jurnal Praktik Mengajar — rendering & interaction
   Semua konten diambil dari js/data.js (objek PORTFOLIO).
   ============================================================ */

(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  function photoIconSvg() {
    return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="8.2" cy="10.2" r="1.6" stroke="currentColor" stroke-width="1.4"/>
      <path d="M3 16.5L8 12.3C8.6 11.8 9.5 11.8 10.1 12.3L13 14.7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16.5L15.6 13.5C16.2 13 17.1 13 17.7 13.5L21 16.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  /* ---------------- Hero & Profile ---------------- */

  function renderHero(profile) {
    $("#idcard-rows").innerHTML = [
      ["Nama", profile.name],
      ["NIM", profile.nim],
      ["Prodi/Bidang Studi", profile.prodi],
      ["Sekolah PPL", profile.sekolah],
      ["Semester berjalan", profile.semesterBerjalan]
    ].map(([label, value]) => `
      <div class="id-card__row">
        <span class="id-card__label">${escapeHtml(label)}</span>
        <span class="id-card__value">${escapeHtml(value)}</span>
      </div>
    `).join("");
  }

  function renderProfile(profile) {
    $("#profile-avatar").innerHTML = profile.fotoProfil
      ? `<img src="${escapeHtml(profile.fotoProfil)}" alt="Foto profil ${escapeHtml(profile.name)}">`
      : `<span class="avatar__placeholder-icon">${photoIconSvg()}</span><span class="avatar__placeholder-label">Foto profil</span>`;
    $("#profile-avatar").classList.toggle("avatar--has-photo", Boolean(profile.fotoProfil));
    $("#profile-name").textContent = profile.name;
    $("#profile-role").textContent = profile.prodi;
    $("#profile-bio").textContent = profile.bio;
    $("#profile-fokus").textContent = profile.fokus;
    $("#profile-kampus").textContent = profile.kampus;
    $("#profile-sekolah").textContent = profile.sekolah;
  }

  /* ---------------- Artefact cards ---------------- */

  function artefactCardHtml(item) {
    const empty = !item.href;
    const tag = empty ? "div" : "a";
    const hrefAttr = empty ? "" : ` href="${escapeHtml(item.href)}" target="_blank" rel="noopener" data-preview-label="${escapeHtml(item.label)}"`;
    return `
      <${tag} class="artefact-card${empty ? " is-empty" : ""}"${hrefAttr}>
        <span class="artefact-card__icon">${empty ? "–" : "↗"}</span>
        <span class="artefact-card__label">${escapeHtml(item.label)}</span>
        ${empty ? '<span class="artefact-card__note">Tautan belum tersedia</span>' : ""}
      </${tag}>
    `;
  }

  /* ---------------- Google Drive preview modal ----------------
     Tempel link "Share" apa adanya dari Drive (format /file/d/ID/view
     atau ...?id=ID) di data.js — fungsi di bawah ini yang mengubahnya
     jadi link pratinjau yang bisa dibuka di dalam popup. */

  function extractDriveFileId(url) {
    const patterns = [/\/file\/d\/([\w-]{10,})/, /[?&]id=([\w-]{10,})/];
    for (const re of patterns) {
      const m = url.match(re);
      if (m) return m[1];
    }
    return null;
  }

  function toDrivePreviewUrl(url) {
    const id = extractDriveFileId(url);
    return id ? `https://drive.google.com/file/d/${id}/preview` : null;
  }

  function openDocPreview(url, label) {
    const previewUrl = toDrivePreviewUrl(url);
    const modal = $("#drive-modal");
    $("#modal-title").textContent = label || "Pratinjau dokumen";
    $("#modal-open-new").href = url;

    if (previewUrl) {
      $("#modal-iframe").src = previewUrl;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    } else {
      // bukan link Drive yang dikenali — buka langsung di tab baru
      window.open(url, "_blank", "noopener");
    }
  }

  function closeDocPreview() {
    const modal = $("#drive-modal");
    modal.hidden = true;
    $("#modal-iframe").src = "";
    document.body.style.overflow = "";
  }

  function initDocPreview() {
    // event delegation: satu listener untuk semua kartu artefak, termasu yang dirender ulang nanti
    document.addEventListener("click", (e) => {
      const link = e.target.closest(".artefact-card[data-preview-label]");
      if (!link) return;
      // biarkan browser menangani sendiri kalau user memang mau buka tab baru manual
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      openDocPreview(link.getAttribute("href"), link.dataset.previewLabel);
    });

    $all("[data-close]").forEach((el) => el.addEventListener("click", closeDocPreview));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#drive-modal").hidden) closeDocPreview();
    });
  }

  /* ---------------- Photo documentation grid ---------------- */

  function photoGridHtml(fotoList) {
    if (!fotoList || fotoList.length === 0) return "";
    const slots = fotoList.map((f) => {
      if (f.src) {
        return `
          <figure class="photo-slot">
            <img src="${escapeHtml(f.src)}" alt="${escapeHtml(f.caption || "Dokumentasi kegiatan")}">
            <figcaption>${escapeHtml(f.caption || "")}</figcaption>
          </figure>
        `;
      }
      return `
        <figure class="photo-slot photo-slot--empty">
          ${photoIconSvg()}
          <figcaption>${escapeHtml(f.caption || "Foto belum diunggah")}</figcaption>
        </figure>
      `;
    }).join("");
    return `
      <div class="photo-section">
        <h4 class="photo-section__title">Dokumentasi foto kegiatan</h4>
        <div class="photo-grid">${slots}</div>
      </div>
    `;
  }

  /* ---------------- Analysis accordion ---------------- */

  function analysisHtml(analisis, konteks) {
    if (!analisis || analisis.length === 0) {
      return `
        <div class="empty-state">
          <strong>Refleksi siklus ini belum ditulis.</strong><br>
          Konteks, tujuan, dan analisis (kendala, teori pedagogi, faktor keberhasilan, rencana perbaikan)
          akan ditambahkan setelah dokumentasi RPP, media, dan video praktik mengajar untuk siklus ini siap.
        </div>
      `;
    }

    const konteksBlock = konteks
      ? `<div class="konteks"><p>${escapeHtml(konteks)}</p></div>`
      : "";

    const items = analisis.map((a, i) => `
      <div class="analysis-item" data-index="${i}">
        <button class="analysis-item__trigger" type="button" aria-expanded="false">
          <span>${escapeHtml(a.judul)}</span>
          <span class="analysis-item__chevron">+</span>
        </button>
        <div class="analysis-item__panel">
          <div class="analysis-item__panel-inner">
            <p>${escapeHtml(a.isi)}</p>
          </div>
        </div>
      </div>
    `).join("");

    return `${konteksBlock}<div class="analysis-list">${items}</div>`;
  }

  function wireAccordion(container) {
    $all(".analysis-item__trigger", container).forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".analysis-item");
        const panel = $(".analysis-item__panel", item);
        const isOpen = item.classList.contains("is-open");

        // close siblings for a cleaner single-focus reading experience
        $all(".analysis-item", item.parentElement).forEach((sib) => {
          if (sib !== item) {
            sib.classList.remove("is-open");
            $(".analysis-item__panel", sib).style.maxHeight = null;
            $(".analysis-item__trigger", sib).setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          item.classList.remove("is-open");
          panel.style.maxHeight = null;
          trigger.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("is-open");
          panel.style.maxHeight = panel.scrollHeight + "px";
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------------- Stage (Terbimbing / Mandiri) ---------------- */

  function badgeHtml(siklus) {
    const cls = siklus.status === "progress" ? "badge--progress" : "badge--done";
    return `<span class="badge ${cls}">${escapeHtml(siklus.statusLabel)}</span>`;
  }

  function siklusPanelHtml(siklus) {
    return `
      <div class="siklus" id="siklus-${siklus.id}" data-id="${siklus.id}">
        <div class="siklus__header">
          <h3>${escapeHtml(siklus.judul)} — ${escapeHtml(siklus.topik)}</h3>
          ${badgeHtml(siklus)}
        </div>
        <p class="siklus__meta">${escapeHtml(siklus.kelas)} &middot; Guru Pamong: ${escapeHtml(siklus.guruPamong)}</p>
        <div class="artefact-row">
          ${siklus.artefak.map(artefactCardHtml).join("")}
        </div>
        ${photoGridHtml(siklus.foto)}
        ${analysisHtml(siklus.analisis, siklus.konteks)}
      </div>
    `;
  }

  function renderStage(stageKey, data) {
    const tabsEl = $(`#${stageKey}-tabs`);
    const panelsEl = $(`#${stageKey}-panels`);

    if (data.siklus.length <= 1) {
      tabsEl.style.display = "none";
    } else {
      tabsEl.innerHTML = data.siklus.map((s, i) => `
        <button class="stage-tab${i === 0 ? " is-active" : ""}" data-target="${s.id}" type="button">
          <span class="status-dot ${s.status === "progress" ? "status-dot--progress" : "status-dot--done"}"></span>
          ${escapeHtml(s.judul)}
        </button>
      `).join("");
    }

    panelsEl.innerHTML = data.siklus.map((s, i) => siklusPanelHtml(s)).join("");
    // activate first
    const firstPanel = $(".siklus", panelsEl);
    if (firstPanel) firstPanel.classList.add("is-active");
    wireAccordion(panelsEl);

    $all(".stage-tab", tabsEl).forEach((tab) => {
      tab.addEventListener("click", () => {
        $all(".stage-tab", tabsEl).forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        $all(".siklus", panelsEl).forEach((p) => p.classList.remove("is-active"));
        $(`#siklus-${tab.dataset.target}`).classList.add("is-active");
      });
    });
  }

  /* ---------------- Nonmengajar ---------------- */

  function renderNonmengajar(list) {
    const el = $("#nonmengajar-content");
    if (!list || list.length === 0) {
      el.innerHTML = `
        <div class="empty-state">
          <strong>Belum ada kegiatan nonmengajar yang didokumentasikan.</strong><br>
          Tambahkan daftar kegiatan (piket, ekstrakurikuler, tugas administratif, dll.) di
          <code>js/data.js</code> pada bagian <code>nonmengajar</code>.
        </div>
      `;
      return;
    }
    el.innerHTML = list.map((item) => `
      <div class="artefact-card" style="margin-bottom:12px;">
        <span class="artefact-card__label">${escapeHtml(item.judul)}</span>
        <p style="margin:0;">${escapeHtml(item.deskripsi || "")}</p>
      </div>
    `).join("");
  }

  /* ---------------- Sidebar nav (top-level panels) ---------------- */

  function buildSidebarSub(stageKey, data) {
    const el = $(`#nav-${stageKey}-sub`);
    if (data.siklus.length <= 1) return;
    el.innerHTML = data.siklus.map((s) => `
      <button class="nav-link" data-panel="${stageKey}" data-target="${s.id}" type="button">
        <span class="status-dot ${s.status === "progress" ? "status-dot--progress" : "status-dot--done"}"></span>${escapeHtml(s.judul)}
      </button>
    `).join("");
  }

  function showPanel(panelId, siklusId) {
    $all(".panel").forEach((p) => p.classList.remove("is-active"));
    const panel = $(`#panel-${panelId}`);
    if (panel) panel.classList.add("is-active");

    $all(".nav-link[data-panel]").forEach((l) => l.classList.remove("is-active"));
    $all(`.nav-link[data-panel="${panelId}"]`).forEach((l) => {
      if (!siklusId || l.dataset.target === siklusId) l.classList.add("is-active");
    });

    if (siklusId) {
      const tabsEl = $(`#${panelId}-tabs`);
      const panelsEl = $(`#${panelId}-panels`);
      if (tabsEl && panelsEl) {
        $all(".stage-tab", tabsEl).forEach((t) => t.classList.toggle("is-active", t.dataset.target === siklusId));
        $all(".siklus", panelsEl).forEach((p) => p.classList.toggle("is-active", p.dataset.id === siklusId));
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

    // collapse mobile menu after navigating
    $("#sidebar").classList.remove("is-open");
  }

  function initNav() {
    $all(".nav-link[data-panel]").forEach((link) => {
      link.addEventListener("click", () => {
        const panelId = link.dataset.panel;
        const target = link.dataset.target || "";
        location.hash = target ? `${panelId}/${target}` : panelId;
      });
    });

    window.addEventListener("hashchange", applyHash);
  }

  function applyHash() {
    const raw = location.hash.replace("#", "") || "beranda";
    const [panelId, siklusId] = raw.split("/");
    showPanel(panelId, siklusId);
  }

  function initMobileToggle() {
    const btn = $("#mobile-toggle");
    const sidebar = $("#sidebar");
    if (!btn) return;
    btn.addEventListener("click", () => sidebar.classList.toggle("is-open"));
  }

  /* ---------------- Init ---------------- */

  document.addEventListener("DOMContentLoaded", () => {
    renderHero(PORTFOLIO.profile);
    renderProfile(PORTFOLIO.profile);
    renderStage("terbimbing", PORTFOLIO.terbimbing);
    renderStage("mandiri", PORTFOLIO.mandiri);
    renderNonmengajar(PORTFOLIO.nonmengajar);
    buildSidebarSub("terbimbing", PORTFOLIO.terbimbing);
    buildSidebarSub("mandiri", PORTFOLIO.mandiri);
    initNav();
    initMobileToggle();
    initDocPreview();
    applyHash();
  });
})();
