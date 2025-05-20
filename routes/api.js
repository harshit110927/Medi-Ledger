const express = require('express');
const router = express.Router();
const Blockchain = require('../blockchain/blockchain');
const Block = require('../blockchain/block');

const chain = new Blockchain();

router.post('/addReport', (req, res) => {
    const { reportID, patientName, type, date } = req.body;
    const data = { reportID, patientName, type, date };
    const newBlock = new Block(chain.chain.length, new Date().toISOString(), data);
    chain.addBlock(newBlock);
    res.send({ message: 'Report added to blockchain', block: newBlock });
});

router.get('/verifyReport/:id', (req, res) => {
    const report = chain.findByReportId(req.params.id);
    if (report) {
        res.send({ status: 'Verified', report });
    } else {
        res.status(404).send({ status: 'Not Found' });
    }
});

router.get('/chain', (req, res) => {
    res.send(chain.chain);
});

module.exports = router;
