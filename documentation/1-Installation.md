## 1. Créer un projet React
> - Pour créer un projet React, il faut installer Node.js et npm (Node Package Manager) sur votre machine.
> - Pour vérifier si Node.js et npm sont installés, ouvrez un terminal et tapez les commandes suivantes :
```bash
node -v
npm -v
```
> - Pour créer un projet React nous utiliseron le bundle Vite qui est un outil de build rapide pour les projets modernes de JavaScript.
> - Pour installer React + Vite, ouvrez un terminal et tapez la commande suivante :
```bash
npm create vite@latest
```
> - Répondez aux questions suivantes :
```txt
√ Project name: ... nom-du-projet
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in C:\Users\Madshad\WebstormProjects\nom-du-projet...

Done. Now run:

  cd nom-du-projet
  npm install
  npm run dev
```
> - Maintenant, vous êtes invité à vous rendre dans le dossier du projet et à installer les dépendances du projet :
```bash
cd nom-du-projet
npm install
```
> - Pour lancer le serveur de développement, tapez la commande suivante :
```bash
npm run dev
```
> - Pour arrêter le serveur de développement, tapez `Ctrl + C` dans le terminal.
> - Maintenant notre projet React est prêt à être utilisé.