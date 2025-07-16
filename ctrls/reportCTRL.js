import { createReportD, getAllReportsD, getHighD ,confirmReportD} from "../routsDal.js";



export async function createReport(req, res) {
    const report = req.body;
    if (!report.fieldCode || !report.location || !report.threatLevel || !report.description) {
        return res.status(400).json({ error: 'mising information' });
    }
    report.timestamp = report.timestamp || new Date();
    report.confirmed = report.confirmed ?? false;

    try {
        const id = await createReportD(report);
        res.json({ id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getAllReports(req, res) {
    try {
        const reports = await getAllReportsD();
        res.json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export async function getHigh(req, res) {
    try {
        const reports = await getHighD()
        res.json(reports)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}



export async function confirmedRiport(req,res){
    const id  = req.params; 

    try{
       const updatedReport = await confirmReportD(id);
       
       if(!updatedReport){
            return res.status(404).json({error:"report not found"})
       }

       res.json(updatedReport);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}
