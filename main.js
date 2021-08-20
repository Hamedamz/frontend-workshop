const allNotes = [
  {
    id: 1,
    title: 'Title 1',
    text: 'Text 1',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 2',
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: '',
      updated: '',
    }
  },
];

function creatNote(title, text) {
  const note = {
    id: getId(),
    title,
    text,
    color: 'white',
    isPinned: false,
    isDeleted: false,
    timestamps: {
      created: Date.now(),
      updated: '',
    }
  };

  allNotes.push(note);
}

function editNote(id, title, text, color) {
  const note = findById(id);

  note.title = title;
  note.text = text;
  note.color = color;
  note.timestamps.updated = Date.now();
}

function getId() {
  return (Math.random() * 10e10).toFixed(0)
}

function findById(id) {
  return allNotes.find((item) => (item.id === id));
}

function renderAllNotes() {
  const parent = document.getElementById('notes');

  parent.innerHTML = '';

  for (let i = 0; i < allNotes.length; i += 1) {
    parent.append(renderNote(allNotes[i]));
  }
}

function renderNote(note) {
  const noteElement = document.createElement('div');

  noteElement.classList.add('card');
  const innerHTML = `<h2 class="card__title">${note.title}</h2>
                        <p class="card__text">${note.text}</p>`;

  noteElement.innerHTML = innerHTML;

  return noteElement;
}

renderAllNotes();

const noteForm = document.getElementById('noteForm');

noteForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('noteTitle').value;
  const text = document.getElementById('noteText').value;

  creatNote(title, text);

  renderAllNotes();
}
