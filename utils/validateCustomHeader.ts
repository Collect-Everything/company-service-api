import { Request, Response, NextFunction } from 'express';

export function validateCustomHeader(req: Request, res: Response, next: NextFunction) {
  const customHeaderValue = req.header('X-Custom-Header');

  // Vérifiez la présence et la valeur de l'en-tête personnalisé
  if (!customHeaderValue || customHeaderValue !== 'Showcase-gateway-API-data') {
    return res.status(403).json({ error: 'Accès refusé.' });
  }
}