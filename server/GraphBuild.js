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

SchemaGraph.prototype.addLinkColor = function() {
  const path = this.links;
  path.forEach(item => {
    const { source } = item;
    item.color = this.nodeList[source].color;
  })
}

SchemaGraph.prototype.bfsColor = function() {
  const list = this.adjacencyList;
  const data = this.nodeList;
  const queue = new LinkedList();
  for(const key in list) { 
    queue.enqueue(key);
    data[key].color = 0;
    break; 
  }
  while(!queue.isEmpty()) {
    const item = queue.dequeue();
    const color = data[item].color;
    list[item].forEach(item => {
      if(data[item].color) return;
      data[item].color = color+1;
      queue.enqueue(item);
    })
  }
}

SchemaGraph.prototype.addAdjList = function() {
  for(const key in this.nodeList) {
    this.adjacencyList[key] = [];
    const sourceFilter = this.links.filter(item => item.source === key);
    sourceFilter.forEach(item => { this.adjacencyList[key].push(item.target); })
  }
}

SchemaGraph.prototype.addTypes = function (data) {
  data.forEach((type) => {
    if (type.name[0] !== '_' && type.name[1] !== '_' && type.kind !== 'SCALAR') {
      const thisType = new Type(type);
      const { fields } = thisType;

      if (fields) {
        thisType.fields = fields.map((field, i) => {
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

          if (f.type.kind !== 'SCALAR' && Object.keys(f.type).length) {
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

function Edge(source, target, color) {
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
    switch (type.kind) {
      case 'NON_NULL':
        objectToUpdate.isRequired = true;
        break;

      case 'LIST':
        objectToUpdate.isList = true;
        break;

      case 'OBJECT':
        objectToUpdate.type.kind = 'OBJECT';
        objectToUpdate.type.name = type.name;
        break;

      case 'SCALAR':
        objectToUpdate.type.kind = 'SCALAR';
        objectToUpdate.type.name = type.name;
        break;

      case 'UNION':
        objectToUpdate.type.kind = 'UNION';
        objectToUpdate.type.name = type.name;
        break;

      case 'ENUM':
        objectToUpdate.type.kind = 'ENUM';
        objectToUpdate.type.name = type.name;
    }

    type = type.ofType;
  }
}

module.exports = { SchemaGraph };

// b = new SchemaGraph(a.data.__schema.types)
