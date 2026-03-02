namespace sprints.portal;

entity Categories {
    key code : String enum { 
        CAP_NODE  = 'CAP_NODE'; 
        CAP_JAVA  = 'CAP_JAVA'; 
        UI5_FIORI = 'UI5_FIORI'; 
        OTHER     = 'OTHER' 
    };
}

entity Difficulty {
    key level : String enum { 
        EASY   = 'EASY'; 
        MEDIUM = 'MEDIUM'; 
        HARD   = 'HARD' 
    };
    points    : Integer; // EASY: 50, MEDIUM: 100, HARD: 200
}

entity Result {
    key code : String enum { 
        SUCCESS = 'SUCCESS'; 
        FAILED  = 'FAILED'; 
        ERROR   = 'ERROR' 
    };
}