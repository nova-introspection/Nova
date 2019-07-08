const LinkedList = require('./linkedList/linkedList');

function SchemaGraph(data) {
  this.nodes = [];
  this.links = [];
  this.nodeList = {};
  this.adjacencyList = {};
  this.addTypes(data);
  this.addAdjList();
  this.bfsColor();
  this.addLinkColor();
}

SchemaGraph.prototype.addLinkColor = function addLinkColor() {
  const path = this.links;
  path.forEach((item) => {
    const { source } = item;
    item.color = this.nodeList[source].color;
  });
};

SchemaGraph.prototype.bfsColor = function bfsColor() {
  const list = this.adjacencyList;
  const data = this.nodeList;
  const queue = new LinkedList();

  const root = Object.keys(list)[0];
  queue.enqueue(root);
  data[root].color = 0;

  while (!queue.isEmpty()) {
    const type = queue.dequeue();
    const { color } = data[type];
    list[type].forEach((item) => {
      if (!data[item]) return;
      if (data[item].color) return;
      data[item].color = color + 1;
      queue.enqueue(item);
    });
  }
};

SchemaGraph.prototype.addAdjList = function addAdjList() {
  const types = Object.keys(this.nodeList);
  types.forEach((type) => {
    this.adjacencyList[type] = [];
    const sourceFilter = this.links.filter(item => item.source === type);
    sourceFilter.forEach(item => this.adjacencyList[type].push(item.target));
  });
};

SchemaGraph.prototype.addTypes = function addTypes(data) {
  data.forEach((type) => {
    if (type.name[0] !== '_' && type.name[1] !== '_' && type.kind === 'OBJECT' && type.name !== 'Mutation') {
      const thisType = new Type(type);
      const { fields } = thisType;

      if (fields) {
        thisType.fields = fields.map((field) => {
          const f = {
            name: field.name,
            description: field.description,
            defaultValue: field.defaultValue,
            args: field.args,
            isRequired: false,
            isList: false,
            type: {},
          };

          updateTypes(f, field);

          if (f.type.kind === 'OBJECT' && Object.keys(f.type).length) {
            this.links.push(new Edge(thisType.name, f.type.name));
          }
          return f;
        });
      }
      this.nodeList[thisType.name] = thisType;
      this.nodes.push(thisType);
    }
  });
};

function Edge(source, target) {
  this.source = source;
  this.target = target;
}

function Type(type) {
  const {
    kind, name, description, fields,
  } = type;
  this.kind = kind;
  this.name = name;
  this.description = description;
  this.fields = fields;
}

function updateTypes(objectToUpdate, data) {
  let { type } = data;

  while (type !== null) {
    const { kind, name } = type;

    if (kind === 'NON_NULL') {
      objectToUpdate.isRequired = true;
    } else if (kind === 'LIST') {
      objectToUpdate.isList = true;
    } else {
      objectToUpdate.type.kind = kind;
      objectToUpdate.type.name = name;
    }

    type = type.ofType;
  }
}

module.exports = { SchemaGraph };
