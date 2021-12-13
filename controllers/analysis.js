const { spawn } = require('child_process')
// const { v4 : uuid } = require('uuid')
const pdf2base64 = require('pdf-to-base64');
const fs = require("fs");
const { resolveSoa } = require('dns');

exports.check = async (req, res, next) => {
    return res.status(200).json({ msg: "Working" })
}

exports.getPaper = async (req, res, next) => {
    var readStream = fs.createReadStream("output/Paper_Analysed.pdf");
    readStream.pipe(res);

    readStream.on('open', function () {
        readStream.pipe(res);
    });

    readStream.on('error', function (error) {
        console.log(error)
        res.status(400).json(error);
    });
}

exports.percentile = async function (req, res, next) {
    const difficulty = require('../output/difficulty.json')

    const avgDiff = difficulty.reduce((total, num) => total + num) / 10;
    const python = spawn('python', ['python/percentile.py', avgDiff])

    var outputTemp = []

    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...')
        // console.log(data.toString())
        outputTemp += data.toString();
    })
    python.stdout.on('close', function (code) {
        console.log('Closed with code ', code)
        // console.log("Output is", outputTemp)
        const percentile = JSON.parse(outputTemp)
        return res.status(200).json({ msg: "Done", percentiles: percentile })
    })

}
exports.analytics = async function (req, res, next) {
    try {
        const output = []

        var difficulty = []
        var topics = []

        const diff = spawn('python', ['python/jsonReadWrite.py', 'output/difficulty.json'])
        var temp1 = [], temp2 = [];
        diff.stdout.on('data', function (data) {
            temp1 += data.toString()
            console.log(data.toString())
        })

        diff.stdout.on('close', function (data) {
            difficulty = JSON.parse(temp1)


            const top = spawn('python', ['python/jsonReadWrite.py', 'output/topics.json'])
            top.stdout.on('data', function (data) {
                console.log(data.toString())

                temp2 += data.toString()

            })
            top.stdout.on('close', function (data) {
                topics = (temp2).split("'")
                console.log(topics)
                topics = topics.filter(topic => topic[0].toLowerCase()>='a' && topic[0].toLowerCase()<='z' && topic[0] !== ']')


                for (const i in difficulty) {
                    if (difficulty[i] <= 3)
                        difficulty[i] = "easy";
                    else if (difficulty[i] >= 7)
                        difficulty[i] = "hard"
                    else if (difficulty[i] > 3 && difficulty[i] < 7)
                        difficulty[i] = "medium";
                }


                for (var i = 0; i < difficulty.length; i++) {
                    output.push({ topic: topics[i], difficulty: difficulty[i] })
                }
                const temp = Array.from([...new Set(topics)])
                const final = []

                for (const tt in temp) {
                    const topic = temp[tt]
                    console.log(topic)
                    const t = {
                        topic,
                        easy: 0,
                        medium: 0,
                        hard: 0
                    }
                    output.filter((x => x.topic === topic)).forEach(x => {
                        t[x.difficulty] = t[x.difficulty] + 1
                    })
                    t.total = t.easy + t.medium + t.hard

                    final.push(t)
                }
                const diffTemp = Array.from([...new Set(difficulty)])

                for (const i in diffTemp) {
                    const diff = diffTemp[i];

                }
                const easyArr = []
                const mediumArr = []
                const hardArr = []

                output.forEach((x) => {
                    if (x.difficulty === "easy")
                        easyArr.push(x.topic)
                    else if (x.difficulty === "medium")
                        mediumArr.push(x.topic)
                    else
                        hardArr.push(x.topic)
                })

                const setEasy = [...new Set(easyArr)]
                const setMedium = [...new Set(mediumArr)]
                const setHard = [...new Set(hardArr)]

                const finalDiff = {
                    easy: [],
                    medium: [],
                    hard: []
                }
                setEasy.forEach(topic => {
                    finalDiff.easy.push({ topic, count: easyArr.filter(x => topic === x).length })
                })

                setMedium.forEach(topic => {
                    finalDiff.medium.push({ topic, count: mediumArr.filter(x => topic === x).length })
                })

                setHard.forEach(topic => {
                    finalDiff.hard.push({ topic, count: hardArr.filter(x => topic === x).length })
                })
                console.log(finalDiff)
                return res.status(200).json({ topicWise: final, difficultyWise: finalDiff })
            })


        })





        // const difficulty = require('../output/difficulty.json')
        // const topics = require('../output/topics.json')


    } catch (error) {
        console.log(error)
        return res.status(error.status || error.response.status).json(error)
    }
}
exports.analyse = async function (req, res, next) {
    if (req.file) {
        try {
            console.log("File name", req.file.filename)
            const python = spawn('python', ['python/analysis.py', `data/` + req.file.filename])

            python.stdout.on('data', function (data) {
                console.log('Pipe data from python script ...')
                console.log(data.toString())
            })
            python.stdout.on('close', function (code) {
                console.log('Closed with code ', code)
                const output = []
                const questions = require('../output/questions.json')
                const difficulty = require('../output/difficulty.json')
                const topics = require('../output/topics.json')

                for (var i = 0; i < difficulty.length; i++) {
                    output.push({ question: questions[i], topic: topics[i], difficulty: difficulty[i] })
                }
                console.log("Output is ", output)
                return res.status(200).json({ msg: "Done", paper: Array.from([...new Set(output)]) })

            })

        } catch (err) {
            console.log(err)
            return res.status(err.status || err.response.status).json(err)
        }

    } else {
        res.status(400).json({ msg: "Img Not Received" })
    }
}

exports.generate = async function (req, res, next) {
    try {
        console.log(req.params.difficulty)
        var difficultyLevel = req.params.difficulty
        difficultyLevel = difficultyLevel.toLowerCase()
        if (!difficultyLevel || difficultyLevel === "" || (difficultyLevel !== "easy" && difficultyLevel !== "medium" && difficultyLevel !== "hard"))
            return res.status(400).json({ error: "Please enter valid difficulty level" })

        const python = spawn('python', ['python/paper_generation.py', difficultyLevel])

        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...')
            console.log(data.toString())
        })

        python.stdout.on('close', function (code) {
            console.log('Closed with code ', code)
            var readStream = fs.createReadStream("output/SamplePaper.pdf");
            readStream.pipe(res);

            readStream.on('open', function () {
                readStream.pipe(res);
            });

            readStream.on('error', function (error) {
                console.log(error)
                res.status(400).json(error);
            });

        })

    } catch (err) {
        console.log(err)

        return res.status(400).json({ error: err })
    }
}