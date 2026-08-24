---
Task ID: 1
Agent: Main
Task: Colocar imagen QFS office vision en el lugar óptimo del sitio web

Work Log:
- Analicé la imagen subida con VLM: render de oficina corporativa QFS con tarjetas, torniquetes y banners "WELCOME TO THE FUTURE"
- Leí todos los archivos del proyecto (home-page.tsx, home-page-2.tsx, lang-store.ts, navigation.tsx, footer.tsx, roadmap-page.tsx, whitepaper-page.tsx, portal-page.tsx)
- Copié la imagen a /public/qfs-office-vision.png
- Agregué un banner cinematográfico entre el Hero y la sección Ecosystem con overlay de gradiente, barra de colores degradada y caption flotante
- Agregé claves de traducción `vision.banner.title` y `vision.banner.tag` en los 8 idiomas
- Corregí error de parsing de JSX (comentarios `{/* */}` causaban problema con Turbopack)
- Build exitoso y deploy a Vercel (qfspay.org)

Stage Summary:
- Imagen colocada como banner cinematográfico de ancho completo entre Hero y Ecosystem
- Traducciones agregadas en 8 idiomas
- Deploy exitoso: https://qfspay.org
