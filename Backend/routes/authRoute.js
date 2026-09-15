import express from 'express';
// const express = require('express');

const router = express.Router();

router.post('/register' , (req , res) => {
    res.send("We are in the register route")
})

export default router;