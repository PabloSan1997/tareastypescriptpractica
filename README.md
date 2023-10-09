# Tareas typescript practicar

Este es un proyecto para practicar los conocimientos básicos en typescript y react.

## Tecnologías

***Lenguajes:*** Javascript, Typescript, Css
***Librerias:*** React, React-dom, react-router-dom, gh-pages
***Empaquetadora:*** Vite

### Instalar y ejecutar

Instalar

`npm install`

Modo desarrollador

`npm run dev`

Construir archivos

`nmp run build`

Vista preview de los archivos estaticos

`npm run preview`

### Deploy en github

Para hacer deploy en gighub se necesita que este proyecto al instalarlo tambien lo enlace a su propio repositorio.

Primero se debe cambiar la base del url del proyecto en la carpeta `vite.config.ts` por el nombre de su repositorio

```javascript
export default defineConfig({
  plugins: [react()],
  base:'/tareastypescriptpractica/', //Editar esta propiedad
  build:{
    rollupOptions:{
      input:{
        main:resolve(__dirname, 'index.html')
      }
    }
  }
})
```
## Pagina

[Pagina Tareas](https://pablosan1997.github.io/tareastypescriptpractica/#/notdone "Pagina Tareas")

## Author

[Pablo SG](https://github.com/PabloSan1997?tab=repositories "Pablo SG")