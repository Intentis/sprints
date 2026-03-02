namespace sprints.portal;
using { managed } from '@sap/cds/common';

entity Profiles : managed {
    key user  : String; // The BTP User ID
    nickname  : String;
    avatarUrl : String;
    totalXP   : Integer default 0;
    preferredLanguage : String enum { English; German; Spanish };
}