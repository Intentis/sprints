namespace sprints.portal;
using { cuid, managed } from '@sap/cds/common';
using { sprints.portal.Sprints } from './sprints';
using { sprints.portal.Result } from './master';

entity Submissions : cuid, managed {
    sprint       : Association to Sprints;
    user         : String @cds.on.insert: $user;
    code         : String;
    status       : Association to Result;
    score        : Integer;
    terminalLog  : String; 
}