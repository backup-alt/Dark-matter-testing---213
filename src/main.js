import './style.css'
import {
  updatedAt, tiers, freeModels, goModels, consoleModels,
  consoleFamilies, deprecatedModels, sources,
} from './data.js'

const app = document.getElementById('app')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const paidCount = consoleModels.filter((m) => m.family !== 'Free').length
const goPaidCount = goModels.filter((m) => m.family !== 'Free').length

app.innerHTML = `
  <header class="site">
    <div class="wrap site-inner">
      <a class="brand" href="#top"><span class="logo-mark" aria-hidden="true"></span>opencode<span class="brand-sub">/models</span></a>
      <nav class="tier-nav">
        <a href="#free"><span class="idx">[01]</span>Free</a>
        <a href="#go"><span class="idx">[02]</span>Go</a>
        <a href="#console"><span class="idx">[03]</span>Pay-as-you-go</a>
        <a href="#byok"><span class="idx">[04]</span>BYOK</a>
        <a href="#deprecated"><span class="idx">[05]</span>Deprecated</a>
      </nav>
    </div>
  </header>

  <div class="wrap" id="top">
    <div class="hero">
      <div class="term"><span class="prompt">$</span><span class="cmd">opencode models --all-tiers</span><span class="cursor" aria-hidden="true"></span></div>
      <h1>Every OpenCode model.<br /><span class="accent">All tiers, one catalog.</span></h1>
      <p>Limited-time free models, Go subscriptions, Console pay-as-you-go pricing and bring-your-own-key providers — everything you can run through OpenCode, in one place.</p>
      <div class="stats">
        <span class="stat"><b>${freeModels.length}</b> free models</span>
        <span class="stat"><b>${goPaidCount}</b> Go models</span>
        <span class="stat"><b>${paidCount}</b> pay-as-you-go models</span>
        <span class="stat"><b>3</b> Go plans</span>
        <span class="stat">data: <b>${esc(updatedAt)}</b></span>
      </div>
    </div>

    <section id="tiers">
      <div class="sec-head">
        <span class="kicker">[01] Access tiers</span>
        <h2>Six ways to run a model</h2>
        <p>OpenCode is provider-agnostic. Pick a tier below — or mix them. When a paid limit runs out, the free models are always there.</p>
      </div>
      <div class="tier-grid">
        ${tiers.map((t) => `
          <div class="tier-card">
            <div class="row">
              <h3>${esc(t.name)}</h3>
              <span class="price" style="color:var(--${t.accent === 'free' ? 'green' : t.accent === 'console' ? 'blue' : t.accent === 'byok' ? 'amber' : 'orange'})">${esc(t.price)}</span>
            </div>
            <span class="badge ${t.accent}">${esc(t.badge)}</span>
            <p class="desc">${esc(t.desc)}</p>
            <ul>${t.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="free">
      <div class="sec-head">
        <span class="kicker">[02] Tier 1 · Free</span>
        <h2>Limited-time free models</h2>
        <p>${freeModels.length} models currently free on OpenCode, including stealth models and NVIDIA trial endpoints. Privacy terms vary — check the notes. Hide them all with <span class="mono" style="color:var(--text)">OPENCODE_DISABLE_FREE_MODELS=1</span>.</p>
      </div>
      <div class="free-grid">
        ${freeModels.map((m) => `
          <div class="free-card">
            <div class="top">
              <h3>${esc(m.name)}</h3>
              <span class="badge free">Free</span>
            </div>
            <span class="mid">${esc(m.id)}</span>
            <p>${esc(m.note)}</p>
            <div class="tags">
              ${m.tags.map((t) => {
                const cls = /zero retention/i.test(t) || /req\/day/i.test(t) ? 'green'
                  : /stealth/i.test(t) || /nvidia/i.test(t) || /decision/i.test(t) || /vision/i.test(t) ? 'blue'
                  : /train|region|confidential|china|go only/i.test(t) ? 'red' : 'amber'
                return `<span class="tag ${cls}">${esc(t)}</span>`
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="callout">
        <b>Privacy highlights.</b> GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free and MiniMax M3.1 Flash Free follow a <b>zero-retention policy</b>. Big Pickle, Iceman, Inkling 2, Flint 40B and MiMo may use free-period data to improve their models. NVIDIA Nemotron endpoints are <b>trial use only — never send personal or confidential data</b>.
      </div>
    </section>

    <section id="go">
      <div class="sec-head">
        <span class="kicker">[03] Tier 2 · Subscription</span>
        <h2>OpenCode Go — Go, Go Plus &amp; Go Teams</h2>
        <p>Fixed monthly price, generous usage on ${goPaidCount} curated models plus ${goModels.length - goPaidCount} free ones. Limits are monthly dollar allowances per model, metered in 5-hour (20%), weekly (50%) and monthly (100%) windows. Toggle a plan to compare limits.</p>
      </div>
      <div class="plan-toggle" id="go-toggle">
        <button data-plan="go" class="active">Go · $10/mo</button>
        <button data-plan="plus">Go Plus · $40/mo</button>
        <button data-plan="teams">Go Teams · $20/member/mo</button>
      </div>
      <div class="table-scroll" id="go-table"></div>
      <div class="callout">
        <b>Extra Usage.</b> Add credit and enable Extra Usage so requests fall back to pay-as-you-go billing when a Go limit is reached. DeepSeek peak hours: 01:00–04:00 &amp; 06:00–10:00 UTC, Mon–Fri. Muse Spark Contributor models need the <b>“allow paid endpoints that train on request data”</b> setting and are region-limited. Token prices are identical across Go, Go Plus and Go Teams.
      </div>
    </section>

    <section id="console">
      <div class="sec-head">
        <span class="kicker">[04] Tier 3 · Pay-as-you-go</span>
        <h2>Console — pay per request</h2>
        <p>Add credits to your OpenCode Console account and pay per 1M tokens, sold at cost (a 4.6% + $0.31 processing fee applies to credit purchases). Every text model also works through the other APIs — Console translates automatically. Includes the free models above.</p>
      </div>
      <div class="controls">
        <input class="search" id="console-search" type="search" placeholder="Search models or IDs…" />
        <div class="chips" id="console-chips"></div>
        <span class="count-note" id="console-count"></span>
      </div>
      <div class="table-scroll" id="console-table"></div>
    </section>

    <section id="byok">
      <div class="sec-head">
        <span class="kicker">[05] Tier 4 · Bring your own key</span>
        <h2>Any provider, any model</h2>
        <p>Console and Go are optional. OpenCode connects directly to any provider with your own API key, including:</p>
      </div>
      <div class="tier-grid">
        ${[
          ['OpenAI', 'GPT & Codex families, o-series reasoning models'],
          ['Anthropic', 'Claude Opus / Sonnet / Haiku via native API'],
          ['Google', 'Gemini models via AI Studio or Vertex AI'],
          ['OpenRouter', 'Hundreds of gateway-routed models'],
          ['AWS Bedrock / Azure', 'Enterprise-hosted Claude, GPT & Llama'],
          ['Local models', 'Ollama, LM Studio, llama.cpp — completely free to run'],
        ].map(([n, d]) => `
          <div class="tier-card">
            <div class="row"><h3>${esc(n)}</h3><span class="badge byok">BYOK</span></div>
            <p class="desc">${esc(d)}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <section id="deprecated">
      <div class="sec-head">
        <span class="kicker">[06] Retired</span>
        <h2>Deprecated models</h2>
        <p>Models that have been removed or have scheduled removal dates. Listed for reference.</p>
      </div>
      <div class="dep-list">
        ${deprecatedModels.map((d) => `
          <div class="dep-chip"><s>${esc(d.name)}</s> <span>· ${esc(d.date)}</span></div>
        `).join('')}
      </div>
    </section>

    <footer class="site">
      <div class="footer-grid">
        <div>
          <a class="brand" href="#top"><span class="logo-mark" aria-hidden="true"></span>opencode<span class="brand-sub">/models</span></a>
          <p>Unofficial catalog. Data transcribed from the official OpenCode documentation on ${esc(updatedAt)} — pricing and model lists change often, so always confirm at the source. Questions → help@anoma.ly.</p>
        </div>
        <div class="links">
          ${sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('')}
        </div>
      </div>
    </footer>
  </div>
`

/* ---------- Go table with plan toggle ---------- */
const goTable = document.getElementById('go-table')
const goToggle = document.getElementById('go-toggle')
const planMeta = {
  go: { label: 'Go', cls: 'plan-go' },
  plus: { label: 'Go Plus', cls: 'plan-plus' },
  teams: { label: 'Go Teams', cls: 'plan-plus' },
}
let currentPlan = 'go'

function renderGo() {
  const meta = planMeta[currentPlan]
  const rows = goModels.map((m) => {
    const limit = m.limits[currentPlan]
    const isFree = m.family === 'Free'
    const pct = isFree ? 100 : Math.min(100, Math.round((limit / 240) * 100))
    return `
      <tr>
        <td class="name-cell">
          <b>${esc(m.name)}</b>
          <span class="mid">${esc(m.id)} · ${esc(m.family)}</span>
          ${m.note ? `<div class="sub">${esc(m.note)}</div>` : ''}
        </td>
        <td class="mono">${esc(m.in)}</td>
        <td class="mono">${esc(m.out)}</td>
        <td class="mono">${esc(m.cr)}</td>
        <td class="mono">${m.cw ? esc(m.cw) : '—'}</td>
        <td>
          <div class="limit-bar">
            <span class="val ${isFree ? 'price-free' : ''}">${isFree ? '∞' : '$' + limit}</span>
            <span class="track"><span class="fill" style="width:${pct}%"></span></span>
          </div>
        </td>
        <td class="mono" style="color:var(--muted)">${m.req5h[0] === null ? 'Unlimited' : Number(m.req5h[currentPlan === 'teams' ? 1 : 0]).toLocaleString()}</td>
      </tr>
    `
  }).join('')

  goTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Model</th><th>Input /1M</th><th>Output /1M</th><th>Cached read</th><th>Cached write</th>
          <th>Monthly limit — ${meta.label}</th><th>Est. req / 5h</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `
  goTable.className = `table-scroll ${meta.cls}`
}

goToggle.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-plan]')
  if (!btn) return
  currentPlan = btn.dataset.plan
  goToggle.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn))
  renderGo()
})
renderGo()

/* ---------- Console table with search & family filter ---------- */
const consoleTable = document.getElementById('console-table')
const searchInput = document.getElementById('console-search')
const chipsEl = document.getElementById('console-chips')
const countEl = document.getElementById('console-count')
let currentFamily = 'All'
let query = ''

chipsEl.innerHTML = consoleFamilies
  .map((f) => `<button class="chip ${f === 'All' ? 'active' : ''}" data-family="${esc(f)}">${esc(f)}</button>`)
  .join('')

function priceCell(v) {
  if (v === null) return '—'
  if (v === 'Free') return '<span class="price-free">Free</span>'
  return esc(v)
}

function renderConsole() {
  const filtered = consoleModels.filter((m) => {
    const famOk = currentFamily === 'All' || m.family === currentFamily
    const q = query.toLowerCase()
    const qOk = !q || m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q) || m.family.toLowerCase().includes(q)
    return famOk && qOk
  })
  countEl.textContent = `${filtered.length} of ${consoleModels.length} models`

  consoleTable.innerHTML = `
    <table>
      <thead>
        <tr><th>Model</th><th>Input /1M</th><th>Output /1M</th><th>Cached read</th><th>Cached write</th></tr>
      </thead>
      <tbody>
        ${filtered.map((m) => `
          <tr>
            <td class="name-cell">
              <b>${esc(m.name)}</b>
              <span class="mid">${esc(m.id)} · ${esc(m.family)}</span>
              ${m.dep ? `<span class="dep-pill">deprecated ${esc(m.dep)}</span>` : ''}
              ${m.note ? `<div class="sub">${esc(m.note)}</div>` : ''}
            </td>
            <td class="mono">
              ${m.rows.map((r) => `
                <div>${priceCell(r.in)}${r.ctx ? ` <span class="sub">${esc(r.ctx)}</span>` : ''}</div>
              `).join('')}
            </td>
            <td class="mono">${m.rows.map((r) => `<div>${priceCell(r.out)}</div>`).join('')}</td>
            <td class="mono">${m.rows.map((r) => `<div>${priceCell(r.cr)}</div>`).join('')}</td>
            <td class="mono">${m.rows.map((r) => `<div>${priceCell(r.cw)}</div>`).join('')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `
}

chipsEl.addEventListener('click', (e) => {
  const chip = e.target.closest('button[data-family]')
  if (!chip) return
  currentFamily = chip.dataset.family
  chipsEl.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === chip))
  renderConsole()
})

searchInput.addEventListener('input', () => {
  query = searchInput.value.trim()
  renderConsole()
})

renderConsole()
