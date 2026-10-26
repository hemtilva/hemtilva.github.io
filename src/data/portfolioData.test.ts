import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PORTFOLIO_SECTIONS,
  HERO_DATA,
  PROJECTS_DATA,
  EDUCATION_DATA,
  CONTACT_DATA,
  filterProjectsByCategory,
} from './portfolioData';

test('portfolio sections follow home layout: Hero, Education, Contact', () => {
  assert.deepEqual(
    PORTFOLIO_SECTIONS.map((s) => s.id),
    ['hero', 'education', 'contact']
  );
});

test('hero section displays Hem Tilva prominently with links to projects and contact', () => {
  assert.equal(HERO_DATA.name, 'Hem Tilva');
  assert.equal(HERO_DATA.primaryCta.href, '#/projects');
  assert.equal(HERO_DATA.secondaryCta.href, '#contact');
});

test('selected projects feature the exact three asymmetrically arranged entries with direct GitHub links', () => {
  assert.equal(PROJECTS_DATA.length, 3);
  const titles = PROJECTS_DATA.map((p) => p.title);
  assert.deepEqual(titles, [
    'Spatial Optimization of Bloom Filters',
    'Kernel Samepage Merging (KSM) in xv6',
    'Academic Doubt Resolution Platform',
  ]);

  const alignments = new Set(PROJECTS_DATA.map((p) => p.gridAlignment));
  assert.equal(alignments.size, 3, 'Each project has a distinct asymmetric grid layout');

  for (const project of PROJECTS_DATA) {
    assert.ok(project.githubUrl.startsWith('https://github.com/hemtilva'));
    assert.ok(project.technicalDetails.length >= 3);
  }
});

test('filterProjectsByCategory filters accurately and returns all for All', () => {
  assert.equal(filterProjectsByCategory(PROJECTS_DATA, 'All').length, 3);
  assert.equal(filterProjectsByCategory(PROJECTS_DATA, 'OS Kernel').length, 1);
  assert.equal(
    filterProjectsByCategory(PROJECTS_DATA, 'OS Kernel')[0].title,
    'Kernel Samepage Merging (KSM) in xv6'
  );
});

test('education section includes IIT Gandhinagar B.Tech, CPI 9.34/10, Dean’s List, and ICPC Regionalist', () => {
  assert.equal(EDUCATION_DATA.period, '2024 – Present');
  assert.equal(EDUCATION_DATA.cpi, '9.34');
  assert.ok(
    EDUCATION_DATA.honors.some((h) => h.title === 'ICPC Regionalist'),
    'Should include ICPC Regionalist honor'
  );
  assert.ok(
    EDUCATION_DATA.honors.some((h) => h.title === 'Dean’s List Award'),
    'Should include Dean’s List Award'
  );
});

test('contact section contains verified email, GitHub, and LinkedIn links', () => {
  assert.equal(CONTACT_DATA.email, 'hemytilva@gmail.com');
  assert.equal(CONTACT_DATA.emailHref, 'mailto:hemytilva@gmail.com');
  const platforms = CONTACT_DATA.links.map((l) => l.platform);
  assert.deepEqual(platforms, ['GitHub', 'LinkedIn']);
});
