//classe que vai conter a lógica dos dados
//como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
  }

  load() {
    this.entries = [{
        username: 'annaclaudiasabino',
        name: 'Anna Claudia',
        public_repos: '43',
        followers: '5000',
      },
      {
        username: 'matheus',
        name: 'Matheus',
        public_repos: '43',
        followers: '5000',
      }
    ]
  }

  delete(item) {
    const filteredEntries = this.entries.filter(entry => entry.username !== item.username)

    this.entries = filteredEntries
    this.update()
  }
}

//classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update();
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
      
      row.querySelector('.user img').src = `https://github.com/${item.username}.png`;
      row.querySelector('.user img').alt = `Imagem de perfil de ${item.username}`;
      row.querySelector('.user p').textContent = item.name;
      row.querySelector('.user span').textContent = item.username;
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