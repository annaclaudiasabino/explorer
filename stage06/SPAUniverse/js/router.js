export class Router {
  routes = {}
  add(routeName, page) {
    this.routes[routeName] = page
  }

   handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html

      function weightChange() {
        let a = document.getElementsByTagName("a");
        const routeName = window.location.pathname;
        if (routeName) {
          for (let i = 0; i < a.length; i++) {
            if (a[i].getAttribute("href") === routeName) {
              a[i].classList.add("active");
            } else {
              a[i].classList.remove("active");
            }
          }
        }
      }

      weightChange()
    })
    }
    
    route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
    }
}

