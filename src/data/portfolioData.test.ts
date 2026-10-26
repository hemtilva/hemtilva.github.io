import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PORTFOLIO_SECTIONS,
  HERO_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  EDUCATION_DATA,
  CONTACT_DATA,
  filterProjectsByCategory,
  validatePortfolioIntegrity,
} from './portfolioData';

test('portfolio sections follow strict required order: Hero, Experience, Projects, Education, Contact', () => {
  const integrity = validatePortfolioIntegrity();
  assert.equal(integrity.isOrderValid, true);
  assert.deepEqual(
    PORTFOLIO_SECTIONS.map((s) => s.id),
    ['hero', 'experience', 'projects', 'education', 'contact']
  );
});

test('hero section displays Hem Tilva prominently with links to projects and contact', () => {
  assert.equal(HERO_DATA.name, 'Hem Tilva');
  assert.equal(HERO_DATA.primaryCta.href, '#projects');
  assert.equal(HERO_DATA.secondaryCta.href, '#contact');
});

test('experience section includes D. E. Shaw internship with explicit placeholders for unconfirmed details', () => {
  assert.equal(EXPERIENCE_DATA.length, 1);
  assert.ok(EXPERIENCE_DATA[0].organization.includes('D. E. Shaw'));
  assert.ok(EXPERIENCE_DATA[0].titlePlaceholder.includes('Placeholder'));
  assert.ok(EXPERIENCE_DATA[0].datesPlaceholder.includes('Placeholder'));
  assert.ok(EXPERIENCE_DATA[0].responsibilitiesPlaceholder.length >= 2);
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
    assert.ok(project.githubUrlPlaceholder.startsWith('https://github.com/'));
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

test('education section matches verified IIT Gandhinagar B.Tech, CPI 9.34/10, and Dean’s List Award details', () => {
  const integrity = validatePortfolioIntegrity();
  assert.equal(integrity.hasVerifiedEducation, true);
  assert.equal(EDUCATION_DATA.period, '2024 – Present');
  assert.equal(EDUCATION_DATA.cpi, '9.34');
  assert.equal(EDUCATION_DATA.honors[0].title, 'Dean’s List Award');
  assert.equal(EDUCATION_DATA.honors[0].term, 'Semester I');
  assert.equal(EDUCATION_DATA.honors[0].academicYear, 'AY 2025–26');
});

test('contact section contains prominent heading and placeholder email, GitHub, and LinkedIn links', () => {
  assert.equal(CONTACT_DATA.heading, 'Have something interesting to build?');
  assert.ok(CONTACT_DATA.emailHref.startsWith('mailto:'));
  const platforms = CONTACT_DATA.links.map((l) => l.platform);
  assert.deepEqual(platforms, ['GitHub', 'LinkedIn']);
});
