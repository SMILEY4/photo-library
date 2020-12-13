## Basic Architecture Idea

- https://medium.com/@amitbhave10/modern-desktop-application-with-electron-js-and-spring-boot-150419db0d49

- create backend with quarkus -> compile to native executable

- backend provides ...

  - rest endpoints
  - frontend / vue.js (https://medium.com/@m.sciachero/use-quarkus-io-vuejs-to-build-a-web-application-130b2ed5ea0d)

- frontend either in ...

  - electron: app: start electron -> start backend -> render content from localhost
  - browser: just talk to backend directly, possibility to host backend on other pc (e.g. on RaspberryPi)

  -> send requests with flag: isElectron so backend can send out content specific for desktop-apps, electron app can then hook into this content and provide the native desktop features (e.g. processing done send event to frontend: isBrowser=show alert in as modal, isDesktop=show native notification)

  - https://blog.bitsrc.io/building-an-electron-app-with-electron-react-boilerplate-c7ef8d010a91

  - react two react apps: "webapp" and "desktop-ui", both access shared code / components



## Frontend



Packages:

- photo-library-common-ui: *contains common ui components*
- photo-library-electron: *the electron application*
- photo-library-webapp: *the web application*



Using React with Electron:

- https://blog.bitsrc.io/building-an-electron-app-with-electron-react-boilerplate-c7ef8d010a91



Sharing React Components

- Main issue: Babel only compiles files in "src"-directory, ignoring the shared components. This results in an error when the (not compiled) jsx-code can not be run.

- https://medium.com/capriza-engineering/sharing-source-code-and-libraries-in-react-bd30926df312

  Missing in Article: replace `react-scripts` with `react-app-rewired` in scripts -section in the "package.json"



Communication between React and Electron

- https://blog.logrocket.com/building-a-menu-bar-application-with-electron-and-react/







##  MVP

- create new project
- load existing project
- import files (desktop)
- remove files (desktop, web)
- view list of files (desktop, web)
- open raw file (desktop, web)
- show additional info about selected file (desktop, web)
  - file preview (if image show raw or "2nd level thumbnail" ?)
  - file information
  - additional information























