const functions = require("firebase-functions");
const express = require("express")
const app = express()
const events = []
app.get("/events", (request, response) => {
	response.status(200).send(JSON.stringify(events))
})
app.post("/events", (request, response) => {
	const event = {
		name: "Nombre del evento",
		description: "Descripción del evento",
		created_at: new Date()
	}
	response.status(201).send(JSON.stringify(event))
})
exports.api = functions.https.onRequest(app);
