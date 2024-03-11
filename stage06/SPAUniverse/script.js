const routes = {
  "/": "/pages/home.html",
  "/exploration": "/pages/exploration.html",
  "/universe": "/pages/universe.html",
  404: "/pages/error.html",
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  console.log(route);
}

function route(event) {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.href)

  handle()
}