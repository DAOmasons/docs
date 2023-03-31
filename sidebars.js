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
      items: ['Intro/about', 'Intro/values', 'Intro/hire', 'Intro/join'],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'Rules/projects',
        'Rules/proposals',
        'Rules/dao-types',
        'Rules/decision-making',
        'Rules/membership-rules',
        
        'Rules/dao-roles',
      ],
    },
    {
      type: 'category',
      label: 'Strategy',
      items: ['Strategy/sustainability'],
    },
    {
      type: 'category',
      label: 'Rituals',
      items: [
        'Rituals/about-rituals',
        'Rituals/ritual-of-oaths',
        'Rituals/ritual-of-echoes',
        'Rituals/ritual-of-light',
        'Rituals/ritual-of-ranks',
        'Rituals/ritual-of-acumen',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      items: ['Templates/project-proposal', 'Templates/ritual'],
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
