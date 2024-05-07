import { GithubUser } from "./GithubUser.js";

//classe que vai conter a lógica dos dados
//como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  async add(login) {
    try {
      const userExist = this.entries.find(entry => entry.login === login)
      const anyUser = document.querySelector('#nenhum-favorito')

      if(userExist) {
        throw new Eroor('user já cadastrado')
      }

      const user = await GithubUser.search(login)

      if(user.login === undefined) {
        throw new Error('Usuario não encontrado!')
      }

      if(this.entries !== 0) {
        anyUser.style.display = "none";
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch(error) {
      alert(error.message)
    }
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }


  delete(item) {
    const filteredEntries = this.entries.filter(entry => entry.login !== item.login)


    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

//classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update();

    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector('#search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('#search input')
      
      this.add(value)
    }
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove()
      })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td id="user" class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-200">
        <div class="flex gap-4 items-center">
          <img class="w-14 rounded-full" src="https://github.com/diego3g.png" alt="">
          <div class="flex flex-col">
            <p class="font-bold text-">
              Diego Fernandes
            </p>
            <a href="">
              <span class="font-normal">/diego3g</span>
            </a>
          </div>
        </div>
      </td>
      <td id="repos" class="px-6 py-4 whitespace-nowrap text-base text-gray-200">45</td>
      <td id="followers" class="px-6 py-4 whitespace-nowrap text-base text-gray-200">1234</td>
      <td class="px-6 py-4 whitespace-nowrap text-base font-medium">
        <button type="button" id="remove" class="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none">Remover</button>
      </td>
    `

    return tr;
  }


  update() {
    this.removeAllTr()

    this.entries.forEach( item => {
      const row = this.createRow();
      
      row.querySelector('#user img').src = `https://github.com/${item.login}.png`;
      row.querySelector('#user img').alt = `Imagem de perfil de ${item.login}`;
      row.querySelector('#user a').href = `https://github.com/${item.login}`;
      row.querySelector('#user p').textContent = item.name;
      row.querySelector('#user span').textContent = item.login;
      row.querySelector('#repos').textContent = item.public_repos;
      row.querySelector('#followers').textContent = item.followers;

      row.querySelector('#remove').onclick = () => {
        const isOk = confirm('Está certo disso?')
        if(isOk) {
          this.delete(item)
        }
      }



      this.tbody.append(row)
    });

  };
};



export default Favorites;