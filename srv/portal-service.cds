using { sprints.portal as portalDb } from '../db/schema';
using { sprints.analytics as analyticsDb } from '../db/schema';

@impl: 'srv/handlers/portal-service.js'
service PortalService @(path: '/api/portal') {

    // The Main Coding Arena
    @odata.draft.enabled
    entity Sprints as projection on portalDb.Sprints {
        *,
        category.code as categoryName,
        difficulty.points as potentialXP
    } actions {
        // The custom button in your Fiori UI
        action submitCode(code: String) returns SubmissionResult;
    };

    // For the Dashboard & Profile
    @cds.redirection.target
    @readonly entity Submissions as projection on portalDb.Submissions;
    @readonly entity MyProfile as projection on portalDb.Profiles;
    @readonly entity Leaderboard as projection on analyticsDb.Leaderboard;
    
    // Internal Result Type for the Action
    type SubmissionResult {
        status  : String; // SUCCESS, FAILED
        message : String; // Terminal logs
        xp      : Integer;
    }
}