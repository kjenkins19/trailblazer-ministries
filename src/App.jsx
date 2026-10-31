import React, { useState, useEffect } from 'react';
import {
  Compass,
  Heart,
  BookOpen,
  Users,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Search,
  Quote,
  ArrowRight,
  Flame,
  ShieldCheck,
  Menu,
  X,
  Mail,
  MapPin,
} from 'lucide-react';
import { siteContent } from './content/siteContent.js';

const PILLAR_ICONS = [Compass, Heart, BookOpen, Users];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaithCategory, setActiveFaithCategory] = useState('all');
  const [faithSearch, setFaithSearch] = useState('');
  const [expandAllFaith, setExpandAllFaith] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const {
    ministry,
    navigation,
    hero,
    purpose,
    leadership,
    statementOfFaith,
    community,
    connect,
  } = siteContent;

  const filteredArticles = statementOfFaith.articles.filter((article) => {
    const matchesCategory =
      activeFaithCategory === 'all' || article.category === activeFaithCategory;
    const query = faithSearch.trim().toLowerCase();
    if (!query) return matchesCategory;

    const inTitle = article.title.toLowerCase().includes(query);
    const inSummary = article.summary.toLowerCase().includes(query);
    const inBody = article.paragraphs.some((p) =>
      p.toLowerCase().includes(query)
    );
    const inScriptures = article.keyScriptures.some((s) =>
      s.toLowerCase().includes(query)
    );
    return matchesCategory && (inTitle || inSummary || inBody || inScriptures);
  });

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* Top Announcement Ribbon */}
      <div className="top-ribbon">
        <div className="container top-ribbon__inner">
          <span className="top-ribbon__badge">
            <Flame size={14} aria-hidden="true" />
            {ministry.establishedNote}
          </span>
          <p className="top-ribbon__motto">{ministry.motto}</p>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#" className="navbar__brand" aria-label={ministry.name}>
            <img
              src={ministry.logo}
              alt={ministry.logoAlt}
              className="navbar__logo"
            />
          </a>

          <nav className="navbar__links" aria-label="Primary Navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="navbar__link">
                {item.label}
              </a>
            ))}
            <a href="#connect" className="btn btn--primary btn--sm">
              Walk With Us
            </a>
          </nav>

          <button
            type="button"
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="container mobile-menu__inner">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-menu__link"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#connect"
                className="btn btn--primary mobile-menu__cta"
                onClick={handleNavClick}
              >
                Walk With Us
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section className="hero">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="eyebrow-pill">
                <Sparkles size={15} aria-hidden="true" />
                <span>{hero.badge}</span>
              </div>

              <h1 className="hero__title">{hero.headline}</h1>
              <p className="hero__subtitle">{hero.subheadline}</p>

              <div className="hero__actions">
                <a href={hero.primaryCta.href} className="btn btn--primary btn--lg">
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href={hero.secondaryCta.href} className="btn btn--outline-light btn--lg">
                  <span>{hero.secondaryCta.label}</span>
                </a>
              </div>

              <blockquote className="hero__verse">
                <p className="hero__verse-text">{hero.keyVerse.text}</p>
                <cite className="hero__verse-ref">— {hero.keyVerse.reference}</cite>
              </blockquote>
            </div>

            <div className="hero__visual">
              <div className="hero__image-frame">
                <img
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  className="hero__image"
                  fetchPriority="high"
                />
                <div className="hero__image-caption">
                  <span className="hero__caption-dot" aria-hidden="true" />
                  <p>{hero.heroCaption}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            VISION & MISSION SECTION
        ================================================================ */}
        <section id="purpose" className="section section--cream">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-eyebrow">{purpose.sectionEyebrow}</span>
              <h2 className="section-title">{purpose.sectionTitle}</h2>
              <p className="section-intro">{purpose.sectionIntro}</p>
            </div>

            {/* Dual Vision & Mission Cards */}
            <div className="purpose-cards">
              {/* Vision Card */}
              <article className="purpose-card purpose-card--vision">
                <div className="purpose-card__top">
                  <span className="purpose-card__tag">{purpose.vision.label}</span>
                  <Compass className="purpose-card__icon" size={28} aria-hidden="true" />
                </div>
                <h3 className="purpose-card__title">{purpose.vision.title}</h3>
                <p className="purpose-card__statement">
                  “{purpose.vision.statement}”
                </p>
                <div className="pillars-grid">
                  {purpose.vision.pillars.map((pillar, idx) => {
                    const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                    return (
                      <div key={pillar.title} className="pillar-item">
                        <div className="pillar-item__icon">
                          <IconComponent size={18} aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="pillar-item__title">{pillar.title}</h4>
                          <p className="pillar-item__desc">{pillar.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              {/* Mission Card */}
              <article className="purpose-card purpose-card--mission">
                <div className="purpose-card__top">
                  <span className="purpose-card__tag purpose-card__tag--light">
                    {purpose.mission.label}
                  </span>
                  <Flame className="purpose-card__icon" size={28} aria-hidden="true" />
                </div>
                <h3 className="purpose-card__title">{purpose.mission.title}</h3>
                <p className="purpose-card__statement">
                  “{purpose.mission.statement}”
                </p>

                <div className="mission-highlights">
                  <h4 className="mission-highlights__heading">
                    How We Walk Out Our Mission
                  </h4>
                  <ul className="mission-highlights__list">
                    {purpose.mission.highlights.map((item) => (
                      <li key={item} className="mission-highlights__item">
                        <CheckCircle2 size={18} className="mission-highlights__check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mission-quote-banner">
                  <span>{ministry.motto}</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================================================================
            PASTORAL LEADERSHIP SECTION
        ================================================================ */}
        <section id="leadership" className="section section--white">
          <div className="container">
            <div className="leadership-grid">
              <div className="leadership-visual">
                <div className="leadership-portrait-card">
                  <img
                    src={leadership.image}
                    alt={leadership.imageAlt}
                    className="leadership-portrait"
                    loading="lazy"
                  />
                  <div className="leadership-portrait-badge">
                    <p className="leadership-portrait-badge__title">
                      {leadership.leadersTitle}
                    </p>
                    <p className="leadership-portrait-badge__sub">
                      {leadership.leadersSubtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="leadership-content">
                <span className="section-eyebrow">{leadership.sectionEyebrow}</span>
                <h2 className="section-title">{leadership.sectionTitle}</h2>
                <p className="leadership-description">{leadership.description}</p>

                <blockquote className="leadership-quote">
                  <Quote size={28} className="leadership-quote__icon" aria-hidden="true" />
                  <p>{leadership.quote}</p>
                </blockquote>

                <div className="leadership-values">
                  {leadership.values.map((val) => (
                    <div key={val.title} className="leadership-value">
                      <ShieldCheck size={20} className="leadership-value__icon" aria-hidden="true" />
                      <div>
                        <h3 className="leadership-value__title">{val.title}</h3>
                        <p className="leadership-value__text">{val.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            STATEMENT OF FAITH SECTION (ARTICLE 2)
        ================================================================ */}
        <section id="faith" className="section section--dark">
          <div className="container">
            <div className="section-header section-header--center section-header--dark">
              <span className="section-eyebrow section-eyebrow--red">
                {statementOfFaith.sectionEyebrow}
              </span>
              <h2 className="section-title">{statementOfFaith.sectionTitle}</h2>
              <p className="section-intro">{statementOfFaith.preamble}</p>
            </div>

            {/* Interactive Controls: Category Filter, Search & Expand All */}
            <div className="faith-toolbar">
              <div className="faith-categories" role="tablist" aria-label="Filter Statement of Faith by category">
                {statementOfFaith.categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFaithCategory === cat.id}
                    className={`faith-tab ${
                      activeFaithCategory === cat.id ? 'faith-tab--active' : ''
                    }`}
                    onClick={() => setActiveFaithCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="faith-actions">
                <div className="faith-search">
                  <Search size={16} className="faith-search__icon" aria-hidden="true" />
                  <input
                    type="search"
                    value={faithSearch}
                    onChange={(e) => setFaithSearch(e.target.value)}
                    placeholder="Search doctrines or scriptures..."
                    aria-label="Search Statement of Faith"
                    className="faith-search__input"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn--ghost-light btn--sm"
                  onClick={() => setExpandAllFaith(!expandAllFaith)}
                >
                  {expandAllFaith ? 'Collapse All' : 'Expand All'}
                </button>
              </div>
            </div>

            {/* Statement of Faith Articles Using Native <details> */}
            {filteredArticles.length === 0 ? (
              <div className="faith-empty">
                <p>No doctrinal articles matched “{faithSearch}”.</p>
                <button
                  type="button"
                  className="btn btn--primary btn--sm"
                  onClick={() => {
                    setFaithSearch('');
                    setActiveFaithCategory('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="faith-list">
                {filteredArticles.map((article, index) => (
                  <details
                    key={`${article.id}-${expandAllFaith}`}
                    className="faith-item"
                    open={expandAllFaith || Boolean(faithSearch.trim()) || index === 0}
                  >
                    <summary className="faith-item__summary">
                      <span className="faith-item__number">{article.number}</span>
                      <div className="faith-item__heading-group">
                        <h3 className="faith-item__title">{article.title}</h3>
                        <p className="faith-item__teaser">{article.summary}</p>
                      </div>
                      <div className="faith-item__meta">
                        <span className="faith-item__badge">
                          <BookOpen size={13} aria-hidden="true" />
                          {article.keyScriptures[0]}
                          {article.keyScriptures.length > 1
                            ? ` +${article.keyScriptures.length - 1}`
                            : ''}
                        </span>
                        <span className="faith-item__chevron" aria-hidden="true">
                          <ChevronDown size={20} />
                        </span>
                      </div>
                    </summary>

                    <div className="faith-item__body">
                      <div className="faith-item__paragraphs">
                        {article.paragraphs.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="faith-item__scriptures">
                        <span className="faith-item__scriptures-label">
                          Scriptural Foundation:
                        </span>
                        <div className="faith-item__scripture-tags">
                          {article.keyScriptures.map((ref) => (
                            <span key={ref} className="scripture-tag">
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ================================================================
            COMMUNITY & FELLOWSHIP SECTION
        ================================================================ */}
        <section id="community" className="section section--cream">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-eyebrow">{community.sectionEyebrow}</span>
              <h2 className="section-title">{community.sectionTitle}</h2>
              <p className="section-intro">{community.description}</p>
            </div>

            <div className="community-grid">
              {community.photos.map((item, idx) => (
                <figure
                  key={item.title}
                  className={`community-card ${
                    idx === 0 ? 'community-card--featured' : ''
                  }`}
                >
                  <div className="community-card__image-wrap">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="community-card__image"
                      style={{ objectPosition: item.objectPosition || 'center' }}
                      loading="lazy"
                    />
                    <span className="community-card__tag">{item.tag}</span>
                  </div>
                  <figcaption className="community-card__caption">
                    <h3 className="community-card__title">{item.title}</h3>
                    <p className="community-card__text">{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            CONNECT / CALL TO ACTION SECTION
        ================================================================ */}
        <section id="connect" className="section section--connect">
          <div className="container">
            <div className="connect-banner">
              <div className="connect-banner__header">
                <span className="section-eyebrow section-eyebrow--light">
                  {connect.sectionEyebrow}
                </span>
                <h2 className="connect-banner__title">{connect.sectionTitle}</h2>
                <p className="connect-banner__desc">{connect.description}</p>
              </div>

              <div className="connect-cards">
                {connect.cards.map((card) => (
                  <div key={card.title} className="connect-card">
                    <span className="connect-card__badge">{card.badge}</span>
                    <h3 className="connect-card__title">{card.title}</h3>
                    <p className="connect-card__subtitle">{card.subtitle}</p>
                    <p className="connect-card__detail">{card.detail}</p>
                  </div>
                ))}
              </div>

              <div className="connect-banner__footer">
                <div className="connect-contact-info">
                  <div className="connect-contact-item">
                    <MapPin size={18} aria-hidden="true" />
                    <span>{connect.locationNote}</span>
                  </div>
                  <div className="connect-contact-item">
                    <Mail size={18} aria-hidden="true" />
                    <a href={`mailto:${connect.contactEmail}`}>
                      {connect.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================
          SITE FOOTER
      ================================================================ */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__logo-plate">
              <img
                src={ministry.logo}
                alt={ministry.logoAlt}
                className="footer__logo"
                loading="lazy"
              />
            </div>
            <p className="footer__tagline">{ministry.tagline}</p>
            <p className="footer__motto">{ministry.motto}</p>
          </div>

          <div className="footer__nav">
            <h3 className="footer__heading">Explore</h3>
            <ul className="footer__list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__scripture">
            <h3 className="footer__heading">Our Foundation</h3>
            <p className="footer__verse">
              “For other foundation can no man lay than that is laid, which is
              Jesus Christ.”
            </p>
            <span className="footer__verse-ref">1 Corinthians 3:11</span>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>
            © {new Date().getFullYear()} {ministry.name}. All rights reserved.
          </p>
          <p className="footer__bottom-note">
            Built to the Glory of God • Walking Where There Is No Path
          </p>
        </div>
      </footer>
    </div>
  );
}
