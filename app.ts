'use strict';

// ─── Types ───
interface Project {
  name: string;
  url: string;
  desc: string;
  icon: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  badge: string;
  badgeCls: string;
}

interface SkillItem {
  n: string;
  p: number;
  src: string;
  fb: string;
}

interface BlogPost {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
}

// ─── Data ───
const PROJECTS: Project[] = [
  { name:'Bmb Project', url:'https://bmbtech.online', desc:'Main portfolio and tech hub — showcasing cybersecurity projects, research work and professional profile.', icon:'fa-solid fa-globe', iconBg:'rgba(0,212,255,.1)', iconBorder:'rgba(0,212,255,.3)', iconColor:'#00d4ff', badge:'WEBSITE', badgeCls:'bm' },
  { name:'Bmb Movies', url:'https://bmb-movies.vercel.app/', desc:'Movie streaming and discovery platform — browse, search and watch movies with a clean modern interface.', icon:'fa-solid fa-film', iconBg:'rgba(255,34,68,.1)', iconBorder:'rgba(255,34,68,.3)', iconColor:'#ff2244', badge:'APP', badgeCls:'ba' },
  { name:'Bmb TikTok', url:'https://bmb-tiktok.vercel.app/', desc:'TikTok video downloader — paste link, download videos instantly without watermarks.', icon:'fa-solid fa-video', iconBg:'rgba(0,255,136,.08)', iconBorder:'rgba(0,255,136,.25)', iconColor:'#00ff88', badge:'TOOL', badgeCls:'bt' },
  { name:'Bmb Instagram', url:'https://instagram-download.vercel.app/', desc:'Instagram media downloader — download photos, videos, reels and stories from public profiles.', icon:'fa-brands fa-instagram', iconBg:'rgba(225,48,108,.1)', iconBorder:'rgba(225,48,108,.3)', iconColor:'#e1306c', badge:'TOOL', badgeCls:'bt' },
  { name:'Bmb Music', url:'https://bmb-music.zone.id/', desc:'Music streaming platform — search, listen and discover tracks across multiple genres and artists.', icon:'fa-solid fa-music', iconBg:'rgba(0,87,255,.1)', iconBorder:'rgba(0,87,255,.3)', iconColor:'#6699ff', badge:'APP', badgeCls:'ba' },
  { name:'Bmb Url', url:'https://bmburl.zone.id/', desc:'URL shortener service — convert long URLs into short, manageable links with tracking analytics.', icon:'fa-solid fa-link', iconBg:'rgba(255,224,102,.08)', iconBorder:'rgba(255,224,102,.25)', iconColor:'#ffe066', badge:'TOOL', badgeCls:'bt' },
  { name:'Bmb AI', url:'https://bmb-ai.vercel.app/', desc:'AI chatbot assistant — intelligent conversational interface powered by modern AI models.', icon:'fa-solid fa-robot', iconBg:'rgba(150,100,255,.1)', iconBorder:'rgba(150,100,255,.3)', iconColor:'#cc99ff', badge:'AI', badgeCls:'bp' },
];

const TOOLS: SkillItem[] = [
  { n:'Wireshark', p:88, src:'https://cdn.simpleicons.org/wireshark/1679A1', fb:'fa-wifi' },
  { n:'Nmap', p:85, src:'', fb:'fa-magnifying-glass' },
  { n:'Metasploit', p:72, src:'', fb:'fa-crosshairs' },
  { n:'Burp Suite', p:70, src:'', fb:'fa-bug' },
  { n:'Kali Linux', p:90, src:'https://cdn.simpleicons.org/kalilinux/557C94', fb:'fa-terminal' },
  { n:'OWASP Tools', p:68, src:'', fb:'fa-globe' },
];

const LANGS: SkillItem[] = [
  { n:'Python', p:85, src:'https://cdn.simpleicons.org/python/3776AB', fb:'fa-brands fa-python' },
  { n:'JavaScript', p:75, src:'https://cdn.simpleicons.org/javascript/F7DF1E', fb:'fa-brands fa-js' },
  { n:'Bash / Shell', p:82, src:'https://cdn.simpleicons.org/gnubash/4EAA25', fb:'fa-terminal' },
  { n:'C / C++', p:60, src:'https://cdn.simpleicons.org/cplusplus/00599C', fb:'fa-code' },
];

const POSTS: BlogPost[] = [
  { tag:'Network Security', title:'Passive Packet Sniffing: Techniques & Detection', excerpt:"In-depth look at passive network sniffing using Python's Scapy library.", date:'2024-11', read:'12 min' },
  { tag:'CTF Writeup', title:'Mr Robot CTF — Full Walkthrough', excerpt:'Step-by-step walkthrough: enumeration, WordPress exploitation and privilege escalation.', date:'2024-09', read:'20 min' },
  { tag:'Privacy', title:'Top Privacy Tools for 2025', excerpt:'Practical guide for reducing your digital footprint using open-source privacy tools.', date:'2024-08', read:'15 min' },
  { tag:'Threat Analysis', title:'Modern Ransomware: Attack Chains & Mitigation', excerpt:'Analysis of current ransomware attack chains, IOCs and IR playbooks.', date:'2024-06', read:'18 min' },
  { tag:'USB Security', title:'USB Attack Vectors & Countermeasures', excerpt:'Research into BadUSB and Rubber Ducky attacks and building anti-theft utilities.', date:'2024-04', read:'10 min' },
  { tag:'OSINT', title:'OSINT Techniques for Threat Hunting', excerpt:'Introduction to OSINT: Maltego, Shodan, theHarvester, Google dorks.', date:'2024-02', read:'14 min' },
];

const KB: Record<string, string> = {
  who: "Bmb Tech is a CS student at Arusha University of Science and Technology in Tanzania. He specialises in cybersecurity, network security and privacy engineering.",
  projects: "Bmb has 7 live projects:\n• Bmb Project (bmbtech.online)\n• Bmb Movies (bmb-movies.vercel.app)\n• Bmb TikTok (bmb-tiktok.vercel.app)\n• Bmb Instagram (instagram-download.vercel.app)\n• Bmb Music (bmb-music.zone.id)\n• Bmb Url (bmburl.zone.id)\n• Bmb AI (bmb-ai.vercel.app)",
  skills: "Wireshark, Nmap, Metasploit, Burp Suite, Kali Linux. Python 85%, Bash 82%, JavaScript 75%, C/C++ 60%. Domains: Network Security, Threat Analysis, OSINT, Privacy Engineering.",
  certs: "Google Cybersecurity (2024), ISC² CC (2024), Cisco CyberOps (2024), EC-Council EHE (2023), Bmb Channel SOC Level 1 (2023), CompTIA Security+ (In Progress).",
  contact: "GitHub: github.com/Bd-Mutant7 | Email: spicezke@gmail.com | Open to cybersecurity internships and research.",
};

// ─── Helpers ───
function esc(s: string): string {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

function $(id: string): HTMLElement {
  return document.getElementById(id)!;
}

// ─── Matrix Rain ───
function initMatrix(): void {
  try {
    const cv = $('mx') as HTMLCanvasElement;
    const cx = cv.getContext('2d')!;
    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; };
    resize();
    addEventListener('resize', resize);
    const ch = '01アイウエオカキクコサシスセタチツテトナニ';
    const cols = Math.floor(innerWidth / 16);
    const dr = Array(cols).fill(1);
    setInterval(() => {
      cx.fillStyle = 'rgba(2,4,8,.05)';
      cx.fillRect(0, 0, cv.width, cv.height);
      cx.fillStyle = '#00ff88';
      cx.font = '13px Share Tech Mono,monospace';
      dr.forEach((y: number, i: number) => {
        cx.fillText(ch[Math.floor(Math.random() * ch.length)], i * 16, y * 16);
        if (y * 16 > cv.height && Math.random() > .975) dr[i] = 0;
        dr[i]++;
      });
    }, 60);
  } catch (_) {}
}

// ─── Page Progress ───
function initProgress(): void {
  addEventListener('scroll', () => {
    const p = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
    $('prog').style.width = p + '%';
  });
}

// ─── Scroll Reveal ───
function doReveal(): void {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
  }, { threshold: .06 });
  document.querySelectorAll('.rv:not(.on)').forEach(el => io.observe(el));
}

// ─── Projects ───
function renderProjects(): void {
  const grid = $('proj-grid');
  grid.innerHTML = PROJECTS.map((p: Project) => {
    const domain = p.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    return `<a href="${p.url}" target="_blank" rel="noopener" class="pc card rv">
      <div class="p-head">
        <div class="ico" style="background:${p.iconBg};border:1px solid ${p.iconBorder}">
          <i class="${p.icon}" style="color:${p.iconColor}"></i>
        </div>
        <span class="bx ${p.badgeCls}">${p.badge}</span>
      </div>
      <div class="pn">${p.name}</div>
      <p class="pd">${p.desc}</p>
      <div class="pf">
        <span class="purl">${domain}</span>
        <span class="par"><i class="fa-solid fa-arrow-up-right-from-square"></i> VISIT</span>
      </div>
    </a>`;
  }).join('');
  doReveal();
}

// ─── Skills ───
function buildSkills(): void {
  function row(s: SkillItem): string {
    const iconHtml = s.src
      ? `<img src="${s.src}" onerror="this.parentElement.innerHTML='<i class=\\'fa-solid ${s.fb}\\'></i>'">`
      : `<i class="fa-solid ${s.fb}"></i>`;
    return `<div class="sk-row">
      <div class="sk-ic">${iconHtml}</div>
      <div class="sk-txt"><span class="sk-n">${s.n}</span><div class="sk-bw"><div class="sk-b" data-p="${s.p}"></div></div></div>
      <span class="sk-p">${s.p}%</span>
    </div>`;
  }
  $('sk-tools').innerHTML = TOOLS.map(row).join('');
  $('sk-langs').innerHTML = LANGS.map(row).join('');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sk-b').forEach((b: Element) => {
          (b as HTMLElement).style.width = (b as HTMLElement).dataset.p + '%';
        });
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.sk-cat').forEach(el => io.observe(el));
}

// ─── Radar Chart ───
function buildRadar(): void {
  try {
    const cv = $('radar') as HTMLCanvasElement;
    const ctx = cv.getContext('2d')!;
    const W = cv.width, H = cv.height, cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) / 2 - 30;
    const labels = ['Network\nSec', 'Pen\nTesting', 'Privacy\nEng', 'Threat\nAnalysis', 'Digital\nForensics', 'OSINT', 'Crypto', 'Secure\nDev'];
    const vals = [88, 72, 92, 75, 65, 80, 68, 70];
    const N = labels.length;
    const angle = (i: number): number => (i / N) * Math.PI * 2 - Math.PI / 2;

    ctx.clearRect(0, 0, W, H);

    for (let ring = 1; ring <= 4; ring++) {
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const a = angle(i), r2 = R * ring / 4;
        i === 0 ? ctx.moveTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2) : ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(0,212,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (let i = 0; i < N; i++) {
      const a = angle(i);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      ctx.strokeStyle = 'rgba(0,212,255,0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.beginPath();
    vals.forEach((v, i) => {
      const a = angle(i), r2 = R * v / 100;
      i === 0 ? ctx.moveTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2) : ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(0,255,136,0.12)';
    ctx.fill();
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 2;
    ctx.stroke();

    vals.forEach((v, i) => {
      const a = angle(i), r2 = R * v / 100;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00d4ff';
      ctx.fill();
    });

    ctx.fillStyle = 'rgba(107,143,168,0.9)';
    ctx.font = '9px Share Tech Mono, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    labels.forEach((lbl, i) => {
      const a = angle(i), pad = R + 22;
      const x = cx + Math.cos(a) * pad, y = cy + Math.sin(a) * pad;
      lbl.split('\n').forEach((line, li) => ctx.fillText(line, x, y + (li - 0.5) * 11));
    });
  } catch (_) {}
}

// ─── Network Map ───
function initNetworkMap(): void {
  try {
    const cv = $('net-cvs') as HTMLCanvasElement;
    const ctx = cv.getContext('2d')!;
    const resize = () => { cv.width = cv.offsetWidth; cv.height = 360; };
    resize();
    new ResizeObserver(resize).observe(cv);

    const nodes = [
      { n: 'Router', c: '#00ff88' }, { n: 'Firewall', c: '#ff2244' }, { n: 'Server', c: '#0057ff' },
      { n: 'Client A', c: '#00d4ff' }, { n: 'Client B', c: '#00d4ff' }, { n: 'DNS', c: '#ffe066' },
      { n: 'Switch', c: '#6699ff' }, { n: 'IDS', c: '#ff2244' }, { n: 'Proxy', c: '#00d4ff' }, { n: 'Database', c: '#6699ff' },
    ].map(nd => ({
      ...nd, r: 7 + Math.random() * 5,
      x: 60 + Math.random() * (cv.width - 120), y: 50 + Math.random() * 250,
      vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5,
    }));

    const pkts: { a: number; b: number; t: number; c: string }[] = [];
    const colors = ['#00ff88', '#00d4ff', '#ff2244', '#ffe066'];

    setInterval(() => {
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      while (b === a) b = Math.floor(Math.random() * nodes.length);
      pkts.push({ a, b, t: 0, c: colors[Math.floor(Math.random() * colors.length)] });
    }, 500);

    function draw(): void {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 220) {
            ctx.strokeStyle = `rgba(0,212,255,${(.06 * (1 - d / 220)).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      for (let i = pkts.length - 1; i >= 0; i--) {
        const p = pkts[i];
        p.t += .014;
        const na = nodes[p.a], nb = nodes[p.b];
        const x = na.x + (nb.x - na.x) * p.t, y = na.y + (nb.y - na.y) * p.t;
        ctx.shadowBlur = 8; ctx.shadowColor = p.c;
        ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        if (p.t >= 1) pkts.splice(i, 1);
      }
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 25 || n.x > cv.width - 25) n.vx *= -1;
        if (n.y < 25 || n.y > cv.height - 25) n.vy *= -1;
        ctx.shadowBlur = 12; ctx.shadowColor = n.c;
        ctx.fillStyle = n.c;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(224,240,255,0.8)';
        ctx.font = '9px Share Tech Mono,monospace';
        ctx.textAlign = 'center';
        ctx.fillText(n.n, n.x, n.y + n.r + 12);
      });
      requestAnimationFrame(draw);
    }
    draw();
  } catch (_) {}
}

// ─── Globe ───
function initGlobe(): void {
  try {
    const cv = $('globe-cvs') as HTMLCanvasElement;
    const ctx = cv.getContext('2d')!;
    const resize = () => { cv.width = cv.offsetWidth; cv.height = Math.min(cv.offsetWidth * 0.6, 420); };
    resize();
    new ResizeObserver(resize).observe(cv);

    const ATTACKS = [
      [-1, 37, 51, 0], [-1, 37, 48, 2], [-1, 37, 40, -74],
      [37, -122, 51, 0], [35, 139, 48, 2], [40, -74, 55, 37],
      [23, 113, 37, -122], [55, 37, -33, 151], [51, 0, 23, 113], [48, 2, -1, 37],
    ];

    const CITIES = [
      { name: 'Dodoma', lat: -1, lon: 37, home: true },
      { name: 'London', lat: 51, lon: 0 }, { name: 'New York', lat: 40, lon: -74 },
      { name: 'Tokyo', lat: 35, lon: 139 }, { name: 'Paris', lat: 48, lon: 2 },
      { name: 'Moscow', lat: 55, lon: 37 }, { name: 'Sydney', lat: -33, lon: 151 },
      { name: 'S.Francisco', lat: 37, lon: -122 }, { name: 'Beijing', lat: 39, lon: 116 },
    ];

    let rot = 0;
    const arcs = ATTACKS.map(a => ({
      lat1: a[0], lon1: a[1], lat2: a[2], lon2: a[3],
      progress: Math.random(), speed: .003 + Math.random() * .004,
      color: a[0] === -1 && a[1] === 37 ? '#00ff88' : '#ff2244',
    }));

    const project = (lat: number, lon: number, cx: number, cy: number, R: number, rotOff: number) => {
      const phi = (90 - lat) * Math.PI / 180;
      const lam = (lon + rotOff * 180 / Math.PI) * Math.PI / 180;
      const x3 = R * Math.sin(phi) * Math.cos(lam);
      const y3 = R * Math.cos(phi);
      const z3 = R * Math.sin(phi) * Math.sin(lam);
      return { x: cx + x3, y: cy - y3, z: z3, vis: z3 > -R * 0.15 };
    };

    const arcPoints = (lat1: number, lon1: number, lat2: number, lon2: number, steps: number) => {
      const pts: { la: number; lo: number }[] = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        pts.push({ la: lat1 + (lat2 - lat1) * t, lo: lon1 + (lon2 - lon1) * t });
      }
      return pts;
    };

    let hovered: typeof CITIES[number] | null = null;
    cv.addEventListener('mousemove', (e) => {
      const rect = cv.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const cx = cv.width / 2, cy = cv.height / 2, R = Math.min(cv.width, cv.height) * 0.42;
      hovered = null;
      CITIES.forEach(city => {
        const p = project(city.lat, city.lon, cx, cy, R, rot);
        if (p.vis && Math.hypot(p.x - mx, p.y - my) < 16) hovered = city;
      });
    });

    function draw(): void {
      const W = cv.width, H = cv.height, cx = W / 2, cy = H / 2;
      const R = Math.min(W, H) * 0.42;
      ctx.clearRect(0, 0, W, H);

      const grd = ctx.createRadialGradient(cx, cy, R * .7, cx, cy, R * 1.3);
      grd.addColorStop(0, 'rgba(0,212,255,0)');
      grd.addColorStop(1, 'rgba(0,212,255,0.06)');
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2); ctx.fill();

      const bg = ctx.createRadialGradient(cx - R * .3, cy - R * .3, R * .1, cx, cy, R);
      bg.addColorStop(0, '#0a1e38');
      bg.addColorStop(1, '#020810');
      ctx.fillStyle = bg;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(0,212,255,0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath(); let first = true;
        for (let lon = -180; lon <= 180; lon += 5) {
          const p = project(lat, lon, cx, cy, R, rot);
          if (!p.vis) { first = true; continue; }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.07)'; ctx.lineWidth = .7; ctx.stroke();
      }
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath(); let first = true;
        for (let lat = -90; lat <= 90; lat += 5) {
          const p = project(lat, lon, cx, cy, R, rot);
          if (!p.vis) { first = true; continue; }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.07)'; ctx.lineWidth = .7; ctx.stroke();
      }

      arcs.forEach(arc => {
        arc.progress += arc.speed;
        if (arc.progress > 1.5) arc.progress = 0;
        const pts = arcPoints(arc.lat1, arc.lon1, arc.lat2, arc.lon2, 60);
        const end = Math.min(Math.floor(arc.progress * 60), 60);
        const start = Math.max(0, end - 20);
        ctx.beginPath(); let first = true;
        for (let i = start; i <= end; i++) {
          const p = project(pts[i].la, pts[i].lo, cx, cy, R, rot);
          if (!p.vis) { first = true; continue; }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.strokeStyle = arc.color;
        ctx.lineWidth = arc.color === '#00ff88' ? 2 : 1.5;
        ctx.shadowBlur = 8; ctx.shadowColor = arc.color; ctx.stroke(); ctx.shadowBlur = 0;
        if (end > 0 && end <= 60) {
          const hp = project(pts[end].la, pts[end].lo, cx, cy, R, rot);
          if (hp.vis) {
            ctx.fillStyle = arc.color; ctx.shadowBlur = 12; ctx.shadowColor = arc.color;
            ctx.beginPath(); ctx.arc(hp.x, hp.y, 3, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
          }
        }
      });

      CITIES.forEach(city => {
        const p = project(city.lat, city.lon, cx, cy, R, rot);
        if (!p.vis) return;
        const col = city.home ? '#00ff88' : 'rgba(0,212,255,0.9)';
        const sz = city.home ? 6 : 4;
        if (city.home) {
          ctx.strokeStyle = 'rgba(0,255,136,0.3)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(p.x, p.y, sz + 6 + Math.sin(Date.now() / 400) * 4, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = col; ctx.shadowBlur = 10; ctx.shadowColor = col;
        ctx.beginPath(); ctx.arc(p.x, p.y, sz, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
        ctx.fillStyle = hovered === city ? '#fff' : 'rgba(224,240,255,0.75)';
        ctx.font = `${city.home ? 'bold ' : ''}10px Share Tech Mono,monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(city.name, p.x, p.y - sz - 5);
      });

      ctx.fillStyle = 'rgba(0,255,136,0.7)';
      ctx.font = '9px Share Tech Mono,monospace';
      ctx.textAlign = 'left';
      ctx.fillText('● Dodoma (Origin)', 14, H - 28);
      ctx.fillStyle = 'rgba(255,34,68,0.7)';
      ctx.fillText('─ Incoming Attacks', 14, H - 16);

      rot += .004;
      requestAnimationFrame(draw);
    }
    draw();
  } catch (_) {}
}

// ─── Terminal ───
function initTerminal(): void {
  const history: string[] = [];
  let histIdx = -1;

  const tPrint = (html: string): void => {
    const el = $('term-out');
    el.innerHTML += `<div>${html}</div>`;
    el.scrollTop = el.scrollHeight;
  };

  const bootLines = [
    '<span class="d">╔══════════════════════════════════════════╗</span>',
    '<span class="d">║  </span><span class="c">Bmb-Tech v2.5</span><span class="d"> · </span><span class="g">Security Terminal</span><span class="d">    ║</span>',
    '<span class="d">║  Arusha University of Science & Technology  ║</span>',
    '<span class="d">╚══════════════════════════════════════════╝</span>',
    '<span class="d">System ready. Type </span><span class="c">\'help\'</span><span class="d"> for commands.</span>',
    '',
  ];
  bootLines.forEach((l, i) => setTimeout(() => tPrint(l), i * 100));
  setTimeout(() => ($('term-in') as HTMLInputElement).focus(), bootLines.length * 100 + 200);

  const runCmd = (cmd: string): void => {
    tPrint(`<span class="g">bmb@bmbtech:~$</span> <span class="c">${esc(cmd)}</span>`);
    switch (cmd.toLowerCase().trim()) {
      case 'help':
        tPrint('<span class="d">┌── Available Commands ─────────────────┐</span>');
        [['help', 'Show this help'], ['whoami', 'Profile information'], ['projects', 'List projects'], ['skills', 'Technical skills'], ['contact', 'Contact details'], ['github', 'Open GitHub'], ['resume', 'Generate PDF'], ['clear', 'Clear terminal'], ['ls', 'List files'], ['date', 'Current date/time']].forEach(([c, d]) =>
          tPrint(`<span class="d">│</span> <span class="c">${c.padEnd(10)}</span><span class="d">─</span> <span class="w">${d}</span>`));
        tPrint('<span class="d">└──────────────────────────────────────┘</span>');
        break;
      case 'whoami':
        [['name', 'Bmb Tech'], ['alias', 'Bd-Mutant7'], ['university', 'Arusha University of Science and Technology'], ['degree', 'BSc Computer Science (ongoing)'], ['focus', 'Network Security · Privacy · Ethical Hacking'], ['github', 'github.com/Bd-Mutant7'], ['location', 'Tanzania'], ['status', 'Open to opportunities ●']].forEach(([k, v]) =>
          tPrint(`  <span class="g">${k.padEnd(12)}</span><span class="d">:</span> <span class="y">${v}</span>`));
        break;
      case 'projects':
        tPrint('<span class="c">Live Projects:</span>');
        PROJECTS.forEach((p, i) => tPrint(`  <span class="g">${String(i + 1).padStart(2, '0')}.</span> <span class="y">${p.name}</span> <span class="d">→</span> <span class="c">${p.url}</span>`));
        break;
      case 'skills':
        tPrint('<span class="c">Technical Skills:</span>');
        [['Security', 'Wireshark, Nmap, Metasploit, Burp Suite, Kali Linux'], ['Programming', 'Python 85% · Bash 82% · JavaScript 75% · C/C++ 60%'], ['Domains', 'Network Security, Threat Analysis, Privacy Eng, OSINT'], ['Certs', 'Google Cyber, ISC² CC, Cisco CyberOps, EHE']].forEach(([k, v]) =>
          tPrint(`  <span class="g">${k.padEnd(12)}</span><span class="d">:</span> <span class="w">${v}</span>`));
        break;
      case 'contact':
        tPrint('<span class="c">Contact:</span>');
        [['GitHub', 'github.com/novaxmd'], ['Email', 'spicezke@gmail.com'], ['LinkedIn', 'linkedin.com/in/bmb-tech'], ['Location', 'Tanzania, East Africa']].forEach(([k, v]) =>
          tPrint(`  <span class="g">${k.padEnd(10)}</span><span class="d">:</span> <span class="y">${v}</span>`));
        break;
      case 'github':
        tPrint('<span class="d">Opening github.com/Bd-Mutant7…</span>');
        setTimeout(() => { window.open('https://github.com/Bd-Mutant7', '_blank'); tPrint('<span class="g">✓ Opened in new tab</span>'); }, 300);
        break;
      case 'resume':
        tPrint('<span class="d">Generating resume…</span>');
        setTimeout(() => { tPrint('<span class="g">✓ Ready. Opening…</span>'); showResume(); }, 500);
        break;
      case 'clear': $('term-out').innerHTML = ''; break;
      case 'ls': tPrint('<span class="d">projects/&nbsp;&nbsp;skills/&nbsp;&nbsp;certs/&nbsp;&nbsp;blog/&nbsp;&nbsp;resume.pdf&nbsp;&nbsp;README.md</span>'); break;
      case 'date': tPrint(`<span class="d">${new Date().toUTCString()}</span>`); break;
      default: tPrint(`<span class="r">bash: ${esc(cmd)}: command not found — try 'help'</span>`);
    }
  };

  const input = $('term-in') as HTMLInputElement;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const v = input.value.trim();
      if (v) { history.unshift(v); histIdx = -1; runCmd(v); }
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx]; }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; input.value = history[histIdx]; } else { histIdx = -1; input.value = ''; }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const cmds = ['help', 'whoami', 'projects', 'skills', 'contact', 'github', 'resume', 'clear', 'ls'];
      const m = cmds.find(c => c.startsWith(input.value));
      if (m) input.value = m;
    }
  });

  $('hero').addEventListener('click', () => input.focus());
}

// ─── Packet Sniffer ───
function initPacketSniffer(): void {
  let capIv: number | null = null;
  const PROTOS = ['TCP', 'UDP', 'HTTP', 'DNS', 'ICMP', 'TLS', 'SSH'];
  const PCL: Record<string, string> = { TCP: 'tc', UDP: 'tu', HTTP: 'th', DNS: 'td2c', ICMP: 'ti', TLS: 'tc', SSH: 'tu' };
  const PINF: Record<string, string[]> = {
    TCP: ['SYN', 'ACK', 'SYN-ACK', 'FIN-ACK'], UDP: ['Datagram', 'Query'],
    HTTP: ['GET /index.html', 'POST /api', '200 OK'], DNS: ['Query A github.com', 'Response 140.82.112.3'],
    ICMP: ['Echo request', 'Echo reply'], TLS: ['Client Hello', 'Server Hello'], SSH: ['Key Exchange', 'Auth'],
  };
  const rIP = (): string => Array(4).fill(0).map(() => Math.floor(Math.random() * 254 + 1)).join('.');
  const rT = (): string => new Date().toLocaleTimeString('en', { hour12: false }) + '.' + String(Math.floor(Math.random() * 999)).padStart(3, '0');

  const addPkt = (t: string, s: string, d: string, p: string, l: number, info: string): void => {
    const tb = $('pkt-body');
    const tr = document.createElement('tr');
    tr.className = 'nr';
    tr.innerHTML = `<td>${t}</td><td>${s}</td><td>${d}</td><td class="${PCL[p] || ''}">${p}</td><td>${l}</td><td>${info}</td>`;
    tb.insertBefore(tr, tb.firstChild);
    if (tb.children.length > 80) tb.removeChild(tb.lastChild!);
  };

  $('cap-start').addEventListener('click', () => {
    if (capIv) return;
    $('cap-st').innerHTML = '<span style="color:var(--green)"><i class="fa-solid fa-circle"></i> CAPTURING</span>';
    capIv = window.setInterval(() => {
      const p = PROTOS[Math.floor(Math.random() * PROTOS.length)];
      const info = PINF[p][Math.floor(Math.random() * PINF[p].length)];
      addPkt(rT(), rIP(), rIP(), p, Math.floor(Math.random() * 1400 + 40), info);
    }, 380);
  });

  $('cap-stop').addEventListener('click', () => {
    clearInterval(capIv!); capIv = null;
    $('cap-st').innerHTML = '<span style="color:var(--red)"><i class="fa-solid fa-square"></i> STOPPED</span>';
  });

  $('cap-clear').addEventListener('click', () => {
    $('pkt-body').innerHTML = '';
    $('cap-st').innerHTML = '<i class="fa-solid fa-circle"></i> IDLE';
  });
}

// ─── Blog ───
function initBlog(): void {
  let blogTag = 'all';

  const render = (): void => {
    const q = ($('blog-s') as HTMLInputElement).value.toLowerCase();
    const list = POSTS.filter(p => (blogTag === 'all' || p.tag.includes(blogTag)) && (!q || (p.title + p.excerpt + p.tag).toLowerCase().includes(q)));
    $('blog-grid').innerHTML = list.map(p => `<div class="blog-card rv"><span class="btag"><i class="fa-solid fa-tag"></i> ${p.tag}</span><h3 class="btitle">${p.title}</h3><p class="bex">${p.excerpt}</p><div class="bm"><span><i class="fa-regular fa-calendar"></i> ${p.date}</span><span><i class="fa-solid fa-clock"></i> ${p.read}</span></div></div>`).join('') || '<p style="grid-column:1/-1;text-align:center;font-family:Share Tech Mono,monospace;color:var(--t3);font-size:.78rem;padding:2rem">No posts match.</p>';
    doReveal();
  };

  document.querySelectorAll('[data-bt]').forEach(btn => {
    btn.addEventListener('click', () => {
      blogTag = (btn as HTMLElement).dataset.bt!;
      document.querySelectorAll('[data-bt]').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      render();
    });
  });

  ($('blog-s') as HTMLInputElement).addEventListener('input', render);
  render();
}

// ─── AI Chat ───
function initAI(): void {
  const aiReply = (q: string): string => {
    const l = q.toLowerCase();
    if (/hello|hi|hey/.test(l)) return "Hello! How can I help you learn about Bmb's work?";
    if (/who|about|bmb|tech|background/.test(l)) return KB.who;
    if (/project|repo|build|movie|tiktok|instagram|music|url|ai/.test(l)) return KB.projects;
    if (/skill|tool|use|wireshark|nmap|python|kali/.test(l)) return KB.skills;
    if (/cert|qualif/.test(l)) return KB.certs;
    if (/contact|hire|email|reach/.test(l)) return KB.contact;
    return "I can tell you about Bmb's projects, skills, certifications, or contact info.";
  };

  const addMsg = (txt: string, role: 'a' | 'u'): void => {
    const msgs = $('ai-msgs');
    const d = document.createElement('div');
    d.className = `msg m${role}`;
    const av = role === 'a'
      ? '<i class="fa-solid fa-robot" style="font-size:.6rem;color:#020408"></i>'
      : '<i class="fa-solid fa-user" style="font-size:.6rem;color:var(--cyan)"></i>';
    d.innerHTML = `<div class="mav">${av}</div><div class="mb">${esc(txt)}</div>`;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  };

  const send = (): void => {
    const input = $('ai-in') as HTMLInputElement;
    const q = input.value.trim();
    if (!q) return;
    addMsg(q, 'u');
    input.value = '';
    ($('ai-quick') as HTMLElement).style.display = 'none';
    setTimeout(() => addMsg(aiReply(q), 'a'), 600);
  };

  $('ai-btn').addEventListener('click', () => {
    const panel = $('ai-panel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) setTimeout(() => ($('ai-in') as HTMLInputElement).focus(), 100);
  });

  $('ai-close').addEventListener('click', () => $('ai-panel').classList.remove('open'));
  $('ai-send').addEventListener('click', send);
  ($('ai-in') as HTMLInputElement).addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });

  document.querySelectorAll('[data-q]').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = (btn as HTMLElement).dataset.q!;
      addMsg(q, 'u');
      ($('ai-quick') as HTMLElement).style.display = 'none';
      setTimeout(() => addMsg(aiReply(q), 'a'), 600);
    });
  });
}

// ─── Resume ───
function showResume(): void {
  const txt = `Bmb Tech
=====================================
Cybersecurity Student & Researcher
Arusha University of Science and Technology
BSc Computer Science
github.com/Bd-Mutant7 | Tanzania

PROFILE
-------
CS student specialising in cybersecurity,
network security and privacy engineering.

LIVE PROJECTS
-------------
1. Bmb Project    — bmbtech.online
2. Bmb Movies     — bmb-movies.vercel.app
3. Bmb TikTok     — bmb-tiktok.vercel.app
4. Bmb Instagram  — instagram-download.vercel.app
5. Bmb Music      — bmb-music.zone.id
6. Bmb Url        — bmburl.zone.id
7. Bmb AI         — bmb-ai.vercel.app

SKILLS
------
Security : Wireshark, Nmap, Metasploit,
           Burp Suite, Kali Linux, OWASP
Languages: Python 85% | Bash 82% |
           JavaScript 75% | C/C++ 60%
Domains  : Network Security, Threat
           Analysis, Privacy Engineering

CERTIFICATIONS
--------------
* Google Cybersecurity Certificate (2024)
* ISC2 Certified in Cybersecurity (2024)
* Cisco CyberOps Associate (2024)
* EC-Council EHE (2023)
* Bmb Channel SOC Level 1 (2023)
* CompTIA Security+ (In Progress)

CONTACT
-------
GitHub: github.com/novaxmd
Location: Tanzania, East Africa`;

  $('rprev').textContent = txt;
  $('rmod').classList.add('show');
}

function initResume(): void {
  $('resume-btn').addEventListener('click', showResume);
  $('r-cl').addEventListener('click', () => $('rmod').classList.remove('show'));
  $('rmod').addEventListener('click', (e) => { if (e.target === e.currentTarget) $('rmod').classList.remove('show'); });

  $('r-dl').addEventListener('click', () => {
    try {
      const { jsPDF } = (window as any).jspdf;
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      doc.setFillColor(2, 4, 8); doc.rect(0, 0, 210, 297, 'F');
      doc.setFillColor(10, 22, 40); doc.rect(0, 0, 210, 48, 'F');
      doc.setTextColor(0, 212, 255); doc.setFontSize(20); doc.setFont('helvetica', 'bold'); doc.text('Bmb Tech', 15, 20);
      doc.setFontSize(10); doc.setTextColor(0, 255, 136); doc.text('Cybersecurity Student & Researcher', 15, 29);
      doc.setFontSize(8.5); doc.setTextColor(107, 143, 168); doc.text('Arusha University of Science and Technology  |  github.com/novaxmd  |  Tanzania', 15, 38);
      let y = 56;
      const sec = (t: string) => { doc.setTextColor(0, 212, 255); doc.setFontSize(9.5); doc.setFont('helvetica', 'bold'); doc.text(t, 15, y); doc.setDrawColor(0, 70, 100); doc.setLineWidth(.3); doc.line(15, y + 2, 195, y + 2); y += 10; };
      const line = (t: string, indent = 15) => { doc.setTextColor(200, 220, 235); doc.setFontSize(8.5); doc.setFont('helvetica', 'normal'); const lines = doc.splitTextToSize(t, 175); doc.text(lines, indent, y); y += lines.length * 5 + 1; };
      const kv = (k: string, v: string) => { doc.setTextColor(0, 255, 136); doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.text(k + ':', 15, y); doc.setTextColor(200, 220, 235); doc.setFont('helvetica', 'normal'); doc.text(v, 52, y); y += 6; };
      sec('PROFILE'); line('Passionate CS student specialising in cybersecurity, network security and privacy engineering. Building live web applications and security research tools.'); y += 2;
      sec('EDUCATION'); kv('University', 'Arusha University of Science and Technology'); kv('Degree', 'BSc Computer Science (Ongoing)'); kv('Focus', 'Cybersecurity, Network Security, Privacy Engineering'); y += 2;
      sec('TECHNICAL SKILLS'); kv('Security Tools', 'Wireshark, Nmap, Metasploit, Burp Suite, Kali Linux'); kv('Programming', 'Python (85%), Bash (82%), JavaScript (75%), C/C++ (60%)'); kv('Domains', 'Network Security, Threat Analysis, OSINT, Privacy Engineering'); y += 2;
      sec('LIVE PROJECTS');
      PROJECTS.forEach(p => { doc.setTextColor(0, 255, 136); doc.setFontSize(8.5); doc.setFont('helvetica', 'bold'); doc.text('* ' + p.name + ' — ' + p.url, 15, y); y += 5; line(p.desc, 20); }); y += 2;
      sec('CERTIFICATIONS');
      ['Google Cybersecurity Professional Certificate (2024)', 'ISC2 Certified in Cybersecurity CC (2024)', 'Cisco CyberOps Associate CBROPS (2024)', 'EC-Council EHE (2023)', 'Bmb Channel Pre-Security & SOC Level 1 (2023)', 'CompTIA Security+ SY0-701 (In Progress)'].forEach(c => line('* ' + c, 18));
      doc.save('bmb_tech_Resume.pdf');
    } catch (_) {
      alert('PDF download ready — check your browser pop-up settings.');
    }
  });
}

// ─── Contact Form ───
function initContact(): void {
  $('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector('.btn-g')!;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> SENT!';
    btn.style.borderColor = 'var(--green)';
    btn.style.color = 'var(--green)';
    setTimeout(() => {
      btn.innerHTML = 'SEND MESSAGE <i class="fa-solid fa-paper-plane"></i>';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 3000);
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  initProgress();
  doReveal();
  renderProjects();
  buildSkills();
  buildRadar();
  initNetworkMap();
  initGlobe();
  initTerminal();
  initPacketSniffer();
  initBlog();
  initAI();
  initResume();
  initContact();
});
