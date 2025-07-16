import { connect } from './db.js';
import { ObjectId } from 'mongodb';

export async function getAllReportsD() {
    const db = await connect();
    const reports = await db.collection('intel_reports').find().toArray();
    return reports;
}


export async function createReportD(report) {
    const db = await connect();
    const result = await db.collection('intel_reports').insertOne(report);
    return result.insertedId;
}


export async function getHighD() {
    const db = await connect();
    return db.collection('intel_reports').find({ threatLevel: { $gte: 4 } }).toArray();
}

export async function confirmReportD(id) {
    const db = await connect()
    return await db.collection('intel_reports').updateOne(
        { _id: new ObjectId(id) },
        { $set: { confirmed: true } },
    );

}