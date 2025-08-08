# Hondubet - Perfil de Usuario

Aplicación React modular para gestión de perfil de usuario en plataforma de apuestas deportivas.

## 🚀 Características

- **Arquitectura Modular**: Componentes reutilizables y bien organizados
- **TypeScript**: Tipado completo para mayor seguridad y mantenibilidad
- **Navegación Completa**: Sistema de rutas internas y modales
- **Diseño Responsive**: Optimizado para dispositivos móviles
- **Gestión de Estado**: Estado local con React Hooks

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── layout/          # Componentes de estructura
│   │   ├── Header.tsx   # Header con navegación
│   │   └── Footer.tsx   # Footer con GIF de Lempira
│   ├── profile/         # Componentes de perfil
│   │   ├── AvatarSection.tsx      # Avatar con marco
│   │   ├── AccountSummary.tsx     # Resumen de cuenta
│   │   ├── ActivitySection.tsx    # Sección de actividad
│   │   └── PersonalInfoSection.tsx # Información personal
│   └── modals/          # Modales
│       ├── DepositModal.tsx       # Modal de depósito
│       └── WithdrawModal.tsx      # Modal de retiro
├── data/                # Datos mock centralizados
│   └── mockData.ts      # Todos los datos de prueba
├── types/               # Definiciones TypeScript
│   ├── index.ts         # Interfaces principales
│   └── images.d.ts      # Declaraciones de imágenes
├── images/              # Recursos gráficos
├── PerfilUsuario.tsx    # Componente principal
└── App.tsx              # Punto de entrada
```

## 🎯 Funcionalidades

### Vista Principal (Resumen)
- Avatar con marco personalizado
- Resumen de cuenta con saldo
- Botones de depósito y retiro
- Navegación a vistas detalladas

### Perfil Completo
- **Historial de Apuestas**: Lista de apuestas pasadas
- **Apuestas en Curso**: Apuestas activas con detalles
- **Rendimiento**: Estadísticas detalladas de rendimiento
- **Información Personal**: Datos del usuario

### Sistema VIP
- Estructura preparada para implementar sistema de niveles

### Modales
- **Depósito**: Modal para recargar cuenta
- **Retiro**: Modal para retirar fondos

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Create React App** como bundler
- **GitHub Pages** para deployment

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build

# Deploy a GitHub Pages
npm run deploy
```

## 📱 Navegación

1. **Resumen** → Vista principal con información básica
2. **Ver Perfil Completo** → Vista detallada con sub-navegación
3. **Sistema VIP** → Sistema de niveles (estructura lista)

### Sub-navegación en Perfil Completo:
- **Historial** → Lista de apuestas pasadas
- **Apuestas en Curso** → Apuestas activas
- **Rendimiento** → Estadísticas detalladas
- **← Volver** → Regreso a vista anterior

## 🎨 Diseño

- **Colores**: Paleta azul y dorada de marca
- **Tipografía**: Fuentes del sistema con jerarquía clara
- **Componentes**: Diseño consistente y reutilizable
- **Responsive**: Optimizado para móviles

## 🔧 Mantenimiento

### Agregar Nuevos Componentes
1. Crear archivo en `src/components/`
2. Definir interfaces en `src/types/`
3. Agregar datos mock en `src/data/`
4. Importar en `PerfilUsuario.tsx`

### Modificar Datos
- Todos los datos están centralizados en `src/data/mockData.ts`
- Las interfaces están en `src/types/index.ts`

## 📄 Licencia

Proyecto interno para Hondubet. 