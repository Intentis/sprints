namespace sprints.analytics;
using { sprints.portal.Sprints } from '../portal/sprints';

view SprintPopularity as select from Sprints {
    ID,
    title,
    count(submissions.ID) as totalAttempts : Integer
} group by ID, title;