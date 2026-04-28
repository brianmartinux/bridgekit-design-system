import { Button } from './components/Button';
import { StatusBadge } from './components/StatusBadge';
import { ReviewQueue } from './examples/ReviewQueue';
import { componentParityModel } from './tokens/tokens';
import './app.css';

const repoUrl = import.meta.env.VITE_REPO_URL;

const componentHighlights = [
  {
    name: 'Button',
    detail: 'Explicit variants, sizes, loading state, and icon slots that stay text-safe.'
  },
  {
    name: 'StatusBadge',
    detail: 'Status tokens with labels and short codes so the state never depends on color alone.'
  },
  {
    name: 'DataTable + Drawer',
    detail: 'A small operational pattern for selection, details, and action feedback.'
  }
];

const aiWorkflowNotes = [
  'Used AI to accelerate early scaffolding, story outlines, and prop naming pass.',
  'Kept design judgment, interaction scope, and accessibility decisions as explicit human choices.',
  'Documented where the workflow should be reviewed rather than treated as source of truth.'
];

const documentationLinks = [
  { label: 'AI usage', href: '/docs/AI_USAGE.md' },
  { label: 'Figma-to-code parity', href: '/docs/figma-to-code-parity.md' },
  { label: 'Accessibility checklist', href: '/docs/accessibility-checklist.md' },
  { label: 'Component API', href: '/docs/component-api.md' },
  { label: 'Design decisions', href: '/docs/design-decisions.md' }
];

export default function App() {
  return (
    <div className="landing-shell">
      <header className="landing-header">
        <a className="landing-mark" href="#top">
          BridgeKit
        </a>
        <nav className="landing-nav" aria-label="Project sections">
          <a href="#demonstrates">Demonstrates</a>
          <a href="#system">System</a>
          <a href="#review-queue">Review Queue</a>
          <a href="#parity">Parity</a>
          <a href="#ai">AI usage</a>
          <a href="#links">Links</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <p className="landing-eyebrow">Portfolio artifact</p>
            <h1>BridgeKit</h1>
            <p className="hero__subtitle">
              An AI-assisted design systems workflow demo for moving from design intent to reusable, documented
              component behavior.
            </p>
            <div className="hero__actions">
              <Button onClick={() => window.location.assign('/storybook/')} trailingIcon="→">
                Open Storybook
              </Button>
              <Button variant="secondary" onClick={() => window.location.assign('/docs/')}>
                Open docs
              </Button>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Project snapshot">
            <div className="hero__metric-grid">
              <div className="hero__metric-card">
                <span className="hero__metric-label">Scope</span>
                <strong>Small, credible demo system</strong>
              </div>
              <div className="hero__metric-card">
                <span className="hero__metric-label">Focus</span>
                <strong>Reusable states, docs, and parity thinking</strong>
              </div>
            </div>
            <div className="hero__status-row">
              <StatusBadge status="new" />
              <StatusBadge status="inReview" />
              <StatusBadge status="approved" />
            </div>
          </aside>
        </section>

        <section className="landing-section" id="demonstrates">
          <div className="section-heading">
            <p className="landing-eyebrow">1. What this demonstrates</p>
            <h2>Component architecture with enough product realism to be useful.</h2>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <h3>React + TypeScript structure</h3>
              <p>Components live in clear folders with props, states, and stories instead of loose one-off UI.</p>
            </article>
            <article className="info-card">
              <h3>Documentation habits</h3>
              <p>Storybook, markdown notes, and prop mapping are treated as part of the artifact, not cleanup work.</p>
            </article>
            <article className="info-card">
              <h3>Design-to-code parity</h3>
              <p>Figma-style properties are translated into explicit React APIs so behavior stays inspectable.</p>
            </article>
          </div>
        </section>

        <section className="landing-section" id="system">
          <div className="section-heading">
            <p className="landing-eyebrow">2. Component system</p>
            <h2>Reusable primitives with practical states and restrained scope.</h2>
          </div>
          <div className="system-layout">
            <div className="component-list">
              {componentHighlights.map((item) => (
                <article className="component-card" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <aside className="system-note">
              <p>
                The system intentionally stays small: `Button`, `Input`, `Select`, `StatusBadge`, `FilterBar`,
                `DataTable`, `Drawer`, and `Toast`.
              </p>
              <p>
                That keeps the artifact focused on interaction patterns and documentation quality instead of surface
                area.
              </p>
            </aside>
          </div>
        </section>

        <section className="landing-section landing-section--feature" id="review-queue">
          <div className="section-heading">
            <p className="landing-eyebrow">3. Review Queue demo</p>
            <h2>A compact workflow that shows the components working together.</h2>
          </div>
          <ReviewQueue />
        </section>

        <section className="landing-section" id="parity">
          <div className="section-heading">
            <p className="landing-eyebrow">4. Figma-to-code parity model</p>
            <h2>Variant logic and component states map cleanly from design properties to code props.</h2>
          </div>
          <div className="parity-grid">
            {componentParityModel.map((item) => (
              <article key={item.figmaProperty} className="parity-card">
                <h3>{item.figmaProperty}</h3>
                <p>
                  <strong>{item.reactProp}</strong>
                </p>
                <p>{item.example}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section" id="ai">
          <div className="section-heading">
            <p className="landing-eyebrow">5. How AI was used</p>
            <h2>As a workflow accelerator, not a replacement for design judgment.</h2>
          </div>
          <div className="info-grid">
            {aiWorkflowNotes.map((note) => (
              <article className="info-card" key={note}>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section" id="links">
          <div className="section-heading">
            <p className="landing-eyebrow">6. Links</p>
            <h2>Storybook, documentation, and repository handoff points.</h2>
          </div>
          <div className="link-grid">
            <article className="link-card">
              <h3>Storybook</h3>
              <p>Inspect component states and the Review Queue example in isolation.</p>
              <a href="/storybook/">Open Storybook</a>
            </article>
            <article className="link-card">
              <h3>Documentation</h3>
              <p>Read the working notes behind the demo system.</p>
              <ul className="link-list">
                {documentationLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </article>
            <article className="link-card">
              <h3>GitHub</h3>
              <p>Set `VITE_REPO_URL` when publishing to turn this into a public repo link.</p>
              {repoUrl ? (
                <a href={repoUrl} target="_blank" rel="noreferrer">
                  Open repository
                </a>
              ) : (
                <span className="link-card__muted">Repository URL appears here after publishing.</span>
              )}
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
