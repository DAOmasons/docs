# Ritual of Ranks

##### Current Stage of Development

- [ ] Unimplemented
- [x] Manual
- [ ] Systemetized
- [ ] Partially Automated
- [ ] Fully Automated/Passive

## Essence

Ritual of Ranks is how we keep track of the roles that each member has completed on a project.

At the beginning of a project (proposal phase), we create outlines for each worker's roles on the project. Then once the project is over, the team lead mints/records (spreadsheet for now, eventually through SBTs) the role as a badge. This works as a point system, to see who could be most eligible to work on the next project.

## Why?

In order for team leads to make informed decisions about their team during the selection process, it might be helpful to have some sort of information about how many projects each member has completed, and how many they have completed under a certain role.

Ex. If a team lead is looking for a designer, it would useful to have some sort of resource to identify who has done the most design work within the DAO.

Also, this system can help organize project teams by roles a clear division of labour during production.

#### What problem are we solving

- We sometimes don't know who to choose for a project
- Team selection if opaque, can sometime create tensions without an objective selection metric.
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

[Spreadsheet](https://docs.google.com/spreadsheets/d/1dOYDqJTV5oJSYJo64eZbIqWJFmTqWHtDQcHmz-31DOU/edit?usp=sharing).

We are currently in the unimplemented/manual stage for this ritual. We are currently using a spreadsheet to keep track of all the roles that each member has completed, as well as some other useful metrics.

- Project Worked
- Time Spent on project
- Value Level avg of project(if there was a rubric used in a Ritual of Light system for that project. If not then it's a mid-level 3)

## Roadmap

#### Next Step

Try recording the aforementioned metrics for some projects and see if it's useful. Try calculating scores for overall contributions as well as for each job-type (ex. designer, developer, etc.)

If we feel the data is useful, then we should begin to work on a way to automate the input of this data to reduce the overall time a team lead spends on this ritual.

#### Endgame

We need to understand more about the use-case about the data that we are collecting before migrating to a tokenomic system.

Systems are useful if people use them, so ideally we also have some understanding of UX for this system. For example, we try to reduce the amount of friction for team leads to use this system, and make it easy for them to see the data that they need.

Once those barriers are effectively mitigated, then we should move to a fully onchain system that automates this process once a project is completed or has reached its review period.

This system should include all the relevant metrics inside of the token metadata, and should be able to be easily queried.

## Details

Further reading:

Boiler(Chris) has spent a good amount of time [thinking](https://hackmd.io/@DAOMasons/H1oqJ3oqj) about this system and has a lot of ideas about how to implement it.
