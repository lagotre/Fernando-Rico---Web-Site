# Instrucciones de Deployment — Fernando Rico Medina

## Antes de subir: checklist

- [ ] Reemplazar foto en `public/images/fernando-rico.jpg` (la que aparece en el PDF, sección "Sobre mí")
- [ ] Actualizar `CALENDLY` URL en todos los componentes (buscar `calendly.com/fernandoricomedina`)
- [ ] Confirmar número de WhatsApp: `+57 315 899 4202`
- [ ] Agregar dominio real en `app/layout.tsx` → `alternates.canonical`
- [ ] Actualizar URL de LinkedIn real

## Para usar la foto

En `components/sections/About.tsx`, descomenta la línea de `<Image>` y elimina el placeholder:

```tsx
// Eliminar el div placeholder y usar:
import Image from 'next/image'
// ...
<Image
  src="/images/fernando-rico.jpg"
  alt="Fernando Rico Medina"
  fill
  className="object-cover object-top"
  priority
/>
```

Coloca la foto en `/public/images/fernando-rico.jpg` (JPG, mínimo 800×1000px).

## Deployment en Vercel (recomendado)

1. Crear cuenta en [vercel.com](https://vercel.com) (gratis)
2. Instalar Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Desde la carpeta del proyecto:
   ```bash
   vercel
   ```
4. Seguir el wizard (conectar con GitHub o subir directo)
5. Vercel detecta Next.js automáticamente — sin configuración adicional

### Variables de entorno
No se necesitan variables de entorno para el sitio base.

### Dominio personalizado
En el dashboard de Vercel → Settings → Domains → agregar `fernandoricomedina.com` (o el dominio elegido).

## Desarrollo local

```bash
cd /Users/Fernando-Rico/Sites/frm-website
npm run dev          # http://localhost:3000
npm run build        # producción
npm run start        # preview producción local
```

## Integración Calendly (real)

Reemplaza `https://calendly.com/fernandoricomedina` con tu URL real de Calendly.
Para widget embebido (en vez de nueva pestaña), instala: `npm install react-calendly`

## WhatsApp

El botón flotante y todos los CTAs de WhatsApp usan:
`https://wa.me/573158994202`

Para cambiar el número: buscar `573158994202` en todos los archivos y reemplazar.

## SEO

Todas las meta tags están en `app/layout.tsx`. Actualizar:
- `alternates.canonical` con el dominio real
- `openGraph.url` con el dominio real
- Agregar imagen OG en `public/og-image.jpg` (1200×630px)
