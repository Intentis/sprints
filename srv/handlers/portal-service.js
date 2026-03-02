const cds = require('@sap/cds');

module.exports = class PortalService extends cds.ApplicationService {
    init() {
        const { Sprints, Submissions, Profiles } = this.entities;

        // Custom Action: submitCode
        this.on('submitCode', 'Sprints', async (req) => {
            const { code } = req.data;
            const sprintId = req.params[0]; // Gets the ID from the URL

            // 1. Fetch Sprint details for the runner config
            const sprint = await SELECT.one.from(Sprints).where({ ID: sprintId });

            // 2. RUN THE JUDGE (Simplified for PoC)
            // In reality, this spawns a child process or calls a Docker runner
            const isSuccess = code.includes('entity') && code.includes('key'); 
            const status = isSuccess ? 'SUCCESS' : 'FAILED';
            const log = isSuccess ? "Build Success: CDS compiled." : "Error: Syntax missing.";

            // 3. Record the Submission
            await INSERT.into(Submissions).entries({
                sprint_ID: sprintId,
                submittedCode: code,
                status: status,
                testLogs: log,
                earnedPoints: isSuccess ? 100 : 0 // Hardcoded for now
            });

            // 4. Update Profile XP if successful
            if (isSuccess) {
                await UPDATE(Profiles).set({ totalXP: { '+=': 100 } }).where({ user: req.user.id });
            }

            return { status, message: log, xp: isSuccess ? 100 : 0 };
        });

        return super.init();
    }
}