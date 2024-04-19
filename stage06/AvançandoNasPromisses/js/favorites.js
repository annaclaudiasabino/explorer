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

      if(userExist) {
        throw new Eroor('user já cadastrado')
      }

      const user = await GithubUser.search(login)

      if(user.login === undefined) {
        throw new Error('Usuario não encontrado!')
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
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

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
      <td class="user">
        <img src="https://github.com/annaclaudiasabino.png" alt="Foto Anna">
        <a href="https://github.com/annaclaudiasabino" target="_blank">
          <p>Anna Claudia Sabino</p>
          <span>annaclaudiasabino</span>
        </a>
      </td>
      <td class="repos">15</td>
      <td class="followers">800</td>
      <td class="remove">
        <button>&times;</button>
      </td>
    `

    return tr;
  }

  update() {
    this.removeAllTr()

    this.entries.forEach( item => {
      const row = this.createRow();
      
      row.querySelector('.user img').src = `https://github.com/${item.login}.png`;
      row.querySelector('.user img').alt = `Imagem de perfil de ${item.login}`;
      row.querySelector('.user a').href = `https://github.com/${item.login}`;
      row.querySelector('.user p').textContent = item.name;
      row.querySelector('.user span').textContent = item.login;
      row.querySelector('.repos').textContent = item.public_repos;
      row.querySelector('.followers').textContent = item.followers;

      row.querySelector('.remove').onclick = () => {
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