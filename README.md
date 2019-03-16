# CMS Admin Project - Frontend part of CMS builded for educational purposes

**IMPORTANT NOTE**: CMS AP isn't yet ready for production, stay tuned for releases.

## **What is CMS AP?**

CMS AP is React / TypeScript and Go based eCommerce platform. Allows manage content on static sites.

Built with:
* TypeScript 3
* React v16
* Redux
* Router
* Babel
* WebPack 4
* MongoDB
* Golang
* UI Kit: Ant Design

## Dashboard
Client-side dashboard use JSON Web Token (JWT) to access REST API.



## Store
Single-Page Application with React server-side rendering. [Demo store]

## Installation


### Requirements
* Node.js >= 8
* MongoDB >= 3.2


## Documentation

[Documentation](https://)


## Application Structure

*just in progress yet...*
```

├── config                    # Project and build configurations
├── dist                     # Distribution folder
├── locales                  # i18n files
├── logs                     # Log files
├── public                   # Static public assets and uploads
│   ├── admin                # Dashboard index.html
│   └── content              # Store root folder
|
├── src                      # Application source code
│   ├── admin                # Dashboard application
│   │   └── client           # Client side code
│   ├── components               # react components here
│   │   ├── index.tsx
│   │   ├── component_1
│   │   :
│   │   └── component_n
│   ├── containers               # react containers here
│   │   ├── index.tsx
│   │   ├── component_1
│   │   :
│   │   └── component_n
│   ├── api                  # REST API
│   │   └── server           # Server side code
│   ├── store                # Store application
│   |   ├── client             # Client side code
│   |   ├── server             # Server side code
│   |   └── shared             # Universal code
│   └── index.ts             # Server application start point
├── theme                    # Theme as a local package
└── process.json             # pm2 process file
```


## Contributing

If you can, please contribute by reporting issues, discussing ideas, or submitting pull requests with patches and new features. We do our best to respond to all issues and pull requests within a day or two, and make patch releases to npm regularly.


## Licence

This software is provided free of charge and without restriction under the MIT License
