const express = require('express')
const router = express.Router()

const AnalysisController = require('../controllers/analysis')

const upload_pdf = require('../middlewares/upload_pdf')

router.get('/check',AnalysisController.check)

router.post('/analyse',upload_pdf.single('upload'),AnalysisController.analyse)

router.get('/generate/:difficulty',AnalysisController.generate)

router.get('/analysed-paper',AnalysisController.getPaper)

router.get('/analytics',AnalysisController.analytics)

router.get('/percentile',AnalysisController.percentile)




module.exports = router
