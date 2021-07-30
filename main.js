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

console.log(document.getElementById('hamed'))
