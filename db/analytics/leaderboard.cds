namespace sprints.analytics;
using { sprints.portal.Submissions } from '../portal/submissions';

view Leaderboard as select from Submissions {
    key user,
    sum(score) as totalScore : Integer,
    count(ID) as completedCount : Integer
} where status.code = 'SUCCESS' group by user, sprint;