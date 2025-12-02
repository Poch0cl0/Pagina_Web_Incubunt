# 📦 Dependencias del Proyecto pagina-web

## Descripción General

Este documento lista todas las dependencias necesarias para que el proyecto `pagina-web` funcione correctamente. El proyecto es una aplicación **Next.js 16** con React 19, TypeScript, Tailwind CSS, Firebase y soporte para envío de emails.

---

## ⚙️ Instalación de Dependencias

### Opción 1: Instalar todas de una vez

```bash
npm install
```

### Opción 2: Instalar manualmente

```bash
# Dependencias principales
npm install next@16.0.3 react@19.2.0 react-dom@19.2.0 firebase-admin@13.6.0 nodemailer@7.0.10 lucide-react@0.553.0

# Dependencias de desarrollo
npm install --save-dev @tailwindcss/postcss@4 tailwindcss@4 typescript@5 eslint@9 eslint-config-next@16.0.3 @types/node@20 @types/react@19 @types/react-dom@19 @types/nodemailer@7.0.3
```

---

## 📋 Listado Completo de Dependencias

### 🔹 Dependencias Principales (Production)

| Dependencia | Versión | Propósito |
|-------------|---------|----------|
| **next** | `^16.0.3` | Framework React con SSR/SSG |
| **react** | `^19.2.0` | Librería de componentes UI |
| **react-dom** | `^19.2.0` | Integración de React con DOM |
| **firebase-admin** | `^13.6.0` | SDK de Firebase para backend |
| **nodemailer** | `^7.0.10` | Envío de emails SMTP |
| **lucide-react** | `^0.553.0` | Librería de iconos |

### 🔹 Dependencias de Desarrollo (DevDependencies)

| Dependencia | Versión | Propósito |
|-------------|---------|----------|
| **typescript** | `^5` | Tipado estático de JavaScript |
| **@types/react** | `^19` | Tipos de React para TypeScript |
| **@types/react-dom** | `^19` | Tipos de React DOM |
| **@types/node** | `^20` | Tipos de Node.js |
| **@types/nodemailer** | `^7.0.3` | Tipos para Nodemailer |
| **tailwindcss** | `^4` | Framework CSS utility-first |
| **@tailwindcss/postcss** | `^4` | Plugin PostCSS para Tailwind |
| **eslint** | `^9` | Linter de código JavaScript/TypeScript |
| **eslint-config-next** | `^16.0.3` | Configuración ESLint para Next.js |

---

## 🚀 Scripts Disponibles

```json
{
  "dev": "next dev",           // Inicia servidor de desarrollo en localhost:3000
  "build": "next build",       // Compila el proyecto para producción
  "start": "next start",       // Inicia servidor de producción
  "lint": "eslint"             // Ejecuta linter en el código
}
```

### Uso:
```bash
npm run dev      # Desarrollo
npm run build    # Compilar
npm start        # Producción
npm run lint     # Verificar código
```

---

## 🔧 Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Firebase Admin SDK
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id

# Nodemailer SMTP
SMTP_HOST=tu_host_smtp
SMTP_PORT=587
SMTP_USER=tu_usuario
SMTP_PASS=tu_contraseña
SMTP_FROM=no-reply@tudominio.com
```

---

## 📱 Compatibilidad

- **Node.js**: `>=18.0.0` (recomendado: `>=20.0.0`)
- **npm**: `>=9.0.0`
- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas 2 versiones)

---

## 🛠️ Verificación de Instalación

Después de instalar las dependencias, verifica que todo esté correcto:

```bash
# Ver versión de Next.js
npx next --version

# Ver versión de npm
npm --version

# Ver versión de Node.js
node --version

# Listar todas las dependencias instaladas
npm ls
```

---

## 🔄 Actualización de Dependencias

Para actualizar las dependencias a versiones más recientes:

```bash
# Ver qué dependencias tienen actualizaciones disponibles
npm outdated

# Actualizar todas las dependencias
npm update

# Actualizar una dependencia específica
npm install nombre-dependencia@latest
```

---

## ⚠️ Solución de Problemas Comunes

### Error: "Module not found"

```bash
# Limpiar cache y reinstalar
rm -r node_modules package-lock.json
npm install
```

### Error: "Firebase module not found"

```bash
npm install firebase-admin --save
npm install @types/firebase-admin --save-dev
```

### Error: "Nodemailer module not found"

```bash
npm install nodemailer --save
npm install @types/nodemailer --save-dev
```

### Error de puerto 3000 en uso

```bash
# Usar un puerto diferente
npm run dev -- -p 3001
```

---

## 📚 Documentación Oficial

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Lucide React Icons](https://lucide.dev)

---

## 📝 Checklist de Instalación

- [ ] Node.js instalado (versión 18+)
- [ ] npm o yarn disponible
- [ ] Clonar/descargar el proyecto
- [ ] Ejecutar `npm install`
- [ ] Crear archivo `.env.local` con variables de entorno
- [ ] Ejecutar `npm run dev`
- [ ] Verificar que la aplicación inicia en `http://localhost:3000`

---

**Última actualización:** 14 de noviembre de 2025  
**Proyecto:** pagina-web  
**Versión:** 0.1.0
