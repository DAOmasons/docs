/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'DAO Masons',
      items: ['Intro/intro', 'Intro/manifesto', 'Intro/hire', 'Intro/join'],
    },
    {
      type: 'category',
      label: 'Rules of the Game',
      items: [
        'Rules/dao-types',
        'Rules/decision-making',
        'Rules/membership-rules',
        'Rules/proposals',
        'Rules/sustainability',
        'Rules/projects',
        'Rules/dao-roles',
        'Rules/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Rituals',
      items: [
        'Rituals/ritual-of-sacrifice',
        'Rituals/ritual-of-skill',
        'Rituals/ritual-of-growth',
        'Rituals/ritual-of-oaths',
        'Rituals/ritual-of-echoes',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
