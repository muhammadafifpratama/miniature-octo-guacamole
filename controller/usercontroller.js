const asd = require("../models")
const puppeteer = require('puppeteer');
let express = require('express');
let app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


module.exports = {
    getdata: (req, res) => {
        asd.usermodel.findAll()
            .then(user => { res.status(200).send(user) })
    },
    getpage: async (req, res) => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 926 });
        await page.goto("https://www.lipsum.com/", { waitUntil: 'domcontentloaded' });
        // let isi = await page.evaluate(() => {
        //     let results = [];
        //     let items = document.querySelectorAll('p');
        //     items.forEach((item) => {
        //         results.push({
        //             text: "asd",
        //         });
        //     });
        //     return results;
        // })
        const pdf = await page.pdf({ format: 'A4' });
        res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
        res.status(200).send(pdf)
    },
    send: (req, res) => {
        io.on('connection', (socket) => {
            socket.on('chat message', (msg) => {
                io.emit('chat message', msg);
            });
        });

        res.sendFile(__dirname + '/index.html');
    },
    receive: (req, res) => {
        res.sendFile(__dirname + '/index.html');
    }
}