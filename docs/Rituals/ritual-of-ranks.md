# Ritual of Ranks

##### Priority

Undecided

##### Current Stage of Development

- [x] Unimplemented
- [ ] Manual
- [ ] Systemetized
- [ ] Partially Automated
- [ ] Fully Automated/Passive

## Essence

This is a role/badge system for rewarding members for their work on projects.

At the beginning of a project (proposal phase), we create outlines for each worker's roles on the project. Then once the project is over, the team lead mints/records (spreadheet for now, eventually through SBTs) the role as a badge. This works as a point system, to see who could be most eligable to work on the next project.

## Why?

In order for team leads to make informed decisions about their team during the selection process, it might be helpful to have some sort of information about how many projects each member has completed, and how many they have completed under a certain role.

Ex. If a team lead is looking for a designer, it would useful to have some sort of resource to identify who has done the most design work within the DAO.

Also, this system can help organize project teams by roles a clear division of labour during production.

#### What problem are we solving

- We sometimes don't know who to choose for a project
- Team selction if opaque, can sometime create tensions without an objective selection metric.
- Without clear divisions of labour, we risk conflicts and redundant work.

#### Why is this a good solution

- Helps inventory skills within the DAO and helps team leads make informed decisions
- Creates a clear division of labour during production
- Can provide transparency over why certain DAO members are selected over others.

#### Downsides/Risks

Current downsides:

- Not purely objective.
  - Some projects are longer than others
  - Some projects are harder than others
  - Some roles are more difficult.
  - Some people may work longer than others and still recieve only 1 token.
- It's hard to distill all the extra things we do down to one role. People may feel that the times where they went 'above and beyond', it wasn't recognized.

Mitigation: Perhaps a system where we add a score value into the metadata of a token will be able to solve these problems. However, we will need a system to aggregate that score from a variety of metrics.

## Current Implementation

We currently have no infrastrure in place for this. We are recording all past work in a spreadsheet, so that we can mint retroactively once the mechanism has been implemented.

Here is a link to the spreadsheet.

Currently, we keep an accounting of all the projects that each member has completed. For each member, we store the role that member had on that project, the amount of time they spent, the avg value level, and whether or not they completed the project. If there was a rubric used (ex. Ritual of Light), then we calculate the members average value level. If there wasn't a rubric, they get a value level of 3 (mid-level).

## Roadmap

Next Step:

Solving for the limitations and pitfalls mentioned above. We need to develop a score system so that we can account for nuances of value created on the project in order for these tokens to properly represent value.

We need to design, play-test, and iterate on this system before minting tokens.

There was an existing document that addressed some of these pitfalls. Read
https://hackmd.io/@DAOMasons/H1oqJ3oqj

## Details

(Optional)
