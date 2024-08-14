import { Router } from 'express'

const router = Router()
import { getPaletrantes, criarPalestrantes } from '../controllers/palestranteModal'
router.get('/eventos/palestrantes', getPaletrantes)
router.post('/eventos/palestantes', criarPalestrantes)

export default router; 