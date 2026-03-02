namespace sprints.portal;

entity Runners {
    key code : String; // 'NODE_JEST', 'JAVA_JUNIT', 'UI5_WDI5'
    image    : String; // The Docker image or environment name
    command  : String; // The shell command to trigger the test
}

// Extend Sprints to link to a Runner
using { sprints.portal.Sprints } from './sprints';
extend entity Sprints {
    runner : Association to Runners;
}