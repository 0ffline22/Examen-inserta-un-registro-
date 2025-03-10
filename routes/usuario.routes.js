import express from 'express';
import { insertarUsuario } from '../controller/usuario.controller.js';

const router = express.Router();

router.post('/usuarios', insertarUsuario);

export default router;
