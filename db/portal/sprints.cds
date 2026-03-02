namespace sprints.portal;
using { cuid, managed } from '@sap/cds/common';
using { sprints.portal.Categories, sprints.portal.Difficulty } from './master';
using { sprints.portal.Submissions } from './submissions';


entity Sprints : cuid, managed {
    title        : String(100);
    description  : String(1000);
    category     : Association to Categories;
    difficulty   : Association to Difficulty;
    
    // Technical metadata for the Judge
    sampleRepo   : String;  
    targetFile   : String;  
    baseCode     : String;  
    testScript   : String;  
    
    // Link to results
    submissions  : Association to many Submissions on submissions.sprint = $self;
}