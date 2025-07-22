import express from "express"
const router = express.Router()

import employees from "#db/employees"

router
    .route("/")
    .get((req, res) => {
        const emps = employees
        res.send(emps)
    })
    .post((req, res) => {
        if(!req.body) {
            return res.status(400).send("Request body required.")
        }
            const { name } = req.body
            const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;

            const newEmp = { id: newId, name }
            console.log(req.body)
            
            if(!name) return res.status(400).send("Requires Name")
            employees.push(newEmp)
            res.status(201).send(newEmp)
    })

    export default router